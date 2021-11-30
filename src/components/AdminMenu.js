import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AdminMenu = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" size="sm">
      <Container>
        <Nav>
          <Nav.Link href="/createPatient">New Patient</Nav.Link>
          <Nav.Link href="/createAppointment">New Appointment</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default AdminMenu;