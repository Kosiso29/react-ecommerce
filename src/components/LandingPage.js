import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import SimpleSlider from './HeroCarousel';
import HeroSection from './HeroSection';
import Ingridients from './Ingridients';
import FollowONIG from './FollowONIG';
import Products from './Products';
import SPFooter from './SPFooter';
import { BiSearch } from "react-icons/bi"
import { ImCancelCircle } from "react-icons/im"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "../axios";

const LandingPage = () => {

    return (
        <>
            <NavBar />
            <SimpleSlider />
            <HeroSection />
            <Ingridients />
            <Products />
            <FollowONIG />
            <SPFooter />
        </>
    )
}

export default LandingPage;