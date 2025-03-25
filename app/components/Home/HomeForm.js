"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import "./homeBan.css";
const Website = () => {
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setFirstNo(num1);
    setSecondNo(num2);
    setCorrectAnswer(num1 + num2);
    setUserAnswer("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const verifyCaptcha = () => {
    if (parseInt(userAnswer) !== correctAnswer) {
      alert("Wrong Captcha! Try again.");
      generateCaptcha();
      return;
    }
    alert("Captcha Verified!!");
  };
  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      const phoneInput = intlTelInput(phoneInputRef.current, {
        initialCountry: "us",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("us"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    }
  }, []);
  // document.getElementById("talk-btn").addEventListener("click", function (event) {
  //   event.preventDefault();
  //   let formSection = document.getElementById("form-section");
  //   let offset = 100;

  //   window.scrollTo({
  //     top: formSection.offsetTop - offset,
  //     behavior: "smooth"
  //   });
  // });

 
    const formRef = useRef(null);
  
    const handleClick = (event) => {
      event.preventDefault();
      if (formRef.current) {
        const offset = 100;
        window.scrollTo({
          top: formRef.current.offsetTop - offset,
          behavior: "smooth",
        });
      }
    };
  
  return (
    <div>
      <div className="contact-container" id="form-section" ref={formRef}>
        <div className="inner-contact-container">
          <div className="left">
            <h1 className="left-contact-heading">
              Want to Lead Market with AI-led Digital Solutions?
            </h1>
            <div className="contact-box">
              <div className="contact-card">
                <p className="call-us">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742367984/us_flag-removebg-preview_yaabck.png"
                    alt="call"
                  />
                </p>
                <h3 className="us-number">+1-585-566-2070</h3>
                <p className="country">United States</p>
                <img
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741867204/phone-png_kjwe3t.png"
                  alt="call"
                  className="phone-icon"
                />
              </div>
              <div className="contact-card">
                <p className="call-us">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742367985/istockphoto-1471401435-612x612-removebg-preview_yk8kie.png"
                    alt="call"
                  />
                </p>
                <h3 className="us-number">+91 9045301702</h3>
                <p className="country">India</p>
                <img
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741867204/phone-png_kjwe3t.png"
                  alt="call"
                  className="phone-icon"
                />
              </div>
            </div>
            <span className="clients">Our Clients</span>
            <div className="company-images">
              <img
                className="contact-company"
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741867251/contact-companies_xlbwrs.png"
                alt="companies"
              />
            </div>
          </div>
          <div className="right">
            <h2 className="contact-heading">
              Share Your Ideas, We'll Build it.
            </h2>
            <form className="contact-htmlForm" id="contacthtmlForm">
              <div className="contact-first-div">
                <div>
                  <label htmlFor="name" className="contact-label">
                    Name
                  </label>
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="contact-label">
                    Phone Number
                  </label>
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    id="phone"
                    ref={phoneInputRef}
                    required
                  />
                </div>
              </div>
              <div className="contact-div">
                <label htmlFor="email" className="contact-label">
                  Business Email
                </label>{" "}
                <br />
                <input
                  className="contact-input contact-emailInput"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="contact-div">
                <label htmlFor="msg" className="contact-label">
                  Project Description
                </label>{" "}
                <br />
                <textarea
                  className="contact-textArea"
                  name="msg"
                  id="msg"
                  placeholder="How Can We Help You?"
                  required
                ></textarea>
              </div>
              <div className="captcha-box">
                <div className="inputcapt">
                  <span>{`${firstNo} + ${secondNo} = `}</span>
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    required
                  />
                </div>
                <button className="captcha-btn" onClick={verifyCaptcha}>
                  Verify Captcha
                </button>
              </div>

              <button className="contact-htmlForm-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
