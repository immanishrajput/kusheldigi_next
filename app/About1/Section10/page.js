"use client"
import React, { useState } from "react";
import "./Section10.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const philosophyData = [
  {
    id: 1,
    title: "Passionate And Highly Technical",
    description:
      "We value and encourage team members who are enthusiastic about their work and are committed to continually learning and improving their technical skills.",
  },
  {
    id: 2,
    title: "Dedicated",
    description:
      "We are motivated to do our best and are willing to go the extra mile to get client success.",
  },
  {
    id: 3,
    title: "Well trained",
    description:
      "We are motivated to do our best and are willing to go the extra mile to get client success.",
  },
  {
    id: 4,
    title: "Well trained",
    description:
      "We are motivated to do our best and are willing to go the extra mile to get client success.",
  },
];

export default function Section10() {
  const [index, setIndex] = useState(0);

const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(philosophyData.length - 2, 0) : prevIndex - 1
    );
  };
  
  const next = () => {
    setIndex((prevIndex) =>
      prevIndex + 2 >= philosophyData.length ? 0 : prevIndex + 1
    );
  };
  


  return (
   <section className="Mainphilosophy-section">
     <div className="philosophy-section">
      <div className="overlayWrap">
        <div className="text-contentSection">
          <h1>Work Philosophy values evolved with us.</h1>
          <p>
            <span className="highlightWapper">A clear, well-defined philosophy gives us the guidelines and boundaries that keep us on track.</span>
          </p>
          <Link href="/contact-us"><button className="connect-btnB">Let's Connect</button></Link>
        </div>

      
        <div className="sliderData">
  <div className="card-wrapper">
    {philosophyData.slice(index, index + 2).map((item) => (
      <div className="cardPhilo" key={item.id}>
        <span className="card-id">{item.id}</span>
        <h3 className="cardh3content">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
  <div className="navigationWrapper">
    <button onClick={prev}><FaArrowLeft/></button>
    <button onClick={next}><FaArrowRight/></button>
  </div>
</div>

        
      </div>
    </div>
   </section>
  );
} 