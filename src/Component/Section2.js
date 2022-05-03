import React from "react";
import myProjects from "../Data/myProjects.json";
import "./styles/Section2.css";

const Section2 = ({ handleOpen, setGetID }) => {
  return (
    <div className="section2">
      <h2>Recent work</h2>
      <div className="row2">
        {myProjects.map((project) => {
          return (
            <div key={project.id} className="projects">
              <a href="#" className="image">
                <img
                  onClick={() => {
                    handleOpen(project.name);
                    setGetID(project.id);
                  }}
                  className="img"
                  src={`images/projects/${project.name}.PNG`}
                  alt=""
                />
              </a>

              <h3>{project.name}</h3>
              <p>{project.msg}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
