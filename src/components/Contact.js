import React from "react";
import technicalResume from '../assets/technicalResume.pdf';
import LinkedIn from '../assets/linkedIn.png';
import GitHub from '../assets/github.png';
import email from '../assets/email.jpg'

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
                <a href={"https://github.com/HeatherAckerman"} target="blank" ><img src={GitHub} className="contactBtn" /></a>
                <a href={"https://www.linkedin.com/in/ackermanheather"} target="blank"><img src={LinkedIn} className="contactBtn" /></a>
                <a href={"mailto:hla20115213@gmail.com"} target="blank" rel="noopener noreferrer"><img src={email} className="contactBtn"/></a>
            </div>
        </div>
    );
}

export default Contact;