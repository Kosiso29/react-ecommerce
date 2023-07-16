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



const Battery = ({ title, description, options = ["100AH", "180AH", "200AH"] }) => {
    const [filter, SetFilter] = useState(false);

    const [dataObject, setDataObject] = useState({ "All Products": [] });
    const [currentFilterState, setCurrentFilterState] = useState("All Products");
    const [_, setUpdateComponent] = useState(false);

    const getData = async (option) => {
        let url = "http://solarsales.pythonanywhere.com/products/products/productlist/category=1/?ordering=-ratings";
        if (option) {
            url = `http://solarsales.pythonanywhere.com/products/products/productlist/category=1/?ordering=-ratings&search=${option}`;
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
        getData();
        for (const option of options) {
            getData(option);
        }
    }, [])

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
        <div className='u20MainParent fof '>
            <p className=' bg-white z-50 relative w100vw'>  </p>

            <div className='u20Hold'>
                <img src={u20bg} className="u20Pic" />
            </div>

            <div className='u20HeadingHold gap-20 justify-center relative flex flex-col'>
                <p className='u20Heading'> {title || "BATTERY"} </p>
                <p className='u20Desc'> { description || "Empowering energy independence, batteries store the sun's vitality to illuminate even the darkest hours." }</p>
            </div>

            <div className='u20BreadCrumbHold absolute text-sm'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
                    <BreadcrumbItem>
                        <Link to={`/`}>Home</Link>
                    </BreadcrumbItem>


                    <BreadcrumbItem>
                        <Link to={`/battery`} href='#'>{title || "BATTERY"}</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='filterSortHold flex flex-row gap-8 absolute text-left'>

                <img src={filterBtn} className=" w-36 cursor-pointer scale" onClick={filterShowHandler} />

                {/*<img src={sortBtn} className=" w-36 cursor-pointer scale" onClick={toggleSortHandler} />*/}
            </div>

            <div className='filterOptionsHold  relative'>
                {filter && <div className='flex rounded-xl gap-8 flex-col boxSh fof absolute '>
                    {
                        Object.keys(dataObject)?.map(filterKey => {
                            if (filterKey === "All Products") {
                                return null;
                            }
                            return <p className='ml-12 scale cursor-pointer' onClick={() => { setCurrentFilterState(filterKey) }}> {filterKey} </p>
                        }).filter(data => data)
                    }
                    <p className='ml-12 scale cursor-pointer text-white' onClick={() => { setCurrentFilterState("All Products") }}> All Products </p>
                    

                </div>}
            </div>



            { /* ALL PRODUCTS */}


            {<div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {dataObject[currentFilterState]?.map((item) => productList(item))}
            </div>
            }

            <div className='u20Featyres relative'>

                <div className='u20FeaturesHold flex flex-row relative'>
                    <FaShippingFast className='w-16 h-20' />
                    <FaLock className='w-12 h-16' />
                    <BsCurrencyDollar className='w-16 h-20' />
                    <img src={better} className="w-20" />
                </div>

                <div className='u20TextFeatureHold fof flex flex-row relative uppercase'>
                    <p> 2 DAY DELIVERY </p>
                    <p> secure checkout </p>
                    <p> royalty points </p>
                    <p> easy returns </p>
                </div>

            </div>

            <div className='relative u20footer'>
                <SPFooter />
            </div>





        </div >


    )

}


export default Battery;

