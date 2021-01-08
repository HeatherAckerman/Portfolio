import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Footer() {
    return (
        <>
            <br /><br /><br /><br />
            <Navbar style={{ position: "fixed", width: 100 + "%", bottom: -20, display: "block", padding: 20, backgroundColor: " rgb(0,60,82)", zIndex: 1 }} >
                <Nav className="mr-auto">
                    <Nav.Link></Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Footer;