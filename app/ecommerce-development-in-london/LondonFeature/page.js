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
              <p className="ecom-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="ecom-buttons">
          <button className="connect-btn">Let's Connect</button>
          <button className="demo-btn">Schedule a Demo</button>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    id: 1,
    text: "We program the virtual store to measure according to the characteristics of each company and the particular specifications of each client.",
  },
  {
    id: 2,
    text: "Our e-commerce solution is fully scalable, being able to incorporate new functionalities in the future.",
  },
  {
    id: 3,
    text: "The online stores that we develop evolve in the same way that your business evolves.",
  },
  {
    id: 4,
    text: "Online stores optimized for search engines for maximum visibility.",
  },
  {
    id: 5,
    text: "Our online stores are optimized for search engines and connected to access and navigation statistics recording systems to analyze visits and user behavior in our store in order to maximize conversion.",
  },
  {
    id: 6,
    text: "You can add the metatags or keywords for the search engines of all the pages that are generated from the administration module of our online stores .",
  },
  {
    id: 7,
    text: "We connect our online store with the management software (ERP SOFTWARE) used by the company",
  },
  {
    id: 8,
    text: "In order to optimize costs and business processes, we can connect any management module of our online store with the management.",
  },
  {
    id: 9,
    text: "In order to optimize costs and business processes, we can connect any management module of our online store with the management.",
  },
];
export default EcommerceFeatures;