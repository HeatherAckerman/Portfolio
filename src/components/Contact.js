import React from "react";
import technicalResume from '../assets/technicalResume.pdf';

function Contact() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <a name="contact"><h1>Contact</h1></a><hr></hr>
                    </div>
                </div>
                <br />
                <div class="row justify-content-center">
                    <div class="col">
                        <a href={technicalResume} target="blank"><button className="contactBtn">Resume</button></a>
                    </div>
                </div>
                <br />
                <div class="row justify-content-center">
                    <div class="col">
                        <a href={"https://www.linkedin.com/in/heather-ackerman-a6a869b1/"} target="blank"><button className="contactBtn">LinkedIn</button></a>
                    </div>
                </div>
                <br />
                <div class="row justify-content-center">
                    <div class="col">
                        <a href={"https://github.com/HeatherAckerman"} target="blank"><button className="contactBtn">GitHub</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;