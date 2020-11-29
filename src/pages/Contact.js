import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Resume from '../assets/Resume.pdf';

const Contact = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <h1>Contact Me</h1><hr></hr>
        </Col>
      </Row>
      <br />
      <Row>
        <Button href={Resume} target="blank" className="contactBtn">Resume</Button>
      </Row>
      <br />
      <Row>
        <Button href="https://www.linkedin.com/in/heather-ackerman-a6a869b1/" target="blank" className="contactBtn">LinkedIn</Button>
      </Row>
      <br />
      <Row>
        <Button href={"https://github.com/HeatherAckerman"} target="blank" className="contactBtn">GitHub</Button>
      </Row>
    </Container>
  </div>
);

export default Contact;
