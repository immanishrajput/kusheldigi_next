"use client";

import { useState } from "react";
import "./irelandcustombenfit.css";

const benefits = [
  {
    title: "Recognizing a Brand as Different",
    minWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764190/Mask_group_16_oi6gcy.png",
    description:
      "Your personalized website shows off your business's colors, logos, and brand voice. This helps you stand out from rivals that utilize templates and gives you more flexibility over time.",
  },
  {
    title: "Custom Layouts and Features",
    minWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_17_dkxalb.png",
    description:
      "With custom filters, sophisticated search, support for many languages, or anything else, you can get exactly what your shop requires. You won't have to deal with inflexible templates or extra features that you don't need at this shop.",
  },
  {
    title: "Better Experience for Users",
    minWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_18_qwtqbo.png",
    description:
      "When you put customer relationship management systems right next to your business, they make it simple for your customers to find what they're looking for based on their purchasing habits. They also load quickly and make checkout go smoothly, which encourages repeat purchases.",
  },
  {
    title: "Mobile Responsive",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_20_ygsgyv.png",
    description:
      "Most people who shop use their phones; therefore, your business has to be mobile-first, with quick loading times and great looks on all screens.",
  },
  {
    title: "Better SEO Results",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764185/Mask_group_19_lxvran.png",
    description:
      "Custom-built websites include clean code, good design, and clever meta tags. These things help the website rank better on the SEO graph and help the customers get the custom websites they want.",
  },
  {
    title: "Custom Integrations",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_21_ynyqfc.png",
    description:
      "Businesses that use bespoke websites may speed up their operations by integrating third-party systems like CRM, ERP, shipping, and marketing tools into their processes.",
  },
  {
    title: "Flexible Scalability",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_22_yyaiul.png",
    description:
      "Your website may grow with your company. You may now add new features, product categories, or user roles to your site without having to completely rebuild it.",
  },
  {
    title: "Better Control and Security",
    minWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_23_bn1ywe.png",
    description:
      "With bespoke development, you have full control over the unique security layers, upgrades, and data processing protections, which keep important company and customer information secure.",
  },
  {
    title: "Edge over the Competition",
    minWid: "true",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_24_lyevyw.png",
    description:
      "In very competitive marketplaces, a personalized shop gives you an advantage. A website made just for your company, not one that is based on a generic design, can help your brand grow.",
  },
];

export default function IrelandCustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          {/* What Are the Benefits of Having a Custom <br/> E-Commerce Website? */}
          What Are the Benefits of Having a Custom E-Commerce Website?
        </h2>
        <p className="custom-benefits-subtext">
          A bespoke shop puts your brand, features, and consumer experience
          front and center. It is completely personalized to help you reach your
          goals and stand out from the competition.{" "}
        </p>

        <div className="custom-benefits-grid">
          <ul className="custom-benefits-list">
            {benefits.map((item, index) => (
               <li
                key={index}
                className={`custom-benefits-item ${
                  index === activeIndex ? "active" : ""
                }      ${item.minWid ? "extclassMinWid" : ""} ${item.exminWid ? "exminWidclas" : ""} ${item.minWid1 ? "minWid1" : ""} ${item.exminWid2 ? "exminWid2" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="custom-benefits-dot" />
                {item.title}
              </li>
            ))}
          </ul>

          <div className="custom-benefits-content">
            {benefits[activeIndex].description && (
              <div className="custom-benefits-card">
                <div className="custom-benefits-icon">
                  <img
                    src={benefits[activeIndex].icon}
                    alt={benefits[activeIndex].title}
                    className="custom-benefits-img"
                  />
                </div>
                <h3>{benefits[activeIndex].title}</h3>
                <p>{benefits[activeIndex].description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
