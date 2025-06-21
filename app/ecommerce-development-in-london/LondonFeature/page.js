"use client"
import React from 'react'
import './londonfeat.css';

 function EcommerceFeatures() {
  return (
    <section className="ecom-section">
      <div className="ecom-container">
        <h2 className="ecom-heading">
          Features Of Our E-commerce <br className="hide-on-mobile" /> Websites
        </h2>

        <div className="ecom-grid">
          {features.map((item) => (
            <div key={item.id} className="ecom-card">
              <div className="ecom-number">{item.id}</div>
              <h4 className="ecom-titlle">{item.title}</h4>
              <p className="ecom-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="ecom-buttons">
          <button className="connect-btn">Request a No-Cost Audit</button>
          {/* <button className="demo-btn">Schedule a Demo</button> */}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    id: 1,
    title: "Tailor-Made for Your Business",
    text: "Every store is built around your products and customers, so it feels like home to both.",
  },
  {
    id: 2,
    title:"Scalable for Future Growth",
    text: "When your goals get bigger, your site can stretch with them. New features, extra traffic, or a fresh payment method- no sweat.",
  },
  {
    id: 3,
    title:"Evolves with Your Brand",
    text: " Built to change alongside your vision, our platforms keep you ready for the next big idea.",
  },
  {
    id: 4,
    title:"SEO-Optimized for Maximum Visibility",
    text: "We plant smart, proven SEO habits on every page, so search engines notice you sooner and shoppers find you naturally.",
  },
  {
    id: 5,
    title:"Built-in Site Analytics",
    text: "Every site includes traffic and behavior dashboards that help you see who visits, how they move, and where sales drop.",
  },
  {
    id: 6,
    title:"No-Code Meta Tag Control",
    text: "Change page titles, descriptions, and keywords straight from the dashboard- nothing more technical than a form.",
  },
  {
    id: 7,
    title:"ERP and Inventory Links",
    text: "We plug your store into any back-office system so orders, stock, and reports flow without duplicate entries.",
  },
  {
    id: 8,
    title:"Smart Automation Tools",
    text: "Automatic email alerts, stock notices, and shipment tracking trim manual tasks and let your team focus on growth.",
  },
  {
    id: 9,
    title:"Custom Back-End Modules",
    text: "Need a special workflow? We craft flexible panels that fit your business, making daily management quick and clear.",
  },
];
export default EcommerceFeatures;