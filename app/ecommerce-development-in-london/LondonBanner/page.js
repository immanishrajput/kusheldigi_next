'use client';
import React from "react"; 
import "./londonbanner.css";


const LondonBanner = () => {
    return (
        <section className="london-banner-section">
            <div className="london-banner-overlay">
                <div className="london-banner-container">
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
                </div>
            </div>
        </section>
    );
};

export default LondonBanner;
