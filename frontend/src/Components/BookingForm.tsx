import React, { FormEvent, useState } from "react";
import {
  Alert,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  Container,
  Carousel,
} from "react-bootstrap";
import { RenderRoomsByQuery } from "./RenderRoomsByQuery";
import moment from "moment";
import { motion } from "framer-motion";

const formVariants = {
  hidden: {
    opacity: 0,
    x: "200vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";

export const BookingForm: React.FunctionComponent = () => {
  const [renderRoomsList, setRenderRoomsList] = useState(false);
  const [location, setLocation] = useState(99);
  const [checkInDateState, setCheckInDate] = useState("");
  const [checkOutDateState, setCheckOutDate] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("READY");
  const [numGuestsState, setNumGuests] = useState("");

  const today = moment(new Date()).format("YYYY-MM-DD");

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    setRenderRoomsList(true);
  };

  const handleLocation = (location: string) => {
    if (location === "Cancun") {
      setLocation(1);
    } else if (location === "Tulum") {
      setLocation(2);
    } else if (location === "Playa del Carmen") {
      setLocation(3);
    } else {
      console.log("Error");
    }
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="div-landing-page"
    >
      {!renderRoomsList ? (
        <Row className="div-landing-page-row">
          <Col>
            <div className="form-container">
              {/* <video id="background-video" autoPlay loop muted>
            <source src="/video-resort.mp4" type="video/mp4" />
          </video> */}
              <h4>Check room availability</h4>
              <Form onSubmit={submitForm}>
                <Col className="g-4">
                  <Row className="form-row">
                    <label>Location</label> <br />
                    <Form.Select
                      className="sm"
                      onChange={(e) => handleLocation(e.target.value)}
                      required
                    >
                      <option>Select</option>
                      <option>Cancun</option>
                      <option>Tulum</option>
                      <option>Playa del Carmen</option>
                    </Form.Select>
                  </Row>
                  <Row className="form-row">
                    <label>Check in</label> <br />
                    <input
                      name="CheckInDate"
                      type="date"
                      min={today}
                      value={checkInDateState}
                      onChange={(event) => setCheckInDate(event.target.value)}
                      required
                    />
                  </Row>
                  <Row className="form-row">
                    <label>Check out</label> <br />
                    <input
                      name="CheckOutDate"
                      type="date"
                      min={moment(checkInDateState)
                        .add(1, "days")
                        .format("YYYY-MM-DD")}
                      value={checkOutDateState}
                      onChange={(event) => setCheckOutDate(event.target.value)}
                      required
                    />
                  </Row>
                  <Row className="form-row">
                    <label>Adult</label> <br />
                    <Form.Select
                      className="sm"
                      onChange={(e) => setNumGuests(e.target.value)}
                      required
                    >
                      <option>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>8</option>
                    </Form.Select>
                  </Row>

                  <Row>
                    <button
                      className="btn btn-light form-button"
                      disabled={formStatus === "SUBMITTING"}
                      type="submit"
                    >
                      Search
                    </button>
                  </Row>
                </Col>
                <br />
                {formStatus === "ERROR" && (
                  <Alert variant="warning">
                    Something went wrong! Please try again.
                  </Alert>
                )}
              </Form>
            </div>
          </Col>
          {/* <Col>
            <div className="div-carousel">
              <h1>Welcome</h1>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-sm-block w-100"
                    src="landing-page-img.jpg"
                    alt="Enjoy a warm winter in the Riviera Maya"
                  />
                  <Carousel.Caption>
                    <h3>Enjoy a warm winter in the Riviera</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-sm-block w-100"
                    src="pool-img.jpg"
                    alt="Step into Summer 2022 now!"
                  />
                  <Carousel.Caption>
                    <h3>Step into Summer 2022 now!</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col> */}
        </Row>
      ) : (
        <RenderRoomsByQuery
          hotelId={location}
          numGuests={parseInt(numGuestsState)}
          checkInDate={checkInDateState}
          checkOutDate={checkOutDateState}
        />
      )}
    </motion.div>
  );
};
