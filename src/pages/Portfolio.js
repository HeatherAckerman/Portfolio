import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import consolationCats from '../assets/consolationCats.jpg';
import workoutTracker from '../assets/workoutTracker.png';
import weatherChecker from '../assets/weatherChecker.jpg';
import GCC from '../assets/GCC.gif'
import empDir from '../assets/empDir.gif'

const Portfolio = () => (
  <div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <a name="portfolio"><h1>Portfolio</h1></a><hr />
      </div>
    </div>
    <br />
    
    <div class="row justify-content-center">
      <div class="col">
        <h5>Alms4Grandy</h5>
        <a href={"https://alms4grandy.herokuapp.com/"} target="blank">
          <img src={GCC} className="portfolioImg" alt={"alms4grandy"} />
        </a><br /><br />
        <button href={"https://github.com/cc22389/alms4grandy"} target="blank" className="btn">Repository</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <h5>xkcDaily</h5>
        <a href={"https://xkcdaily.herokuapp.com/"} target="blank">
          <img src={"https://media.giphy.com/media/YbjNk8ZiEJQ2lwbS4H/giphy.gif"} className="portfolioImg" alt={"xkcDaily"} />
        </a><br /><br />
        <button href={"https://github.com/LindseyM20/xkcDaily"} target="blank" className="btn">Repository</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <h5>Consolation Cat for the Times</h5>
        <a href={"https://kyliemegan24.github.io/Consolation_Cat_News_App/"} target="blank">
          <img src={consolationCats} className="portfolioImg" alt={"Consolation Cat for the Times"} />
        </a><br /><br />
        <button href={"https://github.com/kyliemegan24/Consolation_Cat_News_App"} target="blank" className="btn">Repository</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <h5>Employee Directory</h5>
        <a href={"https://obscure-reaches-91130.herokuapp.com/"} target="blank"><img
          src={empDir} className="portfolioImg" alt={"Weather Checker"} /></a><br /><br />
        <button href={"https://github.com/HeatherAckerman/Employee_Directory"} target="blank" className="btn">Repository</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <h5>Workout Tracker</h5>
        <a href={"https://thawing-crag-27488.herokuapp.com/?id=5fac9423ad27a70017f1a099"} target="blank">
          <img src={workoutTracker} className="portfolioImg" alt={"Workout Tracker"} />
        </a><br /><br />
        <button href={"https://github.com/HeatherAckerman/Workout_Tracker"} target="blank" className="btn">Repository</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <h5>Weather Checker</h5>
        <a href={"https://heatherackerman.github.io/Weather_Dashboard/"} target="blank"><img
          src={weatherChecker} className="portfolioImg" alt={"Weather Checker"} /></a><br /><br />
        <button href={"https://github.com/HeatherAckerman/Weather_Dashboard"} target="blank" className="btn">Repository</button>
      </div>
    </div>
  </div>
  <br />
</div>
);

export default Portfolio;
