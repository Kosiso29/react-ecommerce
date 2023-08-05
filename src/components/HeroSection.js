import React from 'react'
import "../styles/HeroSection.css"
import one from "../assets/24_104862.png"
import two from "../assets/quality-award_icon-icons.com_72192.png"
import three from "../assets/10_122764.png"


const HeroSection = () => {
    return (
        <div className='heroSecMainParent wrapper'>

            <p className='text-4xl mt-20 text-center'> We sell inverter and inverter batteries, new and fairly used as well as solar products and equipments. </p>
            <div className='flex flex-wrap justify-around mt-20'>
                <div className='flex flex-wrap justify-between mx-3 my-6'>
                    <img src={one} className=" w-20" alt='' />
                    <div className='ml-6'>
                        <p className='text-xl font-medium mb-3'> Powered By Nature </p>
                        <p> Harness the power of the sun, <br /> Radiance of solar energy. </p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between mx-3 my-6'>
                    <img src={two} className=" w-20" alt='' />
                    <div className='ml-6'>
                        <p className='text-xl font-medium mb-3'> Exceptional Quality </p>
                        <p> Exceptional quality shines as, <br /> brightly as the sun. </p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between mx-3 my-6'>
                    <img src={three} className=" w-20" alt=''/>
                    <div className='ml-6'>
                        <p className='text-xl font-medium mb-3'> Home Friendly </p>
                        <p> Making homes friendlier to both <br /> our planet and our pockets.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection