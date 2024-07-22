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
                        I am an enthusiastic Full Stack Web Developer with training from Rutgers University Coding Bootcamp, specializing in JavaScript, CSS, and UI/UX design and development.
                    </p>
                    <p className="aboutMeParagraph">
                        Reflecting on my experiences and newfound interests, I discovered a passion for web development. Enrolling in the Full-Stack Web Development Course at Rutgers University solidified this passion, as I found excitement and fulfillment in crafting digital solutions. Now, with a diverse skill set and fervent enthusiasm, I am eager to contribute my expertise, creativity, and perseverance as a Full-Stack Web Developer.
                    </p>
                    <p className="aboutMeParagraph">
                        Now, armed with a diverse skill set and a fervent enthusiasm for web development, I am actively seeking opportunities to contribute my expertise, creativity, and perseverance as a Full-Stack Web Developer.
                    </p>
                    <p className="aboutMeParagraph">
                        I am eager to leverage my diverse skill set and passion for web development to pursue a career in full-stack JavaScript development.
                    </p>
                    <div className="myLinks">
                        <a className="link" href="https://www.linkedin.com/in/emily-cassel-5a2980245/">LinkedIn</a>
                        <a className="link" href="https://github.com/EmilyCassel">GitHub</a>
                        <a className="link" href="/path/to/your/resume.pdf" download>Resume Download</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;