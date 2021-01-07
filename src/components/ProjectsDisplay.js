import React from "react";
import consolationCats from '../assets/consolationCats.jpg';
import workoutTracker from '../assets/workoutTracker.png';
import weatherChecker from '../assets/weatherChecker.jpg';
import GCC from '../assets/GCC.gif'
import empDir from '../assets/empDir.gif'
import Projects from '../projects.json'

function ProjectsDisplay() {
    return (
        <div>
            <div class="container">
                <div class="col">
                    <h1 name="projects"><h1>Projects</h1></h1><hr />
                    <br />
                </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        {Projects.map((project, i) => {
                            if (i === 0) {
                                return (
                                    <>

                                        <div className="carousel-item active">
                                            <h5>{project.title}</h5>
                                            <a href={project.seeMore} target="blank">
                                                <img style={{ alignSelf: 'center' }} src={project.image} className="portfolioImg" alt={project.title} /></a><br /><br />
                                            <p className="pDescription">{project.description}
                                            </p><br />
                                            <a href={project.seeMore} target="blank"><button className="btn">See More</button></a><br /><br />
                                            <a href={project.repository} target="blank"><button className="btn">Repository</button></a>
                                        </div>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <div className="carousel-item">
                                        <h5>{project.title}</h5>
                                            <a href={project.seeMore} target="blank">
                                                <img style={{ alignSelf: 'center' }} src={project.image} className="portfolioImg" alt={project.title} /></a><br /><br />
                                            <p className="pDescription">{project.description}
                                            </p><br />
                                            <a href={project.seeMore} target="blank"><button className="btn">See More</button></a><br /><br />
                                            <a href={project.repository} target="blank"><button className="btn">Repository</button></a>
                                        </div>

                                    </>
                                )

                            }
                        })}


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

export default ProjectsDisplay;