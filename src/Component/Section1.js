import React from "react";
import MarioFabijanecCV from "../Mario Fabijanec CV.pdf";
import "./styles/Section1.css";
import { Button } from "primereact/button";

const Section1 = () => {
  return (
    <div className="section1">
      <h1>Web developer</h1>
      <div>
        I'm a passionate web developer always seeking fresh challenges and
        opportunities to innovate. With a strong foundation in HTML, CSS,
        JavaScript, React, Vue.js, PHP, and MySQL, I bring a wealth of technical
        expertise to the table. Let's team up and create something extraordinary
        together!
      </div>
      <a
        href={MarioFabijanecCV}
        download="Mario Fabijanec CV"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Download CV</Button>
      </a>
    </div>
  );
};

export default Section1;
