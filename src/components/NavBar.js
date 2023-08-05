import React from 'react'
import "../styles/Navbar.css";
import logo from "../assets/cara.png";
import { useState } from 'react';
import BestSellers from './BestSellers';
import GiftSets from './GiftSets';
import Body from './Body';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import trolley from "../assets/trolley.png";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const getNumberOfItemsOnCart = (items) => {
        let numberOfItemsOnCart = 0;
        items.forEach(item => numberOfItemsOnCart = numberOfItemsOnCart + item.quantity);
        return numberOfItemsOnCart;
    }

    const numberOfItemsOnCart = useSelector(state => getNumberOfItemsOnCart(state.cart.items));

    const showHandler = () => {
        setShow(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)

    }

    const showHandler2 = () => {
        setShow2(true)
        setShow(false)
        setShow3(false)
        setShow4(false)

    }

    const showHandler3 = () => {
        setShow3(true)
        setShow(false)
        setShow2(false)
        setShow4(false)
    }

    const showHandler4 = () => {
        setShow4(true)
        setShow(false)
        setShow2(false)
        setShow3(false)

    }


    const dontShowHandler = () => {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)


    }

    return (
        <div>
            <header class="mobile-banner" role="banner">
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mobile-navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img src={logo} className="w-36" alt='logo'/>
                        </Link>        
                    </Navbar.Brand>
                    <Link to="/cart">
                        <img src={trolley} width='50px' alt='Cart' /><h1 className='cart-items-title text-center'>CART<span className='cart-items-number'>{ numberOfItemsOnCart }</span></h1>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item><Link to="/panel">Panel</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/battery">Battery</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/inverter">Inverter</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/controller">Controller</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Profile</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>


            <header class="banner" role="banner">

                <nav class="navigationBar flex justify-between px-24" role="navigation" aria-label="menu">

                    <Link to="/">
                        <img src={logo} className="img" alt='logo'/>
                    </Link>

                    <ul class="menuNav flex justify-between">
                        <li class="dropdown nav-link nav-link-fade-up transition-all duration-700" onMouseOver={showHandler} >
                            BEST SELLERS
                            {show && <div>
                                <ul class="dropdown-nav" onMouseLeave={dontShowHandler} >

                                    <BestSellers > </BestSellers>

                                </ul>

                            </div>}

                        </li >


                        <li class="dropdown nav-link nav-link-fade-up" onMouseOver={showHandler2} >
                            PRODUCTS
                            {show2 && <ul class="dropdown-nav dropdown-nav2" onMouseLeave={dontShowHandler}>
                                <GiftSets />
                            </ul>}

                        </li>


                        <li class="dropdown nav-link nav-link-fade-up" onMouseOver={showHandler3} >
                            QUICK FILTER
                            {show3 && <ul class="dropdown-nav dropdown-nav3" onMouseLeave={dontShowHandler}>
                                <Body />
                            </ul>}

                        </li>
                        <li class="dropdown nav-link nav-link-fade-up"git  onMouseOver={showHandler3} >
                            PROFILE
                            {/* {show3 && <ul class="dropdown-nav dropdown-nav3" onMouseLeave={dontShowHandler}>
                                <Body />
                            </ul>} */}

                        </li>


                        {/* <p className='navLine absolute bg-red-600 w-1 font-extralight h-9 z-50'>  </p> */}

                    </ul>

                    <Link to="/cart" className='nav-link text-2xl text-right ml-10 relative zoom2' >
                        <img src={trolley} width='50px' alt='Cart' /><h1 className='cart-items-title'>cart<span className='cart-items-number'>{ numberOfItemsOnCart }</span></h1>
                    </Link>
                </nav >
            </header >



        </div >
    )
}

export default NavBar

