import React from "react";
import "../home.css";

export default function Homepage() {
  return (
    <div className="home">
      <header>
        <h1>Natasha Ruth</h1>
        Resume
        <p>
          Full Stack Web Developer || Software Engineer || Game Designer(level
          designer)
        </p>
      </header>

      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Skills</h3>
      </div>
      <div className="projects">
        <h3>Projects</h3>
        <p>Here are some of my projects</p>
        <div className="video-games">
          <h4>Video Games</h4>
          <p>Video games I have created</p>
          <div className="contact">
            <footer>
              <h5>Contact</h5>
              <p>My contact info</p>
              <p>
                Email:{" "}
                <a href="mailto:taytenacioustech@gmail.com ">
                  taytenacioustech@gmail.com
                </a>{" "}
              </p>
              <p>Phone:</p>{" "}
              <a href="tel: 406-210-9918"> For interview purposes only</a>
              <p>LinkedIn:</p>{" "}
              <a href="https://www.linkedin.com/in/natasharuth">
                {" "}
                Natasha Ruth
              </a>
              <p>GitHub:</p>{" "}
              <a href="https://www.github.com/truth-dev"> Project Code Repo</a>
              <a href="url.com">Resume Video</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
