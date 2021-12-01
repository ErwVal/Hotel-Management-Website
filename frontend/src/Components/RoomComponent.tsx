import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export const RoomComponent: React.FunctionComponent = () => {
  const [room, setRoom] = useState<any[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://localhost:5001/rooms/${id}`)
      .then((response) => response.json())
      .then((response) => setRoom([response]))
      .catch(console.log);
  }, []);

  return (
    <>
      {!room ? (
        <p>Processing...</p>
      ) : (
        room.map((r) => <Container>
          <img src={r.images[0]} alt="room"/>
          Room Type: {r.roomType}
          Price per night: {r.roomPrice}
          <Button>Book now</Button>
          </Container>)
      )}
    </>
  );
};
