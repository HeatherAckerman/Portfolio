import React from "react";
import { Container, Row } from "react-bootstrap";

const Contact = () => (
  <div>
    <Container>
      <Row>
        <h1>Contact Me</h1>
      </Row>
      <Row>
        <h3>Find me on:</h3>
      </Row>
      <Row>
        <a href={"https://www.linkedin.com/in/heather-ackerman-a6a869b1/"} target="blank">LinkedIn</a>
      </Row>
      <Row>
        <a href={"https://github.com/HeatherAckerman"} target="blank">GitHub</a>
      </Row>
      <Row>
        <h3>Email:</h3>
      </Row>
      <Row>
        <p>hla20115213@gmail.com</p>
      </Row>
    </Container>
  </div>
);

export default Contact;
