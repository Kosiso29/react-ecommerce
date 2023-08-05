import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

const Benefits = () => {
    return (      
        <div className='flex justify-between mb-8 benefits'>
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
    );
}

export default Benefits;