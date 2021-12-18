import React, { useState, useEffect, SyntheticEvent } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import { deleteReservation, updateDates } from "../api/apiClient";

interface Props {
  userId: string;
}

enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}
export const ChangeReservationForm: React.FunctionComponent<Props> = (
  props: Props
) => {
  const history = useHistory();
  const today = moment(new Date()).format("YYYY-MM-DD");

  const { roomId, hotelId, numGuests, checkIn, checkOut, reservationId } =
    useParams<{
      roomId: string;
      hotelId: string;
      numGuests: string;
      checkIn: string;
      checkOut: string;
      reservationId: string;
    }>();

  const [checkInState, setCheckInState] = useState(checkIn);
  const [checkOutState, setCheckOutState] = useState(checkOut);
  const [numGuestsState, setNumGuestsState] = useState(numGuests);

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("Form activated");
  };

  return (
    <Container className="div-change-reservation">
      {props.userId !== "" || props.userId !== undefined ? (
        <>
          <h3>Change reservation</h3>
          <Form onSubmit={submitForm}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Adults:
              </Form.Label>
              <Col>
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={numGuests.toString()}
                />

                <Form.Select
                  className="sm"
                  onChange={(e) => setNumGuestsState(e.target.value)}
                  required
                >
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>8</option>
                </Form.Select>
              </Col>
              <Button>Change the number of adults</Button>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Arrival
              </Form.Label>
              <Col>
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={moment(checkIn).format("DD MMMM YYYY")}
                />
                <label>Check in</label> <br />
                <input
                  name="CheckIn"
                  type="date"
                  min={today}
                  value={checkInState}
                  onChange={(event) => setCheckInState(event.target.value)}
                  required
                />
              </Col>
              <Form.Label column sm="2">
                Departure
              </Form.Label>
              <Col>
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={moment(checkOut).format("DD MMMM YYYY")}
                />
                <label>Check out</label> <br />
                <input
                  name="CheckOut"
                  type="date"
                  min={moment(checkInState).add(1, "days").format("YYYY-MM-DD")}
                  value={checkOutState}
                  onChange={(event) => setCheckOutState(event.target.value)}
                  required
                />
              </Col>
              <Button
                onClick={() => {
                  updateDates(parseInt(reservationId), {
                    checkIn: checkInState,
                    checkOut: checkOutState,
                  });
                  return history.push("/trip");
                }}
              >
                Change dates
              </Button>
            </Form.Group>
            <Row>
              <Button
                className="cancel"
                onClick={() => {
                  deleteReservation(parseInt(reservationId));
                  return (
                    <>
                      {" "}
                      <Alert variant="success">
                        <Alert.Heading>Success</Alert.Heading>
                        <p>
                          Your reservation for {numGuests} from{" "}
                          {moment(checkIn).format("DD MMMM YYYY")} to{" "}
                          {moment(checkOut).format("DD MMMM YYYY")} has been
                          successfully deleted.
                        </p>
                      </Alert>
                      {history.push("/trip")}
                    </>
                  );
                }}
              >
                Cancel reservation
              </Button>
            </Row>
          </Form>
        </>
      ) : (
        <>
          <h3>Unauthorized</h3>
          {history.push("/home")}
        </>
      )}
    </Container>
  );
};
