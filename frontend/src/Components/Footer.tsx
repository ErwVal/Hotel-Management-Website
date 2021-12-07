import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <Container className="footer-container">
        <Row>
          <Col>
          342 Las Plazas, Zona Hotelera Cancún, México.
          </Col>
          <Col>
          maya-hotel@maya.com.mx
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
