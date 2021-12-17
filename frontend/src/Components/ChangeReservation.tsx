import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";

interface Props {
  userId: string;
}

enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}

export const ChangeReservation: React.FunctionComponent<Props> = (
  props: Props
) => {
  const history = useHistory();

  const { roomId, hotelId, numGuests, checkIn, checkOut } = useParams<{
    roomId: string;
    hotelId: string;
    numGuests: string;
    checkIn: string;
    checkOut: string;
  }>();

  return (
    <Container className="div-change-reservation">
      <h3>Change reservation</h3>
      <Row>
        <Col>Room type: </Col>{" "}
        <Col className="col-right">
          <Button>Change</Button>
        </Col>
      </Row>
      <Row>
        <Col>Location: {hotelId}</Col>{" "}
        <Col className="col-right">
          <Button>Change</Button>
        </Col>
      </Row>
      <Row>
        <Col >Number of adults{numGuests}</Col>{" "}
        <Col className="col-right">
          <Button>Change</Button>
        </Col>
      </Row>
      <Row>
        <Col>Arrival {moment(checkIn).format("DD MMMM YYYY")}</Col>{" "}
        <Col className="col-right">
          <Button>Change</Button>
        </Col>
      </Row>
      <Row>
        <Col>Departure{moment(checkOut).format("DD MMMM YYYY")}</Col>{" "}
        <Col className="col-right">
          <Button>Change</Button>
        </Col>
      </Row>
      <br/>
      <Row>
          <Col>Cancel this reservation</Col>
        <Col className="col-right">
          <Button className="cancel">Cancel</Button>
        </Col>
      </Row>
    </Container>
  );
};
