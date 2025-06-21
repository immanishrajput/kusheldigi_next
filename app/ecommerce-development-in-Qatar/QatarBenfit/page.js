'use client';
import React from 'react';
import './qatarbenfit.css'; // Assuming you have a CSS file for styles

const benefits = [
  {
    title: 'Startups',
    description: 'Startups looking to establish their brand online with a strong foundation.'
  },
  {
    title: 'Small to Medium Enterprises',
    description: 'Small to Medium Enterprises aiming to expand their reach and boost sales through an efficient online store.'
  },
  {
    title: 'Large Enterprises',
    description: 'Large Enterprises that require scalable solutions to manage a high volume of transactions and complex operations.'
  }
];

const QatarBenfit = () => {
  return (
    <section className="ecommerce-benefits">
      <h2 className="benefits-heading">
        Who can get benefits from eCommerce Development Services?
      </h2>
      <div className="benefits-cardss">
        {benefits.map((item, index) => (
          <div className="benefit-cardd" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QatarBenfit;
