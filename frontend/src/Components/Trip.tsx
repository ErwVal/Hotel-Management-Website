import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

interface Props {
  firstName: string;
  userId: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  reservations: any[];
}

const Trip: React.FunctionComponent<Props> = (props: Props) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:8000/users/${props.userId}`
      );

      if (!response.ok) {
        throw Error("Could not fetch data from resource.");
      }
      const content = await response.json();
      setUser(content);
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
      {user ? (
        <div className="div-trip">
          <Row>
            <Col>
              <h3>
                Hi {user.firstName} {user.lastName}
              </h3>
            </Col>
          </Row>
          <Row>
            {user.reservations.length > 0 ? (
              <>
                <h4>You have {user.reservations.length} reservations.</h4>
                {user.reservations.map((r) => (
                  <ul>
                    <li>Check In: {moment(r.checkIn).format("dddd, MMM D")}</li>
                    <li>Check Out: {moment(r.checkOut).format("dddd, MMM D")}</li>
                    <li>Adults: {r.numGuests}</li>
                    {/* <li> Room {r.roomId} </li> */}
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
