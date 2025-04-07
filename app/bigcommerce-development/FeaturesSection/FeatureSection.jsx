'use client';

import React from 'react';
import "./FeatureSection.css";
import { PiTargetDuotone } from "react-icons/pi";
import { PiMedalDuotone } from "react-icons/pi";
import { IoStatsChartOutline } from "react-icons/io5";
import { PiHeadCircuit } from "react-icons/pi";

const FeatureSection = () => {

    const features = [
        {
            icon: <PiTargetDuotone />,
            title: 'Scalable Architecture',
            desc: `BigCommerce is known for offering flexible customization options that allows businesses to design unique storefronts to handle growing customer demands.`
        },
        {
            icon: <PiMedalDuotone />,
            title: 'Omnichannel Selling',
            desc: `BigCommerce will help you to expand your reach by selling across multiple channels, including social media and marketplace from centralized BigCommerce dashboard.
`
        },
        {
            icon: <IoStatsChartOutline />,
            title: 'Advanced Marketing Tools',
            desc: `Most important features of Bigcommerce is that it boost your store’s visibility with in-built SEO features, customizable URLs and marketing tools that drive traffic along with high conversions.`
        },
        {
            icon: <PiHeadCircuit />,
            title: 'Secure Infrastructure',
            desc: `It ensure a secure shopping experience by integrating features like enterprise-level security, PCI compliance,fast-loading pages and optimal performance for your customers.
`
        }
    ];

    return (
        <div className='big-feature-outer-container'>
            <div className="big-feature-inner-container">
                <div className="left-big-feature-container">
                <h2 className="bigcommerce-feature-heading primary-heading">Features of BigCommerce Solutions</h2>
                    <p className='big-feature-para secondary-heading'>BigCommerce can power your online store by offering scalability, seamless integrations, and advanced features that will definitely drive success in the digital marketplace.
                    </p>

                    <div className="left-big-feature-grid">

                        {features.map((feature, index) => (
                            <div key={index} className="left-big-feature-grid-item">
                                <span className='big-feature-icon'>{feature.icon}</span>
                                <h3 className='big-feature-card-title'>{feature.title}</h3>
                                <p className='big-feature-card-desc'>{feature.desc}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="right-big-feature-container">
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743777748/it-consult_y2ofwh.png" alt="feature-image" />
                </div>
            </div>
        </div>
    )
}

export default FeatureSection