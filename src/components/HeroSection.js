import React from 'react'
import "../styles/HeroSection.css"
import one from "../assets/24_104862.png"
import two from "../assets/quality-award_icon-icons.com_72192.png"
import three from "../assets/10_122764.png"


const HeroSection = () => {
    return (
        <div className='heroSecMainParent'>

            <p className='text-4xl mt-20 text-center welcomStore'> We sell inverter and inverter batteries, new and fairly used as well as solar products and equipments. </p>


            <div className='heroPicHold flex flex-row '>
                <img src={one} className=" w-20" alt=''/>
                <img src={two} className=" w-20" alt='' />
                <img src={three} className=" w-20" alt=''/>
            </div>

            <div className=' text-xl font-medium flex flex-row heroHeadingHold'>
                <p> Powered By Nature </p>
                <p> Exceptional Quality </p>
                <p> Home Friendly </p>
            </div>

            <div className='heroDescHold flex-row flex relative text-base font-normal'>
                <p> Harness the power of the sun, <br /> Radiance of solar energy. </p>
                <p> Exceptional quality shines as, <br /> brightly as the sun. </p>
                <p> Making homes friendlier to both <br /> our planet and our pockets.</p>
            </div>
        </div>
    )
}

export default HeroSection