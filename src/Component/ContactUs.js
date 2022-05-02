import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

export const ContactUs = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    sendEmail(data, e);
  };
  const onChangeHandle = (value) => {
    setRecaptchaValue(value);
    setIsVerified(true);
    return value;
  };
  const sendEmail = (templateParams, e) => {
    templateParams = {
      ...templateParams,
      "g-recaptcha-response": recaptchaValue,
    };
    console.log(templateParams);
    e.preventDefault();

    emailjs
      .send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        templateParams,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent.");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Something went wrong....");
        }
      )
      .catch((error) => alert(error.message))
      .finally(e.target.reset());
  };

  return (
    <form className="form" ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className="emailDiv">
        <input
          className="input2"
          type="text"
          placeholder=" Name"
          name="name"
          {...register("name", {
            required: true,
            maxLength: 80,
            pattern: /^[a-zA-Z\s]*$/i,
          })}
        />
        <div className="ErrorMsg">
          {errors.name?.type === "required" && "First name is required."}
        </div>
        <div className="ErrorMsg">
          {errors.name?.type === "pattern" &&
            "Name should include only letters."}
        </div>
        <div className="ErrorMsg">
          {errors.email?.type === "required" && "Email is required."}
        </div>
        <div className="ErrorMsg">
          {errors.email?.type === "pattern" && "Incorrect email form."}
        </div>
        <input
          className="input2"
          type="text"
          placeholder=" Email"
          name="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
      </div>

      <input
        className="input"
        type="text"
        placeholder="Message"
        name="message"
        {...register("message", {})}
      />

      <ReCAPTCHA
        className="g-recaptcha"
        sitekey={`${process.env.REACT_APP_RECAPTCHA_SITEKEY}`}
        onChange={onChangeHandle}
      />

      <input disabled={!isVerified} type="submit" className="input marginBot" />
    </form>
  );
};
