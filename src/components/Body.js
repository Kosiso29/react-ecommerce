import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Body.css";
import HoverImage from "react-hover-image/build";

const Body = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [panel, setPanel] = useState([]);
  const [battery, setBattery] = useState([]);
  const [inverter, setInverter] = useState([]);
  const [controller, setController] = useState([]);

  const showHandler = async () => {
    setShow(true);
    document.querySelector(".bodyContent").classList.add("transition");
    setShow2(false);
    setShow3(false);
    setShow4(false);

    document.querySelector(".bodyContent").style.opacity = "1";
    document.querySelector(".hairContent").style.opacity = "0";
    document.querySelector(".newContent").style.opacity = "0";
    document.querySelector(".travelContent").style.opacity = "0";
  };

  const showHandler2 = async () => {
    setShow2(true);
    document.querySelector(".hairContent").classList.add("transition2");
    setShow(false);
    setShow3(false);
    setShow4(false);

    document.querySelector(".hairContent").style.opacity = "1";
    document.querySelector(".bodyContent").style.opacity = "0";
    document.querySelector(".newContent").style.opacity = "0";
    document.querySelector(".travelContent").style.opacity = "0";
  };

  const showHandler3 = async () => {
    setShow3(true);
    document.querySelector(".travelContent").classList.add("transition3");
    setShow(false);
    setShow2(false);
    setShow4(false);

    document.querySelector(".travelContent").style.opacity = "1";
    document.querySelector(".hairContent").style.opacity = "0";
    document.querySelector(".bodyContent").style.opacity = "0";
    document.querySelector(".newContent").style.opacity = "0";
  };

  const showHandler4 = async () => {
    setShow4(true);
    document.querySelector(".newContent").classList.add("transition4");
    setShow(false);
    setShow2(false);
    setShow3(false);

    document.querySelector(".newContent").style.opacity = "1";
    document.querySelector(".hairContent").style.opacity = "0";
    document.querySelector(".bodyContent").style.opacity = "0";
    document.querySelector(".travelContent").style.opacity = "0";
  };

  const dontShowHandler = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);

    document.querySelector(".newContent").style.opacity = "0";
    document.querySelector(".hairContent").style.opacity = "0";
    document.querySelector(".bodyContent").style.opacity = "0";
    document.querySelector(".travelContent").style.opacity = "0";
  };

  const getData = async (category_id, setItem) => {
    await new Promise((resolve, reject) => {
      fetch(`http://solarsales.pythonanywhere.com/products/products/productlist/category=${category_id}/?ordering=-rating&page_size=2`)
        .then(response => response.json())
        .then(data => {
          setItem(data.results);
          resolve();
        })
        .catch(() => {
          console.error("Error fetching data.");
          reject();
        });
    });
    console.log('item', panel, battery, inverter);
  };
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    getData(2, setPanel);
    getData(1, setBattery);
    getData(5, setInverter);
    getData(3, setController);
  }, []);

  return (
    <div>
      <div className='categoryHold flex flex-col gap-14 font-normal absolute left-16 top-11'>
        <Link to={"/panel"}  className='bodyHold lineHeight w-56 w56rem' onMouseMove={showHandler}>
          <p className=' font-semibold hover-underline-animation'>PANEL</p>
        </Link>
        <Link to={"/battery"} className='hairHold lineHeight w-56' onMouseMove={showHandler2}>
          <p className=' font-semibold hover-underline-animation'>BATTERY</p>
        </Link>
        <Link to={"/inverter"} className='travelHold w-52 lineHeight' onMouseMove={showHandler4}>
          <p className=' font-semibold hover-underline-animation'>INVERTER</p>
        </Link>
        <Link to={"/others"} className='newHold lineHeight' onMouseMove={showHandler3}>
          <p className=' font-semibold hover-underline-animation'>CONTROLLER</p>
        </Link>
      </div>

      {show && (
        <div className='z-50 bodyContent color text-base' onMouseLeave={dontShowHandler}>
          <p>   100W </p>
          <p>   200W </p>
          <p>   300W </p>
          <p>   400W </p>
          <p>   500W </p>
          <p>   OTHERS </p>

          <div className='bodyTypeHold flex'>
            {panel?.map((item) => {
              return (
                <Link to={`/${item.id}`} key={item.id}>
                  <div key={item.id} className="bodyTypeIndivitual">
                    <HoverImage src={item.image} hoverSrc={item.image} className="rounded-xl  bodyTypeImage" />
                    <p className=' text-center fs bodyTypeName'> {item.name} </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {show2 && (
        <div className='z-50 hairContent flex flex-col' onMouseLeave={dontShowHandler}>
          <div className='hairTypeCategoryONE flex flex-col gap-6'>
            <p className=' font-bold text-xl'>  TYPE </p>
            <p>  Lithium </p>
            <p>  Tubular </p>
            <p>  AGM </p>
          </div>

          <div className='bodyTypeHold flex flex-row gap-10'>
            {battery?.map((item) => {
              return (
                <Link to={`/${item.id}`} key={item.id}>
                  <div className='newIndivitual'>
                    <HoverImage src={item.image} hoverSrc={item.image} className=" rounded-xl w-40" />
                    <p className='font-semibold text-center text-base px w-40'> {item.name} </p>
                    <p className='text-base font-normal text-center'> {formatter.format(item.price)} </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {show3 && (
        <div className='z-50 travelContent' onMouseLeave={dontShowHandler}>
          <div className='flex flex-row justify-center'>
            <div className='TravelStoreHold flex flex-row gap-16'>
              {controller?.map((item) => {
                return (
                  <Link to={`/${item.id}`} key={item.id}>
                    <div key={item.id} className="TravelIndivitual">
                      <HoverImage src={item.image} hoverSrc={item.image} className=" rounded-xl w-40" />
                      <p className=' font-semibold text-base px w-40'> {item.name} </p>
                      <p className='text-base font-normal text-center'> {formatter.format(item.price)} </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {show4 && (
        <div className='newContent relative left-72 text-base text-gray-500 top-16' onMouseLeave={dontShowHandler}>
          <div className='newCategoryHold flex flex-col gap-9'>
            <p className='font-bold text-xl'>  CATEGORY </p>
            <p>  1KVA </p>
            <p>  2KVA </p>
            <p>  5KVA </p>
            <p>  10KVA </p>
          </div>

          <div className='newTypeHold relative flex felx-row gap-10'>
            {inverter?.map((item) => {
              return (
                <Link to={`/${item.id}`} key={item.id}>
                  <div className='newIndivitual'>
                    <HoverImage src={item.image} hoverSrc={item.image} className=" rounded-xl w-40" />
                    <p className='font-semibold text-center text-base px w-40'> {item.name} </p>
                    <p className='text-base font-normal text-center'> {formatter.format(item.price)} </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
