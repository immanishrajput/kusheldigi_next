"use client"
import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectDetails: "",
    interests: [],
    termsAccepted: false,
  });

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

  const handleChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
  <section className="contactMainku">
      <div className="contact-containerKush">
      <div className="form-sectionKush">
        <form onSubmit={handleSubmit} className="contact-formKush">
          <h2>Fill in the form</h2>
          
          <div className="contact-form1"><input type="text" name="fullName" placeholder="Full name *" value={formData.fullName} onChange={handleChange} required /></div>
          <div className="input-groupKush">
            <input type="email" name="email" placeholder="Business email *" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone number" maxLength={10} value={formData.phone} onChange={handleChange} />
          </div>
       <div>
           <textarea name="projectDetails" placeholder="Project details *" value={formData.projectDetails} onChange={handleChange} required></textarea>
       </div>
          <div className="interests-sectionCom">
            <p>What are you Interested in:</p>
            <div className="interests-listCom">
              {interestsOptions.map((interest) => (
                <button type="button" key={interest} className={formData.interests.includes(interest) ? "selectedCom" : ""} onClick={() => handleInterestClick(interest)}>
                  {interest}
                </button>
              ))}
            </div>
          </div>
         
        <div>
        <label className="terms-label">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
            *I have read and accepted the <a href="#">Terms & Conditions </a> and <a href="#"> Privacy Policy </a>
          </label>
          <button type="submit" className="submit-btnKush">Send Request</button>
        </div>
        </form>
      </div>
      <div className="info-sectionkUSH">
        <h2 className="DropCont"><span>Got an Idea? </span> Let’s Make It Happen.</h2>
       
        <p className="DropParaCont">Big or small, each idea has its potential, and we're here to make your idea a reality. Whether you're planning for a full-fledged eCommerce platform or require expert assistance on your ecommerce journey, </p>
        
        <div className="trusted-by">Tell us about your project. We’ll handle the rest.</div>
       <div className="trustedImage">
       <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGOS-1_dhbr7h.png" alt="image" />
       <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGO-2_mhkyhy.png" alt="img" />
       </div>
      </div>
    </div>
  </section>
  );
};

export default ContactUs;

