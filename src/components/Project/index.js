import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project({ projectList }) {
    return (
        <div>
        {
            projectList.map(project => (
                <article key={project.name}>
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
            ))
        }
        </div>
    );
}

export default Project;