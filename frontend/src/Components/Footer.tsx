import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Video by Mylo Kaye from Pexels
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
