import React from "react";
import { Card } from "react-bootstrap";
import { Room } from "../api/apiClient";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  room: Room;
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

export const RoomsCard: React.FunctionComponent<Props> = (props: Props) => {
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
      <Link to={`/home`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.room.images[0]} />
          <Card.Body>
            <Card.Title>{roomType[props.room.roomType]} room in</Card.Title>
            <Card.Title>
              {props.room.hotelId == 1
                ? "Cancun"
                : props.room.hotelId == 2
                ? "Tulum"
                : "Playa del Carmen"}
            </Card.Title>
            <Card.Text>{props.room.roomPrice} per night</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </motion.div>
  );
};
