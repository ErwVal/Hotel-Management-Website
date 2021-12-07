import React from "react";
import { Container } from "react-bootstrap";
// import { Animation } from "./Animation";
// import { RenderAllRooms } from "./RenderAllRooms";
// import { Footer } from "./Footer";
import { BookingForm } from "./BookingForm";

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      {/* <Animation /> */}
      <BookingForm />
      {/* <Footer /> */}
    </Container>
  );
};
