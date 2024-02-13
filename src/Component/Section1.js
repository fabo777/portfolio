import React from "react";
import MarioFabijanecCV from "../Mario Fabijanec CV.pdf";
import "./styles/Section1.css";
const Section1 = () => {
  return (
    <div className="section1">
      <h1>Full stack developer</h1>
      <div>
        If you need a skilled full-stack developer hungry for new challenges,
        you've found the right person. I'm well-versed in HTML, CSS, JavaScript,
        React, Vue.js, PHP, and MySQL. I look forward to the
        opportunity to collaborate and deliver exceptional results.
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
