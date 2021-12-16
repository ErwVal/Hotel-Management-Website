import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

interface Props {
  firstName: string;
  userId: string;
}


enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}

interface Reservations {
  reservations: any[];
}

const Trip: React.FunctionComponent<Props> = (props: Props) => {

  const [userReservations, setUserReservations] = useState<Reservations>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:8000/reservations/${props.userId}`
      );

      if (!response.ok) {
        throw Error("Could not fetch data from resource.");
      }
      const content = await response.json();
      setUserReservations(content);
    })();
  }, [props.userId]);

  if (!props.firstName) {
    return (
      <div className="div-trip">
        <p>
          You must <Link to="/login">login</Link> to see your reservations.{" "}
        </p>
      </div>
    );
  }
  return (
    <Container>
      {userReservations ? (
        <div className="div-trip">
          <Row>
            <Col>
              <h3>
                Hi {props.firstName}
              </h3>
            </Col>
          </Row>
          <Row>
            {userReservations.reservations.length > 0 ? (
              <>
                <h4>You have {userReservations.reservations.length} reservations.</h4>
                {userReservations.reservations.map((r) => (
                  <ul>
                    <li>Check In: {moment(r.checkIn).format("DD MMMM YYYY")}</li>
                    <li>
                      Check Out: {moment(r.checkOut).format("DD MMMM YYYY")}
                    </li>
                    <li>Adults: {r.numGuests} of max {r.bookedRooms[0].maxGuests}</li>
                    <li>Room type: {roomType[r.bookedRooms[0].roomType]} </li>
                    <li>
                      Location:{" "}
                      {r.bookedRooms[0].hotelId == 1 ? (
                        <>Cancun</>
                      ) : r.bookedRooms[0].hotelId == 2 ? (
                        <>Tulum</>
                      ) : (
                        <>Playa del Carmen</>
                      )}{" "}
                    </li>
                  </ul>
                ))}
              </>
            ) : (
              <h3>You do not have any reservation. </h3>
            )}
          </Row>{" "}
        </div>
      ) : (
        <div className="div-trip">
          <h1>Loading...</h1>
        </div>
      )}
    </Container>
  );
};

export default Trip;
