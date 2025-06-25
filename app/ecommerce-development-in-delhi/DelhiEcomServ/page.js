'use client';
import React from 'react';
import './delhicomser.css'; // Assuming you have a CSS file for styles

const features = [
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965474/Mask_group_75_obmlwf.png",
    title: "Custom E-Commerce Website Development",
    description:
      "We create ecommerce websites from scratch for scaling companies, giving them better value and control over the user experience."
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_76_jziqdb.png",
    title: "Shopify Store Development",
    description:
      `Our team in Delhi offers mobile-responsive Shopify store development services with unique branding features and secure payment gateways to boost conversions.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_77_syi4ue.png",
    title: "WooCommerce Website Design",
    description:
      `Order your WordPress-based WooCommerce website, which is SEO optimized, easy to manage, and supports endless third-party application plugins.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965468/Mask_group_78_d9e39s.png",
    title: "Magento Development & Migration",
    description:
      `We build comprehensive Magento ecommerce stores and provide migration services from BigCommerce, Shopify, or any other store without losing data.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_79_sv7ryx.png",
    title: "Mobile-Responsive E-Commerce Design Layouts",
    description:
      `Every online shop we design is mobile-responsive, improving navigation and load speed on all devices for enhanced customer interaction and engagement.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_80_xj1zov.png",
    title: "Third-Party Integration Services",
    description:
      `Automate shipping partners, CRMs, ERP payments, and analytics directly into your ecommerce site for full automation.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_81_ct53bt.png",
    title: " UX/UI For E-Commerce Websites",
    description:
      `Focused on online shoppers from Delhi improves usability while boosting brand recall and enhancing customer loyalty resulting in improved NPS scores.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "E-Commerce Website Maintenance & Support",
    description:
      `Keep your website running optimally by receiving strategic updates alongside bug fixes speed improvement, and evasive minimization under active supervision.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "E-Commerce SEO and Speed Optimization",
    description:
      `Improve sales and visibility with ecommerce SEO services that include speed optimization of meta setup, schema, keywords, and architecture.`
  }
];

const DelhiEcomServ = () => {
  return (
   <section className="ecom-qatar-section">
      <h3 className="ecom-qatar-title">Why Choose Our E-Commerce Website Development Services?</h3> 
      
      <div className="ecom-qatar-grid-wrapper">
        <div className="ecom-qatar-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-qatar-card">
              <div className="ecom-qatar-icon">
                <img src={feature.icon} alt={feature.title} className="ecom-qatar-icon-img" />
                <h3 className="ecom-qatar-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-qatar-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-qatar-buttons">
        <button className="ecom-btn">Start Your Project</button>
        <button className="ecom-btn secondary">Get a Free Quote</button>
      </div>
    </section>
  );
};

export default DelhiEcomServ;
