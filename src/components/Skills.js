import React from "react";
import skills from "../assets/skills/skills.png";


function Skills() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <a name="skills"><h1>Skills</h1></a><hr />
                    </div>
                </div>
                <img className="skillspic" src={skills} alt={"html"} />
            </div>
            <br />
        </div>
    );
}

export default Skills;