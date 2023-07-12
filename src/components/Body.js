import React from 'react'
import "../styles/Body.css";
import { useState } from 'react';
import { store } from '../productsStore/Store';
import HoverImage from "react-hover-image/build"
import { Link } from 'react-router-dom';

const Body = () => {

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);


    const showHandler = async() => {
        setShow(true)
        document.querySelector(".bodyContent").classList.add("transition");
        setShow2(false)
        setShow3(false)

        document.querySelector(".bodyContent").style.opacity = "1";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }

    const showHandler2 = async() => {
        setShow2(true)
        document.querySelector(".hairContent").classList.add("transition2");
        setShow(false)
        setShow3(false)

        document.querySelector(".hairContent").style.opacity = "1";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }

    const showHandler3 = async() => {
        setShow3(true)
        document.querySelector(".travelContent").classList.add("transition3");
        setShow(false)
        setShow2(false)

        document.querySelector(".travelContent").style.opacity = "1";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
    }

    const dontShowHandler = () => {
        setShow(false)
        setShow2(false)
        setShow3(false)

        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }
    return (
        <div>
            <div className='categoryHold flex flex-col gap-14 font-normal absolute left-16 top-11'>

                <div className='bodyHold lineHeight w-56 w56rem' onMouseMove={showHandler}>
                    <p className=' font-semibold hover-underline-animation'>PANEL</p>
                </div>

                <div className='hairHold lineHeight w-56' onMouseMove={showHandler2}>
                    <p className=' font-semibold hover-underline-animation'>BATTERY</p>
                </div>

                <div className='travelHold w-52 lineHeight' onMouseMove={showHandler3}>
                    <p className=' font-semibold hover-underline-animation'>INVERTER</p>
                </div>

            </div>

            {show && <div className=' z-50 bodyContent color text-base' onMouseLeave={dontShowHandler}>
                <p>   100W </p>
                <p>   200W </p>
                <p>   300W </p>
                <p>   400W </p>
                <p>   500W </p>
                <p>   OTHERS </p>

                <div className='bodyTypeHold flex'>
                    {store.map((item) => {
                        if (item.type == "navbar-BodyType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div key={item.id} className="bodyTypeIndivitual">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="rounded-xl  bodyTypeImage" />
                                        <p className=' text-center fs bodyTypeName'> {item.name} </p>
                                    </div>

                                </Link>)
                        }
                    })}
                </div>

            </div>}

            {show2 && <div className=' z-50 hairContent flex flex-col' onMouseLeave={dontShowHandler}>
                <div className='hairTypeCategoryONE flex flex-col gap-8'>
                    <p className=' font-bold text-xl'>  TYPE </p>
                    <p>  Lithium </p>
                    <p>  Tubular </p>
                    <p>  AGM </p>
                </div>

                <div className='hairImageHold flex flex-row gap-10'>
                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/Natural_Balance_Shampoo_02_540x.jpg?v=1550710011' className=' rounded-xl w-52' />
                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/ee7ea9c87918e493665a3a84bdf6c00a_large_1b25100f-7d60-451b-9d01-e74d104141d5_540x.jpg?v=1550710009' className=' rounded-xl w-52' />
                </div>

                <div className='hairTextHold flex flex-row relative font-semibold'>
                    <p className='flex flex-row flex-wrap w-56'>Make The Switch! Why Natural Haircare Is Best</p>
                    <p className='flex flex-row flex-wrap w-56'>How to lead a natural & sustainable lifestyle</p>
                </div>

            </div>}


            {show3 && <div className='newContent relative left-72 text-base text-gray-500 top-16' onMouseLeave={dontShowHandler}>
                <div className='newCategoryHold flex flex-col gap-9'>
                    <p className='font-bold text-xl'>  CATEGORY </p>

                    <p>  1KVA </p>

                    <p>  2KVA </p>

                    <p>  5KVA </p>

                    <p>  10KVA </p>
                </div>

                <div className='newTypeHold relative flex felx-row gap-10'>
                    {store.map((item) => {
                        if (item.type == "navbar-NewType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div className='newIndivitual'>
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className=" rounded-xl w-40" />
                                        <p className='font-semibold text-center text-base px'> {item.name} </p>
                                        <p className='text-base font-normal text-center'> ₦{item.price} </p>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>

            </div>}



        </div>
    )
}

export default Body
