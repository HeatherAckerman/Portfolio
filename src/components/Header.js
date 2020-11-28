import React from "react";
import { Nav, Navbar} from "react-bootstrap";

const Header = () => (
<>
<Navbar bg="dark" variant="dark">
<Navbar.Brand>Heather Ackerman</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="index.html">About</Nav.Link>
  <Nav.Link href="portfolio.html">Portfolio</Nav.Link>
  <Nav.Link href="contact.html">Contact</Nav.Link>
</Nav>
</Navbar>
</>
);

export default Header;