import React ,{useEffect} from 'react'
import './Projects.css';   
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
      {
    title: "Task Manager App",
    description: "React-based task management app with add, edit, delete features.",
    image: "https://img.freepik.com/free-vector/organizer-concept-illustration_114360-4445.jpg",
    liveLink: "https://your-live-link.com",
    codeLink: "https://github.com/your-username/task-manager",
    tech: ["React", "CSS", "Hooks"]
  },
  {
    title: "E-Commerce Website",
    description: "Modern shopping site with cart, listing & responsive design.",
    image: "https://img.freepik.com/free-vector/e-commerce-shopping-cart-software-application_1150-58169.jpg",
    liveLink: "https://your-live-link.com",
    codeLink: "https://github.com/your-username/ecommerce",
    tech: ["React", "CSS", "Routing"]
  },
  {
    title: "Portfolio Website",
    description: "Responsive React portfolio with animations & smooth navigation.",
    image: "https://img.freepik.com/free-vector/portfolio-website-concept-illustration_114360-7960.jpg",
    liveLink: "#",
    codeLink: "#",
    tech: ["React", "Dark Mode", "AOS"]
  }
];


const Projects = () => {
     useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
     <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} data-aos="fade-up">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-img" />
              </a>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">🔗 Live</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">💻 Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
