import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Heading1 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className><h1 className='h1'>What Are People Saying about us</h1></Col>
                    <Col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p></Col>
                </Row>
            </Container>
            <hr className='pt-2 m-4' />
            <Container>
                <Row>
                    <Col><img src="https://images.pexels.com/photos/12192456/pexels-photo-12192456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></Col>
                    <Col>
                        <h2 className='h2 text-center'>shdkjdsgsdkgkjsd</h2>
                        <p>I am very happy with the services provided, it is very helpful, starting from the insight
                            that the company gave from the start that I did not understand
                            what it was so I got knowledge and made my website look better
                        </p>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Heading1