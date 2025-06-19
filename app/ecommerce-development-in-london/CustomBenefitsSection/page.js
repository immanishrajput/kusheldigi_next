"use client";

import { useState } from "react";
import './custombenfit.css';

const benefits = [
    {
      title: "Personalized Shopping Experience",
      icon: "🛍️",
      description:
        "A custom eCommerce website enables companies to provide a personalized and customized shopping experience for consumers. User-specific discounts, personalized product suggestions, and easy navigation increase customer satisfaction and engagement. This results in repeat business and increased brand loyalty.",
    },
    {
      title: "Higher Conversion Rates",
      icon: "📈",
      description:
        "Tailored eCommerce websites are optimized for performance, leading to better user engagement and increased conversion rates. Streamlined design, quick access to product information, and fewer distractions help drive more purchases.",
    },
    {
      title: "Mobile Responsive",
      icon: "📱",
      description:
        "Custom-built eCommerce sites are designed to be fully responsive, ensuring a seamless and optimized shopping experience across all devices, including smartphones and tablets.",
    },
    {
      title: "Advanced Analytics",
      icon: "📊",
      description:
        "Integrated analytics tools allow businesses to track customer behavior, monitor sales trends, and measure marketing campaign success in real-time, enabling smarter decisions.",
    },
    {
      title: "Faster Load Times",
      icon: "⚡",
      description:
        "Custom code and optimized architecture ensure faster page load speeds, which significantly improves user experience, reduces bounce rates, and enhances SEO rankings.",
    },
    {
      title: "Secure Payment Gateways",
      icon: "🔒",
      description:
        "Custom solutions allow seamless integration with trusted and secure payment gateways, ensuring customer data is protected and transactions are safe.",
    },
    {
      title: "Easy Checkout Process",
      icon: "💳",
      description:
        "A custom eCommerce checkout flow eliminates unnecessary steps, reduces cart abandonment, and enhances the overall user experience, resulting in more successful purchases.",
    },
    {
      title: "Third-Party Integrations",
      icon: "🔌",
      description:
        "Easily integrate with CRMs, ERPs, email marketing tools, and inventory systems, enabling efficient business operations and automated workflows.",
    },
    {
      title: "Long-Term Cost Efficiency",
      icon: "💰",
      description:
        "While the upfront cost may be higher, custom eCommerce solutions save money over time by avoiding platform limitations, subscription fees, and excessive third-party app dependencies.",
    },
  ];
  
export default function CustomBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="custom-benefits-section">
      <div className="custom-benefits-container">
        <h2 className="custom-benefits-title">
          Benefits of Having A Custom <br /> Ecommerce Website
        </h2>
        <p className="custom-benefits-subtext">
          Get an eCommerce solution by customizing every aspect of your online store to match your unique business needs.
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
                <div className="custom-benefits-icon">{benefits[activeIndex].icon}</div>
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
