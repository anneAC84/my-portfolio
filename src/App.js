import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "devicon/devicon.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <HomePage />
      </section>
      <div className="section-divider"></div>

      <section id="about">
        <About />
      </section>
      <div className="section-divider"></div>

      <section id="skills">
        <Skills />
      </section>
      <div className="section-divider"></div>

      <section id="projects">
        <Projects />
      </section>
      <div className="section-divider"></div>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;