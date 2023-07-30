import React from 'react'
import { AiFillStar } from "react-icons/ai"
import feel from "../assets/feel.png";


const Review1 = ({ reviews }) => {

    const setNumberOfStars = (rating) => {
        const numberOfStars = Math.floor(rating / 2);
        const numberOfStarsArray = Array.from({ length: numberOfStars }, (_, i) => i + 1);
        
        return (
            <div className='flex'>
                {numberOfStarsArray.map(() => <AiFillStar />)}
            </div>
        )
    }

    const averageRating = reviews => {
        if (reviews.length > 0) {
            const sum = reviews.reduce((acc, num) => acc + num.rating, 0)
            return sum / reviews.length
        }
        return "0.0";
      }

    return (
        <div>

            <hr />

            <div className='flex gap-5 justify-center flex-row fof my-12'>
                <p className="text-gray-500 text-4xl font-semibold revSize"> {parseFloat(((averageRating(reviews) / 2)?.toString()))?.toFixed(1) || "0.0"} </p>
                <div>
                    {setNumberOfStars(averageRating(reviews))}
                    <p className='starLine2'> {reviews.length} Reviews </p>
                </div>
            </div>

            <hr />

        </div>
    )
}

export default Review1