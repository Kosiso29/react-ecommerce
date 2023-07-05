import React, { useEffect, useState } from 'react'
// import { store } from "../productsStore/Store";
import OurBestSellers from './OurBestSellers';

const Products = () => {
    const [state, setState ] = useState({ results: [] });
    useEffect(() => {
        async function getData() {
            await new Promise((resolve, reject) => {
                fetch("http://solarsales.pythonanywhere.com/products/")
                    .then(response => response.json())
                    .then(data => {
                        setState(data)
                        resolve()
                }).catch(() => reject())
            })
        }
        getData()
    }, [])
    return (
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
    )
}

export default Products