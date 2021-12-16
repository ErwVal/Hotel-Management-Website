import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Room } from "../api/apiClient";
import { RoomCard } from "./RoomCard";
import moment from "moment";

interface Props {
  hotelId: number;
  numGuests: number;
  checkInDate: string;
  checkOutDate: string;
}

export const RenderRoomsByQuery: React.FunctionComponent<Props> = (
  props: Props
) => {
  const [roomsListByQuery, setRoomsListByQuery] = useState<Room[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:8000/rooms/search?hotelId=${props.hotelId}&numGuests=${props.numGuests}&checkInDate=${props.checkInDate}&checkOutDate=${props.checkOutDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data from resource.");
        }
        return response.json();
      })
      .then((data) => {
        setRoomsListByQuery(data.rooms)
      setError(null)
    })
      .catch(err => {
        setError(err.message)
      });
  }, [props.hotelId, props.numGuests, props.checkInDate, props.checkOutDate]);

  let location = "";

  if (props.hotelId == 1) {
    location = "Cancun";
  } else if (props.hotelId == 2) {
    location = "Tulum";
  } else if (props.hotelId == 3) {
    location = "Playa del Carmen";
  }

  return (
    <Container className="div-rooms-query">
      {error && <div>{error}</div>}
      {roomsListByQuery.length > 0 ? (
        <div>
          <h3>
            Showing available rooms from{" "}
            {moment(props.checkInDate).format("dddd, MMM D")} to{" "}
            {moment(props.checkOutDate).format("dddd, MMM D")} in {location}.
          </h3>

          <Row>
            {roomsListByQuery.map((room) => (
              <Col>
                <RoomCard
                  room={room}
                  hotelId={props.hotelId}
                  numGuests={props.numGuests}
                  checkInDate={props.checkInDate}
                  checkOutDate={props.checkOutDate}
                />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <div className="div-rooms-query-loading">
          <p>Searching for rooms. Please wait a few seconds. </p>
        </div>
      )}
    </Container>
  );
};
