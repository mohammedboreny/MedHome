import React from 'react'
import ContactUsForm from '../../Components/ContactUsForm/ContactUsForm'
import Footer1 from '../../Components/Footer/Footer1'
import Hero from '../../Components/Hero/Hero'
const ContactUs = () => {
  return (
    <div className='container pt-2'>
    <h1 className='text-center'> Contact us for any inquiry</h1>
      <ContactUsForm />
      <Footer1/>
    </div>
  )
}

export default ContactUs