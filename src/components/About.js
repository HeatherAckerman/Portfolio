import React from "react";
import Me from '../assets/me.jpg';
import technicalResume from '../assets/technicalResume.pdf';

function About() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <h1 style={{ textAlign: "center" }}>Heather Ackerman</h1><hr />
                        <h2>Full Stack Web Developer</h2>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <div class="container">
                    <div>
                        <div class="col">
                            <a name="about"><h1>About</h1></a><hr />
                            <br />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <img src={Me} class="me" /><br /><br />
                        </div>
                        <div class="col-9">
                            <p style={{ textAlign: "justify" }}>Hello, <br /> I'm Heather Ackerman. I grew up in East Central Minnesota as the second to youngest,
          with four sisters and a brother. I love animals and enjoy outdoor activities. I have done
          landscaping and irrigation for the past five years. I also owned a small Non-Emergency Medical
          Transportation Company for the past couple of years that I unfortunately had to shut down due to
          the global pandemic. While on the search for a new career, I stumbled across the Full Stack Web Developer
          Bootcamp at the University of Minnesota. I Graduate in December 2020 and will be looking for work
          starting in 2021.
                    </p><br />
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <a href={technicalResume} target="blank"><button className="resumeBtn">Check out my resume here!</button></a>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default About;