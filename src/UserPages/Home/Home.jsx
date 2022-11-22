import React from 'react'
import Footer1 from "../../Components/Footer/Footer1";
import Hero from "../../Components/Hero/Hero";
import Testo from "../../Components/Testo/Testo";
import { useAuth } from '../../CurrentUserContext';

const Home = () => {
  const { login, loggedIn } = useAuth()


  return (
    <div>
      <Testo />
      <Footer1 />

    </div>
  )
}
export default Home