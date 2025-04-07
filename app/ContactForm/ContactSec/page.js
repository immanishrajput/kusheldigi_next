"use client"
import React, { useState } from 'react';
import './ContactSec.css';


const ContactSec = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePopup = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const leftItems = [
    {
       
      title: (
        
        <>
       
          <div className='freeSubtextDs'> Free Discovery Call</div>
        </>
      ),
      popup: "We define the scope of your project – Vet the feasibility of your wishlist, get the # of screens, the right flow, and the necessary functionality all mapped out!",
    },
    {
      title: (
        <>
          Custom Project Plan
        </>
      ),
      popup: "Avoid wasting resources by planning your build and spend strategically.",
    },
    {
      title: (
        <>
         Design & Strategy Mockups 
        </>
      ),
      popup: "Lay down a clear, validated roadmap for your product’s success.",
    },
    {
      title: (
        <>
        Go-to-Market Roadmap
        </>
      ),
      popup: "Visualize your final product with high-fidelity mockups.",
    },
    {
      title: <> Final Sync </>,
      popup: "We wrap up, review progress, and set you up to launch with confidence.",
    },
  ];

  return (
   <section className='mainDsContain'>
    <div className='mainDsDiv'>
        <p className='mainDsDivtitle'>Let’s Build Something Great</p>
       <div className='mainDsDivNum'>
       <p>Idea to Execution</p>
       <svg
      className="from0to1-underline"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
    >
      <path
        d="M5 15 Q 100 0 195 15"
        stroke="black"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>
       </div>
      
    </div>
     <div className="ds25-container">
      
      <div className="ds25-left">
      <div className="ds25-arrow-wrapper">
      <svg
  className="ds25-arrow-svg"
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 100 100"
  fill="none"
>
  <path
    d="M90,10 C50,10 10,50 50,90"
    stroke="#3b3bf0"
    strokeWidth="6"
    fill="none"
    markerEnd="url(#arrowhead)"
  />
  <defs>
    <marker
      id="arrowhead"
      markerWidth="10"
      markerHeight="7"
      refX="0"
      refY="3.5"
      orient="auto"
    >
      <polygon points="0 0, 10 3.5, 0 7" fill="#3b3bf0" />
    </marker>
  </defs>
</svg>

  </div>
        {leftItems.map((item, index) => (
          <div className="ds25-left-item" key={index}>
           
            <p className='ds25Content'>{item.title}</p>

            <span
              className="ds25-plus"
              onClick={() => togglePopup(index)}
            >
              {activeIndex === index ? '×' : '+'}
            </span>

            {activeIndex === index && (
              <div className="ds25-popup">
                <h4 className="ds25-step-title">Step {index + 1}</h4>
                <p>{item.popup}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="ds25-right">
        {/* {[
          "In this phase, we will understand your project goals, requirements and vision. ",
          "In this phase you will receive a clear roadmap and proposal according to your business needs.",
          "We’ll create the designs and layouts according to your idea before development begins.",
          "We will guide every phase of your product journey from beta testing to launching.",
          "We finalize everything and assign our expert team to deliver your project with right strategy. ",
        ].map((text, index) => (
          <div className="ds25-step" key={index}>
            <div className="ds25-step-num">{index + 1}</div>
            <div className="ds25-step-text">{text}</div>
          </div>
        ))} */}
        {[
  "In this phase, we will understand your project goals, requirements and vision. ",
  "In this phase you will receive a clear roadmap and proposal according to your business needs.",
  "We’ll create the designs and layouts according to your idea before development begins.",
  "We will guide every phase of your product journey from beta testing to launching.",
  "We finalize everything and assign our expert team to deliver your project with right strategy. ",
].map((text, index, arr) => (
  <div className="ds25-step-wrapper" key={index}>
    <div className="ds25-step">
      <div className="ds25-step-num">{index + 1}</div>
      <div className="ds25-step-text">{text}</div>
    </div>
    {index === arr.length - 1 && (
      <svg
        className="ds25-bottom-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="60"
        viewBox="0 0 30 60"
        fill="none"
      >
        <path
          d="M15 0 V50"
          stroke="#3b3bf0"
          strokeWidth="4"
        />
        <path
          d="M5 45 L15 55 L25 45"
          stroke="#3b3bf0"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    )}
  </div>
))}

      </div>
    </div>
   </section>
  );
};

export default ContactSec;
