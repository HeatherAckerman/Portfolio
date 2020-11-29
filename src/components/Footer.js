import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Footer() {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{position: "fixed", width: 100 + "%", bottom: -20, display: "block"}} >
                <Nav className="mr-auto">
                    <Nav.Link></Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Footer;