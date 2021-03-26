import React from "react";
import technicalResume from '../assets/technicalResume.pdf';
import LinkedIn from '../assets/linkedIn.png';
import GitHub from '../assets/github.png';
import email from '../assets/email.jpg';
import ContactForm from "../contact/index";
import resume from '../assets/resume.jpg';

function Contact() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <a name="contact">
                            <h1>Contact</h1>
                            <hr/>
                            <h2>Want to collaborate on a project? Have feedback? Know of an employment opportunity? I’d love to hear from you! I can be reached using the form or one of the links below.</h2>
                            <hr/>
                        </a>
                    </div>
                </div>
                <ContactForm />
                <hr/>
                <div class="row justify-content-center">
                    <div class="col">
                        <a href={"https://github.com/HeatherAckerman"} target="blank" ><img src={GitHub} className="contactBtn" /><br />GitHub</a>
                    </div>
                    <div class="col">
                        <a href={technicalResume} target="blank"><img src={resume} className="contactBtn" /><br />Resume</a>
                    </div>
                    <div class="col">
                        <a href={"https://www.linkedin.com/in/ackermanheather"} target="blank"><img src={LinkedIn} className="contactBtn" /><br />LinkedIn</a>
                    </div>
                    <div class="col">
                        <a href={"mailto:hla20115213@gmail.com"} target="blank" rel="noopener noreferrer"><img src={email} className="contactBtn" /><br />Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;