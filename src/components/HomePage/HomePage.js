import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import profile from "../../assets/images/profile.jpg"; // Ensure this is an optimized image
import TypingEffect from "react-typing-effect";

const HomePage = () => {
  return (
    <div id="home" className="min-vh-100 d-flex flex-column">
      <div className="row g-0 flex-grow-1">
        {/* Left Section */}
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center bg-tan">
          <div className="text-center">
            <div className="profile-picture-wrapper mx-auto">
              <img
                src={profile}
                alt="Profile"
                className="profile-picture img-fluid rounded-circle shadow"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start bg-beige text-dark p-4">
          <div className="hero-text px-3 px-lg-5">
            <h1 className="display-3 fw-bold">Hi, I'm Anne</h1>
            <h2 className="mt-3">
              <TypingEffect
                text={["Junior Software Developer", "Problem Solver", "Creative Coder"]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
                cursor="|"
              />
            </h2>
            <p className="mt-4 fs-4 text-muted">
              Welcome to my personal portfolio. Let's build something great together!
            </p>

            {/* Social Links */}
            <div className="home-links d-flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/anne-oke/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link d-flex align-items-center text-decoration-none text-dark"
              >
                <span className="me-2">🔗</span> LinkedIn
              </a>
              <a
                href="https://github.com/anneAC84"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link d-flex align-items-center text-decoration-none text-dark"
              >
                <span className="me-2">🐙</span> GitHub
              </a>
              <a
                href="#contact"
                className="social-link d-flex align-items-center text-decoration-none text-dark"
              >
                <span className="me-2">✉️</span> Contact Me
              </a>
            </div>

            {/* CTA Button */}
            <a href="#projects" className="cta-button btn btn-coral text-white mt-4 px-4 py-2">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;