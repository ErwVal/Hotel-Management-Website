import React from "react";
import { Alert, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { createReservation } from "../api/apiClient";
import moment from "moment";

interface Props {
  firstName: string;
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
    if (props.userId === "") {
      history.push(
        `/login/${roomId}/${hotelId}/${numGuests}/${checkIn}/${checkOut}`
      );
    }
    createReservation({
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      numGuests: parseInt(numGuests),
      roomId: parseInt(roomId),
      hotelId: parseInt(hotelId),
      userId: parseInt(props.userId),
    });

    alert("Your reservation has been created");

    return (
      <>
        {" "}
        <Alert variant="success">
          <Alert.Heading>Success {props.firstName} !</Alert.Heading>
          <p>
            Your reservation for {numGuests} from{" "}
            {moment(checkIn).format("DD MMMM YYYY")} to{" "}
            {moment(checkOut).format("DD MMMM YYYY")} has been successfully
            created. Thank you for choosing Dew Breeze Suites for your holidays.
            We hope you enjoy your stay.
          </p>
        </Alert>
        {history.push("/trip")}
      </>
    );
  };

  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};
