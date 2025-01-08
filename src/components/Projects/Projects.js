import React, { useState } from "react";
import "./Projects.css";
import filmflix from "../../assets/images/filmflix.jpg";
import flavourpalette from "../../assets/images/flavourpalette.jpg";
import snowman from "../../assets/images/snowman.jpg";
import memoriesinfocus from "../../assets/images/memoriesInFocus3.jpg";

// Direct imports from react-icons for minimal usage
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiCss3, SiHtml5, SiEslint } from "react-icons/si";

// Define project data
const projectsData = [
  {
    id: 1,
    title: "Filmflix",
    description: "A social movie-sharing app allowing users to upload, browse, and like films.",
    longDescription:
      "Filmflix is a social platform where movie enthusiasts can upload and explore films. Users can interact by liking movies and leaving reviews. It features a seamless UI and secure authentication.",
    timeFrame: "Time frame: 10 days | Solo project",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    image: filmflix,
    liveDemo: "https://main--filmflixcas.netlify.app/",
    github: "https://github.com/anneAC84/Filmflix/blob/main/README.md",
  },
  {
    id: 2,
    title: "FlavourPalette",
    description: "A recipe management tool for storing and sharing your favorite recipes.",
    longDescription:
      "FlavourPalette is your ultimate recipe assistant! Organize, store, and share recipes with a personal touch. The app features a clean design, secure profiles, and integration with a robust back-end.",
    timeFrame: "Time frame: 14 days | Solo project",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Python", icon: <FaPython /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
    image: flavourpalette,
    liveDemo: "https://flavourpalettefront.netlify.app",
    github: "https://github.com/anneAC84/React-FlavourPalette/blob/main/README.md",
  },
  {
    id: 3,
    title: "Snowman",
    description: "A child-friendly word game inspired by Hangman.",
    longDescription:
      "Snowman offers a fun and educational twist on the classic Hangman game. Perfect for kids, it challenges vocabulary skills in an engaging and interactive way.",
    timeFrame: "Time frame: 7 days | Solo project",
    technologies: [
      { name: "JavaScript", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "HTML", icon: <SiHtml5 /> },
    ],
    image: snowman,
    liveDemo: "https://anneac84.github.io/Snowman/",
    github: "https://github.com/anneAC84/Snowman/blob/main/README.md",
  },
  {
    id: 4,
    title: "Memories In Focus",
    description: "A gallery platform to view and manage photo collections.",
    longDescription:
      "\"Memories in Focus\" allows users to explore a curated gallery of images, upload their own photos, and interact with the community. Logged-in users can create, edit, update, and delete their photo collections and comment on others' posts. This project highlights proficiency in full-stack development and user-centric design.",
    timeFrame: "Time frame: 7 days | Group project",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "React", icon: <FaReact /> },
      { name: "EJS", icon: <SiEslint /> },
    ],
    image: memoriesinfocus,
    liveDemo: "https://memoriesinfocus.netlify.app",
    github: "https://github.com/anneAC84/memories-in-focus-front-end/blob/main/README.md",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to close the modal
  const closeModal = () => {
    const overlay = document.querySelector(".project-details-overlay");
    overlay.classList.add("fade-out");
    setTimeout(() => {
      setSelectedProject(null);
    }, 300); // Matches the animation duration
  };

  return (
    <section className="projects-section container">
      <h2>Projects</h2>

      {/* Projects Cards Section */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details-modal">
            <button className="close-btn" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="close-icon"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="modal-header">{selectedProject.title}</div>

            {/* Add Time Frame */}
            {selectedProject.timeFrame && (
              <p className="modal-time-frame">{selectedProject.timeFrame}</p>
            )}

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-project-image"
            />
            <p className="modal-description">{selectedProject.longDescription}</p>
            <h4>Technologies Used:</h4>
            <div className="tech-icons">
              {selectedProject.technologies.map((tech, index) => (
                <div className="tech-icon" key={index}>
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="modal-links">
              <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;