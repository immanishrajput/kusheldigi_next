import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
// import { useNavigate } from "react-router-dom";
import Router from "next/navigation";

const ContactForm1 = ({ notify }) => {
 
  const pattern = new RegExp(/^\d{1,9}$/);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const [value1, setValue1] = useState({
    phone: "",
  });

 
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleChange1 = (e) => {
    setValue1({ ...value1, [e.target.name]: e.target.value });
    if (!pattern.test(e.target.value)) setIsError(true);
    else setIsError(false);
  };

  const [loading , setloading] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    setTimeout(()=>{
  navigate("/success");
   setloading(false);
    },1500)
     
    const res = await fetch("https://backend.kusheldigi.com/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...value, ...value1 }),
    });

    const data2 = {
      FirstName: value.firstName , 
      LastName: value.lastName , 
      Email : value.email , 
      Phone: value1.phone
    }
    const res2 = await fetch("https://hmsbackend.kusheldigi.com/lead/instaAddLead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({...data2}),
    });

    const data = await res.json();
  
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    setValue({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setloading(false);

    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;


  };

  
  return (
    <>
      <div className="hoGet_inTouchWrap" id="HomeSlide">
        <div className="GetinTouchContain">
          {/* left side */}
          <div className="getINleftSide">
            <h2 className="getInLefHead">
              {" "}
              Ready to Build Next-Level Custom Digital Solutions?
            </h2>

            <p className="getInPARA">
              Please fill in the form and let’s chat understand how we can help
              you better
            </p>

            <div className="getInBox">
            <div className="getInSingleBox">
              
                <div className="getInMain">
                  <p className="getInCallus">Call Us</p>

                  <p className="getInNUM">+91-9045-301-702</p>

                  <p className="usText">India</p>
                </div>
              </div>
              <div className="getInSingleBox">
               

                <div className="getInMain">
                  <p className="getInCallus">Call Us</p>

                  <p className="getInNUM">+1-585-566-2070</p>

                  <p className="usText">United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="getInRight">
            <h2 className="getInRigHead">Get Answers to your Questions</h2>

            <form onSubmit={handleSubmit} className="getInForm">
              <div className="getInTwo">
                <input
                  name="firstName"
                  value={value.firstName}
                  required
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name*"
                  maxLength="32"
                  onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')}
                  
                />
                <input
                  name="lastName"
                  required
                  value={value.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name*"
                  maxLength="32"
                  onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')}
                />
              </div>

              <div className="phoNumWrap">
               
                <PhoneInput
                inputClass="hjj"
                  country={'in'}
                  id="phone"
                  value={value1.phone}
                  name="phone"
                  placeholder="Enter your phone"
                   maxLength="10"
                  onChange={phone => {
                    setValue1({ phone });
                  }}
                  inputProps={{
                    required: true,
                  }}

                  countryCodeEditable={false}

                   
            
                />

  
                <span id="phoneError" className="validationerror"></span>
              </div>

              <input
                name="email"
                id="email"
                required
                value={value.email}
                onChange={handleChange}
                type="email"
                placeholder="Email*"
                className="busnessInput"
              />

              <select
                name="service"
                id="service"
                required
                value={value.service || ""}
                onChange={handleChange}
                className="selectSERVICE"
              >
                <option value="">Services*</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="E - Commerce Solutions">E - Commerce Solutions</option>
                <option value="Web development">Web development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option  value="Graphic Design">Graphic Design</option>
                <option value="Staff Augmentation">Staff Augmntation</option>
                <option  value="Other">Other</option>

              </select>

              <textarea
                name="message"
                id="message"
                value={value.message}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="letConTextarea"
                placeholder="Message"
              ></textarea>

              <button type="submit" className="letConnecBtn"> {
                loading ? <div class="spinner33"></div>: 
                <>  <span>Lets Connect</span> 
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.20697 12.1879L7.91397 6.48093L2.20697 0.773926L0.792969 2.18793L5.08597 6.48093L0.792969 10.7739L2.20697 12.1879Z" fill="#0B56E4"/>
              </svg>
              </>
}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm1;
