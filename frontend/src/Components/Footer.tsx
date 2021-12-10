import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className="div-footer">
      <Row className="row-footer">
        <Col>
          {" "}
          <h3>Hotel</h3>
          342 Las Plazas, Zona Hotelera.
          <br />
          Phone: +52 723-4583-3434
          <br />
          hotel-hotel@hotel.com
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <FaTwitter className="icon-light" size={30} />

          <FaInstagram className="icon-light" size={30} />

          <FaFacebook className="icon-light" size={30} />
        </Col>
      </Row>
    </div>
  );
};
