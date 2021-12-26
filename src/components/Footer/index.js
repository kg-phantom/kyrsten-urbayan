import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='my-5 flex-row space-evenly px-max'>
            <a href='https://www.linkedin.com/in/kyrsten-gabrielle-urbayan-aa062918b/'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/kg-phantom'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='https://stackoverflow.com/users/16181871/kg-phantom'>
                <FontAwesomeIcon icon={faStackOverflow} />
            </a>
        </footer>
    )
}

export default Footer;