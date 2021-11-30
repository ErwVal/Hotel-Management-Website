import React, { FormEvent, useState } from "react";
import { Alert, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import { RenderRoomsByQuery } from "./RenderRoomsByQuery";
import moment from "moment";
import "../styling/BookingForm.css";

type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";

export const BookingForm: React.FunctionComponent = () => {
  const [renderRoomsList, setRenderRoomsList] = useState(false);
  const [location, setLocation] = useState(99);
  const [checkInDateState, setCheckInDate] = useState("");
  const [checkOutDateState, setCheckOutDate] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("READY");
  const [numGuestsState, setNumGuests] = useState("");

  const today = moment(new Date()).format("YYYY-MM-DD");


  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    setRenderRoomsList(true);
  };

  const handleLocation = (location: string) => {

    if(location === "Cancun")
    {
      setLocation(1);
    }
    else if (location === "Tulum")
    {
      setLocation(2);
    }
    else if (location === "Playa del Carmen")
    {
      setLocation(3)
    }
    else{
      console.log("Error")
        }
  }

  return (
    <div>
    {!renderRoomsList ? (
    <Form onSubmit={submitForm}>
      <Row className="g-4">
        <Col>
          <FloatingLabel label="Location">
            <Form.Select onChange={(e) => handleLocation(e.target.value)} required>
              <option>Select</option>
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
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>8</option>
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
    </Form> ) : ( <RenderRoomsByQuery hotelId={location} numGuests={parseInt(numGuestsState)} checkInDate={checkInDateState} checkOutDate={checkOutDateState} />)}
    </div>
  );
};

