"use client"
import React, { useState } from "react";
import './Slider.css';
import { FaArrowLeft, FaArrowRight, FaRegUser } from "react-icons/fa";
import { FaHouseChimneyUser, FaRegFaceGrinWide } from "react-icons/fa6";
import { PiTarget } from "react-icons/pi";
import { MdOutlineSwitchAccount } from "react-icons/md";

const valuesData = [
  {
    title: "Client-Centric",
    description:
      "We value our client’s satisfaction and needs over everything else as our solutions fully aligned with your goals.",
    icon: <FaRegFaceGrinWide/>,
  },
  {
    title: "Transparency",
    description:
      "We believe in open and transparent communication at every step of the project, keeping the clients well-informed and engaged with the process.",
    icon: <FaRegUser/>,
  },
  {
    title: "Quality Assurance",
    description:
      "We ensure high-quality results through rigorous testing, reviews, and ongoing improvements.",
    icon: <PiTarget/>,
  },
  {
    title: "Team Work",
    description:
      "We have faith in teamwork and togetherness, putting individual strengths together to bring collective success and effective project delivery.",
    icon: <MdOutlineSwitchAccount/>,
  },
  {
    title: "Innovation",
    description:
      "We incorporate innovative ideas and technologies to create progressive solutions that lead to growth and set our clients apart from competition.",
    icon: <FaHouseChimneyUser/>,
  },
 
];

const CARDS_PER_PAGE = 4;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newStartIndex = startIndex + 1;
    if (newStartIndex + CARDS_PER_PAGE <= valuesData.length) {
      setStartIndex(newStartIndex);
      setActiveIndex(newStartIndex); 
    }
  };

  const handlePrev = () => {
    const newStartIndex = startIndex - 1;
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
      setActiveIndex(newStartIndex); 
    }
  };

  const visibleCards = valuesData.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <section className="ourValues_k82s">
      <div className="ourValuesHeader_k82s">
        <h2>
          Our <span>Values</span>
        </h2>
        <div className="navButtons_k82s">
          <button className="navBtn_k82s" onClick={handlePrev}>
          <FaArrowLeft/>
          </button>
          <button className="navBtn_k82s active" onClick={handleNext}>
          <FaArrowRight/>
          </button>
        </div>
      </div>

      <div className="sliderWrapper_k82s">
        <div className="valuesGrid_k82s">
          {visibleCards.map((item, index) => {
            const actualIndex = startIndex + index;
            return (
              <div
                key={actualIndex}
                className={`valueCard_k82s ${
                  actualIndex === activeIndex ? "active_k82s" : ""
                }`}
                onClick={() => setActiveIndex(actualIndex)}
              >
                <div className="iconWrapper_k82s">
                {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
