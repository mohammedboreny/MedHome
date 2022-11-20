import React, { useState } from 'react'
import PlaceMap from '../../Components/AskForService/PlaceMap';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import { Col, Row } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from '../../CurrentUserContext';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ServiceOrder = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  let { id } = useParams();
  let { direction } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const { loggedIn } = useAuth()
  let x = "";
  useEffect(() => {
    //  x=[direction.coordinates.lat,direction.coordinates.lng]
  
    
  }, [PlaceMap,useAuth])
  

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
                <select name="cars" id="cars">
                  <option value="electronic">Electricity</option>
                  <option value="air">Air Conditions</option>
                  <option value="garden">Garden Services</option>
                  <option value="water">Water </option>
                </select>
              </Form.Field>
<input type="hidden" value={id} name="ID" />
              <Form.Field>
                <label>Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) =>
                    setStartDate(date)} />

              </Form.Field>
              <Form.Field>
              <label>Phone number</label>
                <input type="text" name='phone' placeholder='Enter Your phone number' />
              </Form.Field>
              <Form.Field>
              <label>Description</label>
                <textarea type="text" name='description' placeholder='Enter your massage here' />
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