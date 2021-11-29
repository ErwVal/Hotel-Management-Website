import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Room } from "../api/apiClient";

export const RenderAllRooms: React.FunctionComponent = () => {
  const [roomsList, setRoomsList] = useState<Room[]>([]);
  const [roomsListByQuery, setRoomsListByQuery] = useState<Room[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/rooms")
      .then((response) => response.json())
      .then((data) => setRoomsList(data.rooms));
  }, []);

  // let location: string = "Tulum";
  // let checkInDate: Date = new Date();
  // let checkOutDate: Date = new Date();
  let numGuests = 3;

  useEffect(() => {
    fetch(
      `https://localhost:5001/rooms/by-query?numGuests=${numGuests}`
    )
      .then((response) => response.json())
      .then((data) => setRoomsListByQuery(data.rooms));
  });

  return (
    <>
      <Container>
        <h2>All rooms</h2>
        {roomsList.length > 0 ? (
          <Row>
            {roomsList.map((room) => (
              <Col>
                Room Id: {room.id}; Type: {room.roomType}; Room Available:{" "}
                {room.available}; Room Price: {room.roomPrice}; Room Maximum
                Guests: {room.maxGuests}; Images: {room.images}
                Hotel ID: {room.hotelId}
              </Col>
            ))}
          </Row>
        ) : (
          <p>No rooms available. Please contact the administration.</p>
        )}
      </Container>

      <Container>
        <h2>Rooms by Query</h2>
        {roomsListByQuery.length > 0 ? (
          <Row>
            {roomsListByQuery.map((room) => (
              <Col>
                Room Id: {room.id}; Type: {room.roomType}; Room Available:{" "}
                {room.available}; Room Price: {room.roomPrice}; Room Maximum
                Guests: {room.maxGuests}; Images: {room.images}
                Hotel ID: {room.hotelId}
              </Col>
            ))}
          </Row>
        ) : (
          <p>No filtered rooms available. Please contact the administration.</p>
        )}
      </Container>
    </>
  );
};
