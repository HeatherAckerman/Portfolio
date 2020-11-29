import React from "react";
import Me from '../assets/me.jpg';
import Resume from '../assets/Resume.pdf';
import { Container, Row, Col, Image, Button} from "react-bootstrap";

const About = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <h1>About Me</h1><hr></hr><br />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Me} className="img"/><br /><br />
         </Col>
        <Col>
          <p>Hello, <br /> I'm Heather Ackerman. I grew up in East Central Minnesota as the second to youngest,
          with four sisters and a brother. I love animals and enjoy outdoor activities. I have done
          landscaping and irrigation for the past five years. I also owned a small Non-Emergency Medical
          Transportation Company for the past couple of years that I unfortunately had to shut down due to
          the global pandemic. While on the search for a new career, I stumbled across the Full Stack Web Developer
          Bootcamp at the University of Minnesota. I Graduate in December 2020 and will be looking for work
          starting in 2021.
                    </p><br />
        </Col>
      </Row>
      <Row>
      <Button href={Resume} target="blank" className="btn">Check out my resume here</Button>
      </Row>
    </Container>
  </div>
);

export default About;