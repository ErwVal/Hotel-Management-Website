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
    <motion.div
    variants={headerVariants}
    initial="hidden"
    animate="visible">
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      collapseOnSelect
      className="apply-font"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/MAYA.png"
            width="100rem"
            height="100rem"
            className="d-inline-block align-top"
            alt="Maya hotel logo"
          />{" "}
          Maya Hotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </motion.div>
  );
};
