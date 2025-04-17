"use client"
import React, { useState } from "react";
import "./more.css";

const principlesData = [
  {
    id: 1,
    title: " Total Design Freedom",
    content:
      "Break free from rigid templates. Headless commerce gives your design and development teams full control over the user experience across every device and platform.",
  },
  {
    id: 2,
    title: " Seamless Omnichannel Delivery",
    content: "Engage customers on their preferred platforms — web, mobile, kiosks, voice assistants, and more — using a single backend system for consistent messaging and experience.",
  },
  {
    id: 3,
    title: "Lightning-Fast Performance",
    content: "With optimized frontend frameworks and decoupled architecture, headless commerce ensures faster page loads and smoother shopping experiences that boost conversions.",
  },
  {
    id: 4,
    title: " Scalable & Flexible Architecture",
    content: "Scale effortlessly as your business grows. Headless platforms are built to adapt — letting you add new channels, features, or integrations without a full rebuild.",
  },
  {
    id: 5,
    title: "Faster Innovation & Launches",
    content: "Launch new storefronts, updates, or campaigns quickly. With independent frontend/backend workflows, your team can move faster and innovate continuously.",
  },
  {
    id: 6,
    title: "Future-Ready Commerce Solution",
    content: "Stay ahead of the curve with a system built for change. Headless commerce supports emerging technologies, ensuring you're ready for whatever comes next in eCommerce.",
  },
];

const CorePrinciples = () => {
  const [activeId, setActiveId] = useState(1);

  const togglePrinciple = (id) => {
    setActiveId(id);
  };

  return (
    <section className="core-section" id="core-principles">
    <div className="content-wrapper">
      <div className="text-content" data-aos="fade-right">
        <h2>
          Why <span className="highlight">Headless Commerce?</span>
        </h2>
        <p>
        Headless commerce offers unmatched flexibility, speed, and scalability—empowering your business to craft seamless, omnichannel experiences and adapt quickly to changing market demands.

        </p>
      </div>

      <div className="principles-list" data-aos="fade-left">
        {principlesData.map((item) => (
          <div
            key={item.id}
            className={`principle-box ${activeId === item.id ? "active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            <div className="number-circle">{item.id}</div>
            <div className="principle-text">
              <h3>{item.title}</h3>
              <div className={`principle-content-wrapper ${activeId === item.id ? "expanded" : ""}`}>
                <p className="principle-content">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default CorePrinciples;
