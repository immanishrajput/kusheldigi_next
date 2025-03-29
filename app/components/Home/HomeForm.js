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

  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log({ [name]: value });
  }

  const handleForm = async (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) !== correctAnswer) {
      alert("Wrong Captcha! Try again.");
      generateCaptcha(); 
      return; 
    }
    console.log(formData);
    setLoading(true);
    try {
      const response = await fetch("https://backend.kusheldigi.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        navigate.push('/success');
        generateCaptcha();
      } else {
        alert(JSON.stringify(response), "Unknown error");
      }
    } catch (error) {
      console.error("Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({
        firstName: '',
        phone: '',
        email: '',
        message: ''
      })
    }
  }

  return (
    <div>
      <div className="contact-container" id="form-section">
        <div className="inner-contact-container" id="innerIdcont">
          <div className="left">
            <h1 className="left-contact-heading">
              Want to Lead Market with AI-led Digital Solutions?
            </h1>
            <div className="contact-box">
              <div className="contact-card">
                <p className="call-us">
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742367984/us_flag-removebg-preview_yaabck.png"
                    alt="call"
                  />
                </p>
                <h3 className="us-number">+1-585-566-2070</h3>
                <p className="country">United States</p>
                <img
                loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741867204/phone-png_kjwe3t.png"
                  alt="call"
                  className="phone-icon"
                />
              </div>
              <div className="contact-card">
                <p className="call-us">
                  <img
                  loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742367985/istockphoto-1471401435-612x612-removebg-preview_yk8kie.png"
                    alt="call"
                  />
                </p>
                <h3 className="us-number">+91 9045301702</h3>
                <p className="country">India</p>
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741867204/phone-png_kjwe3t.png"
                  alt="call"
                  className="phone-icon"
                />
              </div>
            </div>
            <span className="clients">Our Clients</span>
            <div className="company-images">
              <img
                loading="lazy"
                className="contact-company"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073826/contact-upper-companies_pwuwvi.png"
                alt="companies"
                style={{margin:'0px auto',width:'70%',}}
              />
              <img
                loading="lazy"
                className="contact-company"
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073826/contact-below-companies_qyrqms.png"
                alt="companies"
                style={{margin:'15px auto',width:'60%',}}
              />
            </div>
          </div>
          <div className="right">
            <h2 className="contact-heading">
              Share Your Ideas, We'll Build it.
            </h2>
            <form onSubmit={handleForm} className="contact-htmlForm" id="contacthtmlForm">
              <div className="contact-first-div">

                {/* <div>
                  <label htmlFor="name" className="contact-label">
                    Name
                  </label>
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Your Name"
                    name="fullName"
                    id="name"
                    required
                    value={formData?.fullName}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z ]*$/.test(value)) {
                        handleFormChange(e);
                      }
                    }}
                  />
                </div> */}

                <div>
                  <label htmlFor="firstName" className="contact-label">
                    Name
                  </label>
                  <br />
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Your Name"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData?.firstName}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z ]*$/.test(value)) {
                        handleFormChange(e);
                      }
                    }}
                  />
                </div>

                {/* <div>

                  <label htmlFor="name" className="contact-label">
                    Name
                  </label>
                  <br />
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
                </div> */}
                <div id="homePhoneDiv">
                  <label htmlFor="phone" className="contact-label">
                    Phone Number
                  </label>
                  <PhoneInput
                    className="contact-input"
                    country={'in'}
                    placeholder="Phone Number"
                    name="phone"
                    id="phone"
                    maxLength="10"
                    value={formData?.phone}

                    onChange={(phone) => {
                      if (/^(?:\+?[0-9]{0,15})$/.test(phone)) {
                        setFormData((prev) => ({ ...prev, phone: phone }));
                      }
                    }}
                    inputProps={{
                      required: true,
                    }}
                    countryCodeEditable={false}
                  />
                </div>


{/* //   <label htmlFor="phoneNo" className="contact-label">
//     Phone Number
//   </label>
//   <input
//     className="contact-input"
//     type="number"
//     placeholder="Phone Number"
//     name="phoneNo"
//     id="phoneNo"
//     ref={phoneInputRef}
//     value={formData?.phoneNo}
//     onChange={(e) => {
//       const value = e.target.value;
//       if (/^\d{0, 10}$/.test(value)) {
//         handleFormChange(e);
//       }
//     }}
//     required
//   />
// </div> */}

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
            <label htmlFor="message" className="contact-label">
              Project Description
            </label>{" "}
            <br />
            <textarea
              className="contact-textArea"
              name="message"
              id="message"
              placeholder="How Can We Help You?"
              required
              value={formData?.message}
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
      </div >
    </div >
  );
};

export default Website;
