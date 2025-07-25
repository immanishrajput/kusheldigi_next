"use client";
import React from "react";
import "./denmarkserv.css";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965474/Mask_group_75_obmlwf.png",
    title: "E-Commerce Strategy",
    description:
      "We suggest businesses select software, platforms and growing strategies. Our expert team guides them for long-term success.",
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_76_jziqdb.png",
    title: "Custom E-Commerce Development",
    description: `
We believe that every ecommerce site is different, their goals are different, and their target audience is also a bit different. So we design custom websites related to their brand needs and wants.
`,
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_77_syi4ue.png",
    title: "Platform-Based Store Development",
    description: `
As a leading ecommerce development company in Finland, we use the best platforms like BigCommerce, Shopify and Magento for designing websites. 
`,
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965468/Mask_group_78_d9e39s.png",
    title: "E-Commerce Website Design",
    description: `
Our expert team designs fast, secure, flexible, mobile-friendly and third-party integrated websites that help improve user experience, drive traffic and lead to more conversions.
`,
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_79_sv7ryx.png",
    title: "Third-Party Integrations",
    description: ` 
We integrate third-party tools from payment gateways to inventory systems. We ensure all the essential tools are connected, making day-to-day operations easier, faster, and fuss-free.
`,
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_80_xj1zov.png",
    title: "E-Commerce Platform Migration",
    description: `
Switching Platforms? As a prominent ecommerce development company in Finland, our expert team migrates the old website to a new one without any data loss and SEO traffic affected.
.`,
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_81_ct53bt.png",
    title: "E-Commerce Performance Audit",
    description: `
We review your entire site- speed, flexibility, mobile friendliness, SEO, security - to find out any errors. Then we offer clear directions to fix those errors.
`,
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "Ongoing Support & Maintenance",
    description: `
We also offer post-launch support. Our expert team keeps an eye on your online store and regularly fixes bugs, speed issues, handles updates, security patches and new features.
`,
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "Continuous Store Evolution",
    description: `
We believe in growing as the market grows. So we offer flexibility to evolve your ecommerce store with new trends, tools, and technologies that keep your business ahead of the competition.
`,
  },
];

const scrollToFormHome = () => {
  const formSection = document.getElementById('form-section');
  if (formSection) {
    const yOffset = -120;
    const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const FinlandEcomServ = () => {
    const navigate = useRouter();
  
  return (
    <section className="ecom-denmark-section">
      <h3 className="ecom-denmark-title">
        What Services Do We Offer as a Leading E-Commerce Development Company in
        Finland?
      </h3>

      <div className="ecom-denmark-grid-wrapper">
        <div className="ecom-denmark-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-denmark-card">
              <div className="ecom-denmark-icon">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="ecom-denmark-icon-img"
                />
                <h3 className="ecom-denmark-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-denmark-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

            <div className="ecom-denmark-buttons">
        <button onClick={() => navigate.push('/contact-us')} className="ecom-btn primary">Book a Call
          {/* Book a Call <HiArrowSmallRight /> */}
        </button>
        {/* <button className="ecom-btn secondary">Request an Audit</button> */}
        <button onClick={scrollToFormHome} className="ecom-btn secondary">
          Request an Audit
        </button>

      </div>
    </section>
  );
};

export default FinlandEcomServ;
