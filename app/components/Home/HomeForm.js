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
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setFirstNo(num1);
    setSecondNo(num2);
    setCorrectAnswer(num1 + num2);
    setUserAnswer("");
    setCaptchaVerified(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const verifyCaptcha = () => {
    if (parseInt(userAnswer) !== correctAnswer) {
      alert("Wrong Captcha! Try again.");
      generateCaptcha();
      setCaptchaVerified(false);
      return;
    }
    alert("Captcha Verified!!");
    setCaptchaVerified(true);
  };

  const [formData, setFormData] = useState({
    name2: '',
    phone2: '',
    email2: '',
    message2: ''
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
    if (
      formData.name2.trim() === '' ||
      formData.phone2.trim() === '' ||
      formData.email2.trim() === '' ||
      formData.message2.trim() === '91'
    ) {
      alert("Please fill all the fields!!");
      return;
    }
    if (!captchaVerified) {
      alert("Please Verify the Captcha !!");
      generateCaptcha();
      return;
    }
    if (parseInt(userAnswer) !== correctAnswer) {
      alert("Wrong Captcha! Try again.");
      generateCaptcha();
      setCaptchaVerified(false);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://backend.kusheldigi.com/contact2", {
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
        name2: '',
        phone2: '',
        email2: '',
        message2: ''
      })
    }
  }

  return (
    <div>
      <div className="contact-container" id="form-section">
        <div className="inner-contact-container" id="innerIdcont">
          <div className="left">
            <h3 className="left-contact-heading">
              Want to Lead Market with AI-led Digital Solutions?
            </h3>
            <div className="contact-box">
              <div className="contact-card">
                <p className="call-us" id="CallusI">
                  <img
                    width="34"
                    height="30"
                    loading="lazy"
                    // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742367984/us_flag-removebg-preview_yaabck.png"
                    src="https://res.cloudinary.com/dgif730br/image/upload/v1743497577/flag-1_d8qcmk.png"
                    alt="call"
                  />
                </p>
                <h3 className="us-number">+1-585-566-2070</h3>
                <p className="country">United States</p>
                <svg className="phone-icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="15" height="15" viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#1b76fe" stroke="none">
                    <path d="M1473 2986 c-87 -40 -97 -178 -15 -220 15 -7 68 -17 117 -21 204 -16
347 -54 505 -136 232 -119 417 -305 535 -540 77 -151 115 -296 130 -494 8
-102 23 -138 65 -160 66 -34 149 -5 177 63 28 68 -3 318 -63 502 -191 583
-709 979 -1329 1015 -67 4 -98 2 -122 -9z"/>
                    <path d="M520 2760 c-224 -58 -400 -210 -481 -415 -21 -54 -23 -75 -22 -200 3
-583 336 -1220 855 -1637 251 -203 553 -358 839 -432 201 -52 446 -77 554 -57
169 31 352 175 434 342 45 91 81 218 81 283 0 46 -27 97 -64 121 -20 13 -487
99 -909 166 -116 18 -175 -19 -197 -126 l-12 -56 -56 32 c-264 148 -525 399
-707 679 -97 149 -94 137 -30 150 107 22 144 81 126 197 -67 422 -153 889
-166 909 -42 65 -113 78 -245 44z"/>
                    <path d="M1460 2408 c-47 -32 -62 -63 -56 -118 3 -35 11 -51 38 -76 31 -28 43
-32 121 -38 335 -27 586 -278 613 -613 6 -78 10 -90 38 -121 25 -27 41 -35 76
-38 55 -6 86 9 118 56 22 33 24 41 18 124 -15 223 -104 418 -262 578 -156 157
-358 249 -579 264 -84 6 -92 4 -125 -18z"/>
                  </g>
                </svg>

              </div>
              <div className="contact-card">
                <p className="call-us">
                  <img
                    width="34"
                    height="30"
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742367985/istockphoto-1471401435-612x612-removebg-preview_yk8kie.png"
                    alt="call"
                  />
                </p>
                <h3 className="us-number">+91 9045301702</h3>
                <p className="country">India</p>
                {/* <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741867204/phone-png_kjwe3t.png"
                  alt="call"
                  className="phone-icon"
                /> */}
                <svg className="phone-icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="15" height="15" viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#1b76fe" stroke="none">
                    <path d="M1473 2986 c-87 -40 -97 -178 -15 -220 15 -7 68 -17 117 -21 204 -16
347 -54 505 -136 232 -119 417 -305 535 -540 77 -151 115 -296 130 -494 8
-102 23 -138 65 -160 66 -34 149 -5 177 63 28 68 -3 318 -63 502 -191 583
-709 979 -1329 1015 -67 4 -98 2 -122 -9z"/>
                    <path d="M520 2760 c-224 -58 -400 -210 -481 -415 -21 -54 -23 -75 -22 -200 3
-583 336 -1220 855 -1637 251 -203 553 -358 839 -432 201 -52 446 -77 554 -57
169 31 352 175 434 342 45 91 81 218 81 283 0 46 -27 97 -64 121 -20 13 -487
99 -909 166 -116 18 -175 -19 -197 -126 l-12 -56 -56 32 c-264 148 -525 399
-707 679 -97 149 -94 137 -30 150 107 22 144 81 126 197 -67 422 -153 889
-166 909 -42 65 -113 78 -245 44z"/>
                    <path d="M1460 2408 c-47 -32 -62 -63 -56 -118 3 -35 11 -51 38 -76 31 -28 43
-32 121 -38 335 -27 586 -278 613 -613 6 -78 10 -90 38 -121 25 -27 41 -35 76
-38 55 -6 86 9 118 56 22 33 24 41 18 124 -15 223 -104 418 -262 578 -156 157
-358 249 -579 264 -84 6 -92 4 -125 -18z"/>
                  </g>
                </svg>
              </div>
            </div>
            <span className="clients">Our Clients</span>
            <div className="company-images">
              <img
                width="451"
                height="65"
                loading="lazy"
                className="contact-company"
                src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGOS-1_dhbr7h.png"
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073826/contact-upper-companies_pwuwvi.png"
                alt="companies"
                style={{ margin: '0px auto', width: '70%', }}
              />
              <img
                width="387"
                height="40"
                loading="lazy"
                className="contact-company"
                src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGO-2_mhkyhy.png"
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073826/contact-below-companies_qyrqms.png"
                alt="companies"
                style={{ margin: '15px auto', width: '60%', }}
              />
            </div>
          </div>
          <div className="right">
            <h3 className="contact-heading">
              Share Your Ideas, We'll Build it.
            </h3>
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
                  <label htmlFor="name2" className="contact-label">
                    Name
                  </label>
                  <br />
                  <input
                    className="contact-input down-contact-name-input"
                    type="text"
                    placeholder="Your Name"
                    name="name2"
                    id="name2"
                    required
                    value={formData?.name2}
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
                  <label htmlFor="phone2" className="contact-label">
                    Phone Number
                  </label>
                  <PhoneInput
                    className="contact-input"
                    country={'in'}
                    placeholder="Phone Number"
                    name="phone2"
                    id="phone2"
                    maxLength="10"
                    value={formData?.phone2}

                    onChange={(phone2) => {
                      if (/^(?:\+?[0-9]{0,15})$/.test(phone2)) {
                        setFormData((prev) => ({ ...prev, phone2:phone2 }));
                      };
                      // console.log('phone2',phone2)
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
                <label htmlFor="email2" className="contact-label">
                  Business Email
                </label>{" "}
                <br />
                <input
                  className="contact-input contact-emailInput"
                  type="email"
                  name="email2"
                  id="email2"
                  placeholder="Email"
                  value={formData?.email2}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="contact-div">
                <label htmlFor="message2" className="contact-label">
                  Project Description
                </label>{" "}
                <br />
                <textarea
                  className="contact-textArea"
                  name="message2"
                  id="message2"
                  placeholder="How Can We Help You?"
                  required
                  value={formData?.message2}
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
