import React from "react";
import Me from '../../assets/me.jpg';
import Resume from '../../assets/Resume.pdf';

const Home = () => (
  <div className="border">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <img id="imgStyle" src={Me} />
          <div className="col-lg-7">
            <p>Hello, I'm Heather Ackerman. I grew up in East Central Minnesota as the second to youngest,
            with four sisters and a brother. I love animals and enjoy outdoor activities. I have done
            landscaping and irrigation for the past five years. I also owned a small Non-Emergency Medical
            Transportation Company for the past couple of years that I unfortunately had to shut down due to
            the global pandemic. While on the search for a new career, I stumbled across the Full Stack Web Developer
            Bootcamp at the University of Minnesota. I Graduate in December 2020 and will be looking for work
            starting in 2021.
                    </p>
            <p>Check out my resume <a href={Resume} target="blank">here</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;