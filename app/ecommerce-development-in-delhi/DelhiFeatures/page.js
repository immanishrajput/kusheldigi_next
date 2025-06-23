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
    title: 'Mobile–Optimized Design',
    icon: <FaMobileAlt />,
    description:
      'Ensure a seamless shopping experience across all devices. Our websites are fully responsive, delivering fast load times and smooth navigation on smartphones, tablets, and desktops.',
    color: 'blue',
  },
  {
    title: 'User–Friendly Admin Panel',
    icon: <FaRegUserCircle />,
    description:
      'Ensure a seamless shopping experience across all devices. Our websites are fully responsive, delivering fast load times and smooth navigation on smartphones, tablets, and desktops.',
    color: 'peach',
  },
  {
    title: 'SEO & Marketing Tools',
    icon: <FaSearch />,
    description:
      'Ensure a seamless shopping experience across all devices. Our websites are fully responsive, delivering fast load times and smooth navigation on smartphones, tablets, and desktops.',
    color: 'white',
  },
  {
    title: 'Secure Payment Gateway Integration',
    icon: <FaLock />,
    description:
      'We integrate trusted and secure payment gateways to provide safe and flexible payment options for your customers, supporting credit cards, wallets, UPI, and more.',
    color: 'white',
  },
  {
    title: 'Advanced Product Filtering & Search',
    icon: <FaFilter />,
    description:
      'We integrate trusted and secure payment gateways to provide safe and flexible payment options for your customers, supporting credit cards, wallets, UPI, and more.',
    color: 'blue',
  },
  {
    title: 'Scalable & Customizable Architecture',
    icon: <FaExpandAlt />,
    description:
      'We integrate trusted and secure payment gateways to provide safe and flexible payment options for your customers, supporting credit cards, wallets, UPI, and more.',
    color: 'peach',
  },
];

const DelhiFeatures = () => {
  return (
    <section className="Teaturesstop1-features-wrapper">
      <h2>Features Of Our E–commerce Websites</h2>
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
