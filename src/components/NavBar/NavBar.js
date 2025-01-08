import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // React-scroll for smooth scrolling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
    // Add the navbar-open class to the body to push content down
    if (!isNavOpen) {
      document.body.classList.add("navbar-open");
    } else {
      document.body.classList.remove("navbar-open");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand">
          <span className="brand-name">Anne</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                onClick={toggleNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                onClick={toggleNavbar}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
                onClick={toggleNavbar}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                onClick={toggleNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                onClick={toggleNavbar}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;