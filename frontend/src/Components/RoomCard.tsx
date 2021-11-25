import React from "react";
import { Card, Button } from "react-bootstrap";
import { Room } from "../api/apiClient";

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FunctionComponent<RoomCardProps> = (
  props: RoomCardProps
) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.room.images[0]} />
      <Card.Body>
        <Card.Title>Room Type {props.room.roomType}</Card.Title>
        <Card.Text>
          Room Price {props.room.roomPrice}
        </Card.Text>
        <Button variant="primary">See room</Button>
      </Card.Body>
    </Card>
  );
};