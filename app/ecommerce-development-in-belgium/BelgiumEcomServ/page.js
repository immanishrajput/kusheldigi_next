'use client';
import React from 'react';
import './belgiumserv.css';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965474/Mask_group_75_obmlwf.png",
    title: "Ecommerce Consulting",
    description:
      "We advise businesses on the best eCommerce strategies and software selection. We also guide them in application development to meet their unique electronic-commerce requirements."
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_76_jziqdb.png",
    title: "Custom Ecommerce Development",
    description:
      `Our developers deliver custom ecommerce solutions tailored to your business needs. They create an ecommerce store that enhances your digital business footprint.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965473/Mask_group_77_syi4ue.png",
    title: "Platform-Based Ecommerce Development",
    description:
      `As a top ecommerce web development company, we specialise in creating high-performing stores. We utilise all major platforms and the latest ecommerce software.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965468/Mask_group_78_d9e39s.png",
    title: "Ecommerce Website Design",
    description:
      `Our designers craft engaging ecommerce site designs. These designs look great and offer a seamless user experience, which helps to boost sales.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_79_sv7ryx.png",
    title: "Ecommerce Integrations",
    description:
      `We provide seamless integration of your ecommerce platform with third-party applications. This ensures that your business processes are interconnected for efficient operations.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_80_xj1zov.png",
    title: "Ecommerce Migration",
    description:
      `Our developers handle ecommerce migration. They ensure the smooth transition of your ecommerce store from one platform to another with minimal disruption.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_81_ct53bt.png",
    title: "Ecommerce Audit",
    description:
      `We perform comprehensive audits of your ecommerce site. We identify potential improvements to enhance your store's performance, security, and user experience.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "Ecommerce Support and Evolution",
    description:
      `Our dedicated support team offers ongoing ecommerce site maintenance and evolution. This ensures your store stays updated, secure, and competitive.`
  },
  {
    icon: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744965467/Mask_group_82_mpn6s4.png",
    title: "Ecommerce Support and Evolution",
    description:
      `Our dedicated support team offers ongoing ecommerce site maintenance and evolution. This ensures your store stays updated, secure, and competitive.`
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

const BelgiumEcomServ = () => {
const navigate = useRouter();

  return (

    <section className="ecom-belgium-section">
      <h3 className="ecom-belgium-title">Our E-commerce Website Development Services</h3>

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

export default BelgiumEcomServ;
