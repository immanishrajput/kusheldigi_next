"use client"
import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";

import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import '../../components/Home/homeBan.css'
const ContactUs = () => {
 

  const interestsOptions = [
    "Digital Transformation",
    "IT Consulting",
    "Engineering",
    "Data & Analytics",
    "AI",
    "Staff Augmentation",
    "Cloud",
    "Other",
  ];

  const handleChange1 = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleInterestClick = (interest) => {
    setFormData((prev) => {
      const isSelected = prev.interests.includes(interest);
      return {
        ...prev,
        interests: isSelected
          ? prev.interests.filter((item) => item !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  // };


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
      firstName: '',
      phone: '',
      email: '',
      message: '',
      // projectDetails: "",
      interests: [],
      termsAccepted: false,
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
        formData.firstName.trim() === '' ||
        formData.phone.trim() === '' ||
        formData.email.trim() === '' ||
        formData.message.trim() === '91'
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
    const trackRef = useRef(null);

    useEffect(() => {
      const track = trackRef.current;
      if (track) {
        const images = track.innerHTML;
        track.innerHTML += images;
      }
    }, []);
  return (
  <section className="contactMainku">
      <div className="contact-containerKush">
      <div className="form-sectionKush">
        <form  onSubmit={handleForm} className="contact-formKush">
          <h2>Fill in the form</h2>
          
          <div className="contact-form1"><input type="text" name="firstName" placeholder="Full name *"  value={formData?.firstName}
                    onChange={(e) => {
                      
                        handleFormChange(e);
                       

                      }
                      
                    }
   required /></div>
          <div className="input-groupKush">
            <input type="email" name="email" placeholder="Business email *"   value={formData?.email}
                  onChange={handleFormChange} required />
              <input type="tel" name="phone" placeholder="Phone number" maxLength={10} value={formData?.phone}
              onChange={(e) => {
    handleFormChange(e)
  }}
inputProps={{
  required: true,
}}
countryCodeEditable={false}
/> 
          </div>
       <div>
           <textarea name="message" placeholder="Project details *"  value={formData?.message}
                  onChange={handleFormChange} required></textarea>
       </div>
          <div className="interests-sectionCom">
            <p>What are you Interested in:</p>
            <div className="interests-listCom">
              {interestsOptions.map((interest) => (
                <button type="button" key={interest}   className={(formData?.interests || []).includes(interest) ? "selectedCom" : ""} onClick={() => handleInterestClick(interest)}>
                  {interest}
                </button>
              ))}
            </div>
          </div>
         
        <div>
        <label className="terms-label">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange1} required />
            *I have read and accepted the <a href="#">Terms & Conditions </a> and <a href="#"> Privacy Policy </a>
          </label>
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
          <button type="submit" className="submit-btnKush">    {loading ? 'Sending...' : "Submit"}</button>
        </div>
        </form>
      </div>
      <div className="info-sectionkUSH">
        <h2 className="DropCont"><span>Got an Idea? </span> Let’s Make It Happen.</h2>
       
        <p className="DropParaCont">Big or small, each idea has its potential, and we're here to make your idea a reality. Whether you're planning for a full-fledged eCommerce platform or require expert assistance on your ecommerce journey, </p>
        
        <div className="trusted-by">Tell us about your project. We’ll handle the rest.</div>

        <div className="sliderTrusted">
                        <div className="slider-track" ref={trackRef}>
                        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGOS-1_dhbr7h.png" alt="image" />
                        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGO-2_mhkyhy.png" alt="img" />
                        </div>
                    </div>
       {/* <div className="trustedImage">
      
       <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGOS-1_dhbr7h.png" alt="image" />
       <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGO-2_mhkyhy.png" alt="img" />
       </div> */}
      </div>
    </div>
  </section>
  );
};

export default ContactUs;

