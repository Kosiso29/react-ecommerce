import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "../styles/FollowONIG.css";
import { store } from '../productsStore/Store';
import "react-alice-carousel/lib/alice-carousel.css";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import { ExternalLink } from 'react-external-link';
import Marquee from "react-fast-marquee";


const FollowONIG = () => {

  const responsive = {
    2000: {
      items: 11,
    },
    1600: {
      items: 6
    },
    1200: {
      items: 5,
    },
    800: {
      items: 3,
    },
    0: {
      items: 1,
    },
  };

  return (
    <div className='mt-24 mb-36'>
      <p className='igText mb-12'> FOLLOW US ON INSTAGRAM </p>

      <div className='followOnInstaMarqueeConatiner'>

        <Marquee pauseOnHover={true} speed={100} >

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/' >
            <img src={i1} className=' w-60 rounded-2xl   mrMl carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i2} className=' w-60 rounded-2xl  mrMl  carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i3} className=' w-60 rounded-2xl   mrMl carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i4} className=' w-60 rounded-2xl   mrMl carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i5} className=' w-60 rounded-2xl  mrMl  carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i6} className=' w-60 rounded-2xl  mrMl  carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i7} className=' w-60 rounded-2xl   mrMl carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i8} className=' w-60 rounded-2xl   mrMl carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i9} className=' w-60 rounded-2xl  mrMl carouselIMg' alt=''/>
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i10} className=' w-60 rounded-2xl  mrMl  carouselIMg'alt='' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/ojwale_solar2/'>
            <img src={i11} className=' w-60 rounded-2xl  mrMl  carouselIMg' alt='' />
          </ExternalLink>

        </Marquee>
      </div>

    </div>



  )
}

export default FollowONIG
