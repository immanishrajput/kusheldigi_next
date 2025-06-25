"use client";
import React from "react";
import Image from "next/image";
import "./noidabanner3.css";

const NoidaBanner3 = () => {
  return (
    <section className="ecommerce-section">
      <div className="ecommerce-content">
        <div className="ecommerce-text">
          <p className="section-tag">Understanding E-Commerce Web Development with Star Web Maker</p>
          <h5 className="h5-tag">
            Grow Your Business With an <span className="highlight">Ecommerce Website</span>
          </h5>
          <p className="paragraph">
            An eCommerce website is a digital marketplace where businesses showcase and sell their products or services
            online. It functions as a virtual storefront, allowing customers to browse, select, and purchase items from
            anywhere at any time using their computers or mobile devices. These websites are designed to provide a
            user-friendly shopping experience, with intuitive navigation, detailed product pages, and secure checkout
            processes.
          </p>
          <p className="paragraph">
            <strong>At Kushel Digi Solutions</strong>, we specialize in crafting bespoke eCommerce solutions tailored
            to meet the unique needs of our clients. Our approach to eCommerce web development combines cutting-edge
            technology with creative design to create engaging and functional online stores. Whether you're launching a
            new eCommerce venture or seeking to revamp an existing platform, our team of experts is dedicated to
            delivering robust solutions that drive sales and enhance customer satisfaction.
          </p>
          <div className="btn-group">
            <button className="btn-pri btn-primary">Request a Free Quote</button>
            <button className="btn-pri btn-outline">Schedule a Demo</button>
          </div>
        </div>
        <div className="ecommerce-image">
          <Image
            src="https://res.cloudinary.com/dknrega1a/image/upload/v1750758201/1732600813399_m7eud1.png"
            alt="Ecommerce Visual"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default NoidaBanner3;
