'use client';
import React from "react";
import "./belgiumbanner.css";

const BelgiumBanner = () => {
    return (
        <section className="belgium-banner-section">
            <div className="belgium-banner-overlay">
                <div className="belgium-banner-content-wrapper">
                    {/* Left Content */}
                    <div className="belgium-banner-left">
                        <h1 className="belgium-banner-heading">
                            E-Commerce Development<br />
                            <span className="belgium-banner-span">Company in Belgium</span>
                        </h1>
                        <p className="belgium-banner-subtext">
                            As a premier ecommerce development company in belgium, we specialize in creating tailored ecommerce solutions that drive sales, enhance customer experiences, and streamline business operations. Our custom-built ecommerce platforms are designed to help businesses thrive in the competitive online marketplace.
                        </p>
                        <div className="belgium-banner-buttons">
                            <button className="belgium-banner-btn-yellow">Let's Connect</button>
                            <button className="belgium-banner-btn-outline">Schedule a Demo</button>
                        </div>

                        <div className="belgium-banner-images">
                            <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750318233/Layer_1_1_1_n5iz9z.png" alt="eCommerce Development in belgium" className="belgium-banner-image" />
                            <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750318233/Layer_0_1_vka5nl.png" alt="Graphic Design" className="belgium-banner-graphic" />
                            <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750318233/Layer_0_2_kmvhzy.png" alt="Graphic Design" className="belgium-banner-graphic2" />
                        </div>
                    </div>


                    {/* Right Form */}
                    <div className="belgium-banner-form">
                        <form className="form-box">
                            <h3 className="form-heading">Are you ready to start <strong>your project?</strong></h3>
                            <p className="form-subheading">Drop your details below!</p>

                            <input type="text" placeholder="Full Name" className="form-input" />
                            <input type="email" placeholder="Email*" className="form-input" />

                            <div className="form-phone-wrapper">
                                <span className="form-country-code">(+1)</span>
                                <input type="tel" placeholder="Mobile Number" className="form-input phone-input" />
                            </div>

                            <div className="form-phone-wrapper">
                                <label className="form-captcha">1 + 3 =</label>
                                <input type="text" className="form-input" />
                            </div>



                            <div className="mt-btn">
                                <button type="submit" className="form-submit-btn">SUBMIT</button>
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

export default BelgiumBanner;
