"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./londonslider.css";
import { useRouter } from "next/navigation";


const caseStudies = [
  {
    title: "Top Brass Tactical",
    tags: ["B2B", "Military & tactical industry"],
    description:
      "UX/UI Design, Full Website Development, Magento to BigCommerce Migration, Custom Theme Development, and QA & Testing.",
    results: [
      { label: "INCREASED CONVERSIONS", value: "+80%" },
      { label: "HIGHER REVENUE", value: "+60%" },
      { label: "BOOSTED AOV", value: "+8%" },
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750759295/Group_1171281277_dpmjye.png",
    bgClass: "bg-green",
    slug: "/topbrasstactical",
  },
  {
    title: "Black Rhino Concealment",
    tags: ["B2B", "Holsters and accessories"],
    description:
      "Custom UI/UX Design in Figma, BigCommerce Replatforming & Development, Smart 3rd-Party Integrations (CRM, Inventory, SEO tools), Site Speed Optimization & Mobile Responsiveness, and End-to-End QA Testing.",
    results: [
      { label: "INCREASED CONVERSIONS", value: "+80%" },
      { label: "RETURN CUSTOMERS", value: "+50%" },
      { label: "BOOSTED ROI", value: "+32%" },
    ],
    image:
      "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1750254081/Group_1171281350_yll41m.png",
    bgClass: "bg-maroon",
    slug: "/blackrhinoconcealment",

  },
  {
    title: "Sights and Scopes",
    tags: ["B2B", "Holsters and accessories"],
    description:
      "Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
    results: [
      { label: "INCREASED CONVERSIONS", value: "+80%" },
      { label: "RETURN CUSTOMERS", value: "+50%" },
      { label: "BOOSTED ROI", value: "+32%" },
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1751266075/Group_1171281352_jjg9qf.png",
    bgClass: "bg-navy",
    slug: "/sitesandscopes",

  },
];

function NoidaSecSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useRouter();


  return (
    <section className="case-study-section">
      <div className="case-studies-heading">Case studies</div>
      <p>Our Works Speaks for themselves</p>
      <div>
        <p className="hrline"></p>
      </div>
      <Slider {...settings} className="case-slides">
        {caseStudies.map((study) => (
          <div key={study.title}>
            <div className={`card-slide ${study.bgClass}`}>
              <div className="title-tag">
                <h2 className="case-study-title left-title">{study.title}</h2>
                <div className="case-study-tags">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="case-study-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="case-study-card">
                <div className="case-study-left">
                  <div className="case-study-image-wrapper">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={400}
                      height={300}
                      className="case-study-image"
                    />
                    <button onClick={() => navigate.push(study.slug)} className="view-button">View</button>
                    <div className="view-button1">
                      <img
                        src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1750748415/Mask_group_nrob9o.png"
                        alt="share"
                      />
                    </div>
                  </div>
                </div>
                <div className="case-study-right">
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
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default NoidaSecSlider;