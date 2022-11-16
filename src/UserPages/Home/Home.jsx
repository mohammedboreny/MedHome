import React from 'react'
import Footer1 from "../../Components/Footer/Footer1";
import Header1 from "../../Components/Header/Header1";
import Hero from "../../Components/Hero/Hero";
import Testo from "../../Components/Testo/Testo";
import CTA from "../../Components/CTA/CTA";
import PlaceHolders from "../../Components/PlaceHolders/PlaceHolders";

const Home = () => {
  return (
    <div>
      <Header1 />
      <Hero />
      <Testo />
      <CTA />
      <PlaceHolders />
      <Footer1/>
    </div>
  )
}

export default Home