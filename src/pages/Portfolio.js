import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import consolationCats from '../assets/consolationCats.jpg';
import workoutTracker from '../assets/workoutTracker.png';
import weatherChecker from '../assets/weatherChecker.jpg';
import GCC from '../assets/GCC.gif'
import empDir from '../assets/empDir.gif'

const Portfolio = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <Container>
            <h1>Portfolio</h1><hr></hr>
          </Container>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Container>
            <h5>Alms4Grandy</h5>
            <a href={"https://alms4grandy.herokuapp.com/"} target="blank">
              <img src={GCC} className="portfolioImg" alt={"alms4grandy"} />
            </a><br /><br />
            <Button href={"https://github.com/cc22389/alms4grandy"} target="blank" className="btn">Repository</Button>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <h5>xkcDaily</h5>
            <a href={"https://xkcdaily.herokuapp.com/"} target="blank">
              <img src={"https://media.giphy.com/media/YbjNk8ZiEJQ2lwbS4H/giphy.gif"} className="portfolioImg" alt={"xkcDaily"} />
            </a><br /><br />
            <Button href={"https://github.com/LindseyM20/xkcDaily"} target="blank" className="btn">Repository</Button>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <h5>Consolation Cat for the Times</h5>
            <a href={"https://kyliemegan24.github.io/Consolation_Cat_News_App/"} target="blank">
              <img src={consolationCats} className="portfolioImg" alt={"Consolation Cat for the Times"} />
            </a><br /><br />
            <Button href={"https://github.com/kyliemegan24/Consolation_Cat_News_App"} target="blank" className="btn">Repository</Button>
          </Container>
        </Col>
      </Row>
        <Row>
        <Col>
          <Container>
            <h5>Employee Directory</h5>
            <a href={"https://obscure-reaches-91130.herokuapp.com/"} target="blank"><img
              src={empDir} className="portfolioImg" alt={"Weather Checker"} /></a><br /><br />
            <Button href={"https://github.com/HeatherAckerman/Employee_Directory"} target="blank" className="btn">Repository</Button>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <h5>Workout Tracker</h5>
            <a href={"https://thawing-crag-27488.herokuapp.com/?id=5fac9423ad27a70017f1a099"} target="blank">
              <img src={workoutTracker} className="portfolioImg" alt={"Workout Tracker"} />
            </a><br /><br />
            <Button href={"https://github.com/HeatherAckerman/Workout_Tracker"} target="blank" className="btn">Repository</Button>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <h5>Weather Checker</h5>
            <a href={"https://heatherackerman.github.io/Weather_Dashboard/"} target="blank"><img
              src={weatherChecker} className="portfolioImg" alt={"Weather Checker"} /></a><br /><br />
            <Button href={"https://github.com/HeatherAckerman/Weather_Dashboard"} target="blank" className="btn">Repository</Button>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Portfolio;
