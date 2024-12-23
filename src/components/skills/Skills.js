import React from "react";
import "./Skill.scss"
import Frontend from "./Frontend";
import Backend from "./Backend";
export default function Skills(){
    return(
        <section className="skills section" id="skill">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtile">My technical level</span>

            <div className="skills-container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    ) 
}