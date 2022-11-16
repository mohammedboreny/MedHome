import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
const FeaturedImage = () => {
  return (
      <div >
           <Container>
      <Row>
                  <Col  >
                      <h1>Here you can find our Services</h1>
                      <span>another texr here</span>  
                  </Col>
        
              </Row>
              
              <Row>
                  <Col>
                  <img src="https://images.pexels.com/photos/14185268/pexels-photo-14185268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                  </Col>
                  <Col  >
                      <ul>
                          <li className='bold'>
                              ldfsjihjf
                              <details></details>
                          </li>
                          <li>
                              gffdgfd
                              <details></details>
                          </li>
                          <li>
                              dffddfd
                              <details></details>
                          </li>
                          <li>
                              dfdffdf
                              <details></details>
                          </li>
                      </ul>
                  </Col></Row>
    </Container>
    </div>
  )
}

export default FeaturedImage