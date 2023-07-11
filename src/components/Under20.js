import React from 'react'
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
import { useState, useEffect } from 'react';
import { store } from "../productsStore/Store";
import HoverImage from 'react-hover-image/build';
import JournalSection from "./JournalSection"
import Features2 from './Features2';

import { FaShippingFast } from "react-icons/fa"
import { FaLock } from 'react-icons/fa';
import { BsCurrencyDollar } from "react-icons/bs";
import better from "../assets/better.jpeg";
import SPFooter from './SPFooter';



const Under20 = () => {
    const [filter, SetFilter] = useState(false);

    const [sort, SetSort] = useState(false);

    const [batteryShow, SetbatteryShow] = useState(false);

    const [solarShow, SetsolarShow] = useState(false);

    const [inverterShow, SetinverterShow] = useState(false);

    const [allShow, SetAllShow] = useState(true);

    const [lowTOHigh, SetLowTOHigh] = useState(false);

    const [state, setState] = useState({ results: [] });

    const getData = async (pageNumber) => {
        await new Promise((resolve, reject) => {
            fetch('http://solarsales.pythonanywhere.com/products/?ordering=-rating&page_size=4')
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


    const filterShowHandler = () => {
        SetFilter(!filter)

    }

    const toggleSortHandler = () => {
        SetSort(!sort)
    }


    const batteryHandler = async() => {
        SetbatteryShow(true);
        SetAllShow(false)

        SetsolarShow(false);
        SetinverterShow(false);

        await new Promise((resolve, reject) => {
            fetch('http://solarsales.pythonanywhere.com/products/products/productlist/category=1/')
                .then(response => response.json())
                .then(data => {
                    setState(data)
                    resolve()
            }).catch(() => reject())
        })
    }

    const solarHandler = async() => {
        SetsolarShow(true)
        SetAllShow(false)

        SetbatteryShow(false);
        SetinverterShow(false)

        await new Promise((resolve, reject) => {
            fetch('http://solarsales.pythonanywhere.com/products/products/productlist/category=2/')
                .then(response => response.json())
                .then(data => {
                    setState(data)
                    resolve()
            }).catch(() => reject())
        })
    }

    const inverterHandler = async() => {
        SetinverterShow(true)
        SetAllShow(false)

        SetbatteryShow(false)
        SetsolarShow(false)

        await new Promise((resolve, reject) => {
            fetch('http://solarsales.pythonanywhere.com/products/products/productlist/category=5/')
                .then(response => response.json())
                .then(data => {
                    setState(data)
                    resolve()
            }).catch(() => reject())
        })
    }

    const allShowHandler = async() => {
        SetAllShow(true)

        SetinverterShow(false)
        SetbatteryShow(false)
        SetsolarShow(false)

        await new Promise((resolve, reject) => {
            fetch('http://solarsales.pythonanywhere.com/products/?ordering=-price')
                .then(response => response.json())
                .then(data => {
                    setState(data)
                    resolve()
            }).catch(() => reject())
        })
    }


    const bgAddHandler = (e) => {

        e.target.classList.add("whi");
       
    }

    const bgRemoveHandler = (e) => {
        e.target.classList.remove("whi");
      
    }

    useEffect(() => {
            getData()
            allShowHandler()
            inverterHandler()
            solarHandler()
            batteryHandler()
     }, [])


    return (
        <div className='u20MainParent fof '>
            <p className=' bg-white z-50 relative w100vw'>  </p>

            <div className='u20Hold'>
                <img src={u20bg} className="u20Pic" />
            </div>

            <div className='u20HeadingHold gap-20 justify-center relative flex flex-col'>
                <p className='u20Heading'> Over ₦1,000,000 </p>
                <p className='u20Desc'> Solar System solutions.</p>
            </div>

            <div className='u20BreadCrumbHold absolute text-sm'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
                    <BreadcrumbItem>
                        <Link to={`/`}>Home</Link>
                    </BreadcrumbItem>


                    <BreadcrumbItem>
                        <Link to={`/`} href='#'>Over ₦1,000,000 </Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='filterSortHold flex flex-row gap-8 absolute text-left'>

                <img src={filterBtn} className=" w-36 cursor-pointer scale" onClick={filterShowHandler} />

                {/*<img src={sortBtn} className=" w-36 cursor-pointer scale" onClick={toggleSortHandler} />*/}
            </div>

            <div className='filterOptionsHold  relative'>
                {filter && <div className='flex rounded-xl gap-8 flex-col boxSh fof absolute '>
                    <p className='ml-12 scale cursor-pointer scale' onClick={batteryHandler}> Battery</p>
                    <p className='ml-12 scale cursor-pointer' onClick={inverterHandler}> Inverter </p>
                    <p className='ml-12 scale cursor-pointer' onClick={solarHandler}> Solar Panel </p>
                    <p className='ml-12 scale cursor-pointer text-white' onClick={allShowHandler}> All Products </p>

                </div>}
            </div>


            { /* ALL PRODUCTS */}


            {allShow && <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {state?.results?.map((item) => {
                    return (
                        <div className='card w-96 bg-base-100 u20IndResponsive shadow-xl  '>
                                <Link to={`/${item.id}`}>
                                    <figure className="px-10 pt-10">
                                        <HoverImage src={item.image} hoverSrc={item.image} className="w-32 u20img" />
                                    </figure>

                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>
                                    <h2 className=" text-xl mb-2 fof u20Price">{formatter.format(item.price)}</h2>

                                    <Link to={`/${item.id}`}>
                                        <div className="card-actions">
                                            <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>More </button>
                                            <p className='btnLine relative bg-black h-8'>  </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        
                    )
                })}
            </div>
            }


            {/* BODY LOTION  */}

            {batteryShow && <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {state?.results?.map((item) => {
                    return (
                        <div className='card w-96 bg-base-100 u20IndResponsive shadow-xl  '>
                                <Link to={`/${item.id}`}>
                                    <figure className="px-10 pt-10">
                                        <HoverImage src={item.image} hoverSrc={item.image} className="w-32 u20img" />
                                    </figure>

                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>
                                    <h2 className=" text-xl mb-2 fof u20Price">{formatter.format(item.price)}</h2>

                                    <Link to={`/${item.id}`}>
                                        <div className="card-actions">
                                            <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>More </button>
                                            <p className='btnLine relative bg-black h-8'>  </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        
                    )
                })}
            </div>
            }


            {/* BODY WASH */}

            {solarShow && <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {state?.results?.map((item) => {
                    return (
                        <div className='card w-96 bg-base-100 u20IndResponsive shadow-xl  '>
                                <Link to={`/${item.id}`}>
                                    <figure className="px-10 pt-10">
                                        <HoverImage src={item.image} hoverSrc={item.image} className="w-32 u20img" />
                                    </figure>

                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>
                                    <h2 className=" text-xl mb-2 fof u20Price">{formatter.format(item.price)}</h2>

                                    <Link to={`/${item.id}`}>
                                        <div className="card-actions">
                                            <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>More </button>
                                            <p className='btnLine relative bg-black h-8'>  </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        
                    )
                })}
            </div>
            }


            { /* BODY SCRUB */}

            {inverterShow && <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {state?.results?.map((item) => {
                    return (
                        <div className='card w-96 bg-base-100 u20IndResponsive shadow-xl  '>
                                <Link to={`/${item.id}`}>
                                    <figure className="px-10 pt-10">
                                        <HoverImage src={item.image} hoverSrc={item.image} className="w-32 u20img" />
                                    </figure>

                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>
                                    <h2 className=" text-xl mb-2 fof u20Price">{formatter.format(item.price)}</h2>

                                    <Link to={`/${item.id}`}>
                                        <div className="card-actions">
                                            <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>More </button>
                                            <p className='btnLine relative bg-black h-8'>  </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        
                    )
                })}
            </div>
            }

            {/* <div className='u20Js relative'>
                <JournalSection />
            </div> */}

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


export default Under20;


