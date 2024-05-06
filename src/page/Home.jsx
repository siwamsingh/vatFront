import React from 'react'
import Body from '../components/body/Body'
import Middle from '../components/middle/Middle'
import Slider from '../components/slider/Slider'
import Carousel from '../components/carousel/Carousel'
import Category from '../components/category/Category'
import Middle2 from '../components/middle/Middle2'
const Home = () => {
  return (
    <div>
      
    <Body/>
    <Middle/>
    <Slider />
    <Carousel />  
      
    <Middle2/>
     <Category/>
   
    </div>
  )
}

export default Home