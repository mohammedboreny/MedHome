import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import { Fade } from '@mui/material';
const Testo = () => {
  return (
    
      <MDBContainer className="py-5">
    <MDBRow className="d-flex justify-content-center">
      <MDBCol md="10" xl="8" className="text-center">
        <h2 className="mb-4">Our Services</h2>
        <h3 className="mb-4 pb-2 mb-md-5 pb-md-0">
Our Customers Satisfied 
          </h3>
      </MDBCol>
    </MDBRow>
    <MDBRow className="text-center">
      <MDBCol md="4" className="mb-5 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="https://images.pexels.com/photos/7217984/pexels-photo-7217984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-circle shadow-1-strong img-thumbnail"
            width="150"
            height="150"
          />
        </div>
      
        <h6 className="text-primary mb-3">Painting Services</h6>
        <p className="px-xl-3">
          <MDBIcon fas icon="quote-left" className="pe-2" />
            MedHome offers professional interior and exterior house painting services to locations in Zarqa.
            We take great pride in our quality painting services and high customer reviews.

</p>
      </MDBCol>
      <MDBCol md="4" className="mb-5 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0508/1795/8095/products/10172202-CS-CU-XU18XKQ_grande.jpg?v=1647575590"
            className=" rounded-circle shadow-1-strong img-thumbnail"
            width="150"
            height="150"
          />
        </div>
        
        <h6 className="text-primary mb-3">Air Conditions Maintaining</h6>
        <p className="px-xl-3">
          <MDBIcon fas icon="quote-left" className="pe-2" />
            MedHome Offers The most important maintenance task that will ensure the efficiency of your air conditioner is to routinely replace or clean its filters. Clogged, dirty filters reduce the amount of airflow and significantly reduce a system's efficiency.
            
        </p>
  
      </MDBCol>
      <MDBCol md="4" className="mb-5 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="https://images.pexels.com/photos/4118545/pexels-photo-4118545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-circle shadow-1-strong img-thumbnail"
            width="150"
            height="150"
          />
        </div>
       
        <h6 className="text-primary mb-3">Gardens Services</h6>
        <p className="px-xl-3">
          <MDBIcon fas icon="quote-left" className="pe-2" />
          Tell us what you need done, as well as what's the size and current state of your garden. In return, we will provide you with a personalised quote. Once booked, we’ll contact you to confirm the service.        </p>

      </MDBCol>
    </MDBRow>
    </MDBContainer>
  
  )
}

export default Testo