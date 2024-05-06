import React, { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom'; 
import Header from '../header/Header';
// import Body from '../body/Body';
import Middle from '../middle/Middle';
import Slider from '../slider/Slider';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';
import Navbar from '../navbar/Navbar';
import Home from '../../page/Home'; 
import About from '../../page/About'; 
import Service from '../../page/Service'; 
import Contact from '../../page/Contact';
import Loginpopup from '../Login/Loginpopup';
import Cart from '../../page/cart/Cart';
import ShopNow from '../shopNow/ShopNow';

const Main = () => {
  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
    
      <Header/>
      {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>} 
       
      <Navbar setShowLogin={setShowLogin}/>
  
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shop-now' element={<ShopNow/>}/>
      </Routes>
      
      {/* <Body />
      <Middle />
      <Slider />
      <Carousel /> */}
      <Footer /> 
    </>
  );
};

export default Main;
