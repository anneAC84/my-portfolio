import React from "react";
import "../../App.css"; // Global styles
import "./About.css"; // Custom About CSS
import AboutCard from "./AboutCard"; // Import the reusable AboutCard component

const About = () => {
  return (
    <section id="about" className="container py-5">
      {/* Title */}
      <h2 className="about-title text-center">About Me</h2>

      {/* About Text */}
      <p className="about-text text-center">
        Hi! I'm a versatile software developer with a unique blend of accounting expertise and a strong foundation in tech. After years of managing complex property portfolios, I shifted to software development, combining my analytical skills with a passion for creating user-centered, functional applications.
      </p>
      <p className="about-text text-center">
        I'm especially passionate about building <span>kid-friendly educational apps</span>, inspired by my family. Outside of coding, I enjoy cooking, exploring new places, and staying active. Let’s work together to turn innovative ideas into reality!
      </p>

      {/* Subtitle */}
      <h3 className="about-subtitle text-center">What I Bring to the Table</h3>

      {/* Card Grid (New) */}
      <div className="row justify-content-center">
        <div className="col-md-3 col-6 mb-4">
          <AboutCard icon="🌟" text="Team Player" />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <AboutCard icon="💻" text="Passionate Coder" />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <AboutCard icon="🌍" text="Global Thinker" />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <AboutCard icon="📚" text="Lifelong Learner" />
        </div>
      </div>

      {/* Old Icon Grid */}
      <h3 className="about-subtitle text-center">A Little More About Me</h3>
      <div className="row justify-content-center">
        <div className="col-md-3 col-6 mb-4">
          <AboutCard icon="❤️" text="Passionate about health & well-being" />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <AboutCard icon="🍽️" text="Love cooking and experimenting with recipes" />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <AboutCard icon="✈️" text="Always ready to explore new places" />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <AboutCard icon="💻" text="Dedicated to creating user-centered apps" />
        </div>
      </div>

      {/* What's Next Section */}
      <h3 className="about-subtitle text-center">What's Next?</h3>
      <p className="about-text text-center">
        I'm continually expanding my skillset and exploring emerging technologies like AI and cloud computing. My goal is to incorporate these tools into apps that solve everyday challenges and bring joy to users. If you're looking for a developer who values innovation and collaboration, I'd love to connect!
      </p>
    </section>
  );
};

export default About;