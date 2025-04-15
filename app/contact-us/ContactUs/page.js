"use client"
import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";

import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import '../../components/Home/homeBan.css'
import { GiTrophyCup } from "react-icons/gi";
import { FaAward, FaRegUser, FaUserAlt } from "react-icons/fa";
const ContactUs = () => {
 

  const interestsOptions = [
    "UI/UX Design",
    "E-Commerce Solution",
    "Web development",
    "Mobile App Development",
    // "Digital Marketing",
    "Graphic Design",
    "Staff Augmentation",
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
      firstName11: '',
      phone11: '',
      email11: '',
      message11: '',
      service11: [],
      termsAccepted: false,
    });
    
  //   const handleChange = (e) => {
  //     console.log(e);
      
  // };
  const handleChange = (e) => {
    
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        service11: checked
          ? [...prev.service11, value]
          : prev.service11.filter((s) => s !== value)
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
      console.log(formData);
      
    }
  };
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
        formData.firstName11.trim() === '' ||
        formData.phone11.trim() === '' ||
        formData.email11.trim() === '' ||
        formData.message11.trim() === '91'
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
        const response = await fetch("https://backend.kusheldigi.com/contact11", {
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
          firstName11: '',
          phone11: '',
          email11: '',
          message11: '',
          service11:[]
        })
      }
    }
    const trackRef = useRef(null);

    useEffect(()=>{
      console.log(formData)
    },[formData])

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
        <form  onSubmit={handleForm} className="contact-formKush" id="contactForm">
          <h2>Fill in the form</h2>
          
          <div className="contact-form1"><input type="text" name="firstName11" placeholder="Full name *"  value={formData?.firstName11}
                     onChange={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z ]*$/.test(value)) {
                        handleFormChange(e);
                      }
                    }} required />
                         </div>
          <div className="input-groupKush">
            <input type="email" name="email11" placeholder="Business email *"   value={formData?.email11}
                  onChange={handleFormChange} required />
            
<input
  type="tel"
  name="phone11"
  placeholder="Phone number*"
  maxLength={10}
  value={formData.phone11}
  onChange={(e) => {
    const value = e.target.value;
    if (/^\+?[0-9]{0,15}$/.test(value) || value === "") {
      setFormData((prev) => ({ ...prev, phone11: value }));
    }
  }}
  required
/>

          </div>
       <div>
           <textarea name="message11" placeholder="Project details *"  value={formData?.message11}
                  onChange={handleFormChange} required></textarea>
       </div>
         
         
<div className="interests-listCom checkboxes-listCom">
  {interestsOptions.map((service, index) => {
    const inputId = `service-${index}`;
    const isSelected = (formData.service11 || []).includes(service);
    return (
      <label
        key={inputId}
        className={`checkbox-labelCom ${isSelected ? 'selecteCom' : ''}`}
        htmlFor={inputId}
      >
        <input
          type="checkbox"
          name="service11"
          id={inputId}
          value={service}
          onChange={handleChange}
          checked={isSelected}
          className="checkedCheckbox"
        />
        {service}
      </label>
    );
  })}
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
        <div className="row-box">
                        <div className="col-box dis-flex">
                            <div className="iconImgReact">
                            <GiTrophyCup/>
                            </div>

                            <div className="desp">
                                <h4>8+ Years of Experience</h4>
                                <p>Delivering smart, scalable solutions for complex business challenges.</p>
                            </div>
                        </div>
                        <div className="col-box dis-flex">
                            <div className="iconImgReact">
                            <FaAward/>
                            </div>

                            <div className="desp">
                                <h4>1000+ Clients Served</h4>
                                <p>From budding startups to Fortune 500 companies – we’ve done it all.</p>
                            </div>
                        </div>
                        <div className="col-box dis-flex">
                            <div className="iconImgReact">
                            <FaUserAlt/>
                            </div>

                            <div className="desp">
                                <h4>250+ Experts Onboard</h4>
                                <p>A powerhouse team focused to deliver digital excellence and business growth.  </p>
                            </div>
                        </div>

                    </div>
        {/* <p className="DropParaCont">Big or small, each idea has its potential, and we're here to make your idea a reality. Whether you're planning for a full-fledged eCommerce platform or require expert assistance on your ecommerce journey, </p> */}
        
        <div className="trusted-by">Tell us about your project. We’ll handle the rest.</div>

        <div className="sliderTrusted">
                        <div className="slider-track" ref={trackRef}>
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203598/webinstalogo_rutcoc_1_empjy6.png" alt="image" />
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203613/summer_2_htxjay.png" alt="img" />
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203624/CodePXL_Web_Logo_1_cr6g7c.png" alt="img" />
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203637/Slide365_Logo_1_x9pvmf.png" alt="img" />
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203651/sights_and_scope_black_logo_2_ksdcq4.png" alt="img" />
                        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203692/70904_228x204_1_rvp6ue.png" alt="img" />

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

