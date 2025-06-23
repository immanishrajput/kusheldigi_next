"use client"; 
import React from "react";
import Image from "next/image";
import "./delhiengage.css";

function DelhiEngage() {
  const items = [
    {
      id: "1",
      img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665227/Group1171281669_gbfzak.png",
      text: "Managed Team",
      pra: "Your product, our dedicated team. From concept to completion, we handle it all.",
    },
    {
      id: "2",
      img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665227/how-we-help-you-icon1_tddd2p.png",
      text: "Staff Augmentation",
      pra: "Need extra hands? Our experts seamlessly join your team, providing the skills you need, when you need them.",
    },
    {
      id: "3",
      img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665227/how-we-help-you-icon_yrjxo3.png",
      text: "Fixed Cost",
      pra: "Upfront price, guaranteed delivery. Your project completed on time and within budget.",
    },
  ];

  return (
    <div className="engagement-container">
      <div className="engagement-title">
        <h2>Engagement Models for Our E-commerce Development Services</h2>
      </div>

      <div className="engagement-cards">
        {items.map((item) => (
          <div
            key={item.id}
            className={`engagement-card engagement-card-${item.id}`}
          >
            <div className="engagement-card-set">
              <Image
                src={item.img}
                alt={item.text}
                width={55}
                height={55}
              />
              <h5>{item.text}</h5>
              <p>{item.pra}</p>
            </div>
            <button>Contact Us For Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DelhiEngage;
