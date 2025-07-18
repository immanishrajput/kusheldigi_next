"use client";

import { useState } from "react";
import "./finlandcustombenfit.css";

const benefits = [
  {
    title: "Distinct Brand Recognition ",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764190/Mask_group_16_oi6gcy.png",
    description:
      "Your custom website shows your business’s colors, logos, and brand voice, which assists you with evergreen variability and highlights differentiated value in contrast to competitors who use templates. ",
  },
  {
    title: "Custom Features and Layouts  ",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_17_dkxalb.png",
    description:
      "Get precisely what your store needs with custom-made filters, advanced search, multi-language support, or anything else. Unlike other stores, you won’t be constrained by rigid templates or unnecessary features.  ",
  },
  {
    title: "Enhanced User Experience ",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_18_qwtqbo.png",
    description:
      "Customer relationship management systems integrated directly alongside your store provide your users with easy navigation based on their buying behavior, fast loading, and smooth checkout, which boosts repeat purchases.  ",
  },
  {
    title: "Optimized For Mobile ",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_20_ygsgyv.png",
    description:
      "The majority of shoppers use phones; therefore, your store needs to be mobile-first, designed to load fast and look awesome on every screen.  ",
  },
  {
    title: "Enhanced SEO Results ",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764185/Mask_group_19_lxvran.png",
    description:
      " Custom-built websites have clean code, proper design, and smart meta tags, which build a higher ranking on the SEO graph and work towards winning the clients' custom websites are made for.  ",
  },
  {
    title: "Endless Custom Integrations",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_21_ynyqfc.png",
    description:
      "Businesses running on custom websites can effortlessly streamline workflows with third-party systems such as CRM, ERP, shipping and marketing apps, hence optimally speeding up business operations.",
  },
  {
    title: "Scalable for Future Growth",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_22_yyaiul.png",
    description:
      "Your website can develop alongside your business. It is now possible to expand with the inclusion of new features, product categories, or user roles without the requirement of a complete redesign.",
  },
  {
    title: "Stronger Security & Control ",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_23_bn1ywe.png",
    description:
      "Custom development provides complete control over the custom security layers, updates, and data processing safeguards, ensuring the safety of sensitive business and customer information.  ",
  },
  {
    title: "Competitive Advantage ",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_24_lyevyw.png",
    description:
      "A custom store provides an edge in highly competitive markets. Propel your brand with a website tailored specifically for your business, distinct from imitations based on generic templates.",
  },
];

export default function FinlandCustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          {/* What Are the Benefits of Having a Custom <br/> E-Commerce Website? */}
          Why Should You Choose a Custom E-Commerce Website?
        </h2>
        <p className="custom-benefits-subtext">
          A custom-built store puts your brand, features, and customer
          experience into full focus, fully tailored to help you meet your
          objectives and differentiate yourself from competitors.{" "}
        </p>

        <div className="custom-benefits-grid">
          <ul className="custom-benefits-list">
            {benefits.map((item, index) => (
              <li
                key={index}
                className={`custom-benefits-item ${
                  index === activeIndex ? "active" : ""
                }`}
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
