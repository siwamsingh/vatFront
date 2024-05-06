import React from 'react'
import './Router.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../../page/Home'
import About from '../../page/About'
import Contact from '../../page/Contact'
import Service from '../../page/Service'
import Login from '../../page/Login'
const Router = () => {
  return <>
  <BrowserRouter>
    <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/login'  element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>

  </>
}

export default Router