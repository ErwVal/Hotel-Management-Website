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
  const tomorrow = moment(new Date()).day(2).format("YYYY-MM-DD");

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
      className="form"
      aria-label="Date"
      id="date-field"
      onSubmit={submitForm}
    >
      <Row className="g-2">
        <Col md>
          <div className="field">
            <label className="label">Check in</label>
            <div className="control">
              <input
                className="input"
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
          <div className="field">
            <label className="label">Check out</label>
            <div className="control">
              <input
                className="input"
                name="CheckOutDate"
                type="date"
                min={tomorrow}
                value={checkOutDateState}
                onChange={(event) => setCheckOutDate(event.target.value)}
                required
              />
            </div>
          </div>
        </Col>

        <Col md>
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link primary"
                disabled={formStatus === "SUBMITTING"}
                type="submit"
              >
                Submit booking
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
