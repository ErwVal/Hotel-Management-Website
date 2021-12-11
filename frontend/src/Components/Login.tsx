import React, { FormEvent } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

export const Login: React.FunctionComponent = () => {
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    // API call or authentication
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Col>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Form>
    </Container>
  );
};
