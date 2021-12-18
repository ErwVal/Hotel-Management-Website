import React, { SyntheticEvent, useState } from "react";
import { Row, Col, Form, Container, Button, Alert } from "react-bootstrap";
import { createContactQuery } from "../api/apiClient";
import { Redirect } from "react-router-dom";

interface Props {
  firstName?: string;
  userId?: string;
}

export const ContactNoLogin: React.FunctionComponent<Props> = (
  props: Props
) => {
  const [alert, setAlert] = useState(false);
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [messageState, setMessageState] = useState("");

  const handleContactForm = (event: SyntheticEvent) => {
    event.preventDefault();

    createContactQuery({
      firstName: firstNameState,
      lastName: lastNameState,
      email: emailState,
      message: messageState,
    });

    setAlert(true);
  };

  if (alert) {
    return (
      <Container className="div-contact">
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            Thank you for your message. We will be in contact with you shortly.
          </p>
          <Alert.Link href="/home">Continue</Alert.Link>.
        </Alert>
      </Container>
    );
  }

  if (props.firstName) {
    return <Redirect to="/contact" />;
  }

  return (
    <Container className="div-contact">
      <Row>
        <h3>Contact us</h3>
      </Row>
      <br />
      <br />
      <Form onSubmit={handleContactForm}>
        <Row>
          <Col>
            <Form.Control
              placeholder="First name"
              onChange={(e) => setFirstNameState(e.target.value)}
              required
            />

            <Form.Control
              placeholder="Last name"
              onChange={(e) => setLastNameState(e.target.value)}
              required
            />

            <Form.Control
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmailState(e.target.value)}
              required
            />
          </Col>
          <Col>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your message here"
              onChange={(e) => setMessageState(e.target.value)}
              required
            />
          </Col>
        </Row>
        <br />
        <Row>
          {" "}
          <Button type="submit">Submit</Button>
        </Row>
      </Form>
    </Container>
  );
};
