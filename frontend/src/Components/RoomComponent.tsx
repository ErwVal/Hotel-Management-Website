import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { RoomBookingCard } from "./RoomBookingCard";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FaWifi, FaSmokingBan, FaBed, FaPoundSign } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import moment from "moment";
import { Reservation } from "../App";

enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}

interface Props {
  userId?: string;
}

export const RoomComponent = (props: Props) => {
  const [room, setRoom] = useState<any>();
  const { id, hotelId, numGuests, checkInDate, checkOutDate } = useParams<{
    id: string;
    hotelId: string;
    numGuests: string;
    checkInDate: string;
    checkOutDate: string;
  }>();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8000/rooms/${id}`)
      .then((response) => response.json())
      .then((response) => setRoom(response))
      .catch(console.log);
  }, []);

  let departure = moment(checkOutDate);
  let arrival = moment(checkInDate);
  let lengthOfStay = moment.duration(departure.diff(arrival)).asDays();

  let location = "";

  if (hotelId === "1") {
    location = "Cancun";
  } else if (hotelId === "2") {
    location = "Tulum";
  } else if (hotelId === "3") {
    location = "Playa del Carmen";
  }

  const submit = () => {
    let checkIn = new Date(checkInDate);
    let checkOut = new Date(checkOutDate);

    if (props.userId !== "") {
      history.push(
        `/reservation/create/${room.id}/${hotelId}/${numGuests}/${checkIn}/${checkOut}`
      );
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      {!room ? (
        <p>Processing...</p>
      ) : (
        <Container>
          <div className="div-room-booking-card">
            <Row>
              <h3>
                {roomType[room.roomType]} room in {location}
              </h3>
            </Row>
            <Row>
              <Col>
                <Carousel>
                  <Carousel.Item>
                    <img className="d-block" src={room.images[0]} alt="room" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block" src={room.images[1]} alt="room" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block" src={room.images[2]} alt="room" />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col>
                <p>
                  The standard room is decorated in a minimalist style that
                  blends perfectly with the hotel’s theme and setting, designed
                  in an earth tone and furnished with wooden furniture. Room’s
                  amenities are all organic products, i.e. soap, shampoo,
                  lotion, and toothbrush, for the purpose of environmental
                  protection. The room is equipped with a queen-size bed, a
                  digital TV, with a selection of channels on Netflix provided
                  for your entertainment, including warm shower, a pantry,
                  towels, shampoo and shower gel, a hair dryer, slippers and
                  bathrobes.
                </p>
              </Col>
            </Row>

            <br />
            <br />
            <Row>
              <Col>
                {" "}
                <FaPoundSign className="icon-wifi icon" size={30} />
                {room.roomPrice} p/night
              </Col>{" "}
              <Col>
                {" "}
                <FaWifi className="icon-wifi icon" size={30} /> Free Wifi
              </Col>
              <Col>
                <BsFillPersonFill className="icon-bed icon" size={30} /> x
                {room.maxGuests}
              </Col>
              <Col>
                <FaBed className="icon-bed icon" size={30} /> x
                {roomType[room.roomType] == "Twin" ? "2 beds" : "1 bed"}
              </Col>
              <Col>
                <FaSmokingBan className="icon-bed icon" size={30} /> No-smoking
              </Col>
            </Row>

            <br />
            <br />

            <Row>
              <Col>
                <p className="p-room-price">
                  <h4>Reservation details:</h4> <br />
                  <ul>
                    <li>
                      {roomType[room.roomType]} room in {location}
                    </li>
                    <li>Adults x {numGuests}</li>
                    <li>
                      {lengthOfStay} nights x £{room.roomPrice} p/night
                    </li>
                  </ul>
                  <h5>
                    {" "}
                    Total for stay: £
                    {(room.roomPrice * lengthOfStay).toFixed(2)}
                  </h5>
                </p>
              </Col>
              <button onClick={submit}>Reserve now</button>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};
