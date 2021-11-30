import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col } from "react-bootstrap";

export const RoomComponent: React.FunctionComponent = () => {

    const[room, setRoom] = useState("");
    const { roomId } = useParams<{ roomId: string }>();

    let id = parseInt(roomId);

    useEffect(() => {
        fetch(
          `https://localhost:5001/rooms/${id}`
        )
          .then((response) => response.json())
          .then((room) => setRoom(room))
          .catch(console.log);
      }, []);

    
    return (
        <Container>
            Room ID: {room.Id}
        </Container>
    )
}