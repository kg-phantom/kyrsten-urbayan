import React from "react";
import projects from '../../assets/projects.json';
import Project from "../Project";

function Portfolio() {
    const projectList = projects;
    return (
        <div>
            <h2 className='py-2'>Portfolio</h2>
            <div>
                <Project projectList={projectList}></Project>
            </div>
        </div>
    );
}

export default Portfolio;