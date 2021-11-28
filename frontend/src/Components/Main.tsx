import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BookingForm } from "./BookingForm";
import { Animation } from "./Animation";
import { RoomsListPage } from "./RoomsListPage";
import moment from "moment";
import { RenderAllRooms } from "./RenderAllRooms";

export const Main: React.FunctionComponent = () => {

  return (
    <Container>
      <Animation />
        <RenderAllRooms/>
    </Container>
  );
};
