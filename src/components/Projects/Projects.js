import React, { useState } from "react";
import ProjectModal from "./ProjectModal"; // New reusable modal component
import "./Projects.css";
import filmflix from "../../assets/images/filmflix.jpg";
import flavourpalette from "../../assets/images/flavourpalette.jpg";
import snowman from "../../assets/images/snowman.jpg";
import memoriesinfocus from "../../assets/images/memoriesInFocus3.jpg";

// Import react-icons
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiCss3, SiHtml5, SiEslint } from "react-icons/si";

// Technology icons mapping
const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  Python: <FaPython />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  CSS: <SiCss3 />,
  HTML: <SiHtml5 />,
  EJS: <SiEslint />,
};

const projectsData = [
  {
    id: 1,
    title: "Filmflix",
    description: "A social movie-sharing app allowing users to upload, browse, and like films.",
    longDescription:
      "Filmflix is a social platform where movie enthusiasts can upload and explore films. Users can interact by liking movies and leaving reviews. It features a seamless UI and secure authentication.",
    timeFrame: "Time frame: 10 days | Solo project",
    technologies: ["React", "Node.js", "MongoDB"],
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
    technologies: ["React", "Python", "PostgreSQL"],
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
    technologies: ["HTML", "CSS", "JavaScript"],
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
    technologies: ["React", "CSS", "MongoDB", "EJS"],
    image: memoriesinfocus,
    liveDemo: "https://memoriesinfocus.netlify.app",
    github: "https://github.com/anneAC84/memories-in-focus-front-end/blob/main/README.md",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section container">
      <h2>Projects</h2>

      {/* Project Cards */}
      <div className="projects-grid">
        {projectsData.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="project-card"
            onClick={() => setSelectedProject(projectsData.find((p) => p.id === id))}
          >
            <img src={image} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

      {/* Reusable Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          techIcons={techIcons}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;