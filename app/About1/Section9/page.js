"use client"
import React, { useState } from "react";
import "./Section9.css";
import { GoEye, GoGoal } from "react-icons/go";

const Section9 = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard(card === activeCard ? null : card);
  };

  return (
    <section className="visionMContain">
        <div className="vision-mission-container">
      <div
        className={`cardVision ${activeCard === "vision" ? "active" : ""}`}
        onClick={() => handleCardClick("vision")}
      >
        <div className={`icon-boxMission ${activeCard === "vision" ? "active-icon" : ""}`}>
          <span className="iconMission">
          <GoEye/>
          </span>
        </div>
        <h2 className="titleMission">Our Vision</h2>
        <p className="textViMission">
          To Be A Champion IT Boutique Shop With Passionate Handpicked Professionals.
        </p>
      </div>

      <div
        className={`cardVision ${activeCard === "mission" ? "active" : ""}`}
        onClick={() => handleCardClick("mission")}
      >
        <div className={`icon-boxMission ${activeCard === "mission" ? "active-icon" : ""}`}>
          <span className="iconMission">
          <GoGoal/>
          </span>
        </div>
        <h2 className="titleMission">Our Mission</h2>
        <p className="textViMission">
          Provides Unmatched IT Services With Treasuring Relationship, Pleasing Work Culture, And
          Delivering Highest Possible Growth By Transforming Client Needs Into Innovative Solutions.
        </p>
      </div>
    </div>
    </section>
  );
};

export default Section9;
