"use client";
import React from "react";
import "./features.css"

const features = [
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/smartphone.png",
    title: "Custom E-Commerce Design",
    description:
      "We create custom ecommerce websites tailored to your brand's needs and wants. Our expert team understands the target audience and brand approach, then accordingly designs custom websites to boost conversions.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/secured-letter.png",
    title: "Mobile Responsive Design",
    description:
      "We craft mobile-responsive ecommerce stores that work flawless across all devices, including mobile phones and tablets, ensuring a seamless user experience, leading to an increase in conversion rates.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/admin-settings-male.png",
    title: "Third Party Integration",
    description:
      "As a leading ecommerce development company in Ireland, we integrate the latest high-end third-party tools and software so that the website works smoothly, ensuring returning customers. ",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/filter.png",
    title: "Scalable & Customizable Websites",
    description:
      "We understand that every online store grows as the company grows to stay ahead in the competitive market, so we design highly scalable ecommerce stores where you can add products, categories and many more. ",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1750412930/Mask_group_90_jqaj34.png",
    title: "Advanced Filtering and Search Option",
           border:"true",
    description:
      "We add advance filtering and search options- category filter, product filter and search bar, ensuring easy access to products and boosting conversion.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/2675F6/system-task.png",
    title: "Post-Launch Support",
    description:
      "We provide after-launch support where we act as a backbone for your website and take care of every technical issue, like bug fixes, software updates and new features added, so that you focus on your business goals.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">What Are the Key Features of Our E-Commerce Websites?</h2>
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
