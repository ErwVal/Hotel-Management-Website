import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { createReservation } from "../api/apiClient";

interface Props {
  userId: string;
}

export const CreateReservation = (props: Props) => {
  const history = useHistory();

  const { roomId, hotelId, numGuests, checkIn, checkOut } = useParams<{
    roomId: string;
    hotelId: string;
    numGuests: string;
    checkIn: string;
    checkOut: string;
  }>();

  const submit = () => {
    createReservation({
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      numGuests: parseInt(numGuests),
      roomId: parseInt(roomId),
      hotelId: parseInt(hotelId),
      userId: parseInt(props.userId),
    });

    alert("Your reservation has been created");    
    history.push("/trip");
  };

  if (props.userId === "") {
    history.push("/login");
  }

  return (
    <>
      <div>
        <h3>Please confirm your details are correct: </h3>
        <ul>
          <li>Check in: {checkIn}</li>
          <li>Check out: {checkOut}</li>
          <li>Adults: {numGuests}</li>
          <li>Room ID: {roomId}</li>
          <li>Hotel ID: {hotelId}</li>
          <li>Guest ID: {props.userId}</li>
        </ul>
        <button onClick={submit}>Confirm and make reservation</button>
      </div>
    </>
  );
};
