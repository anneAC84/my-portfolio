import React from "react";
import "./SnowmanDemo.css"; // Create a CSS file for styling

const SnowmanDemo = () => {
  return (
    <div className="snowman-demo-container">
      <h2>Snowman App</h2>
      <p>A child-friendly word game inspired by Hangman.</p>
      <iframe
        src="https://anneac84.github.io/Snowman/" // Replace with your deployed Snowman app URL
        title="Snowman App Live Demo"
        className="snowman-iframe"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <a
        href="https://your-snowman-app-repo-url.com" // Replace with your GitHub repo URL for the Snowman app
        target="_blank"
        rel="noopener noreferrer"
        className="snowman-demo-link"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default SnowmanDemo;