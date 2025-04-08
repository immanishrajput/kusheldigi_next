
"use client"
import React, { useEffect, useState } from "react";
import "./Section10.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const philosophyData = [
  { id: 1, title: "Integrity in Every Step", description: "We believe in upholding utmost honesty and strong moral principles in every action and decision we make." },
  { id: 2, title: "Customer-Centric Approach", description: "Each and every solution delivered is as per with the customer’s needs, goals, and satisfaction at the core." },
  { id: 3, title: "Transparency and Trust", description: "Kushel Digi Solutions strongly believe open communication builds long-lasting relationships and mutual respect." },
  { id: 4, title: "Passion for Creativity", description: "Our team is always passionate about creativity and forward-thinking to deliver modern, impactful solutions." },
  { id: 5, title: "Quality Without Compromise", description: "Our team never settles. Our work always reflects precision, performance and the highest standards." },
  { id: 6, title: "Teamwork Spirit", description: "Teamwork is the key to success. We grow together through shared ideas and efforts." },
  { id: 7, title: "Commitment to Excellence", description: "We go the extra mile to deliver excellent results in everything we do." }
];

export default function Section10() {
  const [index, setIndex] = useState(0);
  const visibleCards = 2;

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(philosophyData.length - visibleCards, 0) : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex + visibleCards >= philosophyData.length ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000); 
    return () => clearInterval(interval); 
  }, []);
  const translateX = -(index * (350 + 24));

  return (
    <section className="Mainphilosophy-section">
      <div className="philosophy-section">
        <div className="overlayWrap">
          <div className="text-contentSection">
            <h1>Principles that Guides us to Deliver Your Success</h1>
            <p>
              <span className="highlightWapper">
                Our principles are not just merely about successful delivery of projects, it's about doing with utmost dedication and delivering projects as per your expectation in a transparent manner.
              </span>
            </p>
            <div className="ConnetDivBtn">
              <Link href="/contact-us"><button className="connect-btnB">Let's Connect</button></Link>
            </div>
          </div>
          
          <div className="sliderData">
          <div className="navigationWrapper">
              <button onClick={prev}><FaArrowLeft /></button>
              <button onClick={next}><FaArrowRight /></button>
            </div>
            <div className="card-wrapper-wrapper">
              <div
                className="card-wrapper"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {philosophyData.map((item) => (
                  <div className="cardPhilo" key={item.id}>
                    <span className="card-id">{item.id}</span>
                    <h3 className="cardh3content">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
           
          </div>

        </div>
      </div>
    </section>
  );
}
