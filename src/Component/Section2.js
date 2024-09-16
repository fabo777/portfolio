import React, { useState } from "react";
import myProjects from "../Data/myProjects.json";
import "./styles/Section2.css";
import { Image } from "primereact/image";
import BasicModal from "./BasicModal";
const Section2 = (/* { handleOpen, setGetID } */) => {
  const [open, setOpen] = React.useState(false);
  const [getID, setGetID] = useState(0);
  const handleOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="section2">
      <h2>My Work: A Glimpse Through the Years</h2>
      <div className="row2">
        {myProjects.map((project) => {
          return (
            <div key={project.id} className="projects">
              <div>
                <Image
                  className="image"
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
      <BasicModal
        open={open}
        handleClose={handleClose}
        getID={getID}
        setGetID={setGetID}
        myProjects={myProjects}
      />
    </div>
  );
};

export default Section2;
