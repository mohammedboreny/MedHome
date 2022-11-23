import React from 'react'
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import { Col, Row ,Container} from 'react-bootstrap';
import ByGoogle from './ByGoogle';
import { useAuth } from '../../CurrentUserContext';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nave = useNavigate();
    const onSubmit = (data) => {
        let Storage2 = JSON.parse(localStorage.getItem(data.email));

        if (Storage2 == null || Storage2.password !== data.password) {
            alert('Please Check your Password Or email');
        }
        else {
            console.log(Storage2);
            idSet(Storage2.email)
            login();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome back',
                showConfirmButton: false,
                timer: 4000
            }).
                then((res) => { res.redirect('/') })

        }
    }
    const { loggedin,login,idSet } = useAuth();
    console.log(loggedin);
    return loggedin ? (
        <div>
        <Navigate to="/" />
    </div >):(
            <div>
                <h1 className='text-center'>Log in</h1>
                <Container>
            <Row className='justify-content-center'>
                <Col lg={4}  >
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field>
                            <label>Email</label>
                            <input
                                placeholder='Email'
                                type="email"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                            />
                        </Form.Field>
                        {errors.email && <p className='text-danger'>Please check the Email</p>}
                        <Form.Field>
                            <label>Password</label>
                            <input
                                placeholder='Password'
                                type="password"
                                {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                })}
                            />
                        </Form.Field>
                        {errors.password && <p className='text-danger'>Password should contain one Capital Letter, one Small Letter and has length between 6 and 15</p>}
                                <Row >
                                    <Col>
                                <Button type='submit' className='text-white bg-primary'>Login</Button>
                                </Col>
                                <Col className='col-4'>
                            <ByGoogle />
                        </Col>  
                                </Row>
                            </Form>
                          
                        </Col>
                      
                        
                    </Row>
                    <Row>
                 
                        </Row>
                    </Container>

        </div>
    ) 
      
}

export default LoginForm