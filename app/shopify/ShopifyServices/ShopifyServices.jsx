'use client';
import React from 'react';
import './ShopifyServices.css';
import Link from 'next/link';

const Page = ({ leftContent, services }) => {
  return (
    <section className="ShopifyServices__section">
      <div className="ShopifyServices__container">
        <div className="ShopifyServices__left">
          <h3 className="ShopifyServices__heading">{leftContent.heading}</h3>
          <p className="ShopifyServices__subheading">{leftContent.subheading}</p>
          <Link href={leftContent.buttonLink}>
            <button>{leftContent.buttonLabel}</button>
          </Link>
        </div>

        <div className="ShopifyServices__right">
          {services.map((service, index) => (
            <div className="ShopifyServices__card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
