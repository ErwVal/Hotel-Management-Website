import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RoomBookingCard } from "./RoomBookingCard";

interface Props {
  userId?: string | number;
  setReservation: (reservation: object) => void;
}

export const RoomComponent: React.FunctionComponent<Props> = ( props: Props) => {
  const [room, setRoom] = useState<any>();
  const { id, hotelId, numGuests, checkInDate, checkOutDate } = useParams<{ id: string, hotelId: string, numGuests: string, checkInDate: string, checkOutDate: string }>();

  useEffect(() => {
    fetch(`http://localhost:8000/rooms/${id}`)
      .then((response) => response.json())
      .then((response) => setRoom(response))
      .catch(console.log);
  }, []);

  return (
    <>
      {!room ? (
        <p>Processing...</p>
      ) : (
        <RoomBookingCard setReservation={props.setReservation} room={room} hotelId={hotelId} numGuests={numGuests} checkInDate={checkInDate} checkOutDate={checkOutDate}/>
      )}
    </>
  );
};
