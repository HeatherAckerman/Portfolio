import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <>
    <Navbar variant="dark" style={{backgroundColor: " rgb(0,60,82)"}}>
      <Nav className="mr-auto">
        <Nav.Link href="#" style={{fontWeight: "bold", color: "white"}}>Heather Ackerman</Nav.Link>
        <Nav.Link href="#about" style={{color: "white"}}>About</Nav.Link>
        <Nav.Link href="#projects" style={{color: "white"}}>Projects</Nav.Link>
        <Nav.Link href="#contact" style={{color: "white"}}>Contact</Nav.Link>
      </Nav>
      <br />
      <br />
      </Navbar>
      <br />
  </>
);

export default Header;