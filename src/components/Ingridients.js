import React, { useEffect, useState } from 'react';
import "../styles/Ingridients.css";

import ing1 from "../assets/energyoptions_10799.png";
import ing2 from "../assets/solarpanel_sola_13595.png";
import ing3 from "../assets/smart_technology_solar_energy_renewable_ecology_icon_152177.png";
import ing4 from "../assets/renewable_sun_eco_ecology_solar_energy_battery_icon_186031.png";
import ing5 from "../assets/charger_power_battery_icon_219703.png";
import ing6 from "../assets/4_122758.png";

const Ingridients = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://solarsales.pythonanywhere.com/products/category/");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    getData();
  }, []);

  return (
    <div className='ingMainParent'>
      <p className='text-4xl ogtext font-medium text-center mb-16'>OUR PRODUCTS</p>

      <div className='ingImgHold flex flex-row gap-36 justify-center'>
        <div className="imageWithText">
          <img src={ing1} className="zoom2" alt=''/>
          <p>{categories.length > 0 && categories[0].name}</p>
        </div>
        <div className="imageWithText">
          <img src={ing2} className="zoom2" alt=''/>
          <p>{categories.length > 1 && categories[1].name}</p>
        </div>
        <div className="imageWithText">
          <img src={ing3} className="zoom2" alt=''/>
          <p>{categories.length > 2 && categories[2].name}</p>
        </div>
        <div className="imageWithText">
          <img src={ing4} className="zoom2" alt=''/>
          <p>{categories.length > 3 && categories[3].name}</p>
        </div>
        <div className="imageWithText">
          <img src={ing5} className="zoom2" alt=''/>
          <p>{categories.length > 4 && categories[4].name}</p>
        </div>
        <div className="imageWithText">
          <img src={ing6} className="zoom2" alt=''/>
          <p>{categories.length > 5 && categories[5].name}</p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Ingridients;
