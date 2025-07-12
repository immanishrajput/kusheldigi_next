"use client";
import React from "react";
import "./features.css"

const features = [
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/smartphone.png",
    title: "Mobile-Friendly Design",
    description:
      "We know that the majority of our visitors come from mobile phones; therefore, we make sure that the online store works well on mobile devices.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/secured-letter.png",
    title: " Custom Design",
    description:
      "We make custom designs for each online store. Custom layouts show what your company is all about and connect with actual customers.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/admin-settings-male.png",
    title: "Secure Payment Gateway Integration",
    description:
      "To develop confidence with our customers, we use gateways that are safe, quick, and allow for several payment methods. It works with UPI, debit cards, credit cards, wallets, and a lot more.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/filter.png",
    title: "SEO and Marketing",
    description:
      "We are one of the top ecommerce development companies in Bulgaria. We use SEO best practices to construct websites that start ranking right away and reach actual consumers.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1750412930/Mask_group_90_jqaj34.png",
    title: "Scalable Architecture",
    description:
      "Our architecture may grow with us in the future. As you grow, so does your online shop. Its design, product catalogs, new product add-ons, and so on.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/system-task.png",
    title: " Filters and Smart Search",
    description:
      "We include clever product search options and filters to make it easy for customers to locate what they want in a second, so they can shop without becoming frustrated.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">What Are the Top Features of Our E-commerce Websites?</h2>
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
