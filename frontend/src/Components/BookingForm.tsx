import React, { FormEvent, useState } from "react";
import { Alert, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import { createBooking } from "../api/apiClient";
import moment from "moment";
import "../styling/BookingForm.css";

type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";

export const BookingForm: React.FunctionComponent = () => {
  const [location, setLocation] = useState("");
  const [checkInDateState, setCheckInDate] = useState("");
  const [checkOutDateState, setCheckOutDate] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("READY");
  const [numGuestsState, setNumGuests] = useState("");

  const today = moment(new Date()).format("YYYY-MM-DD");

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={submitForm}>
      <Row className="g-4">
        <Col>
          <FloatingLabel label="Select a location">
            <Form.Select onChange={(e) => setLocation(e.target.value)} required>
              <option>Cancun</option>
              <option>Tulum</option>
              <option>Playa del Carmen</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <label>Check in</label> <br />
          <input
            name="CheckInDate"
            type="date"
            min={today}
            value={checkInDateState}
            onChange={(event) => setCheckInDate(event.target.value)}
            required
          />
        </Col>
        <Col>
          <label>Check out</label> <br />
          <input
            name="CheckOutDate"
            type="date"
            min={moment(checkInDateState).add(1, "days").format("YYYY-MM-DD")}
            value={checkOutDateState}
            onChange={(event) => setCheckOutDate(event.target.value)}
            required
          />
        </Col>

        <Col>
          <FloatingLabel label="Guests">
            <Form.Select
              onChange={(e) => setNumGuests(e.target.value)}
              required
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Select>
          </FloatingLabel>
        </Col>

        <Col>
          <Button
            className="btn btn-light"
            disabled={formStatus === "SUBMITTING"}
            type="submit"
          >
            Confirm
          </Button>
        </Col>
      </Row>
      <br/>
      {formStatus === "ERROR" && (
        <Alert variant="warning">Something went wrong! Please try again.</Alert>
      )}
    </Form>
  );
};

