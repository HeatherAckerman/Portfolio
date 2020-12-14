import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#" style={{fontWeight: "bold"}}>Heather Ackerman</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      <br />
      <br />
      </Navbar>
      <br />
  </>
);

export default Header;