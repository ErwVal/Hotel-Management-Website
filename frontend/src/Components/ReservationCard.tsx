import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";

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
  reservationId: string | number;
  roomId: string | number;
}

export const ReservationCard = (props: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Link
        to={`/reservation/change/${props.roomId}/${props.hotelId}/${props.numGuests}/${props.checkIn}/${props.checkOut}/${props.reservationId}/${props.maxGuests}`}
      >
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
      </Link>
    </Card>
  );
};
