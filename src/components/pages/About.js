import React from "react";
import headshot from '../../assets/images/headshot.jpg';

function About() {
    return (
        <div name="About">
            <h2 className='py-2'>About me</h2>
            <div className='py-2 flex-row space-between'>
                <img className="headshot" src={headshot} alt='Kyrsten Urbayan' />
                <div className='me-const'>
                    const me = &#123;
                    <div className='me-props'>
                        name: 'Kyrsten Urbayan',
                        <br />
                        hobbies: ['coding', 'drawing', 'singing(badly)', 'gaming', 'eating']
                    </div>
                    &#125;
                </div>
                <p className='py-2 about-text'>
                I am a full-stack web developer based in Southern California utilizing a background in illustration and graphic design to develop visually appealing, intuitive, and efficient web applications. I graduated from UCLA Extension's Web Development Boot Camp, earning a certificate in Full-Stack Web Development. I like to practice my front-end skills in HTML, CSS, JavaScript, Bootstrap, jQuery, and React. However, I have the most fun building robust back-ends with Node, Express, MySQL, MongoDB, Apollo, and GraphQL!
                <br />
                <br />
                Demonstrated reliability, teamwork, and creativity. Known for having an artistic eye, attention to detail, and a thorough understanding of mathematics. Approach every project with the goal of creating an intuitive and entertaining application for users while also maintaining long-term sustainability. Developed multiple live web applications from scratch. Worked individually as well as part of a team to problem-solve and develop applications using JavaScript. Eager to leverage previous and new skills as an individual and teammate in order to produce increasingly improved web applications and user experiences. I have learned the ins and outs of the MERN stack, but I am always looking forward to learning more technologies!
                </p>
            </div>
        </div>
    );
}

export default About;