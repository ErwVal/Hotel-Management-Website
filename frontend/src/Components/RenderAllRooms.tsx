import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Room } from "../api/apiClient";
import moment from "moment";

export const RenderAllRooms: React.FunctionComponent = () => {
  const [roomsList, setRoomsList] = useState<Room[]>([]);
  const [roomsListByQuery, setRoomsListByQuery] = useState<Room[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/rooms")
      .then((response) => response.json())
      .then((data) => setRoomsList(data.rooms));
  }, []);

  let hotelId = 3;
  let numGuests = 2;
  let checkInDate = moment(new Date("2021-12-25")).format("YYYY-MM-DD");
  let checkOutDate = moment(new Date("2021-12-31")).format("YYYY-MM-DD");
 
  //https://localhost:5001/rooms/search?hotelId=3&numGuests=2&checkInDate=2021-12-25&checkOutDate=2021-12-31

  useEffect(() => {
    fetch(
      `https://localhost:5001/rooms/search?hotelId=${hotelId}&numGuests=${numGuests}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
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
                Guests: {room.maxGuests}; 
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
                Guests: {room.maxGuests};
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
