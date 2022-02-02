import React from "react";
import headshot from '../../assets/images/headshot.jpg';

function About() {
    return (
        <div id="about">
            <h2 className='py-2'>About me</h2>
            <div className='py-2'>
                <img className="headshot" src={headshot} alt='Kyrsten Urbayan' />
                <p className='py-2 about-text'>
                Full-stack web developer utilizing a background in illustration and graphic design to develop visually appealing, intuitive, and efficient web applications. Educated at UCLA Extension and currently working toward certification in full-stack web development through the Coding Boot Camp. Skills in HTML, CSS, JavaScript, Bootstrap, GitHub, jQuery, server-side APIs, responsive design, and the MERN stack. Demonstrated reliability, teamwork, and creativity. Known for having an artistic eye, attention to detail, and a thorough understanding of mathematics. Approach every project with the goal of creating an intuitive and entertaining application for users while also maintaining long-term sustainability. Developed multiple live web applications from scratch. Worked individually as well as part of a team to problem-solve and develop applications using JavaScript. Eager to leverage previous and new skills as an individual and teammate in order to produce increasingly improved web applications and user experiences.
                </p>
            </div>
        </div>
    );
}

export default About;