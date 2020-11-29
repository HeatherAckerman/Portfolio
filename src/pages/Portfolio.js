import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import consolationCats from '../assets/consolationCats.jpg';
import workoutTracker from '../assets/workoutTracker.png';
import weatherChecker from '../assets/weatherChecker.jpg';

const Portfolio = () => (
  <div>
    <Container>
      <Row>
        <Col>
        <h1>Portfolio</h1><hr></hr><br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>xkcDaily</h5>
          <a href={"https://xkcdaily.herokuapp.com/"} target="blank">
            <img src={"https://media.giphy.com/media/YbjNk8ZiEJQ2lwbS4H/giphy.gif"} className="img-fluid" alt={"xkcDaily"} />
          </a>
          <a href={"https://https://github.com/LindseyM20/xkcDaily"} target="blank"><p></p>Repository</a>
        </Col>
        <Col>
          <h5>Consolation Cat for the Times</h5>
          <a href={"https://kyliemegan24.github.io/Consolation_Cat_News_App/"} target="blank">
            <img src={consolationCats} className="img-fluid" alt={"Consolation Cat for the Times"} />
          </a>
          <a href={"https://github.com/kyliemegan24/Consolation_Cat_News_App"} target="blank"><p></p>Repository</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Workout Tracker</h5>
          <a href={"https://thawing-crag-27488.herokuapp.com/?id=5fac9423ad27a70017f1a099"} target="blank">
            <img src={workoutTracker} className="img-fluid" alt={"Workout Tracker"} />
          </a>
          <a href={"https://https://github.com/HeatherAckerman/Workout_Tracker"} target="blank"><p></p>Repository</a>
        </Col>
        <Col>
          <h5>Weather Checker</h5>
          <a href={"https://heatherackerman.github.io/Weather_Dashboard/"} target="blank"><img
            src={weatherChecker} className="img-fluid" alt={"Weather Checker"} /></a>
          <a href={"https://github.com/HeatherAckerman/Weather_Dashboard"} target="blank"><p></p>Repository</a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Portfolio;
