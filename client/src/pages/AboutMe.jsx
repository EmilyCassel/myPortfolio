import React from 'react';
import emilyCassel from '../assets/images/emilyCassel.jpeg';

function AboutMe() {
    return (
        <div>
            <div className="aboutMeAll">
                <div className="imageContainer">
                    <img className="aboutMeImage" src={emilyCassel} alt="myPhoto" />
                </div>

                <div className="aboutMeSummaryBox">
                    <h1 className="aboutMeHeader">About Me</h1>
                        <p className="aboutMeParagraph">
                            I am a newly trained full-stack web developer living in Indiana, aspiring to launch a career in this exciting field. I am flexible and amenable to relocating. I am particularly passionate about front end development yet feel proficient in all aspects of web development. I liken the imaginative aspect of web development to having Hobby Lobby at my fingertips! I enjoy the ability to take what is in my mind and bring it to life through web development tools.  
                        </p>
                        <p className="aboutMeParagraph">
                            My goal is to bring a creative and engaging user experience to all projects. I am armed with knowledge in many different areas, including HTML, CSS, JavaScript, MySQL and MERN Stack.  The creative and real-world applicability of web development appeals to my artistic instincts and desire to produce aesthetic and captivating projects. I am dedicated to bringing a fresh eye to all projects and leveraging my diverse skill set and interests to launch a career in full-stack JavaScript development.
                        </p>
                        <p className="aboutMeParagraph">
                            I continue to enjoy learning new aspects of web development and am driven to stay current in new concepts as they develop. I endeavor to continue refining the skills I mastered in training, and eagerly look forward to reinforcing them through ongoing work experience.
                        </p>
                        <p className="aboutMeParagraph">
                            Coding, reading and enjoying time outside with my dog describes my typical daily routine. I spend my free time backpacking, quilting, running, traveling and increasing my knowledge of history. 
                        </p>
                        <p className="aboutMeParagraph">
                            I am looking forward to working with you. If interested, please refer to my contact page.
                        </p>
                    
                </div>
            </div>
        </div>
    );
}

export default AboutMe;