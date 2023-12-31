import React, { useState, useEffect } from 'react'
import { store } from '../productsStore/Store'
import "../styles/BestSellers.css";
import HoverImage from 'react-hover-image/build';
import { Link } from 'react-router-dom';
import axios from "../axios";

const BestSellers = () => {
    const [state, setState] = useState({ results: [] });

    const getData = async (pageNumber) => {
        await new Promise((resolve, reject) => {
            axios.get('/products/?ordering=-rating&page_size=4')
                .then(response => response.data)
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
    <div className='bestSellerMainParent flex flex-row'>
      {state?.results?.map((item) => {
          return (
            <Link to={`/${item.id}`} key={item.id}>  
            <div key={item.id} className="bestSellerIndivitualItem">
              <HoverImage src={item.image} hoverSrc={item.image}   className="bestSellerImage rounded-xl mb-6"/>
              <p className='bestSellerName text-center mb-2'> {item.name} </p>
              <p className=' font-normal text-center'> {formatter.format(item.price)} </p>
            </div>
            </Link>
          )
      })}

    </div>
  )
}

export default BestSellers;
