"use client";

import React from "react";
import Image from "next/image";
import "./ecomintro.css";

const services = [
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750766445/offer_1_vbeaag.png",
    title: "Ecommerce Consulting",
    description:
      "We advise businesses on the best eCommerce strategies and software selection. We also guide them in application development to meet their unique electronic-commerce requirements.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750766444/Group_1171281698_rame6y.png",
    title: "Custom Ecommerce Development",
    description:
      "Our developers deliver custom ecommerce solutions tailored to your business needs. They create an ecommerce store that enhances your digital business footprint.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750766445/test_1_nr0zzh.png",
    title: "Platform-Based Ecommerce Development",
    description:
      "As a top ecommerce web development company, we specialise in creating high-performing stores. We utilise all major platforms and the latest ecommerce software.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750769020/designer_1_pn7e5d.png",
    title: "Ecommerce Website Design",
    description:
      "Our designers craft engaging ecommerce site designs. These designs look great and offer a seamless user experience, which helps to boost sales.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750769020/hire-best-icon_1_xyh0os.png",
    title: "Ecommerce Integrations",
    description:
      "We provide seamless integration of your ecommerce platform with third-party applications. This ensures that your business processes are interconnected for efficient operations.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750769020/interview_1_ujpl94.png",
    title: "Ecommerce Migration",
    description:
      "Our developers handle ecommerce migration. They ensure the smooth transition of your ecommerce store from one platform to another with minimal disruption.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750769020/customer-satisfaction-icon_1_ywdfop.png",
    title: "Ecommerce Audit",
    description:
      "We perform comprehensive audits of your ecommerce site. We identify potential improvements to enhance your store's performance, security, and user experience.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750769020/support_1_fcg8fk.png",
    title: "Ecommerce Support and Evolution",
    description:
      "Our dedicated support team offers ongoing ecommerce site maintenance and evolution. This ensures your store stays updated, secure, and competitive.",
  },
  {
    icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1750769020/support_1_fcg8fk.png",
    title: "Ecommerce Support and Evolution",
    description:
      "Our dedicated support team offers ongoing ecommerce site maintenance and evolution. This ensures your store stays updated, secure, and competitive.",
  },
];

export default function EcomServiceNoida() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h5 className="services-title">What Services Do We Provide</h5>
        <p className="services-subtext">
          A great eCommerce website has the power to uplift your business to astounding heights, and with a reliable and trusted eCommerce development company, you can be confident that your project is in good hands. Make your eCommerce site user-friendly, rank higher on Google, improve customer relationships, decrease the cost of inventory management, keep an eye on consumer’s buying habits, sell more products across the world and generate higher ROI.
        </p>

        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-left">
              <Image
                className="service-icon"
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
              />
              <h3 className="service-title">{service.title}</h3>
            </div>
            <div className="service-right">
              <p className="service-description">{service.description}</p>
              <div className="service-buttons">
                <button className="btn-pri btn-primary">Request a Free Quote</button>
                <button className="btn-pri btn-outline">Schedule a Demo</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
