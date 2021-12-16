import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: {
    opacity: 0,
    y: "-100vw",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

interface Props {
  firstName: string;
  setFirstName: (firstName: string) => void;
  userId: string;
  setUserId: (firstName: string) => void;
}

export const Header: React.FunctionComponent<Props> = (props: Props) => {
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setFirstName("");
    props.setUserId("");
  };

  let menu;

  if (props.firstName) {
    menu = (
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Navbar expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/hotel-logo.png"
                width="50rem"
                height="50rem"
                alt="hotel logo"
              />{" "}
              Dew Breeze Suites
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/home/rooms">Rooms</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/trip">Trip</Nav.Link>
                <Nav.Link href="/login" onClick={logout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    );
  } else {
    menu = (
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Navbar expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/hotel-logo.png"
                width="50rem"
                height="50rem"
                alt="hotel logo"
              />{" "}
              Dew Breeze Suites
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/home/rooms">Rooms</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    );
  }

  return menu;
};
