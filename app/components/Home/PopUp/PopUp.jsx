'use client'

import React, { useEffect, useRef, useState } from 'react'
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { RxCross1 } from "react-icons/rx";
import "./PopUp.css";
import popupAboveCompanies from "../../../assests/popup-upper-companies.png"
import popupBelowCompanies from "../../../assests/popup-below-companies.png"
import { useRouter } from 'next/navigation';

const Popup = () => {
    const [firstNo, setFirstNo] = useState(0);
    const [secondNo, setSecondNo] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [captchaVerified, setCaptchaVerified] = useState(false); 

    const router = useRouter();
  
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
  
    const verifyCaptcha = (e) => {
      e.preventDefault();
      if (parseInt(userAnswer) !== correctAnswer) {
        alert("Wrong Captcha! Try again.");
        generateCaptcha();
        return;
      }
      alert("Captcha Verified!!");
      setCaptchaVerified(true);
    };

    const phoneInputRef = useRef(null);

    useEffect(() => {
      if (phoneInputRef.current) {
        intlTelInput(phoneInputRef.current, {
          initialCountry: "in",
          geoIpLookup: (callback) => {
            fetch("https://ipapi.co/json")
              .then((res) => res.json())
              .then((data) => callback(data.country_code))
              .catch(() => callback("in"));
          },
          utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
      }
    }, []);

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phone: "",
      });

    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;
    
        if (name === "popMobile") {
          updatedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
        }
    
        setFormData((prevState) => ({
          ...prevState,
          [name]: updatedValue,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaVerified) {
            alert("Please verify the CAPTCHA before submitting.");
            return;
        }

        setLoading(true);
    
        try {
          const response = await fetch(
            "https://backend.kusheldigi.com/contact",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            }
          );
    
          const result = await response.json();
          console.log("Result--->>", result);
    
          if (response.ok) {
            router.push('/success');
          } else {
            alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
          }
        } catch (error) {
          console.error("❌ Error while sending email:", error);
        } finally {
          setLoading(false);
          setFormData({ firstName: "", email: "", phone: "" });
          generateCaptcha(); 
        }
    };

    const [showPopUp, setShowPopUp] = useState(false);
     
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(true);
        }, 15000);

        return () => clearTimeout(timer); 
    }, []);
    
    return (
        <div>
            {showPopUp && (
                <div className="popup-modal" id="popupModal">
                    <div className="modal-box">
                        <div className="cross-icon" onClick={() => setShowPopUp(false)}>
                            <RxCross1 />
                        </div>
                        <div className="upper-modal-box">
                            <div className="upper-left-content">
                                <h1 className="popup-form-heading">Hey Hey! Before You Leave...&#128075;</h1>
                                <hr className='popup-hr'/>
                                <p className="popupup-sm-heading">Our Experts are Ready to Provide Free</p>
                                <p className="popup-para"><img width={20} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073896/Eo_circle_green_checkmark.svg_1_say3rb.png" alt="" /> Development Blueprint.</p>
                                <p className="popup-para"><img width={20}  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073896/Eo_circle_green_checkmark.svg_1_say3rb.png" alt="" /> Tentative Budget.</p>
                                <p className="popup-para"><img width={20}  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073896/Eo_circle_green_checkmark.svg_1_say3rb.png" alt="" /> Estimated Time-To-Market.</p>
                            </div>
                        </div>
                        <div className="bottom-modal-box">
          <div>
            <div className="bottom-left-box">
              <h1 className="bottom-left-box-heading">95%</h1>
              <p className='popup-extra-small-heading'>Customer Retention Ratio</p>
            </div>
            <div className="bottom-left-box">
              <h1 className="bottom-left-box-heading">2000+</h1>
              <p className='popup-extra-small-heading'>Projects</p>
            </div>
          </div>
          <hr className="bottom-popup-hr" />

          <div>
            <div className="bottom-right-box">
              <h1 className="bottom-right-box-heading">1800+</h1>
              <p className='popup-extra-small-heading'>Certified Professionals</p>
            </div>
            <div className="bottom-right-box">
              <h1 className="bottom-right-box-heading">20+</h1>
              <p className='popup-extra-small-heading'>Global Offices</p>
            </div>
          </div>
        </div>

                        <div className="pop-right-parent-div">
                            <div className="pop-rightForm">
                                <h2 className="popup-contact-heading">Let’s Build your Success Together!</h2>
                                <form className="pop-contact-form" id="contactForm" onSubmit={handleSubmit}>
                                    <div className="input-parent-div">
                                        <input className="pop-contact-input" type="text" placeholder="Your Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                        <input className="pop-contact-input" type="email" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} required />
                                        <input className="pop-contact-input" type="tel" placeholder="Phone Number" name="phone" maxLength={10} value={formData.phone} onChange={handleChange} ref={phoneInputRef} required />
                                    </div>

                                    <div className="captcha-box">
                                        <div className='inputcapt'>
                                            <span>{`${firstNo} + ${secondNo} = `}</span>
                                            <input type="number" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} required id='popup-captchaAns' />
                                        </div>
                                        <button className="popup-captcha-btn" onClick={verifyCaptcha}>Verify Captcha</button>
                                    </div>

                                    <button className="pop-contact-form-btn" type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
                                    {loading && <span className="loader3"></span>}
                                    <img style={{width:'70%',margin:'10px auto'}} className="popup-companies" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073874/popup-upper-companies_qxbjt0.png' alt="companies" />
                                    <img style={{width:'80%',margin:'15px auto'}} className="popup-companies" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073843/popup-below-companies_yboe3z.png' alt="companies"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Popup;
