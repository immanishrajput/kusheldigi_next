"use client"
import React from 'react';
import './ssss.css';
import {  ArrowRight } from 'lucide-react';

const ShopifyHeadless = () => {
  return (
    <section className="Sss">
      <div className="Sss-content">
        {/* <p className="Sss-tagline">Expert Shopify Developers</p> */}
        <h2 className="Sss-heading">What is Shopify Headless Development?</h2>
        <p className="Sss-description">
        Shopify users who choose bundled setups receive a quick deployment of their platform, although
this option provides restricted flexibility because both front-end and backend features remain
integrated.
        </p>

        <p  className="Sss-description">Headless Shopify operates using two disconnected entities that allow frontend management with
your choice of powerful frameworks (such as React, Vue, or Next.js) while Shopify maintains
backend operations, including payment processing and order management and order fulfillment.</p>

        <p className="Sss-descriptionn">
        Benefits of Going Headless:
        </p>
        <ul className="Sss-features">
          <li>
          Ultra-fast loading and performance.
          </li>
          <li>
          Custom storefronts across platforms.
          </li>
          <li>
          Seamless third-party integrations.
          </li>
          
          <li>
          The integration of seamless experiences spans all web-based and mobile applications,
          along with store locations.
          </li>
        </ul>
        {/* <p className="Sss-description">
        Headless Shopify operates using two disconnected entities that allow frontend management with
your choice of powerful frameworks (such as React, Vue, or Next.js) while Shopify maintains
backend operations, including payment processing and order management and order fulfillment.
        </p> */}

        {/* <p className='Sss-description'>Need help deciding if headless is right for your business? Let’s chat.</p> */}

<div className='solvee'>
<button className="Sssi-btn">
          Get in Touch <ArrowRight size={18}  />
        </button>
</div>
       
      </div>

      <div className="Sss-image">
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744063520/Shopify-Headless-Commerce_ktfpr4.webp" alt="Shopify Headless Development" />
      </div>
    </section>
  );
};

export default ShopifyHeadless;
