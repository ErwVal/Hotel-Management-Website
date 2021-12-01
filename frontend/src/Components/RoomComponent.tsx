import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RoomBookingCard } from "./RoomBookingCard";

export const RoomComponent: React.FunctionComponent = () => {
  const [room, setRoom] = useState<any>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://localhost:5001/rooms/${id}`)
      .then((response) => response.json())
      .then((response) => setRoom(response))
      .catch(console.log);
  }, []);

  return (
    <>
      {!room ? (
        <p>Processing...</p>
      ) : (
        <RoomBookingCard room={room}/>
      )}
    </>
  );
};
