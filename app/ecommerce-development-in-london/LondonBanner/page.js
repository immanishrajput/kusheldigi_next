'use client';
import React from "react"; 
import "./londonbanner.css";

const LondonBanner = () => {
    return (
        <section className="london-banner-section">
            <div className="london-banner-overlay">
                <div className="london-banner-content-wrapper">
                    {/* Left Content */}
                    <div className="london-banner-left">
                        <h1 className="london-banner-heading">
                            eCommerce Development<br />
                            <span className="london-banner-span">Company in London</span>
                        </h1>
                        <p className="london-banner-subtext">
                            As a top <strong>e-Commerce development</strong> company in <strong>London, UK, SpaceStem</strong> specialises in building an <strong>eCommerce</strong> website for your unique online business needs. Our <strong>custom e-Commerce</strong> solutions provide the perfect digital platform for your eCommerce store or portal, leading to online success.
                        </p>
                        <div className="london-banner-buttons">
                            <button className="london-banner-btn-yellow">Let's Connect</button>
                            <button className="london-banner-btn-outline">Schedule a Demo</button>
                        </div>
                        
                    <div className="london-banner-images">
                        <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750318233/Layer_1_1_1_n5iz9z.png" alt="eCommerce Development in London" className="london-banner-image" />
                        <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750318233/Layer_0_1_vka5nl.png" alt="Graphic Design" className="london-banner-graphic" />
                        <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750318233/Layer_0_2_kmvhzy.png" alt="Graphic Design" className="london-banner-graphic2" />
                    </div>
                    </div>


                    {/* Right Form */}
                    <div className="london-banner-form">
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

export default LondonBanner;
