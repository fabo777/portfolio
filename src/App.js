import "./App.css";
import React from "react";
import useScreenWidth from "./Component/useScreenWidth";
import LeftContainer from "./Component/LeftContainer";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
//import Section3 from "./Component/Section3";
import Links from "./Component/Links";

const App = () => {
  const { ScreenWidth } = useScreenWidth();

  return (
    <>
      <div className="mainContainer">
        <div className="row">
          <LeftContainer />
          <div className="right">
            <Section1 />

            <hr className="line"></hr>
            <Section2 />
            {/*   <hr className="line"></hr> */}
            {/*  <Section3 /> */}
          </div>
        </div>
      </div>

      {ScreenWidth < 850 && (
        <div className="footer">
          <Links />
        </div>
      )}
    </>
  );
};

export default App;
