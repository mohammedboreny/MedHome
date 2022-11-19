import React ,{ useState } from 'react'
import PlaceMap from '../../Components/AskForService/PlaceMap';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import {Col,Row} from 'react-bootstrap';
import { Container } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ServiceOrder = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      console.log(data);
  }
  const [startDate, setStartDate] = useState(new Date());

  return (
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
             
                <Form.Field>
                <label>Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) =>
                    setStartDate(date)} />

              </Form.Field>
              <Form.Field>
                <input type="text"  value="" />
              </Form.Field>
              
              <Button type='submit' className='text-white bg-primary'>Submit</Button>
            </Form>
              </Col>
          </Row>
          </Container>

    </div>
  )
}

export default ServiceOrder