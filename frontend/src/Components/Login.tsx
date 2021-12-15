import React, { FormEvent, SyntheticEvent, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { LoginUser, loginUser } from "../api/apiClient";
import { Redirect } from "react-router-dom";

interface Props {
  setFirstName: (firstName: string) => void;
  setUserId: (firstName: string) => void;
}

export const Login: React.FunctionComponent<Props> = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleLogin = async (event: SyntheticEvent) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const content = await response.json();
    setRedirect(true);
    props.setFirstName(content.firstName);
    props.setUserId(content.id);
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <div className="div-login">
        <h3>Login</h3>
        <Form onSubmit={handleLogin}>
          <Col>
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
            <Button type="submit">Log in</Button>
          </Col>
        </Form>
      </div>
    </Container>
  );
};
