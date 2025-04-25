"use client"
import React from 'react';
import './partner.css';

const Partner = () => {
  return (
    <section className="partnerss">
      <div className="partnerss-wrapper">
        
    
        <div className="partnerss-left">
          <div className="partnerss-heading">
            <h2>
              <span className="highlight">Kushel Digi</span>  is a Certified Bigcommerce Tech Partner. <br />
              
            </h2>
          </div>

          <div className="partnerss-description">
            <p>
              Our company is a certified <a href="#">BigCommerce technology partner</a>, we possess an exceptional level of expertise and a deep understanding of the BigCommerce ecosystem and technical architecture. With over 70 successful e-commerce projects under our belt, we've proven our ability to guide your retail store to success. Our proficiency in BigCommerce development enables us to provide the highest quality service, whether you're looking to build BigCommerce headless store, re-platform, or extend your retail operation.
              Our team specializes in D2C and B2B solutions on the BigCommerce platform, delivering custom apps and websites using scalable technologies and tools. If you find your e-commerce platform's functionality limiting, we also offer headless solutions to unlock new business opportunities. We're adept at integrating into any stage of your store development lifecycle, enhancing your internal IT team, or functioning independently as a cross-functional unit.
            </p>
           
            {/* <p>
              We are not just a vendor; we are a dedicated BigCommerce headless company investing in your success. Our approach spans from initial idea validation and requirement gathering to necessary maintenance once your store goes live or scales.
            </p> */}
          </div>
        </div>

  
  
        <div className="partnerss-right">
          <div className="partnerss-image-wrapper">
            <img
              src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744154593/Digital_Suits_is_a_certified_Big_Commerce_tech_partner_91cbb4d6e2_qz1fua.webp"
              alt="Certified BigCommerce Partner"
              className="partnerss-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partner;
