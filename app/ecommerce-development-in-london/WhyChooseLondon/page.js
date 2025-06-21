'use client';
import React from 'react';
import './whylondon.css';

const steps = [
  {
    title: "Tailored E-Commerce Website Solutions",
    desc: "We don't follow one-size-fits-all rules in website design. We value your suggestions and needs and create according to them.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073420/Group_1171281413_b7dwf6.png", // replace with your actual image path
  },
  {
    title: "On-Time Project Delivery",
    desc: "We value your due dates. Our skilled team completes the work within the due date without sacrificing quality.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073419/Group_1171281412_m4wjmx.png",
  },
  {
    title: "Responsive & Mobile-Optimized Design",
    desc: "We know that most of the customers use phones while shopping. So we create mobile-friendly interface that functions flawlessly across all platforms.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073409/Group_1171281523_k2vfml.png",
  },
  {
    title: "Trusted & Secure Payment Integration",
    desc: "We include reliable, secure payment methods to provide your clients with a hassle-free, secure purchasing experience, increasing both your sales and their trust.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281524_ksva3g.png",
  },
  {
    title: "SEO-Optimized E-Commerce Development",
    desc: "We implement SEO best practices to improve your store’s Google ranking. It attracts Google’s traffic that converts.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281525_qnpwgi.png",
  },
  {
    title: "Ongoing Maintenance & Technical Support",
    desc: "Our work doesn’t stop here. Our support staff makes sure your ecommerce business remains quick, safe, and effective with bug fixes and upgrades.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281414_nyzkrn.png",
  },
];

const WhyChooseLondon = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left side */}
        <div className="why-choose-left">
          <h2>Why Choose Kushel Digi for <br/> E-Commerce Development?</h2>
          <p>We at KushalDigi create websites that make sales from day one. We help companies succeed in a competitive market by focusing on performance, design, and user experience.
</p>
          <button className="talk-btn">Talk to Our Experts Today</button>
        </div>

        {/* Right side */}
        <div className="why-choose-right">
          <div className="vertical-line" />
          {steps.map((step, index) => (
            <div className="why-step" key={index}>
              <div className="step-icon">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLondon;
