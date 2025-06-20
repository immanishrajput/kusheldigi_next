"use client";
import React from "react";
import "./features.css"

const features = [
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/smartphone.png",
    title: "Mobile-Optimized Design",
    description:
      "Ensure a seamless shopping experience across all devices. Our websites are fully responsive, delivering fast load times and smooth navigation on smartphones, tablets, and desktops.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/secured-letter.png",
    title: "Secure Payment Gateway Integration",
    description:
      "We integrate trusted and secure payment gateways to provide safe and flexible payment options for your customers, supporting credit cards, wallets, UPI, and more.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/admin-settings-male.png",
    title: "User-Friendly Admin Panel",
    description:
      "Ensure a seamless shopping experience across all devices. Our websites are fully responsive, delivering fast load times and smooth navigation on smartphones, tablets, and desktops.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/filter.png",
    title: "Advanced Product Filtering & Search",
    description:
      "We integrate trusted and secure payment gateways to provide safe and flexible payment options for your customers, supporting credit cards, wallets, UPI, and more.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1750412930/Mask_group_90_jqaj34.png",
    title: "SEO & Marketing Tools",
    description:
      "Ensure a seamless shopping experience across all devices. Our websites are fully responsive, delivering fast load times and smooth navigation on smartphones, tablets, and desktops.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/system-task.png",
    title: "Scalable & Customizable Architecture",
    description:
      "We integrate trusted and secure payment gateways to provide safe and flexible payment options for your customers, supporting credit cards, wallets, UPI, and more.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">Features Of Our E-commerce Websites</h2>
      <div className="featuresstop1-grid">
        {features.map((item, index) => (
          <div key={index} className="featuresstop1-box">
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
