import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import StickyHeader from 'react-sticky-header';

const Header = () => (
  <>
  <StickyHeader>
    <Navbar variant="dark" style={{backgroundColor: " rgb(0,60,82)", position: "fixed", width: 100 + "%", top: 0, display: "block", padding: 10, zIndex: 2}}>
      <Nav class="row justify-content-center">
        <Nav.Link href="#about" style={{color: "white"}}>ABOUT</Nav.Link><div style={{color: "white"}}>|</div>
        <Nav.Link href="#projects" style={{color: "white"}}>PROJECTS</Nav.Link><div style={{color: "white"}}>|</div>
        <Nav.Link href="#skills" style={{color: "white"}}>SKILLS</Nav.Link><div style={{color: "white"}}>|</div>
        <Nav.Link href="#contact" style={{color: "white"}}>CONTACT</Nav.Link>
      </Nav>
      </Navbar>
      </StickyHeader>
  </>
);

export default Header;