import React, { useEffect } from 'react'
import u20bg from "../assets/u20bg.png";
import "../styles/Under20.css";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import filterBtn from "../assets/filterBtn.png";
import sortBtn from "../assets/sortBtn.png"
import { useState } from 'react';
import { store } from "../productsStore/Store";
import HoverImage from 'react-hover-image/build';
import JournalSection from "./JournalSection"
import Features2 from './Features2';

import { FaShippingFast } from "react-icons/fa"
import { FaLock } from 'react-icons/fa';
import { BsCurrencyDollar } from "react-icons/bs";
import better from "../assets/better.jpeg";
import SPFooter from './SPFooter';



const ProductCategory = ({ title, description, category_id, options }) => {
    const [filter, SetFilter] = useState(false);

    const [dataObject, setDataObject] = useState({ "All Products": [] });
    const [currentFilterState, setCurrentFilterState] = useState("All Products");
    const [_, setUpdateComponent] = useState(false);

    const getData = async (option) => {
        let url = `http://solarsales.pythonanywhere.com/products/products/productlist/category=${category_id}/?ordering=-ratings`;
        if (option) {
            url = `http://solarsales.pythonanywhere.com/products/products/productlist/category=${category_id}/?ordering=-ratings&search=${option}`;
        }
        await new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setDataObject(prevState => {
                        if (option) {
                            prevState[option] = data.results;
                            return prevState;
                        }
                        prevState["All Products"] = data.results;
                        return prevState;
                    })
                    setUpdateComponent(prevState => !prevState);
                    resolve()
            }).catch(() => reject())
        })
    }





    const filterShowHandler = () => {
        SetFilter(!filter)

    }


    const bgAddHandler = (e) => {

        e.target.classList.add("whi");
      

    }

    const bgRemoveHandler = (e) => {
        e.target.classList.remove("whi");
    }

    useEffect(() => {
        setDataObject({ "All Products": [] });
        setCurrentFilterState("All Products");
        SetFilter(false)
        getData();
        for (const option of options) {
            getData(option);
        }
    }, [category_id])

    const productList = item => (
        <div className='card w-96 bg-base-100 shadow-xl  '>
            <Link to={`/${item.id}`}>
                <figure className="px-10 pt-10">
                    <HoverImage src={item.image} hoverSrc={item.image} className="w-32 u20img" />
                </figure>

            </Link>
            <div className="card-body items-center text-center">
                <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>

                <Link to={`/${item.id}`}>
                    <div className="card-actions flex justify-center">
                        <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More </button>
                        {/* <p className='btnLine relative bg-black h-8'>  </p> */}
                        <h2 className="text-xl mb-2 fof u20Price flex justify-center">₦{item.price}</h2>
                    </div>
                </Link>

            </div>
        </div>
    )


    return (
        <div className='fof '>

            <div className='product-category-hero'>
                <p className='product-category-title'> {title} </p>
                <p className='u20Desc text-center'> { description }</p>
            </div>

            <div className='flex items-center text-sm min-h-12 wrapper'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
                    <BreadcrumbItem>
                        <Link to={`/`}>Home</Link>
                    </BreadcrumbItem>


                    <BreadcrumbItem>
                        <Link to={`/${title.toLowerCase()}`} href='#'>{title}</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='flex flex-row gap-8 mt-6 text-left wrapper'>

                <img src={filterBtn} className=" w-36 cursor-pointer scale" onClick={filterShowHandler} />
            </div>

            <div className='relative'>
                {filter && <div className='flex rounded-xl gap-8 flex-col boxSh fof absolute wrapper '>
                    {
                        Object.keys(dataObject)?.map(filterKey => {
                            if (filterKey === "All Products") {
                                return null;
                            }
                            return <p className='scale cursor-pointer text-center' onClick={() => { setCurrentFilterState(filterKey) }}> {filterKey} </p>
                        }).filter(data => data)
                    }
                    <p className='scale cursor-pointer text-center text-white' onClick={() => { setCurrentFilterState("All Products") }}> All Products </p>
                    

                </div>}
            </div>



            { /* ALL PRODUCTS */}


            {<div className="flex flex-wrap my-24 gap-16 justify-around text-center wrapper">
                {dataObject[currentFilterState]?.map((item) => productList(item))}
            </div>
            }
            
            <div className='flex justify-between mx-32 mb-8 benefits'>
                <div className='flex flex-col w-48 h-32 items-center justify-center text-center uppercase'>
                    <FaShippingFast className='w-16 h-20 sv' />
                    <p> 2 DAY DELIVERY </p>
                </div>
                <div className='flex flex-col w-48 h-32 items-center justify-center text-center uppercase'>
                    <FaLock className='w-12 h-20 sv' />
                    <p> secure checkout </p>
                </div>
                <div className='flex flex-col w-48 h-32 items-center justify-center text-center uppercase'>
                    <BsCurrencyDollar className='w-16 h-20 sv' />
                    <p> royalty points </p>
                </div>
                <div className='flex flex-col w-48 h-32 items-center justify-center text-center uppercase'>
                    <img src={better} className="w-20" />
                    <p className='ml'> easy returns </p>
                </div>
            </div>

            <SPFooter />
        </div >


    )

}


export default ProductCategory;

