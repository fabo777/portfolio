import React from "react";
import MarioFabijanecCV from "../Mario Fabijanec CV.pdf";
import "./styles/Section1.css";
const Section1 = () => {
  return (
    <div className="section1">
      <h1>Self-taught front-end developer</h1>
      <div>
        If you are looking for a new front-end junior developer, with a high
        drive to learn new skills and improve existing ones, you are in the
        right place. I have a solid knowledge in HTML, CSS, JavaScript, React
        and Redux.
      </div>
      <a
        href={MarioFabijanecCV}
        download="Mario Fabijanec CV"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download CV</button>
      </a>
    </div>
  );
};

export default Section1;
