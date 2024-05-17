import React from "react";
import Links from "./Links";
import useScreenWidth from "./useScreenWidth";
import "./styles/LeftContainer.css";

const LeftContainer = () => {
  const { ScreenWidth } = useScreenWidth();
  return (
    <div className="left">
      <div className="leftContainer">
        <div>
          <img className="imageAvatar" src="images/avatar2.PNG" alt="" />
          <h2>
            Hi, my name is Mario Fabijanec and I am a web stack developer from
            Zagreb. Welcome to my portfolio.
          </h2>
        </div>

        {ScreenWidth > 850 && <Links />}
      </div>
    </div>
  );
};

export default LeftContainer;
