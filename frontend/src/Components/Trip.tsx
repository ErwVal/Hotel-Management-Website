import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReservationCard } from "./ReservationCard";

interface Props {
  firstName: string;
  userId: string;
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
    <Container className="div-reservation-card">
      {userReservations ? (
        <>
          <Row>
            <h3>Hi {props.firstName}</h3>
          </Row>
          <>
            {userReservations.reservations.length > 0 ? (
              <>
                <h4>
                  You have the following {userReservations.reservations.length} reservations:
                </h4>
                <Row>
                  {userReservations.reservations.map((r) => (
                    <Col>
                      <ReservationCard
                        checkIn={r.checkIn}
                        checkOut={r.checkOut}
                        numGuests={r.numGuests}
                        maxGuests={r.bookedRooms[0].maxGuests}
                        roomType={r.bookedRooms[0].roomType}
                        hotelId={r.hotelId}
                        images={r.bookedRooms[0].images}
                      />
                    </Col>
                  ))}
                </Row>
              </>
            ) : (
              <h3>You do not have any reservation. </h3>
            )}
          </>{" "}
        </>
      ) : (
        <div className="div-trip">
          <h1>Loading...</h1>
        </div>
      )}
    </Container>
  );
};

export default Trip;
