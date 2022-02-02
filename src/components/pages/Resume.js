import React from "react";
import resume from '../../assets/documents/Kyrsten-Urbayan-Technical-Resume.pdf';

function Resume() {
    const frontEnd = ['HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'AJAX', 'Responsive Design', 'React'];
    const backEnd = ['APIs', 'Node.js', 'Express.js', 'MySQL','Sequelize', 'MongoDB', 'Mongoose'];

    return (
        <div id="resume">
            <h2 className='py-2'>Resume</h2>
            <div>
                <p>
                    Download my<span> </span>
                    <a href={resume} target='_blank' rel='noreferrer'>resume</a>!
                </p>
                <br />
                <h3>Front-End Proficiencies</h3>
                <ul>
                    {frontEnd.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <br />
                <h3>Back-End Proficiencies</h3>
                <ul>
                    {backEnd.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Resume;