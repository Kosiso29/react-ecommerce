import React, { useEffect, useState } from 'react'
// import { store } from "../productsStore/Store";
import { BiSearch } from "react-icons/bi"
import { ImCancelCircle } from "react-icons/im"
import OurBestSellers from './OurBestSellers';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { cartActions } from "../redux-state/CartState";
import axios from "../axios";

const Products = () => {

    const globalSearch = useSelector((state) => state.cart.search);
    const [state, setState] = useState({ results: [] });
    const [activePageNumber, setActivePageNumber] = useState(1);
    const [pagesArray, setPagesArray] = useState([])
    const [search, setSearch] = useState(globalSearch);
    const [products, setProducts] = useState({ results: [] });

    const dispatch = useDispatch();

    const getData = async (pageNumber) => {
        await new Promise((resolve, reject) => {
            axios.get(`/products/?page=${pageNumber || activePageNumber}`)
                .then(response => response.data)
                .then(data => {
                    if (pagesArray.length === 0) {
                        const newPagesArray = Array.from({length: Math.ceil(data.count / data.results.length)}, (_, i) => i + 1)
                        setPagesArray(newPagesArray)
                    }
                    setState(data)
                    if (!search) {
                        setProducts(data)
                    }
                    resolve()
            }).catch(() => reject())
        })

        setActivePageNumber(pageNumber || activePageNumber);
    }

    const searchData = async () => {
        await new Promise((resolve, reject) => {
            axios.get(`/products/?ordering=-rating&search=${search}`)
                .then(response => response.data)
                .then(data => {
                    setProducts(data);
                    resolve()
            }).catch(() => reject())
        })
    }

    const onSearchClick = async (e) => {
        if (e.key === "Enter") {
            await searchData();
            console.log('globalSearch', globalSearch)
        }
    }

    const onClearSearch = () => {
        setSearch("");
        setProducts(state);
    }

    useEffect(() => {
        getData()
        if (search) {
            searchData();
            dispatch(cartActions.updateSearch(""))
        }
    }, [])

    useEffect(() => {
        if (!search) {
            onClearSearch();
        }
    }, [search])

    return (
        <div>
            <div className='flex flex-col gap-7 relative wrapper mt-12'>
                <p className='frText text-3xl relative fof'> Search Products </p>
    
                <div className='max-w-lg'>

                    <InputGroup>
                    <Form.Control
                        placeholder="Search"
                        aria-label="Search Products"
                        value={search}
                        onChange={e => setSearch(e.target.value)} 
                        onKeyDown={e => onSearchClick(e)}
                    />
                    <Button variant='info' onClick={searchData}><BiSearch /></Button>
                    <Button variant='danger' onClick={onClearSearch}><ImCancelCircle /></Button>
                    </InputGroup>
                </div>
            </div>
            <div className='ourBestSellersMainParent'>
                {products?.results?.map(((item) => {
                    return (

                        <OurBestSellers
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    )

                }))}
            </div>
            <div className='itemPagination'>
                <Pagination size='lg'>
                    <Pagination.Prev onClick={() => { getData(activePageNumber - 1) }} disabled={activePageNumber === 1} />
                    {
                        pagesArray.map(pageNumber => (
                            <Pagination.Item onClick={() => { getData(pageNumber) }} active={pageNumber === activePageNumber}>{pageNumber}</Pagination.Item>
                        ))
                    }
                <Pagination.Next onClick={() => { getData(activePageNumber + 1) }} disabled={activePageNumber === pagesArray.length} />
                </Pagination>
            </div>           
        </div>
    )
}

export default Products