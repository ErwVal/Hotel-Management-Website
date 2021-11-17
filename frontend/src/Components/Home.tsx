import React from "react";
import { Container } from "react-bootstrap";
import { Booking } from "./Booking";
import { CreateBookingForm } from "./CreateBookingForm";

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <CreateBookingForm/>
    </Container>
  )
};
