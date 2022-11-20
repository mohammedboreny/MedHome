import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import ConstructionIcon from '@mui/icons-material/Construction';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
const FeaturedImage = () => {
  return (
      <div >
           <Container>
      <Row>
                  <Col  >
                      <h1 className='text-center m-3'>Here you can find our Services</h1>
                  </Col>
        
              </Row>
              
              <Row>
                  <Col>
                  <img className='cover-fill' src="https://images.pexels.com/photos/5768107/pexels-photo-5768107.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </Col>
                  <Col  >
                      <ul>
                          <li className='pt-3 fs-2'>
                          <ConstructionIcon fontSize='large'/> Home Maintaining
                          </li>
                          <br />
                          <li className='pt-3 fs-2'>
                              <StarPurple500Icon fontSize='large'/> Best Service
                          </li>
                          <br />
                          <li className='pt-3 fs-2'>
                            <AccessTimeIcon fontSize='large'/>  24/7 A day
                          </li >
                          <br />
                          <li className='pt-3 '>
                              <SentimentVerySatisfiedIcon fontSize='large'/><span className='pl-4 fs-2'>Top Quality And Performence</span>
                               
                          </li>
                      </ul>
                  </Col></Row>
    </Container>
    </div>
  )
}

export default FeaturedImage