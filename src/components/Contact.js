import React from "react";
import technicalResume from '../assets/technicalResume.pdf';

function Contact() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <a name="contact"><h1>Contact<div>Currently looking for new opportunities</div></h1></a><hr></hr>
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
                        <a href={"https://www.linkedin.com/in/ackermanheather"} target="blank"><button className="contactBtn">LinkedIn</button></a>
                    </div>
                </div>
                <br />
                <div class="row justify-content-center">
                    <div class="col">
                        <a href={"https://github.com/HeatherAckerman"} target="blank"><button className="contactBtn">GitHub</button></a>
                    </div>
                </div>
                <br />
                <div class="row justify-content-center">
                    <div class="col">
                        <a href={"mailto:hla20115213@gmail.com"} target="blank" rel="noopener noreferrer"><button className="contactBtn">Email</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;