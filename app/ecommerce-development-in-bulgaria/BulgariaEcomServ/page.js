'use client';
import React from 'react';
import './belgiumserv.css';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965474/Mask_group_75_obmlwf.png",
    title: " Expert E-Commerce Advice",
    description:
      "As a leading e-commerce website development Company, we advise businesses to choose the right strategy and software selections. From start to end, our experts consult every bit to meet their ecommerce store requirements."
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_76_jziqdb.png",
    title: "E-Commerce Website Design",
    description:
      `We don't believe in pre-made templates. Every website is unique, and so are their designs. We design according to the needs and requirements of businesses. It ensures a strong online presence and improved user engagement. `
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_77_syi4ue.png",
    title: "Mobile-optimized Stores",
    description:
      `We understand that most of the users come from mobile devices. All our websites are mobile-friendly, offering seamless experiences across all platforms. `
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965468/Mask_group_78_d9e39s.png",
    title: " Platform-Based E-Commerce Development",
    description:
      `We specialize in creating websites on different platforms like Shopify, Magento, WooCommerce, and more. As a top ecommerce website development company in Bulgaria, we choose the best platform for your online store.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_79_sv7ryx.png",
    title: "E-Commerce Website Design",
    description:
      `Our expert team creates mesmerizing website designs for the online store that catch users’ attention. We make sure the ecommerce websites are user-friendly and work effortlessly on all devices. `
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_80_xj1zov.png",
    title: "Third-Party Integrations",
    description:
      `We integrate third-party platforms like CRMs, payment gateways, shipping tools, and marketing software. It ensures business operations are smoother and faster. `
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_81_ct53bt.png",
    title: "E-Commerce Migration Services",
    description:
      `Want to change your store? We are here to solve your problems. We handle complete store migration- products, catalogs, orders, and so on. We ensure zero downtime and no loss of SEO rankings. `
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "Ongoing Support",
    description:
      `As a top ecommerce development agency in Bulgaria, we provide endless updates, performance monitoring, feature upgrades, and technical support to keep your store running at peak performance.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: " E-Commerce Performance Audit",
    description:
      `We assess your shop's SEO, UX, speed, and structure. With our comprehensive eCommerce audit service, you'll have a clear path to improve site health, increase traffic, and enhance conversions.`
  }
];

const scrollToFormHome = () => {
  const formSection = document.getElementById('form-section');
  if (formSection) {
    const yOffset = -120;
    const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const BulgariaEcomServ = () => {
  const navigate = useRouter();
  
  return (
   <section className="ecom-belgium-section">
      <h3 className="ecom-belgium-title">What E-Commerce Website Development Services Do We Offer?
</h3> 
      
      <div className="ecom-belgium-grid-wrapper">
        <div className="ecom-belgium-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-belgium-card">
              <div className="ecom-belgium-icon">
                <img src={feature.icon} alt={feature.title} className="ecom-belgium-icon-img" />
                <h3 className="ecom-belgium-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-belgium-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-belgium-buttons">
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

export default BulgariaEcomServ;
