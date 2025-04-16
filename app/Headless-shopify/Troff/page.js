
"use client"
import React from 'react';
import './troff.css'; 
import { FaArrowRightLong } from 'react-icons/fa6';



const ShopifyServices = () => {
  return (
    <section className="troffi">
        <div className='trofff'>
      <div className="troffi-content">
        {/* <p className="troffi-breadcrumb">
          Home / Services / <span>Shopify Development</span>
        </p> */}
        <h3 className="troffi-heading">Shopify Headless Commerce Development Services</h3>
        <p className="troffi-description">
        Our Shopify headless development services provide the expertise needed to decouple your frontend and backend, enabling full customization and flexibility to your online store.
        </p>
        <div  className='sunroof'>
        <button className="troffi-buttonn">
        Talk to a Consultant <span className="arrow"></span>
        </button>
        <button className="troffi-button">
          BOOK A CALL <FaArrowRightLong/>
        </button>
        </div>
      </div>

      <div className="troffi-image">
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744065064/Shopify-Development-Services_ycbltu.webp" alt="Shopify Services" />
      </div>
      </div>
    </section>
  );
};

export default ShopifyServices;
