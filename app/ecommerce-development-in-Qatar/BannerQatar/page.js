"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import "./qatar.css";

const BannerQatar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
  });

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
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      return;
    }
    toast.success("Captcha Verified!!");
    setCaptchaVerified(true);
  };

  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: "qa",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("qa"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      // Optional: Store the instance if you ever need to validate
      phoneInputRef.current._iti = iti;
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    let updatedValue = value;

    // if (name === "phone") {
    //     updatedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    // }

    if (name === "name") {
      // ✅ Name only alphabets and spaces
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = phoneInputRef.current?.value || "";
    
    if (!formData.name || !formData.email || !phone) {
      toast.error("Please fill all the fields!");
      return;
    }
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address!");
      return;
    }
    if (
      formData.name.trim() === "" ||
      phone.trim() === "" ||
      formData.email.trim() === ""
    ) {
      toast.error("Please fill all the fields!!");
      return;
    }
    if (!captchaVerified) {
      toast.error("Please Verify the Captcha!!");
      generateCaptcha();
      return;
    }
    if (parseInt(userAnswer) !== correctAnswer) {
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      setCaptchaVerified(false);
      return;
    }

    setLoading(true);

    try {
      const dataToSend = {
        ...formData,
        phone,
      };
      const response = await fetch("https://backend.kusheldigi.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      console.log("Result--->>", result);

      if (response.ok || response.success === true || response.status === 200) {
        router.push("/thankyou");
      } else {
        alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("❌ Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "" });
      phoneInputRef.current.value = ""; // reset manually
      generateCaptcha();
    }
  };

    return (
        <section className="qatar-banner-section">
            <div className="qatar-banner-overlay">
                <div className="qatar-banner-content-wrapper">
                    {/* Left Content */}
                    <div className="qatar-banner-left">
                        <h1 className="qatar-banner-heading">
                            E-Commerce Development
                            <br />
                            <span className="qatar-banner-span">Company in Qatar</span>
                        </h1>
                        <p className="qatar-banner-subtext">
                            Looking to grow your online business with a trusted ecommerce
                            development company in qatar? Kushel Digi Solutions specializes
                            in creating custom, mobile-friendly, and conversion-focused
                            eCommerce websites. Our solutions are designed to boost your sales
                            while we handle the tech—so you can focus on your business.
                        </p>
                        <div className="qatar-banner-buttons">
                            <button className="qatar-banner-btn-yellow">
                                Get a Free Consultation
                            </button>
                            <button className="qatar-banner-btn-outline">
                                Schedule a Demo
                            </button>
                        </div>

                        <div className="qatar-banner-images">
                            <img
                                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281720_x2l3jk.png"
                                alt="eCommerce Development in noida"
                                className="noida-banner-image"
                            />
                            <img
                                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281718_y1ktz6.png"
                                alt="Graphic Design"
                                className="noida-banner-graphic"
                            />
                            <img
                                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281719_ywsaio.png"
                                alt="Graphic Design"
                                className="noida-banner-graphic2"
                            />
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="qatar-banner-form">
                        <form className="form-box" onSubmit={handleSubmit}>
                            <h3 className="form-heading">
                                Are you ready to start <strong>your project?</strong>
                            </h3>
                            <p className="form-subheading">Drop your details below!</p>

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="form-input"
                                value={formData?.name}
                                onChange={handleChange}
                                required

                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                className="form-input"
                                value={formData?.email}
                                onChange={handleChange}
                                required
                            />

                             <div className="form-phone-wrapper">
                                {/* <span className="form-country-code">(+1)</span> */}
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Mobile Number*"
                                    maxLength={10}
                                    className="form-input phone-input"
                                    // value={formData?.phone}
                                    // onChange={handleChange}
                                    ref={phoneInputRef}
                                    required
                                />
                            </div>

                            <div className="captcha-box">
                                <div className="inputcapt">
                                    <label htmlFor="ans-captch" className="visually-hidden">
                                        {`${firstNo} + ${secondNo} = `}
                                    </label>
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



                            <div className="mt-btn">
                                <button
                                    className="form-submit-btn"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Submit"}
                                </button>
                                {loading && <span className="loader3"></span>}
                            </div>

                            <p className="form-terms">
                                By clicking on submit, you agree to our
                                <a href="/terms"> Terms & Condition</a> and
                                <a href="/privacy"> Privacy policy</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerQatar;