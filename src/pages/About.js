import React from "react";
import Me from '../assets/me.jpg';
import Resume from '../assets/Resume.pdf';
import { Container, Row, Col } from "react-bootstrap";

const About = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img id="imgStyle" src={Me} />
        </Col>
        <Col>
          <p>Hello, I'm Heather Ackerman. I grew up in East Central Minnesota as the second to youngest,
          with four sisters and a brother. I love animals and enjoy outdoor activities. I have done
          landscaping and irrigation for the past five years. I also owned a small Non-Emergency Medical
          Transportation Company for the past couple of years that I unfortunately had to shut down due to
          the global pandemic. While on the search for a new career, I stumbled across the Full Stack Web Developer
          Bootcamp at the University of Minnesota. I Graduate in December 2020 and will be looking for work
          starting in 2021.
                    </p>
          <p>Check out my resume <a href={Resume} target="blank">here</a>.</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;