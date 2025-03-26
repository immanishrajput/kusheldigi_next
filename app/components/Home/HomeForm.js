"use client";
import React, { useEffect, useRef, useState } from "react";
// import "intl-tel-input/build/css/intlTelInput.css";
// import intlTelInput from "intl-tel-input";
import "./homeBan.css";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

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
  // const phoneInputRef = useRef(null);

    const [formData,setFormData] = useState({
      fullName : '',
      phoneNo : '',
      email : '',
      msg : ''
    });
    const [loading,setLoading] = useState(false);

    const navigate = useRouter();

    const handleFormChange = (e) => {
      const {name,value} = e.target;
      setFormData(prev => ({...prev, [name]: value}));
      console.log({[name]:value});
    }

    const handleForm = async(e) => {
      e.preventDefault();
      console.log(formData);
      setLoading(true);
      try {
        const response = await fetch("https://backend.kusheldigi.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        console.log(result);

        if (response.ok) {
          navigate.push('/success');
        } else {
          alert(JSON.stringify(response),"Unknown error");
        }
      } catch (error) {
        console.error("Error while sending email:", error);
        // alert("An error occurred while sending the email. Please try again.");
      } finally {
        setLoading(false);
        setFormData({
          fullName : '',
          phoneNo : '',
          email : '',
          msg : ''
        })
      }
    }
  
  return (
    <div>
      <div className="contact-container" id="form-section">
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
            <form onSubmit={handleForm} className="contact-htmlForm" id="contacthtmlForm">
              <div className="contact-first-div">
                <div>
                  <label htmlFor="name" className="contact-label">
                    Name
                  </label>
                  <br/>
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Your Name"
                    name="fullName"
                    id="name"
                    required
                    value={formData?.fullName}
                    onChange={handleFormChange}
                  />
                </div>
                <div id="homePhoneDiv">
                  <label htmlFor="phone" className="contact-label">
                    Phone Number
                  </label>
                  <PhoneInput
                    className="contact-input"
                    country={'in'}
                    // type="text"
                    placeholder="Phone Number"
                    name="phoneNo"
                    id="phoneNo"
                    maxLength="10"
                    // ref={phoneInputRef}
                    value={formData?.phoneNo}
                    // onChange={handleFormChange}
                    onChange={(phone) => setFormData((prev) => ({ ...prev, phoneNo: phone }))}
                    inputProps={{
                        required: true,
                    }}
                    countryCodeEditable={false}
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
                  value={formData?.email}
                  onChange={handleFormChange}
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
                  value={formData?.msg}
                  onChange={handleFormChange}
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
                    id="ans-captch"
                  />
                </div>
                <span className="captcha-btn" onClick={verifyCaptcha}>
                  Verify Captcha
                </span>
              </div>

              <button className="contact-htmlForm-btn" type="submit">
               {loading ? 'Sending...' : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
