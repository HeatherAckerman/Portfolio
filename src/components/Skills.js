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
import js from "../assets/skills/js.jpg";


function Skills() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <a name="contact"><h1>Skills</h1></a><hr></hr>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col">
                        <img class="skillpic" src={html} alt={"html"} />
                        <img class="skillpic" src={css} alt={"css"} />
                        <img class="skillpic" src={js} alt={"js"} />
                        <img class="skillpic" src={git} alt={"git"} />
                        <img class="skillpic" src={github} alt={"github"} />
                        <img class="skillpic" src={vscode} alt={"vscode"} />
                        <img class="skillpic" src={bootstrap} alt={"bootstrap"} />
                        <img class="skillpic" src={jquery} alt={"jquery"} />
                        <img class="skillpic" src={node} alt={"node"} />
                        <img class="skillpic" src={heroku} alt={"heroku"} />
                        <img class="skillpic" src={mysql} alt={"mysql"} />
                        <img class="skillpic" src={mongo} alt={"mongo"} />
                        <img class="skillpic" src={userauthentication} alt={"userauthentication"} />
                        <img class="skillpic" src={webpack} alt={"webpack"} />
                        <img class="skillpic" src={react} alt={"react"} />
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Skills;