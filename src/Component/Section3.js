import React from "react";
import "./styles/Section3.css";
import { ContactUs } from "./ContactUs";

const Section3 = () => {
  return (
    <div id="section3" className="section3">
      <h2>Get In Touch</h2>
      <div className="section3div">
        If you are interested in giving me a chance feel free to contact me and
        I will make sure to respond as soon as possible. In case you dont like
        forms you can call me or send an email, needed info can be find in my
        CV.
      </div>
      <ContactUs />
    </div>
  );
};

export default Section3;
