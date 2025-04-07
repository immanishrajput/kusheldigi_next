"use client"
import React, { useState } from "react";
import './Slider.css';
import { FaArrowLeft, FaArrowRight, FaRegUser } from "react-icons/fa";
import { FaHouseChimneyUser, FaRegFaceGrinWide } from "react-icons/fa6";
import { PiTarget } from "react-icons/pi";
import { MdOutlineSwitchAccount } from "react-icons/md";

const valuesData = [
  {
    title: "Customer Focus",
    description:
      "We have strong listening skills and know how to deal with challenging customers politely, which makes it easy to meet customers’ needs effectively.",
    icon: <FaRegFaceGrinWide/>,
  },
  {
    title: "Professionalism",
    description:
      "We show respect and competence in every interaction, maintaining high standards of service.",
    icon: <FaRegUser/>,
  },
  {
    title: "Teamwork",
    description:
      "Collaboration and mutual support define our work culture, helping us grow together.",
    icon: <PiTarget/>,
  },
  {
    title: "Accountability",
    description:
      "We take responsibility for our actions, always striving to deliver on our promises.",
    icon: <MdOutlineSwitchAccount/>,
  },
  {
    title: "Innovation",
    description:
      "We constantly seek new and better ways to improve our services and work culture.",
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
