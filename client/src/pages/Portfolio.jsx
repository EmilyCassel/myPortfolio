import freeLancer from "../assets/images/freeLancer.png";
import goats from "../assets/images/goats.png";
import studentLink from "../assets/images/studentLink.jpg";

function Portfolio() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div id="top"></div>
      <div className="inProjectLinks">
          <a href="#completedProjects">
                    <button className="resumeLinkButton">Completed Projects</button>
                </a>
                <a href="#inProgressProjects">
                    <button className="resumeLinkButton">In-Progress Projects</button>
                </a>
        </div>

      <hr></hr>

      <div className="allProjects">
        <div id="completedProjects" className="allCompletedProjects">
          <h1 className="projectsHeader">Completed Projects</h1>

          <h2 className="projectName">FreeLancers</h2>
          <div className="projectBody">
            <div className="projectInformation">
              <h3 className="desKeyHeader">Description:</h3>
              <p className="desKey">FreeLancers is an application designed to empower freelance workers by enabling them to efficiently track their work hours across multiple projects and manage project payment statuses. With FreeLancers, freelance workers can easily organize their workload and accurately bill clients.</p>
              <h3 className="desKeyHeader">Key Features:</h3>
              <p className="desKey">Implemented security protocols for safety of client and FreeLancer information.</p>
              <p className="desKey">Engineered algorithms utilizing JavaScript to dynamically fetch and display project and user information.</p>
              <p className="desKey">Efficiently track work hours across multiple projects, manage project payment statuses and assign payments to projects, and easily organize workload to maintain productivity.</p>
              <p className="desKey">Technologies Utilized: HTML, CSS, JavaScript, API Integration, Local Storage Management, Responsive Design, Security protocols.</p>
              <p className="desKey">Worked as a team to build an application with an agile environment, foster collaboration and user ease and interest.</p>
              <p className="desKey">I oversaw the front-end development for this project and utilized a visually unique concept to attract users.</p>
              <div className="allProjectLinks">
                <p className="projectLink"><a href="https://github.com/dann9109/freeflow">GitHub</a></p>
                <p className="projectLink"><a href="https://salty-coast-36768-7c025fc4e535.herokuapp.com/">Demo</a></p>
              </div>
            </div>
            <img src={freeLancer} className="projectImage" />
          </div>

          <h2 className="projectName">StudentLink</h2>
          <div className="projectBody">
            <div className="projectInformation">
              <h3 className="desKeyHeader">Description:</h3>
              <p className="desKey">Student Link' empowers students to take control of their study sessions with a few clicks. Tailor-made for students of all levels, our app fosters collaborative learning through a user-friendly interface that simplifies posting study requests and scheduling sessions. 'Student Link' stands out for its simplicity and efficiency, connecting students effortlessly for shared academic success.</p>
              <h3 className="desKeyHeader">Key Features:</h3>
              <p className="desKey">Utilized JavaScript, responsive design and API Integration to build an intuitive design to facilitate the building of study groups and connect study partners between individual of fields of study to and for the of posting study requests and scheduling sessions.</p>
              <p className="desKey">This program supports students of different languages and abilities, fostering a diverse learning environment.</p>
              <p className="desKey">Technologies Utilized: HTML, CSS, JavaScript, Tailwind, API Integration, Local Storage Management, Responsive Design, Security Protocols.</p>
              <p className="desKey">Collaboratively developed the front end with a team member utilizing Tailwind and CSS.</p>
            </div>
            <img src={studentLink} className="projectImage" />
          </div>
          <div className="allProjectLinks">
            <p className="projectLink"><a href="https://github.com/shannontice/Student-Link">GitHub</a></p>
            <p className="projectLink"><a href="https://afternoon-waters-14847-beeca698c3b5.herokuapp.com/">Demo</a></p>
          </div>
        </div>

        <hr className="projectLine"></hr>

        <div id="inProgressProjects" className="allProgressProjects">
          <h1 className="projectsHeader">In-Progress Projects</h1>

          <h2 className="projectName">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm</h2>

          <div className="projectBody">
            <div className="projectInformation">
              <h3 className="desKeyHeader">Description:</h3>
                <p className="desKey">The CU@LilRedBarn app is designed to streamline the process of purchasing goats from the family-owned CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm. It allows users to easily contact farm owners, view detailed pedigrees and photos, and check farm standards, ensuring a seamless and transparent purchasing experience.</p>
              <h3 className="desKeyHeader">Key Features:</h3>
                <p className="desKey">Seamlessly explore the goats through a user-friendly interface, with access to comprehensive lineage data for each goat to make informed purchasing decisions. Transparent insights into the quality and care dedicated to raising the goats.</p>
                <p className="desKey">Direct Contact for Purchasing: Users must contact the farm owner directly for purchases. The owner's contact information is easily accessible on the site, with the option to send an email through the app for direct communication.</p>
                <p className="desKey">Technologies Utilized: HTML, CSS, JavaScript, API Integration, Local Storage Management, Responsive Design, MongoDB.</p>
                <p className="desKey">Designed in collaboration with the farm team and owner to meet their approval, ensuring a clear-cut and efficient application.</p>
            </div>
              <img src={goats} className="projectImage" />
          </div>
          <div className="allProjectLinks">
            <p className="projectLink"><a href="https://github.com/EmilyCassel/goats">GitHub</a></p>
          </div>

        </div>
      </div>






      <div className="blank">
        <button className="backToTopButton" onClick={() => scrollToSection('top')}>
          Back to Top
        </button>
      </div>
    
    </div>
  );
}

export default Portfolio;

