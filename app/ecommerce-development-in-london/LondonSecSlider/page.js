"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import './londonslider.css';

const caseStudies = [
  {
    title: 'Top Brass Tactical',
    tags: ['B2B', 'Military & tactical industry'],
    description: 'Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.',
    results: [
      { label: 'INCREASED CONVERSIONS', value: '+85%' },
      { label: 'INCREASED REVENUE', value: '+58%' },
      { label: 'INCREASED AOV', value: '+6%' },
    ],
    image: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1750254082/Group_1171280314_abngnl.png',
  },
  {
    title: 'Black Rhino Concealment',
    tags: ['B2B', 'Holsters and accessories'],
    description: 'BigCommerce Migration, ERP Integration, SEO, Theme Customization, and Performance Tuning.',
    results: [
      { label: 'INCREASED CONVERSIONS', value: '+70%' },
      { label: 'RETURN CUSTOMERS', value: '+45%' },
      { label: 'INCREASED ROI', value: '+30%' },
    ],
    image: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1750254081/Group_1171281350_yll41m.png',
  },
];

function LondonSecSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1, // ✅ only one slide shown
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="case-study-section">
      <h1>Case studies</h1>
      <p>Our Works Speaks for itself</p>
      <div>
        <p className='hrline'></p>
      </div>
      <Slider {...settings} className='case-slides'>
        {caseStudies.map((study) => (
          <div key={study.title}>
            <div className="case-study-card">
              <div className="case-study-left">
                <h2 className="case-study-title left-title">{study.title}</h2>
                <div className="case-study-image-wrapper">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={400}
                    height={300}
                    className="case-study-image"
                  />
                  <button className="view-button">View</button>
                </div>
              </div>
              <div className="case-study-right">
                <div className="case-study-tags">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="case-study-tag">{tag}</span>
                  ))}
                </div>
                <p className="case-study-description">
                  <strong>What We Did:</strong> {study.description}
                </p>
                <ul className="case-study-results">
                  {study.results.map((res, idx) => (
                    <li key={idx}>
                      <span>{res.label}</span>
                      <strong>{res.value}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default LondonSecSlider;
