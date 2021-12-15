import React, { FormEvent, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Redirect, useParams } from "react-router-dom";
import { createReservation } from "../api/apiClient";
import { Reservation } from "../App";

export interface CreateReservationProps {
  reservation: Reservation;
  userId: number | string;
}

export const CreateReservation: React.FunctionComponent<CreateReservationProps> = (props: CreateReservationProps) => {

  const [formStatus, setFormStatus] = useState("PENDING");

  const submit = () => {
    createReservation({
      checkIn: props.reservation.checkIn,
      checkOut: props.reservation.checkOut,
      numGuests: props.reservation.numGuests,
      roomId: props.reservation.roomId,
      hotelId: props.reservation.hotelId,
      guestId: props.userId,
    });

    alert("Your reservation has been created");
    setFormStatus("SUBMITTED");
    if (formStatus === "SUBMITTED") {
      return <Redirect to="/home" />;
    } 
  };

  if(!props.userId){
    return(<Redirect to="/home"/>)
  }


  return(
    <div>
      <h3>Please confirm your details are correct: </h3>
      <ul>
        <li>
          Check in: {props.reservation.checkIn}
        </li>
        <li>
          Check out: {props.reservation.checkOut}
        </li>
        <li>
          Adults: {props.reservation.numGuests}
          </li>
          <li>
            Room ID: {props.reservation.roomId}
          </li>
          <li>
            Hotel ID: {props.reservation.hotelId}
          </li>
          <li>
            Guest ID: {props.userId}
          </li>
      </ul>
      <button onClick={submit}>Confirm and make reservation</button>
    </div>
  )
};
