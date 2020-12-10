import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Resume from '../assets/Resume.pdf';

const Contact = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <Container>
            <h1>Contact Me</h1><hr></hr>
          </Container>
        </Col>
      </Row>
      <br />
      <Container>
        <Row>
          <Col>
            <Button href={Resume} target="blank" className="contactBtn">Resume</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button href="https://www.linkedin.com/in/heather-ackerman-a6a869b1/" target="blank" className="contactBtn">LinkedIn</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button href={"https://github.com/HeatherAckerman"} target="blank" className="contactBtn">GitHub</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
);

export default Contact;
