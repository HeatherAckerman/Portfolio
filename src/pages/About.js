import React from "react";
import Me from '../assets/me.jpg';
import Resume from '../assets/Resume.pdf';
import consolationCats from '../assets/consolationCats.jpg';
import workoutTracker from '../assets/workoutTracker.png';
import weatherChecker from '../assets/weatherChecker.jpg';
import GCC from '../assets/GCC.gif'
import empDir from '../assets/empDir.gif'
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const About = () => (
  <>
    <Container>
      <Row>
        <Col>
          <h1 style={{textAlign: "center"}}>Heather Ackerman</h1>
          <h2>Full Stack Web Developer</h2><hr />
          <br />
        </Col>
      </Row>
    </Container>
    <br />
    <div>
      <Container>
        <Row>
          <Col>
            <a name="about"><h1>About</h1></a><hr />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={Me} className="img" /><br /><br />
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
          <Button href={Resume} target="blank" className="resumeBtn">Check out my resume here</Button>
        </Row>
      </Container>
      <br />
    </div>
    <div>
      <Container>
        <Row>
          <Col>
            <a name="portfolio"><h1>Portfolio</h1></a><hr />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h5>Alms4Grandy</h5>
            <a href={"https://alms4grandy.herokuapp.com/"} target="blank">
              <img src={GCC} className="portfolioImg" alt={"alms4grandy"} />
            </a><br /><br />
            <Button href={"https://github.com/cc22389/alms4grandy"} target="blank" className="btn">Repository</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>xkcDaily</h5>
            <a href={"https://xkcdaily.herokuapp.com/"} target="blank">
              <img src={"https://media.giphy.com/media/YbjNk8ZiEJQ2lwbS4H/giphy.gif"} className="portfolioImg" alt={"xkcDaily"} />
            </a><br /><br />
            <Button href={"https://github.com/LindseyM20/xkcDaily"} target="blank" className="btn">Repository</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Consolation Cat for the Times</h5>
            <a href={"https://kyliemegan24.github.io/Consolation_Cat_News_App/"} target="blank">
              <img src={consolationCats} className="portfolioImg" alt={"Consolation Cat for the Times"} />
            </a><br /><br />
            <Button href={"https://github.com/kyliemegan24/Consolation_Cat_News_App"} target="blank" className="btn">Repository</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Employee Directory</h5>
            <a href={"https://obscure-reaches-91130.herokuapp.com/"} target="blank"><img
              src={empDir} className="portfolioImg" alt={"Weather Checker"} /></a><br /><br />
            <Button href={"https://github.com/HeatherAckerman/Employee_Directory"} target="blank" className="btn">Repository</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Workout Tracker</h5>
            <a href={"https://thawing-crag-27488.herokuapp.com/?id=5fac9423ad27a70017f1a099"} target="blank">
              <img src={workoutTracker} className="portfolioImg" alt={"Workout Tracker"} />
            </a><br /><br />
            <Button href={"https://github.com/HeatherAckerman/Workout_Tracker"} target="blank" className="btn">Repository</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Weather Checker</h5>
            <a href={"https://heatherackerman.github.io/Weather_Dashboard/"} target="blank"><img
              src={weatherChecker} className="portfolioImg" alt={"Weather Checker"} /></a><br /><br />
            <Button href={"https://github.com/HeatherAckerman/Weather_Dashboard"} target="blank" className="btn">Repository</Button>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
    <div>
      <Container>
        <Row>
          <Col>
            <a name="contact"><h1>Contact Heather</h1></a><hr></hr>
          </Col>
        </Row>
        <br />
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
    </div>


  </>
);

export default About;