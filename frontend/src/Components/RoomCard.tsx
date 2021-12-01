import React from "react";
import { Card, Button } from "react-bootstrap";
import { Room } from "../api/apiClient";
import { Link } from "react-router-dom";

interface Props {
  room: Room;
  hotelId: number;
  numGuests: number;
  checkInDate: string;
  checkOutDate: string;
}

export const RoomCard: React.FunctionComponent<Props> = (
  props: Props
) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.room.images[0]} />
      <Card.Body>
        <Card.Title>Room Type {props.room.roomType}</Card.Title>
        <Card.Text>
          Room Price {props.room.roomPrice}
        </Card.Text>
        <Link to={`/rooms/${props.room.id}`}>See room</Link>
      </Card.Body>
    </Card>
  );
};
