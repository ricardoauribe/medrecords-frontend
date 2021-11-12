import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/patients">Patients</Nav.Link>
          <Nav.Link href="/others">Others</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
)

export default NavBar;