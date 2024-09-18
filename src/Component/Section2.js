import React, { useState } from "react";
import myProjects from "../Data/myProjects.json";
import "./styles/Section2.css";
import { Image } from "primereact/image";
import { useMediaQuery } from "react-responsive";

const Section2 = () => {
  const [activeProject, setActiveProject] = useState(null);

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const handleProjectClick = (id) => {
    if (isMobile) {
      setActiveProject(activeProject === id ? null : id);
    }
  };

  return (
    <div className="section2">
      <h2>My Work: A Glimpse Through the Years</h2>
      <div className="row2">
        {myProjects.map((project) => {
          const isActive = activeProject === project.id;

          return (
            <div
              key={project.id}
              className={`projects ${isActive ? "active" : ""}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="image-container">
                <div className={`buttons-overlay ${isActive ? "show" : ""}`}>
                  {project.link && (
                    <button
                      className="btn view-project"
                      onClick={() => window.open(`${project.link}`)}
                    >
                      View Project
                    </button>
                  )}
                  {project.srcCode && (
                    <button
                      className="btn view-source"
                      onClick={() => window.open(`${project.srcCode}`)}
                    >
                      View Source
                    </button>
                  )}
                </div>
                <Image
                  className="image"
                  src={`images/projects/${project.name}-FULL.PNG`}
                  alt="Image"
                  width="100%"
                  loading="lazy"
                />
              </div>

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
