import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
const ContactUsForm = (props) => {
    // const [cookies, setCookie] = useCookies(['another']);
    const [fName, setfName] = useState('');
    const [email, setemail ]= useState('');
    const [lastName, setlastName] = useState("");
    const [textArea, settextArea] = useState("");
    const handle = (e) => {
        e.preventDefault();
        const contactData = [fName, email, lastName, textArea];
        localStorage.setItem("contactData", JSON.stringify(fName));
        
        console.log("true");

    };
     return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                         <img
                             className={props.dim}
                            src={props.img} alt="" />
                    </Col>
                    <Col sm={12} lg={6}>
                        <Form onSubmit={(e)=>handle(e)}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    value={fName}
                                    onChange={(e) => setfName(e.target.value)}
                                    type="text"
                                    placeholder="" />
                           
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                              value={lastName}
                                              onChange={(e) => setlastName(e.target.value)}
                                    type="text"
                                    placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Email</Form.Label>
                                <Form.Control
                                         value={email}
                                         onChange={(e) => setemail(e.target.value)}
                                    type="email"
                                    placeholder="" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>How we could help you?</Form.Label>
                                <Form.Control as="textarea"
                                         value={textArea}
                                         onChange={(e) => settextArea(e.target.value)}
                                    rows={3}
                                    placeholder="We are Hearing you.." />
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