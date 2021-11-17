import React from "react";
import { Container } from "react-bootstrap";
import { BookingForm } from "./BookingForm";
import { Animation } from "./Animation";

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Animation/>
      <BookingForm/>
    </Container>
  )
};
