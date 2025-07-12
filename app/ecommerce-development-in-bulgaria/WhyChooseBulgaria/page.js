"use client";
import React from "react";
import "./whybelgium.css";

const features = [
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073420/Group_1171281413_b7dwf6.png",
    title: "Results-oriented",
    desc: "We have 10+ years of experience in delivering quality results. No fluff, only results.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073419/Group_1171281412_m4wjmx.png",
    title: "Tailored Strategies",
    desc: "We believe no business is the same. Our expert team understands the requirements and makes custom strategies for different businesses.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073409/Group_1171281523_k2vfml.png",
    title: "Cutting-Edge Technology",
    desc: "We use the latest technologies and tools to drive effective and faster results.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281524_ksva3g.png",
    title: "Proven Results",
    desc: "We have proven results from various businesses. Our expert team delivers real results.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281525_qnpwgi.png",
    title: " Customer-Centric Approach",
    desc: "Your goal is our priority. You ask and we deliver.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281414_nyzkrn.png",
    title: "Affordable Excellence",
    desc: "We believe in delivering quality results within a budget so that start-ups can also use our services.",
  },
];

const WhyChooseBulgaria = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-wrapper">
        <h2 className="why-choose-heading">
         Why Kushel Digi Solutions is Your Best Choice?
        </h2>
        <p className="why-choose-subtext">
         We create ecommerce websites that are scalable, ERP and CMS integrated, mobile-friendly, along with SEO best practices to drive conversions from the start.
        </p>
      </div>

      <div className="why-choose-container">
        <div className="why-choose-left">
          <img
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750331416/Group_1171281538_c0mfbg.png"
            alt="why choose kushel digi solutions"
          />
        </div>

        <div className="why-choose-right">
          <div className="why-choose-features">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="feature-texts">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBulgaria;
