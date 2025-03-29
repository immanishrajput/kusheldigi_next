"use client"
import React, { useState, useEffect } from "react";
import './Banner11.css'

function Banner12() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".content-wrapper");
  
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = "";
  
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });
  
        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0.5, 0.75, 1], 
        rootMargin: "0px 0px -30% 0px",
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  },[activeSection]);
  const scrollToSection = (id) => {
    setActiveSection(id); // Manually set active section
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  
   
    
  };

  

  return (
    <section className="sec---3">
      <div className="header-div">
        <div className="header-content">
          <h3>Expert Ecommerce Solutions for Modern Businesses
          </h3>
          <h6>Doesn’t matter whether you're a small business or a large enterprise, our custom ecommerce solutions are designed to grow with you. We believe in delivering seamless, high-performing online stores that drive results.</h6>
          <h5>Business Models We Deliver For</h5>
        </div>
        <div className="links">
          <ul>
            <li
              onClick={() => scrollToSection("b2c")}
              className={activeSection === "b2c" ? "active" : ""}
            >
              B2C
            </li>
            <li
              onClick={() => scrollToSection("b2b")}
              className={activeSection === "b2b" ? "active" : ""}
            >
              B2B
            </li>
            <li
              onClick={() => scrollToSection("multi-vendors")}
              className={activeSection === "multi-vendors" ? "active" : ""}
            >
              Multi Vendors
            </li>
            <li
              onClick={() => scrollToSection("d2c")}
              className={activeSection === "d2c" ? "active" : ""}
            >
              D2C 
            </li>
          </ul>
        </div>
        <hr className="hrEcommm"/>
      </div>

      <div id="b2c" className="content-wrapper">
        <div className="content">
          <h3 className={activeSection === "b2c" ? "underline" : ""}>B2C</h3>
          <p>Our experts at Kushel Digi have long years of experience in designing ecommerce solutions suited for wholesale, bulk ordering, and corporate transactions. We optimize B2B sales channels for higher efficiency.
          </p>
          <button className="button-b2">DEVELOP B2C ECOMMERCE</button>
        </div>
        <div className="img">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742971744/b2b-website_ghvr3o.jpg" alt="" />
        </div>
      </div>

      <div id="b2b" className="content-wrapper">
        <div className="img-2nd">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742971744/b2b-website_ghvr3o.jpg" alt="" />
        </div>
        <div className="content">
          <h3 className={activeSection === "b2b" ? "underline" : ""}>B2B</h3>
          <p>Kushel Digi has expertise to deliver engaging, scalable, and user-friendly ecommerce solutions that connect businesses with end customers. Our team is committed to help brands grow their online presence and boost sales.</p>
          <button className="button-b2">DEVELOP B2B ECOMMERCE</button>
        </div>
      </div>

      <div id="multi-vendors" className="content-wrapper">
        <div className="content">
          <h3 className={activeSection === "multi-vendors" ? "underline" : ""}>
            Multi-Vendors
          </h3>
          <p>We have delivered various marketplace solutions that allow multiple sellers to showcase and sell their products on a single platform. We ensure smooth vendor management, secure transactions, and excellent shopping experience for customers.</p>
          <button className="button-b2">DEVELOP MULTI-VENDOR ECOMMERCE</button>
        </div>
        <div className="img">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742971744/b2b-website_ghvr3o.jpg" alt="" />
        </div>
      </div>

      <div id="d2c" className="content-wrapper">
        <div className="img-2nd">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742971744/b2b-website_ghvr3o.jpg" alt="" />
        </div>
        <div className="content">
          <h3 className={activeSection === "d2c" ? "underline" : ""}>
            D2C (Direct-to-Consumer)
          </h3>
          <p>We have been helping brands to establish a direct connection with consumers by removing intermediaries. We create personalized ecommerce experiences to enhance brand loyalty and maximum profit. </p>
          <button className="button-b2">DEVELOP D2C ECOMMERCE</button>
        </div>
      </div>
    </section>


  );
}

export default Banner12;