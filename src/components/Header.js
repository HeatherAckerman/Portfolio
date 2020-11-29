import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="index.html" style={{fontWeight: "bold"}}>Heather Ackerman</Nav.Link>
        <Nav.Link href="index.html">About</Nav.Link>
        <Nav.Link href="portfolio.html">Portfolio</Nav.Link>
        <Nav.Link href="contact.html">Contact</Nav.Link>
      </Nav>
      <br />
      <br />
      </Navbar>
      <br />
  </>
);

export default Header;