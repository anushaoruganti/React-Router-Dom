import React from "react";
import "./Slills.css";

const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div id="skillset">
        <div id="setcon">
          <h2>FrontEnd</h2>
          <div id="allskills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java Script</li>
              <li>React JS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div id="setcon">
          <h2>BackEnd</h2>
          <div id="allskills">
            <ul>
              <li>Python</li>
              <li>Git</li>
              <li>Mysql</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
