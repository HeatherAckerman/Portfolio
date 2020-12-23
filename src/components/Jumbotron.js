import React from "react";
import Me from '../assets/me.jpg';

function Jumbotron() {
    return (
        <div>
            <br /><br /><br /><br />
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="row justify-content-center">
                            <img src={Me} class="me" />
                        </div>
                        <h1 style={{ textAlign: "center" }}>Heather Ackerman</h1><hr />
                        <h2>Full Stack Web Developer</h2>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Jumbotron;