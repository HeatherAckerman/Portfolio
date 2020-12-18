import React from "react";
import bootstrap from "../assets/skills/bootstrap.jpg";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import heroku from "../assets/skills/heroku.jpg";
import jquery from "../assets/skills/jquery.png";
import mysql from "../assets/skills/mysql.png";
import userauthentication from "../assets/skills/userauthentication.jpg";
import vscode from "../assets/skills/vscode.jpg";
import webpack from "../assets/skills/webpack.jpg";
import mongo from "../assets/skills/mongo.png";
import react from "../assets/skills/react.jpg";
import node from "../assets/skills/node.png";
import html from "../assets/skills/html.jpg";
import css from "../assets/skills/css.jpg";
import skills from "../assets/skills/skills.png";


function Skills() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <a name="skills"><h1>Skills</h1></a><hr/>
                    </div>
                </div>
                        <img className="skillspic" src={skills} alt={"html"} />
            </div>
            <br />
        </div>
    );
}

export default Skills;