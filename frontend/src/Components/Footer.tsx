import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className="div-footer">
      <Row className="row-footer">
        <Col>
          {" "}
          <h3>Dew Breeze Suites</h3>
          6 Avenida Las Plazas, Zona Hotelera, Cancun, Mexico
          <br />
          Phone: +52 723-4583-3434
          <br />
          info@dew-breeze.com
        </Col>
      </Row>
      <br />
      <Row className="row-footer">
        <Col>
          <FaTwitter className="icon-light" size={30} />

          <FaInstagram className="icon-light" size={30} />

          <FaFacebook className="icon-light" size={30} />
        </Col>
      </Row>
    </div>
  );
};
