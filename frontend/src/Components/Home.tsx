import React from "react";
import { Container } from "react-bootstrap";
import { BookingForm } from "./BookingForm";

export const Home: React.FunctionComponent = () => {
  return (
    <Container className="landing-page">
      <BookingForm />
    </Container>
  );
};
