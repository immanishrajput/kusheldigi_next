"use client";
import React from "react";
import "./whybelgium.css";

const features = [
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073420/Group_1171281413_b7dwf6.png",
    title: "Focused on Results",
    desc: "We've been getting good results for more than 10 years. Not any filler, just results.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073419/Group_1171281412_m4wjmx.png",
    title: "Plans that Fit your Needs",
    desc: "We think every business is different. Our professional team knows what each business needs and makes plans that fit those needs.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073409/Group_1171281523_k2vfml.png",
    title: "Cutting-Edge Technology",
    desc: "We use the newest technologies and tools to get things done faster and better.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281524_ksva3g.png",
    title: "Proven Results",
    desc: "We have data from different businesses that you can see. Our skilled team gets things done.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281525_qnpwgi.png",
    title: "Focusing on the Customer",
    desc: "We put your goal first. We give you what you ask for.",
  },
  {
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281414_nyzkrn.png",
    title: "Quality at a Low Cost",
    desc: "So that start-ups can also use our services, we believe in getting good results on a budget.",
  },
];

const WhyChooseBulgaria = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-wrapper">
        <h2 className="why-choose-heading">
          Why Choose Kushel Digi Solutions?
        </h2>
        <p className="why-choose-subtext">
          When we make ecommerce sites, we make sure they are mobile-friendly,
          scalable, and use SEO best practices to get people to buy right away.{" "}
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
