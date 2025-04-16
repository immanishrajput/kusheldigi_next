"use client"
import React from 'react';
import './shopify.css';
import {
  FaTachometerAlt,
  FaPuzzlePiece,
  FaGlobe,
  FaMapMarkerAlt,
  FaSwatchbook,
  FaEye
} from 'react-icons/fa';

const BenefitsOfHeadlessShopify = () => {
  return (
    <section className="softyy">
      <div className='softyy1'>
        <div className="softyy-header">
          <h2>Benefits of Headless Shopify</h2>
          <p>
          Ready to future-proof your store? Headless Shopify development merges advanced functionality
          with technical accuracy and high operational speed.
          </p>
        </div>

        <div className="softyy-grid">
          <div className="softyy-box">
            <FaTachometerAlt className="softyy-icon" />
           
            <p>
            Speed matters. Quick loading pages together with quick navigation enhance both search engine
            rankings and conversion rates.
            </p>
          </div>

          <div className="softyy-box">
            <FaPuzzlePiece className="softyy-icon" />
            <p>
            The system reduces costs by making it easier to integrate with external parties, by having fewer
platform requirements and by maintaining the technology more easily.
            </p>
          </div>

          <div className="softyy-box">
            <FaMapMarkerAlt className="softyy-icon" />
            <p>
            The system allows you to adapt your product lines and advertising methods instantaneously
while maintaining backend stability.
            </p>
          </div>

          <div className="softyy-box">
            <FaGlobe className="softyy-icon" />
            <p>
            Go global with ease. Global scalability is possible because the central hub provides regional
            experience management across different locations.
            </p>
          </div>

          {/* New Card - Branding Consistency */}
          <div className="softyy-box">
            <FaSwatchbook className="softyy-icon" />
            <p>
            Branding elements should maintain constant consistency and UX standards across all digital
            platforms. This builds trust with customers over time.
            </p>
          </div>

          {/* New Card - Analytics Insight */}
          <div className="softyy-box">
            <FaEye className="softyy-icon" />
            <p>
            Advanced analytics and heatmaps alongside BI tools connect automatically so you can obtain
            actionable data that leads to informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfHeadlessShopify;
