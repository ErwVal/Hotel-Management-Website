import React from "react";
import { Container } from "react-bootstrap";
import { Animation } from "./Animation";
import { RenderAllRooms } from "./RenderAllRooms";

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Animation />
      <RenderAllRooms />
    </Container>
  );
};
