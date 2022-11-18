import React from 'react'

const ServiceOrder = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      console.log(data);
    }
  return (
    <div>
      
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
            <Button type='submit' className='text-white bg-primary'>Submit</Button>
            </Form>
        </Col>
        </Row>

    </div>
  )
}

export default ServiceOrder