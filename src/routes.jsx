import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './UserPages/Home/Home';
import Services from './UserPages/Services/ServicesPage';
import About from './UserPages/About/About';
import ContactUs from './UserPages/ContactUs/ContactUs';
import ServicePro from './UserPages/ServiceProvider/ServicePro';

import './index.css'
import Login from './UserPages/Login/Login';
import Signup from './UserPages/Signup/Signup';
import Header1 from './Components/Header/Header1'
import Header2 from './Components/Header/Header2';
import Hero from './Components/Hero/Hero';
import ServiceOrder from './UserPages/ServiceOrder/ServiceOrder'
import Profile from './UserPages/Profile/Profile';

export const AuthenticatedRoutes = () => {
      
    return (
        <>
        <Header1 />
   
        <Routes>
        <Route exact path='/profile' element={<Profile />}></Route>

        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={< About />}></Route >
        <Route exact path='/contactUs' element={<  ContactUs />}></Route>
          <Route exact path='/ServicePro' element={< ServicePro />}></Route>
          <Route exact path='/ordernow'    element={ <ServiceOrder/>}></Route>

            </Routes >
            </>
)

  }
export const UnauthenticatedRoutes = () => {
 
    return (
        <div >
        <Header2 />
        <Hero />
        <Routes>
        <Route exact path='/ordernow' element={ <ServiceOrder/>}></Route>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/services' element={< Services />}></Route>
            <Route exact path='/about' element={< About />}></Route >
            <Route exact path='/contactUs' element={<  ContactUs />}></Route>
            <Route exact path='/ServicePro' element={< ServicePro />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes >
        </div>
  )
}

