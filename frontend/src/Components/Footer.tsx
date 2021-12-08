import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export const Footer: React.FunctionComponent = () => {
  return (
      <div className="div-footer">
        <Row className="row-footer">
          <Col className="col-footer">
          <h3>Maya Hotel contact</h3>
          <br/>
          342 Las Plazas, Zona Hotelera Cancún, México.
          <br/>
          Phone: +52 723-4583-3434
          </Col>
          <Col className="col-footer">
          <br/>
          maya-hotel@maya.com.mx
          <br/>
          </Col>
        </Row>
      </div>
  );
};
