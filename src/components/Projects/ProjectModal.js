import React from "react";

const ProjectModal = ({ project, techIcons, closeModal }) => {
  const { title, longDescription, timeFrame, technologies, image, liveDemo, github } = project;

  return (
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
        <div className="modal-header">{title}</div>
        {timeFrame && <p className="modal-time-frame">{timeFrame}</p>}
        <img src={image} alt={title} className="modal-project-image" />
        <p className="modal-description">{longDescription}</p>
        <h4>Technologies Used:</h4>
        <div className="tech-icons">
          {technologies.map((tech, index) => (
            <div className="tech-icon" key={index}>
              {techIcons[tech]}
              <span>{tech}</span>
            </div>
          ))}
        </div>
        <div className="modal-links">
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;