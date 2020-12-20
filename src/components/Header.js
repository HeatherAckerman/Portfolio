import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import StickyHeader from 'react-sticky-header';

const Header = () => (
  <>
  <StickyHeader>
    <Navbar variant="dark" style={{backgroundColor: " rgb(0,60,82)", position: "fixed", width: 100 + "%", top: 0, display: "block", padding: 10, zIndex: 2}}>
      <Nav className="mr-auto">
        <Nav.Link href="#about" style={{color: "white"}}>About</Nav.Link>
        <Nav.Link href="#projects" style={{color: "white"}}>Projects</Nav.Link>
        <Nav.Link href="#skills" style={{color: "white"}}>Skills</Nav.Link>
        <Nav.Link href="#contact" style={{color: "white"}}>Contact</Nav.Link>
      </Nav>
      </Navbar>
      </StickyHeader>
  </>
);

export default Header;