"use client";

import React from "react";
import Image from "next/image";
import "./keyfeatures.css";

const features = [
  "Secure Payment Gateways",
  "Inventory Management",
  "Mobile-Optimized Design",
  "Customer Account Management",
  "Order Tracking",
  "Marketing & SEO Tools",
];

export default function NoidaKeyFeatures() {
  return (
    <section className="key-features-section">
      <h2>Key Features</h2>
      <p>
        Discover the advantages of choosing <strong>Kushel Digi Solutions</strong>
      </p>
      <p>E-Commerce Website with WebTiger Technologies.</p>

      <div className="key-features-grid">
        {features.map((feature, index) => (
          <div className="feature-card-1" key={index}>
            <Image
              src="https://res.cloudinary.com/dknrega1a/image/upload/v1750830286/Mask_group_bwjhcp.png"
              alt="check-icon"
              className="feature-icon"
              width={30}
              height={30}
            />
            <span className="feature-text">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
