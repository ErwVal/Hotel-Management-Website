import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { RoomCard } from "./RoomCard";
import { fetchRoomsListByQuery, Room } from "../api/apiClient";

interface RoomsListPageProps {
  location: string;
  checkInDate: Date;
  checkOutDate: Date;
  numGuests: string; // Note we expect a string rather than a number here contrary to the fetchRoomsListByQuery function below.
}

export const RoomsListPage: React.FunctionComponent<RoomsListPageProps> = (
  props: RoomsListPageProps
) => {
  const [roomsList, setRoomsList] = useState<Room[]>([]);

  useEffect(() => {
    fetchRoomsListByQuery(
      props.location,
      new Date(props.checkInDate),
      new Date(props.checkOutDate),
      parseInt(props.numGuests)
    )
      .then((response) => {
        setRoomsList(response.room);
      })
      .catch(console.log);
  }, []);

  return (
    <Container>
      {roomsList.length > 0 ? (
        <Row>
          {roomsList.map((room) => (
            <RoomCard room={room} />
          ))}
        </Row>
      ) : (
        <p>No rooms available. Please contact the administration.</p>
      )}
    </Container>
  );
};
