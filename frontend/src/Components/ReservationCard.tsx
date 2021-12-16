import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import moment from "moment";

enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}

interface Props {
  checkIn: string;
  checkOut: string;
  numGuests: string | number;
  maxGuests: string | number;
  roomType: roomType;
  hotelId: string | number;
  images: string[];
}

export const ReservationCard = (props: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.images[0]} />
      <Card.Body>
        <Card.Title>{roomType[props.roomType]} room</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Location:{" "}
          {props.hotelId == 1 ? (
            <>Cancun</>
          ) : props.hotelId == 2 ? (
            <>Tulum</>
          ) : (
            <>Playa del Carmen</>
          )}{" "}
        </ListGroupItem>
        <ListGroupItem>
          Check In: {moment(props.checkIn).format("DD MMMM YYYY")}
        </ListGroupItem>
        <ListGroupItem>
          Check Out: {moment(props.checkOut).format("DD MMMM YYYY")}
        </ListGroupItem>
        <ListGroupItem>
          Adults: {props.numGuests} of {props.maxGuests} max
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Change</Card.Link>
        <Card.Link href="#">Cancel</Card.Link>
      </Card.Body>
    </Card>
  );
};
