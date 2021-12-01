import React from "react";
import { Room } from "../api/apiClient";
import { Container, Carousel, Row, Col } from "react-bootstrap";

interface Props {
  room: Room;
}

enum roomType {
    Single,
    Double,
    Twin,
    Suite,
  }

export const RoomBookingCard: React.FunctionComponent<Props> = (
  props: Props
) => {
  return (
    <Container fluid>
      <h2>{roomType[props.room.roomType]} room for stay in LOCATION</h2>
      <Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.room.images[0]}
              alt="room"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.room.images[1]}
              alt="room"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.room.images[2]}
              alt="room"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        {" "}
        <Col> Price per night: {props.room.roomPrice}. </Col>{" "}
        <Col> Accommodates up to {props.room.maxGuests} guests.</Col>
      </Row>
    </Container>
  );
};
