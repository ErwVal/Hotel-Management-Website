import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Props {
  firstName: string;
  userId: string;
}

const Trip: React.FunctionComponent<Props> = (props: Props) => {

    let display;

    if(props.firstName){
        display = (    <Container>
            <Row>
              <Col>
                <h1>Hi {props.firstName}</h1>
              </Col>
              <Col>
                <h3>This is your id: {props.userId}</h3>
              </Col>
            </Row>
          </Container>)
    } else {
        display = (<h1>Please login or register.</h1> )
    }

  return display;
};

export default Trip;
