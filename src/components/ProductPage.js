import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Products from './Products';
import SPFooter from './SPFooter';
import { BiSearch } from "react-icons/bi"
import { ImCancelCircle } from "react-icons/im"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "../axios";

const ProductPage = () => {
    const [state, setState] = useState({ results: [] });
    const [activePageNumber, setActivePageNumber] = useState(1);
    const [pagesArray, setPagesArray] = useState([])
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState({ results: [] });

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
                    setProducts(data)
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
        }
    }

    const onClearSearch = () => {
        setSearch("");
        setProducts(state);
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (!search) {
            onClearSearch();
        }
    }, [search])

    return (
        <>
            <NavBar />
            <div className='flex flex-col gap-7 relative wrapper mt-12'>
                <div className='max-w-lg'>

                    <InputGroup>
                    <Form.Control
                        placeholder="Search"
                        aria-label="Search Products"
                        onChange={e => setSearch(e.target.value)} 
                        onKeyDown={e => onSearchClick(e)}
                    />
                    <Button variant='info' onClick={searchData}><BiSearch /></Button>
                    <Button variant='danger' onClick={onClearSearch}><ImCancelCircle /></Button>
                    </InputGroup>
                </div>
            </div>
            <Products />
            <SPFooter />
        </>
    )
}

export default ProductPage;