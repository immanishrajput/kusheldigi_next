'use client';
import React from 'react';
import Image from 'next/image';
import './noidastats.css';

const NoidaStats = () => {
  const features = [
    {
      icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750754424/shops1_ydonzl.png",
      title: "Beautiful Online Store",
      bgClass: "bg-blue",
    },
    {
      title: "Multiple Payment Gateways",
      icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750754424/cash1_emha95.png",
      bgClass: "bg-yellow",
    },
    {
      title: "Shipping Integration",
      icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750754424/data-processing1_jksesg.png",
      bgClass: "bg-purple",
    },
    {
      title: "Mobile Optimized",
      icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750754424/mobile-optimization1_pvcgdh.png",
      bgClass: "bg-green",
    },
  ];

  return (
    <div className="features-container">
      <h2 className="features-title">The Best We Have For You</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className={`feature-card ${feature.bgClass}`}>
            <div className="feature-icon-wrapper">
              <Image
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
                width={64}
                height={64}
              />
            </div>
            <p className="feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoidaStats;

