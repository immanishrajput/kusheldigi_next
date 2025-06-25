"use client";

import React from "react";
import Image from "next/image";
import "./noidaexpertise.css";

export default function NoidaExpertiseSec() {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-image">
          <Image
            src="https://res.cloudinary.com/dknrega1a/image/upload/v1750772418/full-length-portrait-happy-young-woman-holding-shopping-bags-mobile-phone-isolated_xz1x6y.png"
            alt="Shopper"
            width={500}
            height={600}
            priority
          />
        </div>
        <div className="expertise-content">
          <h3 className="expertise-heading">How we are different?</h3>
          <h2 className="expertise-subheading">
            Proven Expertise: Achieving Success in eCommerce with Kushel Digi Solutions
          </h2>
          <p>
            <strong className="highlight-blue">Customized Solutions:</strong> We understand that every business is unique. Our approach begins with a deep dive into your brand's identity and customer expectations, crafting tailored eCommerce solutions that reflect your vision. From custom UI/UX designs to personalized features and functionalities, we ensure your online store stands out and resonates with your target audience.
          </p>
          <p>
            <strong className="highlight-blue">Innovative Technology:</strong> We leverage cutting-edge technologies and industry best practices to build robust eCommerce platforms. Our team is proficient in integrating advanced features such as AI-driven product recommendations, secure payment gateways, and responsive design, enhancing user experience and driving conversions.
          </p>
          <p>
            <strong className="highlight-blue">Scalability and Support:</strong> Our solutions are designed for growth. We prioritize scalability, ensuring your eCommerce website can handle increasing traffic and transactions without compromising performance. Moreover, we provide ongoing support and maintenance to optimize your site’s functionality and security, allowing you to focus on business growth confidently.
          </p>
        </div>
      </div>
    </section>
  );
}
