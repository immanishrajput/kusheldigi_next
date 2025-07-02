"use client";

import { useState } from "react";
import './finlandcustombenfit.css';

const benefits = [
  {
    title: "100% Tailored to Your Business",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764190/Mask_group_16_oi6gcy.png",
    description:
      "Custom ecommerce websites are well suited to your brand, goals, and consumer journey. No pre-made templates are used.",
  },
  {
    title: "Adaptable for Future Expansion",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_17_dkxalb.png",
    description:
      "Our ecommerce development services ensure that your website evolves with your business, accommodating more users, products, and traffic over time.",
  },
  {
    title: "An Intuitive Interface",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764189/Mask_group_18_qwtqbo.png",
    description:
      "We create user-friendly online shops that engage clients, hence reducing bounce rates.",
  },
  {
    title: "Enhanced Security Features",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_20_ygsgyv.png",
    description:
      "Custom ecommerce platforms provide the utmost security to safeguard customer data and ensure secure transactions.",
  },
  {
    title: "Accelerated Loading Speeds",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764185/Mask_group_19_lxvran.png",
    description:
      "To enhance client satisfaction and improve SEO rankings, our ecommerce development business ensures that all processes are executed with utmost efficiency.",
  },
  {
    title: "Adaptability in Integration",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_21_ynyqfc.png",
    description:
      "Payment gateways, analytics, CRMs, and ERPs may be effortlessly interconnected via fully customizable options.",
  },
  {
    title: "Mobile-First Design",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_22_yyaiul.png",
    description:
      "We create ecommerce websites optimized for mobile devices, enhancing sales and engagement.",
  },
  {
    title: "SEO-Optimized Structure",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_23_bn1ywe.png",
    description:
      "Utilize integrated SEO techniques like as meta tags, optimized URLs, and schema markup to enhance online visibility.",
  },
  {
    title: "Absolute Control and Ownership",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750764184/Mask_group_24_lyevyw.png",
    description:
      "Engaging in custom ecommerce development gives you complete authority over the code, functionalities, and content of your website. No platform restrictions or concealed expenses exist.",
  },
];
  
export default function PolandCustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
        {/* What Are the Benefits of Having a Custom <br/> E-Commerce Website? */}
        Why Invest in a Custom E-Commerce Website for Your Business?
        </h2>
        <p className="custom-benefits-subtext">
        Custom ecommerce development provides your company with complete control, enhanced performance, and sustainable growth tailored to your requirements.
        </p>

        <div className="custom-benefits-grid">
          <ul className="custom-benefits-list">
            {benefits.map((item, index) => (
              <li
                key={index}
                className={`custom-benefits-item ${index === activeIndex ? "active" : ""}`}
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
