import React, { SyntheticEvent, useState, useEffect } from "react";
import { Row, Col, Form, Container, Button, Alert } from "react-bootstrap";
import { createContactQuery } from "../api/apiClient";
import { Link } from "react-router-dom";

interface Props {
  firstName: string;
  userId: string;
}

export const Contact: React.FunctionComponent<Props> = (props: Props) => {
  const [alert, setAlert] = useState(false);
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [messageState, setMessageState] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${props.userId}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data from resource.");
        }
        return response.json();
      })
      .then((content) => {
        setFirstNameState(content.firstName);
        setLastNameState(content.lastName);
        setEmailState(content.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

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

  if (!props.firstName) {
    return (
      <Container className="div-contact">
        <h4>
          Please use <Link to="/contact/without-login">this form</Link> to
          contact Dew Breeze Suites.{" "}
        </h4>
      </Container>
    );
  }
  return (
    <Container className="div-contact">
      <Row>
        <h3>Contact us {props.firstName}</h3>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col>
          <Form onSubmit={handleContactForm}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your message here"
              onChange={(e) => setMessageState(e.target.value)}
              required
            />
            <br/>
            <Row>
              {" "}
              <Button type="submit">Submit</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
