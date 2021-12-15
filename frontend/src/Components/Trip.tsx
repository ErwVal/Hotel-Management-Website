import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/users/${props.userId}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data from resource.");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        console.log("DATA: ", data);
        console.log("USER: ", user);
        console.log("DATA.ID: ", data.id);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [user, props.userId]);

  if (!props.firstName) {
    return <div className="div-trip">
      <p>You must <Link to="/login">login</Link> to see your reservations. </p>
    </div>;
  }
  return (
    <Container>
      {error && <div className="div-trip">Error: {error}</div>}

      {user ? (
        <div className="div-trip">
          <Row>
            <Col>
              <h1>
                Hi {user.firstName} {user.lastName}
              </h1>
            </Col>
            <Col>
              <h3>
                This is your id: {user.id} = {props.userId}
              </h3>
            </Col>
          </Row>
          <Row>
            <h2>Your reservations</h2>
            {user.reservations.length > 0 ? (
              user.reservations.map((reservation) => (
                <ul>
                  <li>{reservation.CheckIn}</li>
                  <li>{reservation.CheckOut}</li>
                </ul>
              ))
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
