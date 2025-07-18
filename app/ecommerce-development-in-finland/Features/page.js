"use client";
import React from "react";
import "./features.css"

const features = [
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/smartphone.png",
    title: "Secure Payment Integration",
    description:
      "To ensure safe transaction processing, we integrate reliable payment options, Stripe, PayPal, and Klarna.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/secured-letter.png",
    title: "Mobile Responsive Design",
    description:
      "Cell phones and tablets are indispensable for daily use; hence, ecommerce websites are designed to be mobile responsive to enhance user experience.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/admin-settings-male.png",
    title: "Easy-to-Use Admin Panel ",
    description:
      " No technical know-how or coding skills are required. Product, order, and content management is effortless with a click.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/filter.png",
    title: "SEO Optimized Structure ",
    description:
      "As an ecommerce development company in Finland, we build websites with proper SEO so that your websites can rank from day one.  ",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1750412930/Mask_group_90_jqaj34.png",
    title: "Fast Loading Speed",
      border:"true",
    description:
      "We improve customer experience by fast loading speed. This is achieved through optimizing image and script sizes, bug fixing and hosting, compressing CSS, and clearing the cache.  ",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/system-task.png",
    title: "Advanced Search and Filters  ",
    description:
      "Our ecommerce development company in Finland includes smart filtering and search tools, making it easy for users to find exactly what they’re looking for in seconds.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">What Features Do We Offer as a Trusted E-Commerce Development Company in Finland?</h2>
      <div className="featuresstop1-grid">
        {features.map((item, index) => (
          <div key={index} className={`featuresstop1-box ${item.border? "border-box":""}`}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
