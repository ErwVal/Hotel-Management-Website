import React from "react";
import { Card, Button } from "react-bootstrap";
import { Room } from "../api/apiClient";
import { Link } from "react-router-dom";
import moment from "moment";
import { motion } from "framer-motion";

interface Props {
  room: Room;
  hotelId: number;
  numGuests: number;
  checkInDate: string;
  checkOutDate: string;
}

enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}

const cardVariants = {
  hidden: {
    opacity: 0,
    x: "200vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

export const RoomCard: React.FunctionComponent<Props> = (props: Props) => {
  let departure = moment(props.checkOutDate);
  let arrival = moment(props.checkInDate);

  let lengthOfStay = moment.duration(departure.diff(arrival)).asDays();

  return (
 
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.1,
          originX: 0,
          textShadow: "0px 0px 8px rbg(255,255,255)",
          boxShadow: "0px 0px 8px rbg(255,255,255)",
        }}
        className="div-room-card"
      >
           <Link
      to={`/rooms/${props.room.id}/${props.hotelId}/${props.numGuests}/${props.checkInDate}/${props.checkOutDate}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.room.images[0]} />
          <Card.Body>
            <Card.Title>{roomType[props.room.roomType]} room</Card.Title>
            <Card.Text>
              {props.room.roomPrice} x {lengthOfStay} nights
              <br />
              Total stay: {(props.room.roomPrice * lengthOfStay).toFixed(2)}
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </motion.div>
    
  );
};
