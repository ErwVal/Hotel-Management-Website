import React, { FormEvent, useState } from "react";
import {
  Alert,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  Container,
} from "react-bootstrap";
import { RenderRoomsByQuery } from "./RenderRoomsByQuery";
import moment from "moment";

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
    if (location === "Cancun") {
      setLocation(1);
    } else if (location === "Tulum") {
      setLocation(2);
    } else if (location === "Playa del Carmen") {
      setLocation(3);
    } else {
      console.log("Error");
    }
  };

  return (
    <div>
      {!renderRoomsList ? (
        <div className="form-container">
          <h2>Search for a room: </h2>
          <Form onSubmit={submitForm}>
            <Col className="g-4">
              <Row className="form-row">
                <label>Location</label> <br />
                  <Form.Select className="sm"
                    onChange={(e) => handleLocation(e.target.value)}
                    required
                  >
                    <option>Select</option>
                    <option>Cancun</option>
                    <option>Tulum</option>
                    <option>Playa del Carmen</option>
                  </Form.Select>
              </Row>
              <Row className="form-row">
                <label>Check in</label> <br />
                <input
                  name="CheckInDate"
                  type="date"
                  min={today}
                  value={checkInDateState}
                  onChange={(event) => setCheckInDate(event.target.value)}
                  required
                />
              </Row>
              <Row className="form-row">
                <label>Check out</label> <br />
                <input
                  name="CheckOutDate"
                  type="date"
                  min={moment(checkInDateState)
                    .add(1, "days")
                    .format("YYYY-MM-DD")}
                  value={checkOutDateState}
                  onChange={(event) => setCheckOutDate(event.target.value)}
                  required
                />
              </Row>
              <Row className="form-row">
              <label>Guests</label> <br />
                  <Form.Select
                  className="sm"
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
              </Row>
              
              <Row>
                <button
                  className="btn btn-light form-button"
                  disabled={formStatus === "SUBMITTING"}
                  type="submit"
                >
                  Search
                </button>
              </Row>
            </Col>
            <br />
            {formStatus === "ERROR" && (
              <Alert variant="warning">
                Something went wrong! Please try again.
              </Alert>
            )}
          </Form>
        </div>
      ) : (
        <RenderRoomsByQuery
          hotelId={location}
          numGuests={parseInt(numGuestsState)}
          checkInDate={checkInDateState}
          checkOutDate={checkOutDateState}
        />
      )}
    </div>
  );
};
