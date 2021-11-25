import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const infiniteList: React.FunctionComponent = () => {
  return (
    // Not the best way of doing it
    <Container>
      <Row>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
};
