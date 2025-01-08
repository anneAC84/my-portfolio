import React, { Suspense } from 'react';
import './App.css';
import Loader from './components/Loader/Loader'; // Import the Loader component
import "devicon/devicon.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Lazy load components
const NavBar = React.lazy(() => import('./components/NavBar/NavBar'));
const HomePage = React.lazy(() => import('./components/HomePage/HomePage'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const About = React.lazy(() => import('./components/About/About'));
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));

function App() {
  return (
    <div className="App">
      {/* Use Loader as fallback */}
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
}

export default App;