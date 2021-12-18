import React, { useState, SyntheticEvent } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import { deleteReservation, updateDates, updateGuests } from "../api/apiClient";

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
  const [updateDatesAlert, setUpdateDatesAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [updateGuestsAlert, setUpdateGuestsAlert] = useState(false);
  const [maxGuestsAlert, setMaxGuestsAlert] = useState(false);

  const {
    roomId,
    hotelId,
    numGuests,
    checkIn,
    checkOut,
    reservationId,
    maxGuests,
  } = useParams<{
    roomId: string;
    hotelId: string;
    numGuests: string;
    checkIn: string;
    checkOut: string;
    reservationId: string;
    maxGuests: string;
  }>();

  const [checkInState, setCheckInState] = useState(checkIn);
  const [checkOutState, setCheckOutState] = useState(checkOut);
  const [numGuestsState, setNumGuestsState] = useState(numGuests);

  const handleMaxGuests = () => {
    if (numGuestsState <= maxGuests) {
      updateGuests(parseInt(reservationId), {
        numGuests: parseInt(numGuestsState),
      });
      setUpdateGuestsAlert(true);
    } else {
      setMaxGuestsAlert(true);
    }
  };

  if (updateGuestsAlert) {
    return (
      <Container className="div-change-reservation">
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            You have successfully updated the number of adults for your
            reservation to {numGuestsState}.
          </p>
          <Alert.Link href="/trip">Continue</Alert.Link>.
        </Alert>
      </Container>
    );
  }

  if (maxGuestsAlert) {
    return (
      <Container className="div-change-reservation">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>
            Your selection ({numGuestsState}) exceeds the room's maximum number
            of guests ({maxGuests}).
          </p>
          <p>Please select a valid option.</p>
          <Alert.Link href="/trip">Continue</Alert.Link>.
        </Alert>
      </Container>
    );
  }

  if (updateDatesAlert) {
    return (
      <Container className="div-change-reservation">
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            Your arrival date has been changed from{" "}
            {moment(checkIn).format("DD MMMM YYYY")} to{" "}
            {moment(checkInState).format("DD MMMM YYYY")}.
          </p>
          <p>
            Your departure date has been changed from{" "}
            {moment(checkOut).format("DD MMMM YYYY")} to{" "}
            {moment(checkOutState).format("DD MMMM YYYY")}.
          </p>
          <Alert.Link href="/trip">Continue</Alert.Link>.
        </Alert>
      </Container>
    );
  }

  if (deleteAlert) {
    return (
      <Container className="div-change-reservation">
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>Your reservation has been deleted.</p>
          <Alert.Link href="/trip">Continue</Alert.Link>.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="div-change-reservation">
      {props.userId !== "" || props.userId !== undefined ? (
        <>
          <h3>Change reservation</h3>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Adults {maxGuests} max:
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
              <Button onClick={handleMaxGuests}>
                Change the number of adults
              </Button>
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
                  setUpdateDatesAlert(true);
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
                  setDeleteAlert(true);
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
