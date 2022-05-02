import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <ul className="icons">
      <li>
        <a href="https://github.com/fabo777" rel="noreferrer" target="_blank">
          <div className="github"></div>
        </a>
      </li>
      <li>
        <a href="#section3" className="envelope">
          <div className="email"></div>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/mario-fabijanec-852745238/"
          rel="noreferrer"
          className="linkedin"
          target="_blank"
        >
          <div className="linkedin"></div>
        </a>
      </li>
    </ul>
  );
};

export default Links;
