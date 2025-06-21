'use client';
import React from 'react';
import './qatarecom.css'; 
import { FaCheck } from 'react-icons/fa';



const steps = [
  {
    title: 'UX RESEARCH',
    points: ['PRODUCT DEFINITION', 'RESEARCH & ANALYSIS', 'IDEATION']
  },
  {
    title: 'UX DESIGN',
    points: ['PROTOTYPING', 'USER-TESTING', 'WIREFRAMING']
  },
  {
    title: 'UI DESIGN',
    points: ['MOODBOARDS', 'CONCEPT', 'FINAL DESIGN']
  },
  {
    title: 'DELIVERY',
    points: ['SUPPORT']
  }
];

const QatarEcomDev = () => {
  return (
    <section className="devloprocess1-wrapper">
      <h2 className="devloprocess1-heading">Our e-commerce development process</h2>
      <p className="devloprocess1-subtext">
        With hundreds of successfully delivered projects, we bring a
        transparent, agile development process from the initial planning
        to the post-release stages.
      </p>
      <div className="devloprocess1-timeline">
    {steps.map((step, index) => (
  <div className="devloprocess1-step" key={index}>
    <div className="devloprocess1-icon">
      <FaCheck />
    </div>
    <div className="devloprocess1-content">
      <h3>{step.title}</h3>
      <ol>
        {step.points.map((point, pIndex) => (
          <li key={pIndex}>
            {pIndex + 1}. {point}
          </li>
        ))}
      </ol>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default QatarEcomDev;
