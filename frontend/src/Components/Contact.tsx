import React, { SyntheticEvent, useState } from "react";
import { Row, Col, Form, Container, Button, Alert } from "react-bootstrap";

interface Props {
  firstName: string;
  userId: string;
}

export const Contact: React.FunctionComponent<Props> = (props: Props) => {
  const [alert, setAlert] = useState(false);

  const handleContactForm = (event: SyntheticEvent) => {
    event.preventDefault();

    setAlert(true);
  };

  if (alert) {
    return (
      <Container className="div-contact">
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            Thank you for contacting Dew Breeze Suites. We will be in contact
            with you shortly.
          </p>
          <Alert.Link href="/home">Continue</Alert.Link>.
        </Alert>
      </Container>
    );
  }

  if (props.firstName !== "" && props.firstName !== undefined) {
    return (
      <Container className="div-contact">
        <Row>
          <h3>Contact us {props.firstName}</h3>
        </Row>
        <Row>
          <Col>6 Avenida Las Plazas, Zona Hotelera, Cancun, Mexico </Col>
        </Row>
        <Row>
          <Col>Phone: +52 723-4583-3434</Col>
        </Row>
        <Row>
          <Col>info@dew-breeze.com</Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleContactForm}>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message here"
              />
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="div-contact">
      <Row>
        <h3>Contact us</h3>
      </Row>
      <Row>
        <Col>6 Avenida Las Plazas, Zona Hotelera, Cancun, Mexico </Col>
      </Row>
      <Row>
        <Col>Phone: +52 723-4583-3434</Col>
      </Row>
      <Row>
        <Col>info@dew-breeze.com</Col>
      </Row>
      <Form onSubmit={handleContactForm}>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />

            <Form.Control placeholder="Last name" />

            <Form.Control type="email" placeholder="E-mail" />
          </Col>
          <Col>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your message here"
            />
          </Col>
        </Row>
        <Row>
          {" "}
          <Button>Submit</Button>
        </Row>
      </Form>
    </Container>
  );
};
