'use client';
import React from 'react';
import './delhifeatures.css'; // Assuming you have a CSS file for styles
import {
  FaMobileAlt,
  FaRegUserCircle,
  FaSearch,
  FaLock,
  FaFilter,
  FaExpandAlt,
} from 'react-icons/fa';

const features = [
  {
    title: 'Mobile–Optimized Responsive Design',
    icon: <FaMobileAlt />,
    description:
      'In order to increase sales, we design fully responsive ecommerce websites, meaning they look great and function well on any device.',
    color: 'blue',
  },
  {
    title: 'SEO-Optimized Architecture',
    icon: <FaRegUserCircle />,
    description:
      "To improve your online store's visibility and bring in more natural visitors, we include search engine optimization (SEO) in our ecommerce development services.",
    color: 'peach',
  },
  {
    title: 'Lightspeed Loading',
    icon: <FaSearch />,
    description:
      'When websites load faster, consumers are pleased. We make sure that all of our ecommerce sites are fast so that users have a better experience and the bounce rates are lower.',
    color: 'white',
  },
  {
    title: 'Intelligent Product Search & Filtering',
    icon: <FaLock />,
    description:
      "With the help of our e-commerce development agency's predictive search and clever filters, customers can simply and quickly locate the products they need.",
    color: 'white',
  },
  {
    title: 'Secure Payment Gateway Integration',
    icon: <FaFilter />,
    description:
      'To ensure that your consumers can shop with complete peace of mind, we include only the most reliable and secure payment channels.',
    color: 'blue',
  },
  {
    title: 'Easy CMS & Inventory Management',
    icon: <FaExpandAlt />,
    description:
      'Designed with busy company owners and non-tech teams in mind, our user-friendly backend makes managing goods, content, and orders a breeze.',
    color: 'peach',
  },
];

const DelhiFeatures = () => {
  return (
    <section className="Teaturesstop1-features-wrapper">
      <h2>What Features Make Our E-Commerce Websites Stand Out?</h2>
      <div className="Teaturesstop1-features-grid">
        {features.map((feature, index) => (
          <div className={`Teaturesstop1-feature-item ${feature.color}`} key={index}>
            <div className="Teaturesstop1-icon-box">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="Teaturesstop1-buttons">
        <a className="Teaturesstop1-button primary" href="#">Start Your Project</a>
        <a className="Teaturesstop1-button secondary" href="#">Get a Free Quote</a>
      </div>
    </section>
  );
};

export default  DelhiFeatures;
