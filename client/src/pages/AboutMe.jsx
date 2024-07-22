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
                    <h1 className="aboutMeHeader">My Story</h1>
                        <p className="aboutMeParagraph">
                        I am a full stack web development looking to launch my career in this field. I live in Indiana. My days are spent coding, reading, and enjoying time outside with my dog. I also enjoy backpacking, history, and travel. My goal is to bring a creative and engaging user experience to any project I work on. 
                        </p>
                        <p className="aboutMeParagraph">
                        I am armed with a many different areas of web development including HTML, CSS, JavaScript and React framework. I also enjoy learning new areas of web development, such as TypeScript and I worked hard in my course at Rutgers to develop my skills and I am working to increase my areas of experience. 
                        </p>
                        <p className="aboutMeParagraph">
                        I have fervent enthusiasm and passion for front end web development I have not found in any other part of my life. I am specifically interested in Front-End Development because I enjoy the creativity and real-world applicability. I put my heart and creativity into any project I am working on. I am eager to leverage my diverse skill set and interest for web development to pursue a career in full-stack JavaScript development. If you’re interest in contacting me, please email me emilycassel77@gmail.com. 
                        </p>
                    
                </div>
            </div>
        </div>
    );
}

export default AboutMe;