import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RoomBookingCard } from "./RoomBookingCard";

export const RoomComponent: React.FunctionComponent = () => {
  const [room, setRoom] = useState<any>();
  const { id, hotelId, numGuests, checkInDate, checkOutDate } = useParams<{ id: string, hotelId: string, numGuests: string, checkInDate: string, checkOutDate: string }>();

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
        <RoomBookingCard room={room} hotelId={hotelId} numGuests={numGuests} checkInDate={checkInDate} checkOutDate={checkOutDate}/>
      )}
    </>
  );
};
