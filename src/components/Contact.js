import React from "react";
import technicalResume from '../assets/technicalResume.pdf';
import LinkedIn from '../assets/linkedIn.png';
import GitHub from '../assets/github.png';
import email from '../assets/email.jpg'
import ContactForm from "../contact/index";

function Contact() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <a name="contact"><h1>Contact<div>If you have feedback, advice, or would like to collaborate on a project please reach out, I would love to hear from you. </div></h1></a><hr></hr>
                    </div>
                </div>
                <br />
                <div class="row justify-content-center">
                    <div class="col">
                        <a href={"https://github.com/HeatherAckerman"} target="blank" ><img src={GitHub} className="contactBtn" /><br />GitHub</a>
                    </div>
                    <div class="col">
                        <a href={"https://www.linkedin.com/in/ackermanheather"} target="blank"><img src={LinkedIn} className="contactBtn" /><br />LinkedIn</a>
                    </div>
                    <div class="col">
                        <a href={"mailto:hla20115213@gmail.com"} target="blank" rel="noopener noreferrer"><img src={email} className="contactBtn" /><br />Email</a>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;