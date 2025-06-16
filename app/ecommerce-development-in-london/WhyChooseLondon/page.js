'use client';
import React from 'react';
import './whylondon.css';

const steps = [
  {
    title: "Decades of Experience",
    desc: "With decades of years’ experience in eCommerce web development, our London design agency has a proven track record of delivering unique features and high-quality solutions.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073420/Group_1171281413_b7dwf6.png", // replace with your actual image path
  },
  {
    title: "On-time Delivery",
    desc: "We value your time and promise on-time delivery for all projects. Our proficient eCommerce developers adhere strictly to timelines without compromising on quality.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073419/Group_1171281412_m4wjmx.png",
  },
  {
    title: "Agile Development Process",
    desc: "We follow an agile development process, ensuring every project stage is executed efficiently while remaining flexible to changes.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073409/Group_1171281523_k2vfml.png",
  },
  {
    title: "Support & Maintenance",
    desc: "Our London office offers continuous support and maintenance, ensuring seamless integration with CMS systems, accountancy software, and order fulfilment systems.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281524_ksva3g.png",
  },
  {
    title: "High Performance",
    desc: "Our London office offers continuous support and maintenance, ensuring seamless integration with CMS systems, accountancy software, and order fulfilment systems.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281525_qnpwgi.png",
  },
  {
    title: "NDA Policy",
    desc: "Our London office offers continuous support and maintenance, ensuring seamless integration with CMS systems, accountancy software, and order fulfilment systems.",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281414_nyzkrn.png",
  },
];

const WhyChooseLondon = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left side */}
        <div className="why-choose-left">
          <h2>Why Choose Us As Your Custom<br />e-Commerce Website<br />Development Company</h2>
          <p>We’re a leading eCommerce website development services agency in London, known for bespoke eCommerce development projects and our client-first approach.</p>
          <button className="talk-btn">Talk to an Expert</button>
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
