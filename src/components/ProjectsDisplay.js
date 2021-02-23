import React from "react";
import { Card, Button } from "react-bootstrap";
import Projects from '../projects.json'

function ProjectsDisplay() {
    return (
        <div>
            <div class="container">
                <div class="col">
                    <a name="projects"><h1>Projects</h1></a><hr />
                    <br />
                </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        {Projects.map((project, i) => {
                            if (i === 0) {
                                return (
                                    <>
                                        <div className="carousel-item active">
                                            <Card style={{ maxWidth: '75%', margin: '0 auto' }}>
                                                <a href={project.seeMore} target="blank">
                                                    <Card.Img variant="top" style={{ alignSelf: 'center' }} src={project.image} alt={project.title} /></a>
                                                <Card.Body>
                                                    <Card.Title className="cardTitle">{project.title}</Card.Title>
                                                    <Card.Text className="pDescription">{project.description}<br />{project.tools}
                                                    </Card.Text>
                                                    <a href={project.seeMore} target="blank"><Button className="btn">See More</Button></a><br/>
                                                    <a href={project.repository} target="blank"><Button className="btn">Repository</Button></a>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <div className="carousel-item">
                                            <Card style={{ maxWidth: '75%', margin: '0 auto' }}>
                                                <a href={project.seeMore} target="blank">
                                                    <Card.Img variant="top" style={{ alignSelf: 'center' }} src={project.image} alt={project.title} /></a>
                                                <Card.Body>
                                                    <Card.Title className="cardTitle">{project.title}</Card.Title>
                                                    <Card.Text className="pDescription">{project.description}<br />{project.tools}
                                                    </Card.Text>
                                                    <a href={project.seeMore} target="blank"><Button className="btn">See More</Button></a><br/>
                                                    <a href={project.repository} target="blank"><Button className="btn">Repository</Button></a>
                                                </Card.Body>
                                            </Card>
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