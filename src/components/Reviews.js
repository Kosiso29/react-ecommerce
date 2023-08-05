import React, { useEffect } from 'react'
import { useState } from 'react'
import "../styles/Reviews.css"
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { AiFillStar } from "react-icons/ai"
import Highlighter from "react-highlight-words";
import axios from "../axios";
import ReviewsCount from './ReviewsCount';


const Reviews = ({id, rating}) => {
  const [search, setSearch] = useState("smell");
  const [reviews, SetReviews] = useState([]);

  const getData = async (id) => {
      await new Promise((resolve, reject) => {
          axios.get(`/ratings/list/?ordering=-createdAt&product=${id}`)
              .then(response => response.data)
              .then(data => {
                  SetReviews(data)
                  resolve()
          }).catch(() => reject())
      })
  }

    
    useEffect(() => {
        getData(id);
    }, [id])

    const setNumberOfStars = (rating) => {
        const numberOfStars = Math.floor(rating / 2);
        const numberOfStarsArray = Array.from({ length: numberOfStars }, (_, i) => i + 1);
        
        return (
            <div className='flex'>
                {numberOfStarsArray.map(() => <AiFillStar />)}
            </div>
        )
    }




  return (
    <div>
        <ReviewsCount rating={rating} reviews={reviews} />


          {reviews.length > 0 ? <div className='flex flex-col gap-7 relative mt-12 wrapper'>
              <p className='frText text-3xl relative fof'> Filter Reviews </p>

              <input type="text" placeholder="Search" className='bg-light fof reviews max-w-md text-black-400 pl-3' onChange={e => setSearch(e.target.value)} />
          </div> : null}


      <div className='wrapper pl-16 my-12'>{reviews.map(review => {
        return (<div key={review.id} className="searchList relative">
          <p className='font-semibold text-md mb-1 capitalize'> {review.user}</p>
          <p className='text-md mb-1'>  {setNumberOfStars(review.rating)} </p>
          <p className=' text-gray-500 font-semibold mb-1 capitalize'> {review.title} </p>
            <Highlighter
              className='fof mb-1 w50rem capitalize mobdesc'
              highlightClassName="YourHighlightClass highlightWord"
              searchWords={[search]}
              autoEscape={true}
              textToHighlight={review.review}
            > {review.review}
            </Highlighter>

          <p className='firstLetterHold rounded-full text-center pt-1 relative mb-1 capitalize'> {review.user} </p>

        </div>
        )
      })} </div>

    </div>
  )
}

export default Reviews;

//   .substring(0 , 32)) + "\n" + (i.description.substring(33  , 60)) + "\n" + (i.description.substring(34 , 64))