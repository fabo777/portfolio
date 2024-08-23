import React from "react";
import MarioFabijanecCV from "../Mario Fabijanec CV.pdf";
import "./styles/Section1.css";
import { Button } from "primereact/button";

const Section1 = () => {
  return (
    <div className="section1">
      <h1>Web developer</h1>
      <div style={{ textAlign: "left" }}>
        <p>
          I’m a passionate web developer with expertise in HTML, CSS,
          JavaScript, React, Vue.js, PHP, Laravel, and MySQL. Constantly driven
          by new challenges, I use these technologies to craft innovative,
          robust, and scalable solutions.
        </p>
        <p>
          I led and managed small to medium-sized projects from planning through
          execution, taking full ownership of development and delivery. I
          enhanced user experiences by designing and implementing responsive,
          intuitive interfaces that balanced functionality and visual appeal,
          while optimizing back-end systems for smooth data processing, strong
          security, and efficient server-side performance. Additionally, I
          handled development engineering responsibilities such as integrating
          third-party applications, utilizing version control systems, and
          recommending ongoing improvements for performance and stability.
        </p>
        <p>
          My journey has been about building something extraordinary, and I look
          forward to bringing that same dedication to new opportunities.
        </p>
      </div>
      <a
        href={MarioFabijanecCV}
        download="Mario Fabijanec CV"
        target="_blank"
        rel="noreferrer"
      >
        <Button severity="secondary">Download CV</Button>
      </a>
    </div>
  );
};

export default Section1;
