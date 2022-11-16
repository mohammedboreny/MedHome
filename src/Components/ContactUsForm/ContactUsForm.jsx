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
                    <Col><img src="" alt="" /></Col>
                    <Col> <Form>
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
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
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