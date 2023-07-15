import "../styles/GiftSets.css";
import { store } from '../productsStore/Store';
import HoverImage from 'react-hover-image/build';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
const GiftSets = () => {
    const [state, setState] = useState({ results: [] });
    const getData = async (pageNumber) => {
        await new Promise((resolve, reject) => {
            fetch('http://solarsales.pythonanywhere.com/products/?ordering=-rating&page_size=2')
                .then(response => response.json())
                .then(data => {
                    setState(data)
                    resolve()
            }).catch(() => reject())
        })
    }

    const formatter = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    });

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='giftSetMainParent'>

            <p className='categoryText font-bold'> CATEGORY </p>

            <div className='flex flex-col gap-8 bestSellerPriceHolder'>

                <Link to={"/panel"} >
                    <p className="hover:underline"> PANEL </p>
                </Link>

                <Link to={"/inverter"} >
                    <p className="hover:underline"> INVERTER </p>
                </Link>

                <Link to={"/battery"} >
                    <p className="hover:underline"> BATTERY </p>
                </Link>

                <Link to={"/others"} >
                    <p className="hover:underline"> OTHERS </p>
                </Link>

            </div>

            <div className='flex fle-row gap-20 giftHold'>

                {state?.results?.map((item) => {
                    return (
                        <Link to={`/${item.id}`} key={item.id}>  
                        <div key={item.id} className="bestSellerIndivitualItem">
                        <HoverImage src={item.image} hoverSrc={item.image}   className="bestSellerImage rounded-xl mb-6"/>
                        {/* <p className='bestSellerName text-center mb-4'> {item.name} </p>
                        <p className=' font-normal text-center'> {formatter.format(item.price)} </p> */}
                        </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}
export default GiftSets