import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ContactUsForm = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} lg={6}><img src="https://images.pexels.com/photos/12192456/pexels-photo-12192456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></Col>
                    <Col sm={12} lg={6}> <Form>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                           
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="We are Hearing you.." />
                        </Form.Group >
                        <Button variant="primary" className='m-4' type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUsForm