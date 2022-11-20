import React from 'react'
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
const Testo = () => {
  return (
    <MDBContainer className="py-5">
    <MDBRow className="d-flex justify-content-center">
      <MDBCol md="10" xl="8" className="text-center">
        <h2 className="mb-4">Testimonials</h2>
        <h3 className="mb-4 pb-2 mb-md-5 pb-md-0">
Our Customers Satisfied 
          </h3>
      </MDBCol>
    </MDBRow>
    <MDBRow className="text-center">
      <MDBCol md="4" className="mb-5 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
            className="rounded-circle shadow-1-strong"
            width="150"
            height="150"
          />
        </div>
        <h5 className="mb-3">Abd Allah</h5>
        <h6 className="text-primary mb-3">From Jordan/Zarqa</h6>
        <p className="px-xl-3">
          <MDBIcon fas icon="quote-left" className="pe-2" />
          Best Service And Quality For Maintaining you home
        </p>
        <MDBTypography
          listUnStyled
          className="d-flex justify-content-center mb-0"
        >
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon
              fas
              icon="star-half-alt"
              size="sm"
              className="text-warning"
            />
          </li>
        </MDBTypography>
      </MDBCol>
      <MDBCol md="4" className="mb-5 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
            className="rounded-circle shadow-1-strong"
            width="150"
            height="150"
          />
        </div>
        <h5 className="mb-3">Mohammed </h5>
        <h6 className="text-primary mb-3">From Jordan/Zarqa</h6>
        <p className="px-xl-3">
          <MDBIcon fas icon="quote-left" className="pe-2" />
          MedHome is Quality and performence  
        </p>
        <MDBTypography
          listUnStyled
          className="d-flex justify-content-center mb-0"
        >
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
        </MDBTypography>
      </MDBCol>
      <MDBCol md="4" className="mb-5 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
            className="rounded-circle shadow-1-strong"
            width="150"
            height="150"
          />
        </div>
        <h5 className="mb-3">Ahmad</h5>
        <h6 className="text-primary mb-3">From Jordan/Zarqa</h6>
        <p className="px-xl-3">
          <MDBIcon fas icon="quote-left" className="pe-2" />
          24/7 Customer Service And Support, Best Support Team Ever.
        </p>
        <MDBTypography
          listUnStyled
          className="d-flex justify-content-center mb-0"
        >
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
          </li>
          <li>
            <MDBIcon far icon="star" size="sm" className="text-warning" />
          </li>
        </MDBTypography>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  )
}

export default Testo