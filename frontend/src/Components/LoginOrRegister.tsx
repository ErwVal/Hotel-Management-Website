import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

export const LoginOrRegister: React.FunctionComponent = () => {
  const history = useHistory();

  const { roomId, hotelId, numGuests, checkIn, checkOut } = useParams<{
    roomId: string;
    hotelId: string;
    numGuests: string;
    checkIn: string;
    checkOut: string;
  }>();

  return (
    <Container className="div-login-register">
      <Row>
        <h3>Are you already registered with Dew Breeze Suites?</h3>
      </Row>

      <Row>
        <Col>
          <Button
            onClick={() => {
              history.push(
                `/login/${roomId}/${hotelId}/${numGuests}/${checkIn}/${checkOut}`
              );
            }}
          >
            Yes, I already have an account.
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              history.push(
                `/register/${roomId}/${hotelId}/${numGuests}/${checkIn}/${checkOut}`
              );
            }}
          >
            I don't have an account and I want to register.
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
