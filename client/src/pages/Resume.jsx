import React from 'react';

function Resume() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="resumeAll">
            <div id="top"></div>
            <div className="inPageLinks">
                <a href="#skills">
                    <button className="resumeLinkButton">Skills</button>
                </a>
                <a href="/Portfolio">
                        <button className="resumeLinkButton">Projects</button>
                    </a>
                <a href="#workExperience">
                    <button className="resumeLinkButton">Work Experience</button>
                </a>
                <a href="#education">
                    <button className="resumeLinkButton">Education</button>
                </a>
                <a href="#languageSkills">
                    <button className="resumeLinkButton">Language Skills</button>
                </a>
                <a href="#references">
                    <button className="resumeLinkButton">References</button>
                </a>
                    





             
            </div>
            <hr />
            <div className="resumeAllSections">
                <section id="skills">
                    <h2 className="sectionHeader">Skills</h2>
                        <h3 className="skillTypeSection">Technical Skills</h3>
                            <h4 className="technicalSkillType">Software Languages:</h4>
                                <p className="skillInformation">JavaScript, HTML, CSS, PostgreSQL</p>
                            <h4 className="technicalSkillType">Tools:</h4>
                                <p className="skillInformation">VS Code, Node.js, Express.js, Handlebars.js, Tailwind, Canvas, Bootstrap, React, Gitflow/Github, JSON, Wordpress, Adobe Photoshop</p>
                            <h4 className="technicalSkillType">Frameworks/Libraries:</h4>
                                <p className="skillInformation">jQuery, Bootstrap, Materialize</p>
                            <h4 className="technicalSkillType">Additional Technical Skills:</h4>
                                <p className="skillInformation">Fluent and competent in Responsive design principles, testing frameworks, Skillful and Creative in web design and layout, API Integration, Google Suite, Microsoft Office, debugging, multiple computer products</p>
                        <h3 className="transferableSkillTypeSection">Transferable Skills</h3>
                            <ul>
                                <li className="transferableSkillInformation">Confident in Project Management</li>
                                <li className="transferableSkillInformation">Views Work Through Creative Lens</li>
                                <li className="transferableSkillInformation">Clear Communicator</li>
                                <li className="transferableSkillInformation">Value Customer Satisfaction</li>
                                <li className="transferableSkillInformation">Dependable and Flexible</li>
                            
                                <li className="transferableSkillInformation">Ability to Work Effectively Both Independently and as a Team</li>
                                <li className="transferableSkillInformation">Ability to Adapt Quickly to Changing Situations</li>
                                <li className="transferableSkillInformation">Efficiency with Time Management/Self-Monitoring in Non-Office Work Setting</li>
                            </ul>
                </section>
                <hr />
                <section id="workExperience">
                    <h2 className="sectionHeader">Work Experience</h2>
                        <h3 className="workHeader">Executive Assistant (2011 - Present)</h3>
                            <h4 className="workBusiness">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm, Muncie Indiana</h4>
                                <p className="dutiesKey">Nationally recognized dairy goat rearing and breeding business with over 100 national and state awards. Handled diverse range of responsibilities, including assistance with filing and maintenance of pedigree documents with American Dairy Goat Association, animal care, maintenance and care of farm property and management of daily operations, provided technical support for record keeping  </p>
                                <h5 className="keyAccomplishments">Key Accomplishments:</h5>
                                    <p className="dutiesKey">Played a crucial role in maintaining the smooth operations of the farm.</p>
                                    <p className="dutiesKey">Demonstrated adaptability and versatility in handling both administrative and hands-on tasks.</p>
                                    <p className="dutiesKey">Collaborated with other businesses to utilize their services.</p>
                                    <p className="dutiesKey">Assisted in providing excellent customer service and satisfaction.</p>
                                    <p className="dutiesKey">Successfully collaborated with my family on various projects, honing my teamwork, communication, and problem-solving skills.</p>
                                    <p className="dutiesKey">The experience of working on the family farm taught me the importance of patience, flexibility, and maintaining a positive attitude in challenging situations.</p>
                        <h3 className="variousHeader">Various Short Term Positions</h3>
                        <div className="shortRole">
                            <h4 className="shortTimeJobHeader">Certified Nursing Assistant (2018-2019)</h4>
                                <h5 className="shortTimeJobLocation">Bedford Hospital, Bedford Virginia</h5>
                        </div>
                        <div className="shortRole">
                            <h4 className="shortTimeJobHeader">Retail Position (2017-2018)</h4>
                                <h5 className="shortTimeJobLocation">PetSmart, Lynchburg Virginia</h5>
                        </div>
                        <div className="shortRole">
                            <h4 className="shortTimeJobHeader">Volunteer/Service Involvement (2017-Present)</h4>
                                <h5 className="shortTimeJobLocation">Continuous involvement in church volunteer work.</h5>
                        </div>
                </section>
                <hr />
                <section id="education">
                    <h2 className="sectionHeader">Education</h2>
                        <h3 className="educationSchool">Rutgers University Full-Stack Coding Certificate: New Brunswick, NJ (Completed) | 2023 - 2024</h3>
                            <h4 className="educationWhat">Certificate in Full-Stack Web Development</h4>
                            <h4 className="aboutEducation">Intensive 13-week program focusing on industry-standard coding languages and software development.</h4>
                        <h3 className="educationSchool">Customs Brokers Program: Online (Completed) | 2022 - 2023</h3>
                            <h4 className="educationWhat">Customs Brokers License</h4>
                            <h4 className="aboutEducation">An intensive program focused on import and export goods for the United States of America. CBL exam passed October 2023.</h4>
                        <h3 className="educationSchool">University of Lynchburg: Lynchburg Virginia (Graduated) | 2017 - 2021</h3>
                            <h4 className="educationWhat">Bachelor of Science - Exercise Physiology</h4>
                </section>
                <hr />
                <section id="languageSkills">
                    <h2 className="languageHeader">Language Skills</h2>
                        <p className="languageList">Travel Proficiency in French, Spanish, and German</p>
                </section>
                <hr />
                <section id="references">
                    <h2 className="sectionHeader">References</h2>
                    <div className="allReferences">
                        <div className="referenceSection">
                            <div className="referenceEach">
                                <h3 className="referenceName">JD Tadlock</h3>
                                <ul className="aboutReference">
                                    <li className="referenceInformation">Email: jt7903@gmail.com</li>
                                    <li className="referenceInformation">LinkedIn: linkedin.com/in/jd-tadlock-66323184</li>
                                    <li className="referenceInformation">Relationship: Instructor at Rutgers Full Stack Web Development Course</li>
                                    <li className="referenceInformation">Known for 1 year</li>
                                </ul>
                            </div>
                            <div className="referenceEach">
                                <h3 className="referenceName">Roma Warren</h3>
                                <ul className="aboutReference">
                                    <li className="referenceInformation">Email: romawarren4710@gmail.com</li>
                                    <li className="referenceInformation">Phone Number: (765)–744–8581</li>
                                    <li className="referenceInformation">Relationship: Animal Care Liaison to CU@LilRedBarn for Boyce Animal Hospital</li>
                                    <li className="referenceInformation">Known for 20 years</li>
                                </ul>
                            </div>
                            <div className="referenceEach">
                                <h3 className="referenceName">Zachary Barnes</h3>
                                <ul className="aboutReference">
                                    <li className="referenceInformation">Email: zachhsavage@gmail.com</li>
                                    <li className="referenceInformation">LinkedIn: linkedin.com/in/zachary-r-barnes</li>
                                    <li className="referenceInformation">Relationship: TA at Rutgers University Bootcamp</li>
                                    <li className="referenceInformation">Known for 1 year</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="blank">
                    <button className="backToTopButton" onClick={() => scrollToSection('top')}>Back to Top</button>
                </div>
            </div>
        </div>
    );
}

export default Resume;

