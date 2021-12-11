import React, { FormEvent, useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";

export const SignUp: React.FunctionComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Container>
      <h2>Sign up</h2>
      <Form onSubmit={submitForm}>
        <Row>
          <Col>
          <Form.Label>First name</Form.Label>
            <Form.Control
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Col>
          <Col>
          <Form.Label>Last name</Form.Label>
            <Form.Control
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postcode</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree with the terms and conditions."
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
