import "./App.css";
import React, { useState } from "react";
import myProjects from "./Data/myProjects.json";
import useScreenWidth from "./Component/useScreenWidth";
import LeftContainer from "./Component/LeftContainer";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
//import Section3 from "./Component/Section3";
import BasicModal from "./Component/BasicModal";
import Links from "./Component/Links";

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
      <div className="mainContainer">
        <div className="row">
          <LeftContainer />
          <div className="right">
            <Section1 />

            <hr className="line"></hr>
            <Section2 handleOpen={handleOpen} setGetID={setGetID} />
            {/*   <hr className="line"></hr> */}
            {/*  <Section3 /> */}
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
