import React from "react";
import projects from '../../assets/projects.json';
import Project from "../Project";

function Portfolio() {
    const projectList = projects;
    return (
        <div name="Portfolio">
            <h2 className='py-2'>Portfolio</h2>
            <div className="flex-row space-between">
                {
                    projectList.map(project => <Project project={project} key={project.name}></Project>)
                }
            </div>
        </div>
    );
}

export default Portfolio;