import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Header: React.FunctionComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}