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
            title: 'Team Integration That Works',
            desc: `Edvantis teams work as an extension of your organization, aligning with your processes to ensure the best outcomes. It's not just about finishing the project but working with your team to achieve results.`
        },
        {
            icon: <PiMedalDuotone />,
            title: 'Trust and Industry Recognition',
            desc: `Maintaining a 98% CSAT year after year, we are trusted by clients and recognized by global platforms such as Clutch, G2, and IAOP for our reliable delivery and commitment to customer success.`
        },
        {
            icon: <IoStatsChartOutline />,
            title: 'Scalable Service Models',
            desc: `Our “LEGO-like” service models allow us to build the perfect collaboration together. We provide rapid recruitment, high retention rates, and scalable teams that dynamically evolve alongside your business goals.`
        },
        {
            icon: <PiHeadCircuit />,
            title: 'Knowledge Sharing',
            desc: `72% of our professionals are mid- and senior-level specialists who bring required knowledge to help with the delivery. Then we make sure you preserve this knowledge within your internal teams for future success.`
        }
    ];

    return (
        <div className='big-feature-outer-container'>
            <div className="big-feature-inner-container">
                <div className="left-big-feature-container">
                    <h2 id="bigcommerce-feature-heading primary-heading">What Sets Us <span className='big-feature-heading-color'>Apart</span></h2>
                    <p className='big-feature-para secondary-heading'>Since 2005, we’ve been helping businesses achieve their software product development goals. We do this on time, within budget, and with the highest quality possible.</p>

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