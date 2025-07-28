"use client";
import React from "react";
import "./delhicomser.css"; // Assuming you have a CSS file for styles

const features = [
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965474/Mask_group_75_obmlwf.png",
    title: "Custom E-Commerce Website Development",
    description:
      "We start fresh when we build an online store, letting growing businesses shape how their customers experience the site from the moment they land on it.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_76_jziqdb.png",
    title: "Shopify Store Creation",
    description:
      "Our Delhi crew whips up mobile-friendly Shopify shops that look great, work smoothly, and come packed with branding options and safe payment systems designed to turn window-shoppers into real buyers.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_77_syi4ue.png",
    title: "WooCommerce on WordPress",
    description:
      "Our expert team creates WooCommerce websites through WordPress that work well on Google. It ensures an easy run, and you can install as many plugins as you want.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965468/Mask_group_78_d9e39s.png",
    title: "Magento Builds and Migrations",
    description:
      "We craft Magento stores and help you migrate over the platforms like BigCommerce or Shopify, ensuring zero data loss and a decrease in traffic potential.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_79_sv7ryx.png",
    title: "Mobile-Responsive Designs",
    description:
      "We understand that most of the users are mobile users, so we ensure mobile-responsive websites.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_80_xj1zov.png",
    title: "Third-Party Integrations",
    description:
      "As a leading website development company in Delhi, we connect planning tools, payment platforms, and analytics dashboards, so that the website runs smoothly.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_81_ct53bt.png",
    title: "User-Centric UX/UI",
    description:
      "Our design process, which is based on how people in Delhi shop, makes it easy to find your way around, helps people remember your brand, and builds customer loyalty, all of which lead to higher Net Promoter Scores.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "Help and Support for E-Commerce",
    description:
      "We don't stop here; we also provide ongoing support and maintenance. We fix bugs, update plugins, add new features and so on, ensuring the smooth running of the website.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "SEO and Speed Optimisation for E-Commerce",
    description:
      "We build online stores with SEO best practices in mind so that the site starts ranking right away. We make sure that meta tags are correct, keywords are in the right places, speed is monitored, mobile-friendliness is checked, and customers can find you right away.",
  },
];

const DelhiEcomServ = () => {
  return (
    <section className="ecom-london-section">
      <h3 className="ecom-london-title">
        Why Choose Our E-Commerce Website Development Services?
      </h3>

      <div className="ecom-london-grid-wrapper">
        <div className="ecom-london-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-london-card">
              <div className="ecom-london-icon">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="ecom-london-icon-img"
                />
                <h3 className="ecom-london-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-london-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-london-buttons">
        <button className="ecom-btn">Start Your Project</button>
        <button className="ecom-btn secondary">Get a Free Quote</button>
      </div>
    </section>
  );
};

export default DelhiEcomServ;
