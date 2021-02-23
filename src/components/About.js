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
                    <p className="aboutP">Hello, <br /> I'm Heather Ackerman. I grew up in East Central Minnesota as the second to youngest, with four sisters and a brother. I love animals and enjoy outdoor activities. I have done landscaping and irrigation for the past five years. I also owned a small Non-Emergency Medical Transportation Company for the past couple of years that I unfortunately had to shut down due to the global pandemic. While on the search for a new career, I stumbled across the Full Stack Web Developer Bootcamp at the University of Minnesota. I Graduated in December 2020. I am now taking classes at the University of Minnesota for a Leadership Essentials Certificate while learning new skills through Udemy and good old trial and error. I am always open to new opportunities. Check out my resume below and see the contact section to send me a message. 
          <br /><br /> <a href={technicalResume} target="blank"><button className="resumeBtn">Check out my resume here!</button></a>
                    </p>
                </div>
            </div>
            <br />
        </div>
    );
}

export default About;