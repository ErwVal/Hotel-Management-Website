import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Room } from "../api/apiClient";
import { RoomCard } from "./RoomCard";

interface Props {
    hotelId: number;
    numGuests: number;
    checkInDate: string;
    checkOutDate: string;
}

export const RenderRoomsByQuery: React.FunctionComponent<Props> = ( props: Props ) => {
  const [roomsListByQuery, setRoomsListByQuery] = useState<Room[]>([]);

  useEffect(() => {
    fetch(
      `https://localhost:5001/rooms/search?hotelId=${props.hotelId}&numGuests=${props.numGuests}&checkInDate=${props.checkInDate}&checkOutDate=${props.checkOutDate}`
    )
      .then((response) => response.json())
      .then((data) => setRoomsListByQuery(data.rooms));
  }, [props.hotelId, props.numGuests, props.checkInDate, props.checkOutDate]);

  return (
      <Container>
        <h2>Rooms by Query</h2>
        {roomsListByQuery.length > 0 ? (
          <Row>
            {roomsListByQuery.map((room) => (
              <Col>
              <RoomCard room={room} hotelId={props.hotelId} numGuests={props.numGuests} checkInDate={props.checkInDate} checkOutDate={props.checkOutDate}/>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No filtered rooms available. Please contact the administration.</p>
        )}
      </Container>
  );
};
