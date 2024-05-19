import React from "react";
import "../styles/About.css";
const About = () => {
  return (
    <div className="container_about" id="about">
      <div>
        <h1 className="headinga">Empowering Mordern Day Education</h1>
      </div>
      <div className="wrapper">
        <div className="grid-container">
          <div className="grid-item" id="purple">
            <h2>Teachers</h2>
            <p>
              Bring the power of the digital age into your classroom, Enable
              your students to make innovative school projects.
            </p>
            <a href="#mid" className="buttona purbtn">
              See more
            </a>
          </div>
          <div className="grid-item" id="yellow">
            <h2>Students</h2>
            <p>
              Get bold and creative with your school assignments. Flipsnack
              allows you to unleash your imagination in the easiest possible
              way.
            </p>
            <a href="#mid" className="buttona yellbtn">
              See more
            </a>
          </div>
          <div className="grid-item" id="pink">
            <h2>Schools</h2>
            <p>
              Publish appealing school prospectus, handbooks and admission
              guides to inform students, teachers, applicants and parents.
            </p>
            <a href="#mid" className="buttona pnkbtn">
              See more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
