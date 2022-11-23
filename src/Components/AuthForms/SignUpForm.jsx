
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import { useAuth } from '../../CurrentUserContext';
import { Navigate,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const SignUpForm = () => {
    const { loggedin,login,idSet } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nave = useNavigate();

    const onSubmit = (data) => {
        let Storage2 = JSON.parse(localStorage.getItem(data.email));

        if (Storage2 == null) {
            localStorage.setItem(data.email, JSON.stringify(data));
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Signed Up succesfully',
                showConfirmButton: false,
                timer: 4000
            });
            nave('/')
            login();
            idSet(Storage2.email);
            
            }
        else {
            alert("USer Has Already Registered ")
        }
    }

    return loggedin ? (
        <div>
        <Navigate to="/" />
    </div >):(
        <div>
            <Row className='justify-content-center'>
                <Col lg={4}  >
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field>
                            <input type="hidden"
                                value=''
                                {...register("id", { required: false })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>First Name</label>
                            <input
                                placeholder='First Name'
                                type="text"
                                {...register("firstName", { required: true, maxLength: 10 })}
                            />
                        </Form.Field>
                        {errors.firstName && <p className='text-danger'>Please check the First Name</p>}
                        <Form.Field>
                            <label>Last Name</label>
                            <input
                                placeholder='Last Name'
                                type="text"
                                {...register("lastName", { required: true, maxLength: 10 })}
                            />
                        </Form.Field>
                        {errors.lastName && <p className='text-danger'>Please check the Last Name</p>}
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
                        <Button type='submit' className='text-white bg-primary'>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default SignUpForm