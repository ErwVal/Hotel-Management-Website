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

export const Trip: React.FunctionComponent<Props> = (props: Props) => {
  const [userReservations, setUserReservations] = useState<Reservations>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:8000/api/reservations/user/${props.userId}`
      );
      const content = await response.json();
      setUserReservations(content);
    })();
  }, []);

  if (!props.firstName) {
    return (
      <Container className="div-login">
        <h4>
          You must <Link to="/login">login</Link> to see your reservations.{" "}
        </h4>
      </Container>
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
                {userReservations.reservations.length > 1 ? (
                  <h4>
                    You have the following{" "}
                    {userReservations.reservations.length} reservations:
                  </h4>
                ) : (
                  <h4>You have the following reservation:</h4>
                )}

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
                        reservationId={r.id}
                        roomId={r.bookedRooms[0].id}
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
