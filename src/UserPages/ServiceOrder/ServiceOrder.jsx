import React, { useState } from 'react'
import PlaceMap from '../../Components/AskForService/PlaceMap';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import { Col, Row } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from '../../CurrentUserContext';
import { json, Link, Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ServiceOrder = () => {
  const {id,setphone } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    let Storage2 = JSON.parse(localStorage.getItem(id));
    localStorage.setItem(data.phone, JSON.stringify([data,startDate]));
    setphone(data.phone);
    console.log(data.description);
    console.log(Storage2.email);

    
  }
  
  const [startDate, setStartDate] = useState(new Date());

  const { loggedIn,directions } = useAuth()
  useEffect(() => {
  
    
  }, [])
  

  return loggedIn ? (
    <div>
      <Container className='pt-10'>
        <Row className='justify-content-center'>
          <Col>
            <PlaceMap />
          </Col>
          <Col lg={4}  >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <label>Choose Type of Service</label>
                <select name="cars" id="cars"
                 {...register("cars",
                 {
                   required: false
                 })}
                >
                  <option value="electronic">Electricity</option>
                  <option value="air">Air Conditions</option>
                  <option value="garden">Garden Services</option>
                  <option value="water">Water </option>
                </select>
              </Form.Field>
<input type="hidden" value={id} name="ID" />
              <Form.Field>
                <label>Date</label>
                <DatePicker name='Date'
                 
                  selected={startDate}
                  onChange={(date) =>
                    setStartDate(date)} />

              </Form.Field>
              <Form.Field>
              <label>Phone number</label>
                <input type="text" name='phone'
                  placeholder='Enter Your phone number'
                  {...register("phone",
                    {
                      required: false
                    })}
                      />
              </Form.Field>
              <Form.Field>
              <label>Description</label>
                <textarea type="text"
                   {...register("description",
                   {
                     required: false
                   })}
                  name='description' placeholder='Enter your massage here' />
              </Form.Field>
              

              <Button type='submit' className='text-white bg-primary'>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  ) :
    (<Navigate to="/login" />)
}

export default ServiceOrder