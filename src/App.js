import "./App.css";
import React, { useState } from "react";
import BasicModal from "./Component/BasicModal";
import { ContactUs } from "./Component/ContactUs";
import myProjects from "./Data/myProjects.json";
import Links from "./Component/Links";
import useScreenWidth from "./Component/useScreenWidth";
import MarioFabijanecCV from "./Mario Fabijanec CV.pdf";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const [getID, setGetID] = useState(0);
  const { ScreenWidth } = useScreenWidth();

  const handleOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="maincontainer">
        <div className="row">
          <div className="left">
            <div className="leftContainer">
              <div>
                <img className="imageAvatar" src="images/avatar2.PNG" alt="" />
                <h2>
                  Hi, my name is Mario Fabijanec and I am a web developer from
                  Zagreb. Welcome to my portfolio.
                </h2>
              </div>

              {ScreenWidth > 850 && <Links />}
            </div>
          </div>

          <div className="right">
            <div className="section1">
              <h1>Self-taught front-end developer</h1>
              <div>
                If you are looking for a new front-end junior developer, with a
                high drive to learn new skills and improve existing ones, you
                are in the right place. I have a solid knowledge in HTML, CSS,
                JavaScript, React and Redux.
              </div>
              <a
                href={MarioFabijanecCV}
                download="Mario Fabijanec CV"
                target="_blank"
              >
                <button>Download CV</button>
              </a>
            </div>

            <hr className="line"></hr>

            <div className="section2">
              <h2>Recent work</h2>
              <div className="row2">
                {myProjects.map((project) => {
                  return (
                    <div key={project.id} className="projects">
                      <a className="image">
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

            <hr className="line"></hr>

            <div id="section3" className="section3">
              <h2>Get In Touch</h2>
              <div className="section3div">
                If you are interested in giving me a chance feel free to contact
                me and I will make sure to respond as soon as possible. In case
                you dont like forms you can call me or send an email, needed
                info can be find in my CV.
              </div>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
      <BasicModal
        open={open}
        onClose={handleClose}
        handleClose={handleClose}
        getID={getID}
        setGetID={setGetID}
        myProjects={myProjects}
      />
      {ScreenWidth < 850 && (
        <div className="footer">
          <Links />
        </div>
      )}
    </>
  );
};

export default App;
