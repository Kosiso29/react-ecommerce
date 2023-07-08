import React, { useEffect, useState } from 'react'
// import { store } from "../productsStore/Store";
import OurBestSellers from './OurBestSellers';
import Pagination from 'react-bootstrap/Pagination';

const Products = () => {
    const [state, setState] = useState({ results: [] });
    const [activePageNumber, setActivePageNumber] = useState(1);

    const getData = async (pageNumber) => {
        await new Promise((resolve, reject) => {
            fetch(`https://solarsales.pythonanywhere.com/products/?page=${pageNumber || activePageNumber}`)
                .then(response => response.json())
                .then(data => {
                    setState(data)
                    resolve()
            }).catch(() => reject())
        })

        setActivePageNumber(pageNumber);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div className='ourBestSellersMainParent'>
                {state?.results?.map(((item) => {
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
                        [1, 2].map(pageNumber => (
                            <Pagination.Item onClick={() => { getData(pageNumber) }} active={pageNumber === activePageNumber}>{pageNumber}</Pagination.Item>
                        ))
                    }
                <Pagination.Next onClick={() => { getData(activePageNumber + 1) }} disabled={activePageNumber === 2} />
                </Pagination>
            </div>           
        </div>
    )
}

export default Products