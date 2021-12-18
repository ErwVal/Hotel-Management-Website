import { useState } from "react";
import { Alert, Container, Button } from "react-bootstrap";
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

  const [reservationAlert, setReservationAlert] = useState(false);

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

    setReservationAlert(true);
  };

  if (reservationAlert) {
    return (
      <Container className="div-confirm-details">
        <Alert variant="success">
          <Alert.Heading>Success {props.firstName} !</Alert.Heading>
          <p>
            Your reservation for {numGuests} adults from{" "}
            {moment(checkIn).format("DD MMMM YYYY")} to{" "}
            {moment(checkOut).format("DD MMMM YYYY")} has been successfully
            created.
          </p>
          <p>
            Thank you for choosing Dew Breeze Suites for your holidays. We hope
            you enjoy your stay.
          </p>
          <Alert.Link href="/trip">Continue</Alert.Link>.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="div-confirm-details">
      <h3>Please confirm the reservations details are correct: </h3>
      <ul>
        <li>
          Location:{" "}
          {hotelId == "1"
            ? "Cancun"
            : hotelId == "2"
            ? "Tulum"
            : "Playa del Carmen"}
        </li>
        <li>Check in: {moment(checkIn).format("DD MMMM YYYY")}</li>
        <li>Check out: {moment(checkOut).format("DD MMMM YYYY")}</li>
        <li>Adults: {numGuests}</li>
      </ul>
      <Button onClick={submit}>Confirm and make reservation</Button>
    </Container>
  );
};
