'use client';

import React, { useState } from 'react';
import './customservice.css';

const services = [
  {
    title: 'Custom software development',
    desc: 'We build highly-functional, scalable, and secure solutions and products fully aligned with companies’ vision and business goals.',
    image: 'https://images.unsplash.com/photo-1606662401972-41f58f2f4f6c', // Replace with your image
  },
  {
    title: 'Mobile application development',
    desc: 'Robust, user-friendly apps that enhance your mobile presence.',
    image: 'https://images.unsplash.com/photo-1549921296-3a6b90a7f833',
  },
  {
    title: 'Dedicated teams',
    desc: 'Skilled professionals working as an extension of your business.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
  },
  // Add more services as needed
];

const CustomServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="services-slider-wrapper">
      <div className="services-left">
        <img src={services[currentIndex].image} alt="service" className="services-image" />
        <div className="services-content">
          <h2>{services[currentIndex].title}</h2>
          <p>{services[currentIndex].desc}</p>
          <a href="#" className="view-link">↗ View service</a>

          <div className="nav-buttons">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>
      </div>

      <div className="services-tabs">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-tab ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <span>{service.title}</span>
            <span className="plus-icon">+</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomServices;
