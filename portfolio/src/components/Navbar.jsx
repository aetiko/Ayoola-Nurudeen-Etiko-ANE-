import React from "react";
import "../styles/components/navbar.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../Images/Logos/6.png";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

function NavBar() {
  return (
    <>
      <Navbar key="lg" expand="lg" className="bg-body-tertiary mb-3"bg="primary">
        <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                width="150"
                height="auto"
                alt="Nurudeen Logo "
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                NURUDEEN
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">HOMEPAGE</Nav.Link>
                <Nav.Link href="#monuments">MONUMENTS</Nav.Link>
                <Nav.Link href="#projects">PROJECTS</Nav.Link>
                <Nav.Link href="#hobbies">HOBBIES</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
                <Nav.Link href="#contact">SHOP</Nav.Link>
                <Nav.Link href="#contact">NURUDEEN</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
