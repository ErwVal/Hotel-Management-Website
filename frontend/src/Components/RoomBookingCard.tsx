import React from "react";
import { Room } from "../api/apiClient";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { FaWifi, FaSmokingBan, FaBed, FaPoundSign } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import moment from "moment";
import { Link } from "react-router-dom";

interface Props {
  room: Room;
  hotelId: number | string;
  numGuests: number | string;
  checkInDate: string;
  checkOutDate: string;
}

enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}

export const RoomBookingCard: React.FunctionComponent<Props> = (
  props: Props
) => {
  let departure = moment(props.checkOutDate);
  let arrival = moment(props.checkInDate);
  let lengthOfStay = moment.duration(departure.diff(arrival)).asDays();

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
      <div className="div-room-booking-card">
        <Row>
          <h3>
            {roomType[props.room.roomType]} room in {location}
          </h3>
        </Row>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={props.room.images[0]}
                  alt="room"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={props.room.images[1]}
                  alt="room"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={props.room.images[2]}
                  alt="room"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <p>
              The standard room is decorated in a minimalist style that blends
              perfectly with the hotel’s theme and setting, designed in an earth
              tone and furnished with wooden furniture. Room’s amenities are all
              organic products, i.e. soap, shampoo, lotion, and toothbrush, for
              the purpose of environmental protection. The room is equipped with
              a queen-size bed, a digital TV, with a selection of channels on
              Netflix provided for your entertainment, including warm shower, a
              pantry, towels, shampoo and shower gel, a hair dryer, slippers and
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
            {props.room.roomPrice} p/night
          </Col>{" "}
          <Col>
            {" "}
            <FaWifi className="icon-wifi icon" size={30} /> Free Wifi
          </Col>
          <Col>
            <BsFillPersonFill className="icon-bed icon" size={30} /> x
            {props.room.maxGuests}
          </Col>
          <Col>
            <FaBed className="icon-bed icon" size={30} /> x
            {roomType[props.room.roomType] == "Twin" ? "2 beds" : "1 bed"}
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
                  {roomType[props.room.roomType]} room in {location}
                </li>
                <li>Adults x {props.numGuests}</li>
                <li>
                  {lengthOfStay} nights x £{props.room.roomPrice} p/night
                </li>
              </ul>
              <h5>
                {" "}
                Total for stay: £
                {(props.room.roomPrice * lengthOfStay).toFixed(2)}
              </h5>
            </p>
          </Col>
          <Col>
            <Link
              to={`/reservation/create/${props.room.id}/${props.hotelId}/${props.numGuests}/${props.checkInDate}/${props.checkOutDate}/${location}/${props.room.roomPrice}/${lengthOfStay}`}
            >
              <button>Reserve now</button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
