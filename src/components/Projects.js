import React from "react";
import consolationCats from '../assets/consolationCats.jpg';
import workoutTracker from '../assets/workoutTracker.png';
import weatherChecker from '../assets/weatherChecker.jpg';
import GCC from '../assets/GCC.gif'
import empDir from '../assets/empDir.gif'

function Projects() {
    return (
        <div>
            <div class="container">
            <div class="col">
                            <a name="projects"><h1>Projects</h1></a><hr />
                            <br />
                        </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <h5>Alms4Grandy</h5>
                            <a href={"https://alms4grandy.herokuapp.com/"} target="blank">
                                <img style={{ alignSelf: 'center' }} src={GCC} className="portfolioImg" alt="Alms4Grandy" /></a><br /><br />
                            <p>MERN stack react app designed for the Grandy Community Center.
                            Worked in a team of 3 to create this clean and intuitive website for our final project.
                            Tools used: HTML, CSS, JavaScript, MongoDB Atlas, Express, React, Node, Bootstrap, GitHub
                            </p><br />
                            <a href={"https://github.com/cc22389/alms4grandy"} target="blank"><button className="btn">Repository</button></a>
                        </div>

                        <div className="carousel-item">
                            <h5>xkcDaily</h5>
                            <a href={"https://xkcdaily.herokuapp.com/"} target="blank">
                                <img style={{ alignSelf: 'center' }} src={"https://media.giphy.com/media/YbjNk8ZiEJQ2lwbS4H/giphy.gif"} className="portfolioImg" alt="xkcDaily" /></a><br /><br />
                            <p>Schedule some laughter in your day by using this calendar app that’ll display and save xkcd comics.
                            Worked in a group of 4 primarily in the back-end using pair programming to set up passport and sequelize models. We then worked as a team to connect the front and back end.
                            Tools used: HTML, CSS, JavaScript, My SQL, Express, Node, Passport, jQuery, API calls
                        </p><br />
                            <a href={"https://github.com/LindseyM20/xkcDaily"} target="blank"><button className="btn">Repository</button></a>
                        </div>

                        <div className="carousel-item">
                            <h5>Consolation Cat for the Times</h5>
                            <a href={"https://kyliemegan24.github.io/Consolation_Cat_News_App/"} target="blank">
                                <img style={{ alignSelf: 'center' }} src={consolationCats} className="portfolioImg" alt="Consolation Cat for the Times" /></a><br /><br />
                            <p>Enjoy the New York Times with a delightful twist that's sure to bring a smile.
                            Worked in a team of 3 to create this mobile first clean, fun, front-end application.
                            Tools used: HTML, CSS, JavaScript, jQuery, API calls, GitHub
                        </p><br />
                            <a href={"https://github.com/kyliemegan24/Consolation_Cat_News_App"} target="blank"><button className="btn">Repository</button></a>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Projects;