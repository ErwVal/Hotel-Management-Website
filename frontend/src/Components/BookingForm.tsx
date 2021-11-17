import React, { FormEvent, useState } from "react";
import { createBooking } from "../api/apiClient";
import moment from "moment";

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
    setFormStatus("SUBMITTING");

    const checkInDate: Date = new Date(checkInDateState);
    const checkOutDate: Date = new Date(checkOutDateState);

    let numGuests = parseInt(numGuestsState);

    createBooking({
      location,
      checkInDate,
      checkOutDate,
      numGuests,
    })
      .then(() => setFormStatus("FINISHED"))
      .catch(() => setFormStatus("ERROR"));
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Location</label> <br />
        <select onChange={(e) => setLocation(e.target.value)} required>
          <option>Cancun</option>
          <option>Playa del Carmen</option>
          <option>Tulum</option>
        </select>
      </div>
      <div>
        <label>Check in</label> <br />
        <input
          name="CheckInDate"
          type="date"
          min={today}
          value={checkInDateState}
          onChange={(event) => setCheckInDate(event.target.value)}
          required
        />
      </div>
      <div>
        <label>Check out</label> <br />
        <input
          name="CheckOutDate"
          type="date"
          min={moment(checkInDateState).add(1, "days").format("YYYY-MM-DD")}
          value={checkOutDateState}
          onChange={(event) => setCheckOutDate(event.target.value)}
          required
        />
      </div>
      <div>
        <label>Number of guests</label> <br />
        <select onChange={(e) => setNumGuests(e.target.value)} required>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>more</option>
        </select>
      </div>
      <div>
        <div>
          <button disabled={formStatus === "SUBMITTING"} type="submit">
            Confirm
          </button>
          {formStatus === "ERROR" && (
            <p>Something went wrong! Please try again.</p>
          )}
        </div>
      </div>
    </form>
  );
};
