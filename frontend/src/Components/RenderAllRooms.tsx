import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Room } from "../api/apiClient";
import { RoomsCard } from "./RoomsCard";

export const RenderAllRooms: React.FunctionComponent = () => {
  const [roomsList, setRoomsList] = useState<Room[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/rooms")
      .then((response) => response.json())
      .then((data) => setRoomsList(data.rooms));
  }, []);

  return (
    <Container className="div-all-rooms">
      <h3>Showing all rooms</h3>
      {roomsList.length > 0 ? (
        <Row>
          {roomsList.map((room) => (
            <Col>
              <RoomsCard room={room} />
            </Col>
          ))}
        </Row>
      ) : (
        <h3>Loading...</h3>
      )}
    </Container>
  );
};
