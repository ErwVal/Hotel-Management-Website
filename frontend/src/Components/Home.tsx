import React from "react";
import { Container } from "react-bootstrap";
import CalendarComponent from "./CalendarComponent";


export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <h1>Home page</h1>
      <CalendarComponent/>
    </Container>
  );
};
