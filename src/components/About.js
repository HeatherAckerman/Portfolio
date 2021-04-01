import React from "react";
import Buster from '../assets/Buster.jpg';
import Emma from '../assets/Emma.jpeg';
import Jack from '../assets/Jack.jpeg';
import Tabby from '../assets/Tabby.jpg';
import technicalResume from '../assets/technicalResume.pdf';

function About() {
    return (
        <div>
            <div class="container">
                <div>
                    <div class="col">
                        <a name="about"><h1>About</h1></a><hr />
                        <br />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <img src={Buster} class="pets" />
                    <img src={Emma} class="pets" />
                    <img src={Jack} class="pets" />
                    <img src={Tabby} class="pets" />
                </div><br />
                <div class="row">
                    <p className="aboutP">Hello, <br /> I'm Heather Ackerman and my favorite things are animals, traveling, and outdoor activities. I have done landscaping and irrigation for the past five years. I also owned and ran a small Non-Emergency Medical Transportation Company for the past couple of years until the pandemic hit. While on the search for a new career, I came across the Full Stack Web Developer Bootcamp at the University of Minnesota College of Continuing and Professional Studies (CCAPS) and felt it was the perfect fit. I Graduated in December 2020. I am currently taking classes at the University of Minnesota CCAPS towards a Leadership Essentials Certificate while searching for new software development opportunities and learning new skills through Udemy, Trailhead, and good old trial and error. Check out my resume below and see the contact section to send me a message. 
          <br /><br /> <a href={technicalResume} target="blank"><button className="resumeBtn">Check out my resume here!</button></a>
                    </p>
                </div>
            </div>
            <br />
        </div>
    );
}

export default About;