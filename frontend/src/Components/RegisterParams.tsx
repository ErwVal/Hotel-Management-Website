import React, { SyntheticEvent, useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { registerUser } from "../api/apiClient";

export const RegisterParams: React.FunctionComponent = () => {
  const history = useHistory();

  const { roomId, hotelId, numGuests, checkIn, checkOut } = useParams<{
    roomId: string;
    hotelId: string;
    numGuests: string;
    checkIn: string;
    checkOut: string;
  }>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    registerUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    setRedirect(true);
  };

  if (redirect) {
    history.push(
      `/login/${roomId}/${hotelId}/${numGuests}/${checkIn}/${checkOut}`
    );
  }

  return (
    <Container>
      <div className="div-login">
        <h3>Register</h3>
        <Form onSubmit={submitForm}>
          <Row>
            <Col>
              <Form.Control
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Button type="submit">Register</Button>
        </Form>
      </div>
    </Container>
  );
};
