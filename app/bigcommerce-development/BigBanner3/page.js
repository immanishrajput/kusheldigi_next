'use client';
import React from 'react';
import './BigBanner3.css';
import Link from 'next/link';


const Page = ({leftContent,services}) => {
  return (
    <section className="BcontainerEcomSEc">
      <div className="BcontainerEcom">
        <div className="Bleft-sectionEcom">
          <h3 className="primary-heading">{leftContent.heading}</h3>
          <p className="secondary-heading">{leftContent.subheading}</p>
          <Link href={leftContent.buttonLink}>
            <button>{leftContent.buttonLabel}</button>
          </Link>
        </div>

        <section className="Bright-sectionEcom">
          {services.map((service, index) => (
            <div className="Bicontent-blockEcom" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Page;
