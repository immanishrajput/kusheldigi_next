'use client';
import React, { useState } from 'react';
import './belgiumindustry.css';

const industries = [
  {
    title: 'Fashion',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750336337/beautiful-young-woman-holding-shopping-bags_jbffef.png',
    description:
      'Fashion trends shift overnight, and timing is everything. We help brands stay relevant by automating product drops, connecting campaigns to live trends, and retargeting shoppers with hyper-personalized offers that reflect their unique style.',
  },
  {
    title: 'Automotive',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/automobile-details-close-up-new-car_ybjvye.png',
    description:
      'We support auto brands with advanced marketing automation, predictive maintenance analytics, and personalized customer engagement.',
  },
  {
    title: 'Electronics',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png',
    description:
      'Drive innovation in consumer electronics with supply chain intelligence, eCommerce automation, and product launch strategies.',
  },
  {
    title: 'Food and beverages',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337530/fast-food-with-sandwich-french-fries-red-cocktail-fork-knife-table-side-view_w73jvr.png',
    description:
      'Fashion trends shift overnight, and timing is everything. We help brands stay relevant by automating product drops, connecting campaigns to live trends, and retargeting shoppers with hyper-personalized offers that reflect their unique style.',
  },
  {
    title: 'Luxury',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png',
    description:
      'We support auto brands with advanced marketing automation, predictive maintenance analytics, and personalized customer engagement.',
  },
  {
    title: 'Manufacturing',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337526/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_rhjthz.png',
    description:
      'Drive innovation in consumer electronics with supply chain intelligence, eCommerce automation, and product launch strategies.',
  },
  {
    title: 'Furniture',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337523/3d-rendering-modern-dining-room-living-room-with-luxury-decor_lfenl6.png',
    description:
      'Fashion trends shift overnight, and timing is everything. We help brands stay relevant by automating product drops, connecting campaigns to live trends, and retargeting shoppers with hyper-personalized offers that reflect their unique style.',
  },
  {
    title: 'B2B',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_xwu4js.png',
    description:
      'We support auto brands with advanced marketing automation, predictive maintenance analytics, and personalized customer engagement.',
  }
];

const IndustryTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="industry-section">
      <h2 className="industry-heading">Over 18+ industries in our portfolio</h2>
      <div className="industry-tabs">
        {industries.map((item, index) => (
          <button
            key={index}
            className={`industry-tab ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="industry-content">
        <img
          src={industries[activeIndex].image}
          alt={industries[activeIndex].title}
          className="industry-image"
        />
        <div className="industry-info">
          <h3>{industries[activeIndex].title}</h3>
          <p>{industries[activeIndex].description}</p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;
