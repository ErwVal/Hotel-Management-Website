import React, { FormEvent, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { createReservation } from "../api/apiClient";

export const CreateReservation = () => {
  const {
    id,
    hotelIdNumber,
    numAdults,
    checkInDate,
    checkOutDate,
    location,
    roomPrice,
    lengthOfStay,
  } = useParams<{
    id: string;
    hotelIdNumber: string;
    numAdults: string;
    checkInDate: string;
    checkOutDate: string;
    location: string;
    roomPrice: string;
    lengthOfStay: string;
  }>();

  let checkIn = new Date(checkInDate);
  let checkOut = new Date(checkOutDate);
  const [guestName, setGuestName] = useState("");
  let numGuests = parseInt(numAdults);
  let hotelId = parseInt(hotelIdNumber);
  let roomId = parseInt(id);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    createReservation({
      checkIn,
      checkOut,
      guestName,
      numGuests,
      roomId,
      hotelId,
    });

    return(
      <div>
        <h2>Your reservation has been created. </h2>
      </div>
    )
  };

  return (
    <div>
      <h2>Sign in</h2>
      <Form onSubmit={submitForm}>
        <Row>
          <Col>
            <Form.Control
              placeholder="First name"
              onChange={(e) => setGuestName(e.target.value)}
              required
            />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>US</option>
              <option>UK</option>
              <option>EU</option>
              <option>Canada</option>
              <option>Mexico</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postcode</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree with the terms and conditions."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
