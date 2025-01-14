import React from "react";
import "./AboutCard.css"; // Scoped CSS for AboutCard

const AboutCard = ({ icon, text }) => {
  return (
    <div className="about-card p-3 text-center">
      <div className="about-icon mb-2">{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default AboutCard;