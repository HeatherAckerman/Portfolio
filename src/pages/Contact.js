import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <h1>Contact Me</h1><hr></hr>
        </Col>
      </Row>
      <Row>
        <h5>Find me on:</h5>
      </Row>
      <Row>
        <Button href="https://www.linkedin.com/in/heather-ackerman-a6a869b1/" target="blank" className="contactBtn">LinkedIn</Button>
      </Row>
      <br />
      <Row>
        <Button href={"https://github.com/HeatherAckerman"} target="blank" className="contactBtn">GitHub</Button>
      </Row>
      <br />
      <Row>
        <h5>Email:</h5>
      </Row>
      <Row>
        <p>hla20115213@gmail.com</p>
      </Row>
    </Container>
  </div>
);

export default Contact;
