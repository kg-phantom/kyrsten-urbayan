import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project({ project }) {
    return (
        <article className="flex-row project-card card" key={project.name}>
            <img src={require(`../../assets/images/projects/${project.id}.png`)} alt={project.name} />
            <a
            href={project.url}
            target="_blank"
            rel="noreferrer">
                {project.name}
            </a>
            <a
            href={project.github}
            target='_blank'
            rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </article>
    );
}

export default Project;