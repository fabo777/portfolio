import React from "react";
import myProjects from "../Data/myProjects.json";
import "./styles/Section2.css";
import { Image } from "primereact/image";

const Section2 = ({ handleOpen, setGetID }) => {
  return (
    <div className="section2">
      <h2>My Work: A Glimpse Through the Years</h2>
      <div className="row2">
        {myProjects.map((project) => {
          return (
            <div key={project.id} className="projects">
              <div>
                {/*   <img 
                  onClick={() => {
                    handleOpen(project.name);
                    setGetID(project.id);
                  }}
                  className="img"
                  src={`images/projects/${project.name}-FULL.PNG`}
                  alt=""
                /> */}
                <Image
                  src={`images/projects/${project.name}-FULL.PNG`}
                  alt="Image"
                  width="100%"
                  onClick={() => {
                    handleOpen(project.name);
                    setGetID(project.id);
                  }}
                  loading="lazy"
                />
              </div>

              <h3>{project.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: project.msg }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
