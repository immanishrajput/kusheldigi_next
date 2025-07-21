"use client";
import React from "react";
import "./features.css";

const features = [
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/smartphone.png",
    title: "Fully Mobile Responsive",
    description:
      "We understand most of your customers shop through mobile phones, so we create mobile-friendly websites. Customers can shop and browse from smartphones, tablets, or desktops.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/secured-letter.png",
    title: "Safe Gateway Payment Integration",
    description:
      "We pay special attention to integrating payment gateways for your online stores. It helps in fast online transactions with SSL Encryption for security.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/filter.png",
    title: "Improved Product Filters",
    description:
      "We add smart filters within the categories. It helps users to locate what they need, thus improving navigation within the store.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/admin-settings-male.png",
    title: "Exceptional Speed Performance",
    description:
      "Exceptional speeds not only enhance user experience but greatly assist SEO performance by reducing load times and bounce rates, all of which optimize ecommerce platforms.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1750412930/Mask_group_90_jqaj34.png",
    title: "Architecture Friendly With SEO",
    border: "true",
    description:
      "Our experts design ecommerce websites using clean code, meta tags, and URL structures, thus following SEO best practices. It allows a website to rank higher on search engines, resulting in a traffic increase. ",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/system-task.png",
    title: "Easy Inventory & Order Management",
    description:
      "Enables automated order alert control alongside real-time inventory engagement, streamlining SKU management, extending control over feature edits through backend levels, and simplifying operations for the online store.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">
      What Makes Our E-Commerce Websites Stand Out?
      </h2>
      <div className="featuresstop1-grid">
        {features.map((item, index) => (
          <div
            key={index}
            className={`featuresstop1-box ${item.border ? "border-box" : ""}`}
          >
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
