import React from "react";
import { Container } from "react-bootstrap";
import { CreateBookingForm } from "./CreateBookingForm";
import { Animation } from "./Animation";

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Animation/>
      <CreateBookingForm/>
    </Container>
  )
};
