import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="maindiv">
      <h1>About Me</h1>
      <div id="content">
        <div className="contentcon1">
          <h3>Hi👋</h3>
        <p id="name1">
          I'm <span>Anusha Oruganti</span>
        </p>
        </div>
        <p className="contentcon2">
          Aspiring Full-Stack Developer | Proficient in Python, JavaScript, SQL,
          HTML/CSS | Enjoys solving algorithmic challenges (LeetCode), building
          end-to-end projects & learning new tech every day!
        </p>
        <div className="btnlink" >
          <a href="mailto:anushaoruganti2707@gmail.com">
            <span id="btn">Get In Touch</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
