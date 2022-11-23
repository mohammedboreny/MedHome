import React from 'react'
import ContactUsForm from '../../Components/ContactUsForm/ContactUsForm'
import Footer1 from '../../Components/Footer/Footer1'
import Hero from '../../Components/Hero/Hero'
const ContactUs = () => {
  return (
    <div className='container pt-2'>
    <h1 className='text-center'> Contact us for any inquiry</h1>
      <ContactUsForm dim="img-thumbnail " img="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Footer1/>
    </div>
  )
}

export default ContactUs