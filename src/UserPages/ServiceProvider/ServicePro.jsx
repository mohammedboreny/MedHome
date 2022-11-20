import React from 'react'
import Footer1 from '../../Components/Footer/Footer1'
import Header2 from '../../Components/Header/Header2'
import Hero from '../../Components/Hero/Hero'
import JoinUSForm from '../../Components/JoinUsForm/JoinUSForm'

const ServicePro = () => {
  return (
    <div className='container pt-2'>
      <h1 className='text-center'> Join US Now</h1>
      <JoinUSForm />
      <Footer1/>
    </div>
  )
}

export default ServicePro