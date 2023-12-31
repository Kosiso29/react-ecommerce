import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import SimpleSlider from './components/HeroCarousel';
import HeroSection from './components/HeroSection';
import OurBestSellers from './components/OurBestSellers';
import Ingridients from './components/Ingridients';
import JournalSection from './components/JournalSection';
import BsText from './components/BsText';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SinglePage from "./components/SinglePage";
import JournalPage from "./components/JournalPage";
import Cart from './components/Cart';
import FollowONIG from './components/FollowONIG';
import Products from './components/Products';
import CartHold from './components/CartHold';
import SPFooter from './components/SPFooter';
import ProductCategory from './components/ProductCategory';
import { useDispatch } from "react-redux";
import { cartActions } from "./redux-state/CartState";
import LandingPage from "./components/LandingPage";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartActions.updateItemsOnCart())
    }, [])

    return (
        <div className="App">
            <BrowserRouter>

                <Routes >
                    <Route path='/' exact element={<>   <LandingPage />  </>} />
                    <Route path='/:id' exact element={<> <NavBar />  <SinglePage /> </>} />
                    <Route path='/journal/april' element={<> <NavBar />  <JournalPage /> </>} />
                    <Route path='/cart' exact element={<>  <NavBar /> <CartHold /></>} />
                    <Route path='/products' exact element={<> <NavBar noSearch={true} /> <Products /> <SPFooter /> </>} />
                    <Route path='/panel' element={<> <NavBar />  <ProductCategory
                        title="PANEL"
                        description="Unleash the power of the sun with solar panels, illuminating a sustainable future."
                        category_id={2}
                        options={["180W", "300W", "500W", "600W"]}
                    /> </>} />
                    <Route path='/inverter' element={<> <NavBar />  <ProductCategory
                        title="INVERTER"
                        description="Transforming solar energy into electrifying potential, the inverter empowers a seamless transition to renewable power."
                        category_id={5}
                        options={["1kva", "5kva"]}
                    /> </>} />
                    <Route path='/battery' element={<> <NavBar />  <ProductCategory
                        title="BATTERY"
                        description="Empowering energy independence, batteries store the sun's vitality to illuminate even the darkest hours."
                        category_id={1}
                        options={["100AH", "180AH", "200AH"]}
                    /> </>} />
                    <Route path='/controller' element={<> <NavBar />  <ProductCategory
                        title="CONTROLLER"
                        description="Embrace the brilliance of a complete solar system, where sunlight becomes the foundation of sustainable energy for a brighter future."
                        category_id={3}
                        options={["60A", "120A"]}
                    /> </>} />
                </Routes>

            </BrowserRouter>




        </div>
    );
}

export default App;
