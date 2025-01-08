import React, { useState } from "react";
import "./Skills.css";

const skillsData = [
  { name: "React", iconClass: "devicon-react-original colored" },
  { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  { name: "Express", iconClass: "devicon-express-original colored" },
  { name: "Git", iconClass: "devicon-git-plain colored" },
  { name: "GitHub", iconClass: "devicon-github-original colored" },
  { name: "Heroku", iconClass: "devicon-heroku-original colored" },
  { name: "Postman", iconClass: "devicon-postman-plain colored" },
  { name: "Netlify", iconClass: "devicon-netlify-plain colored" },
  { name: "HTML", iconClass: "devicon-html5-plain colored" },
  { name: "CSS", iconClass: "devicon-css3-plain colored" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
  { name: "Django", iconClass: "devicon-django-plain colored" },
  { name: "Python", iconClass: "devicon-python-plain colored" },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Developer Toolkit</h2>
      <p className="skills-intro">
        From front-end frameworks to back-end technologies, these are the tools I use to bring ideas to life.
      </p>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div
            className={`skill-card ${hoveredSkill === skill.name ? "hovered" : ""}`}
            key={index}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <i className={skill.iconClass} title={skill.name}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;