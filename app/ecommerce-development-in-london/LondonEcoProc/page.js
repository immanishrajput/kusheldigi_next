"use client";

import React from "react";
import "./LondonSectionCss.css";

const steps = [
  {
    number: "01",
    title: "Project Scope",
    desc: "We start with a detailed proposal and project scope, identifying your specific ecommerce app development needs, project plan, and cost considerations.",
    color: "green",
  },
  {
    number: "02",
    title: "Planning",
    desc: "In the planning stage, we analyse ecommerce statistics and study market trends to create a strategic process flow for your ecommerce project.In the planning stage, we analyse ecommerce statistics and study market trends to create a strategic process flow.",
    color: "red",
  },
  {
    number: "03",
    title: "Ecommerce Website Design",
    desc: "Ensure your project’s success with a dedicated team of experts. Let’s ask difficult questions and dig deeper to truly understand the essence of your product.",
    color: "orange",
  },
  {
    number: "04",
    title: "Ecommerce Website Development",
    desc: "Our expert ecommerce website development team specialise in developing a bespoke ecommerce store, using cutting-edge technologies to deliver high-performing and robust ecommerce solutions.",
    color: "green",
  },
  {
    number: "05",
    title: "Platform-Specific Development",
    desc: "Whether it's Shopify, Magento, or WooCommerce, our team is skilled in platform-specific ecommerce development, tailoring your store to your chosen platform's best practices.",
    color: "red",
  },
  {
    number: "06",
    title: "System Integration",
    desc: "We integrate your ecommerce platform with vital systems, including CRM, inventory management, and payment gateways, ensuring seamless ecommerce project management.",
    color: "green",
  },
  {
    number: "07",
    title: "Testing",
    desc: "our expert team conducts eCommerce website testing to ensure the functionality, usability, and security of your ecommerce website, ensuring your customers enjoy a flawless experience.",
    color: "green",
  },
  {
    number: "08",
    title: "Post-Launch Support",
    desc: "Our services extend beyond website development, providing post-launch support, regular updates, and performance monitoring to keep your ecommerce store at its best.",
    color: "red",
  },
];

export default function Londonecomproc1() {
  return (
    <section className="londonecomproc1-section">
      <h2 className="londonecomproc1-heading">
        Our Ecommerce Development <br /> Process
      </h2>
      <div className="londonecomproc1-grid">
        {steps.map((step, i) => (
          <div key={i} className={`londonecomproc1-card ${step.color}`}>
            <span className="londonecomproc1-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
      <button className="londonecomproc1-connect-btn">Let’s Connect</button>
    </section>
  );
}
