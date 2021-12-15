import React, { FormEvent, SyntheticEvent, useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { NewUser, registerUser } from "../api/apiClient";

export const Register: React.FunctionComponent = () => {
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
    return <Redirect to="/login" />;
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
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Button type="submit">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};
