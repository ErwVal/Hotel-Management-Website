import React, { FormEvent, useState, useEffect } from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Booking } from "./Booking";
import { createBooking } from "../api/apiClient";
import moment from "moment";

type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";

export const CreateBookingForm: React.FunctionComponent = () => {
  const [checkInDateState, setCheckInDate] = useState("");
  const [checkOutDateState, setCheckOutDate] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("READY");

  const today = moment(new Date()).format("YYYY-MM-DD");

  function addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
}

var date = new Date();

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    setFormStatus("SUBMITTING");

    const checkInDate: Date = new Date(checkInDateState);
    const checkOutDate: Date = new Date(checkOutDateState);

    createBooking({
      checkInDate,
      checkOutDate,
    })
      .then(() => setFormStatus("FINISHED"))
      .catch(() => setFormStatus("ERROR"));
  };

  return (
    <form
      
      aria-label="Date"
      id="date-field"
      onSubmit={submitForm}
    >
      <Row className="g-2">
        <Col md>
          <div >
            <label >Check in</label>
            <div >
              <input
                
                name="CheckInDate"
                type="date"
                min={today}
                value={checkInDateState}
                onChange={(event) => setCheckInDate(event.target.value)}
                required
              />
            </div>
          </div>
        </Col>
        <Col md>
          <div >
            <label>Check out</label>
            <div>
              <input
                name="CheckOutDate"
                type="date"
                min={moment(checkInDateState).add(1, 'days').format("YYYY-MM-DD")}
                value={checkOutDateState}
                onChange={(event) => setCheckOutDate(event.target.value)}
                required
              />
            </div>
          </div>
        </Col>

        <Col md>
          <div >
            <div >
              <button
                disabled={formStatus === "SUBMITTING"}
                type="submit"
              >
                Book
              </button>
              {formStatus === "ERROR" && (
                <p>Something went wrong! Please try again.</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </form>
  );
};
