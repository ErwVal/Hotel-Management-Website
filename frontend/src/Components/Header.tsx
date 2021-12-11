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

export const Header: React.FunctionComponent = () => {
  return (
    <motion.div variants={headerVariants} initial="hidden" animate="visible">
      <Navbar collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/hotel-logo.png"
              width="50rem"
              height="50rem"
              alt="hotel logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/rooms">Rooms</Nav.Link>
              <Nav.Link href="/">Sign Up</Nav.Link>
              <Nav.Link href="/">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};
