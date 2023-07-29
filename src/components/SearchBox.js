import React, { useEffect } from 'react'
import { useState } from 'react'
import "../styles/SearchBox.css"
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { AiFillStar } from "react-icons/ai"
import Highlighter from "react-highlight-words";
import axios from "../axios";
import Review1 from './Review1';


const SearchBox = ({id, rating}) => {
  const [search, setSearch] = useState("smell");
  const [reviews, SetReviews] = useState([]);

  const smellClick = "smell";
  const skinClick = "skin";
  const fragClick = "fragrance"
  const tonerClick = "toner";
  const hydrClick = "hydrating";
  const faceClick = "face";
  const mistClick = "mist";
  const glowClick = "glow";
  const boostClick = "boost"


  const smellHandler = (e) => {
    setSearch(smellClick)
  }

  const skinHandler = (e) => {
    setSearch(skinClick)
  }

  const fragClickHandler = (e) => {
    setSearch(fragClick)
  }

  const tonerHnadler = (e) => {
    setSearch(tonerClick)
  }

  const hydraHnadler = () => {
    setSearch(hydrClick);
  }

  const faceClickHandler = () => {
    setSearch(faceClick);
  }

  const mistClickHandler = () => {
    setSearch(mistClick);
  }

  const glowClickHandler = () => {
    setSearch(glowClick);
  }

  const boostClickHnadler = () => {
    setSearch(boostClick);
  }


  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  }

  const getData = async (id) => {
      await new Promise((resolve, reject) => {
          axios.get(`/ratings/list/?ordering=-createdAt&search=${id}`)
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
        <Review1 rating={rating} reviews={reviews} />


      <div className='flex flex-col gap-7 relative mx-32 mt-12'>
        <p className='frText text-3xl relative fof'> Filter Reviews </p>

        <input type="text" placeholder="Search" className='bg-light fof searchBox relative text-black-400 pl-3' onChange={e => setSearch(e.target.value)} />
      </div>


      <div className='mx-48 my-12'>{reviews.map(review => {
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

export default SearchBox;

//   .substring(0 , 32)) + "\n" + (i.description.substring(33  , 60)) + "\n" + (i.description.substring(34 , 64))