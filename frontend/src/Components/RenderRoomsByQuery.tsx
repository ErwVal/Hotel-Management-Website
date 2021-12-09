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

  useEffect(() => {
    fetch(
      `https://localhost:5001/rooms/search?hotelId=${props.hotelId}&numGuests=${props.numGuests}&checkInDate=${props.checkInDate}&checkOutDate=${props.checkOutDate}`
    )
      .then((response) => response.json())
      .then((data) => setRoomsListByQuery(data.rooms));
  }, [props.hotelId, props.numGuests, props.checkInDate, props.checkOutDate]);

  let location = "";

  if (props.hotelId == 1) {
    location = "Cancun";
  } else if (props.hotelId == 2) {
    location = "Tulum";
  } else if (props.hotelId == 3){
    location = "Playa del Carmen";
  }

  return (
    <Container>
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
