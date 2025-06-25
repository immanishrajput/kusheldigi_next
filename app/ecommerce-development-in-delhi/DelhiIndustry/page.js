'use client';
import React, { useState } from 'react';
import './belgiumindustry.css';

const industries = [
  {
    title: 'Fashion',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750336337/beautiful-young-woman-holding-shopping-bags_jbffef.png',
    description:
      'We make stylish fashion e-commerce websites that are easy to use on mobile devices and have filters, size guides, and quick checkouts that boost sales.',
  },
  {
    title: 'Automotive',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/automobile-details-close-up-new-car_ybjvye.png',
    description:
      'We assist car firms in selling parts, tools, and accessories online with personalized features and a quick search.',
  },
  {
    title: 'Electronics',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png',
    description:
      'As a leading ecommerce development company, we build safe, scalable sites for electronics that come with a guarantee, tech specs, and EMI alternatives.',
  },
  {
    title: 'Food and beverages',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337530/fast-food-with-sandwich-french-fries-red-cocktail-fork-knife-table-side-view_w73jvr.png',
    description:
      'Our ecommerce development sites offer fresh food, quick checkouts, and real-time inventory sync for everything from local delivery to gourmet brands.',
  },
  {
    title: 'Luxury',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/elegant-smartphone-composition_p1vvti.png',
    description:
      'We make high-end ecommerce experiences for luxury businesses, with stunning imagery, smooth user experiences, and shopping processes that are sure to please.',
  },
  {
    title: 'Manufacturing',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337526/modern-technology-assembly-cars-plant-automotive-industry-shop-production-assembly-machines-top-view-process-welding-parts-car_rhjthz.png',
    description:
      'Our ecommerce development services let manufacturers sell bulk, custom, or catalog products by connecting them to ERP and CRM systems.',
  },
  {
    title: 'Furniture',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337523/3d-rendering-modern-dining-room-living-room-with-luxury-decor_lfenl6.png',
    description:
      'We make ecommerce websites that show off furniture in a beautiful way with AR previews, easy navigation, and smart delivery options.',
  },
  {
    title: 'B2B',
    image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750337525/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_xwu4js.png',
    description:
      'We are a trustworthy ecommerce development agency in Delhi that builds B2B platforms with quote systems, bulk pricing, and user roles.',
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
