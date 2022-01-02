import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project({ project }) {
    return (
        <article className="flex-row project-card card py-2" key={project.name}>
            <img src={require(`../../assets/images/projects/${project.id}.png`)} alt={project.name} className='project-image' />
            <div className='project-info'>
                <a
                className="project-title px-1"
                href={project.url}
                target="_blank"
                rel="noreferrer">
                    {project.name}
                </a>
                <a
                className='project-github'
                href={project.github}
                target='_blank'
                rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <h3>{project.tech}</h3>
            </div>
            
        </article>
    );
}

export default Project;