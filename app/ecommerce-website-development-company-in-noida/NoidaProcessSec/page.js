"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./delhiprocess.css";

const steps = [
  {
    title: "Understanding Requisite",
    points: ["Requirement elicitation from the client", "Business analytics of the inputs."],
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665229/teacher-smart_chwcbk.png",
    step: "01",
  },
  {
    title: "Defining Scope",
    points: ["Project scoping and requirement prioritization.", "Technology stack evaluation and selection."],
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665242/teacher-smart_2_soxynl.jpg",
    step: "02",
  },
  {
    title: "Architecture Wireframing",
    points: ["Wireframing and mockup design for workflows.", "Application data and system architecture planning."],
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665232/teacher-smart_7_oy1cvz.jpg",
    step: "03",
  },
  {
    title: "Development",
    points: ["Backend and frontend development.", "Integration with third-party services."],
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665243/teacher-smart_4_mgh4jw.jpg",
    step: "04",
  },
  {
    title: "Quality Assurance",
    points: ["Manual and automated testing.", "Bug tracking and resolution."],
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665232/teacher-smart_5_nfatb4.jpg",
    step: "05",
  },
  {
    title: "Deployment & Support",
    points: ["Production deployment and go-live.", "Post-launch maintenance and support."],
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665244/teacher-smart_6_pkj2nr.jpg",
    step: "06",
  },
];

export default function NoidaProcessSec() {
  const [activeStep, setActiveStep] = useState(steps[0].step);
  const [activeImage, setActiveImage] = useState(steps[0].image);
  const scrollRef = useRef(null);
  const stepRefs = useRef(steps.map(() => React.createRef()));
  const indicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBox = scrollRef.current;
      const indicatorTop = indicatorRef.current.getBoundingClientRect().top;

      let closestStepIndex = 0;
      let closestDistance = Infinity;

      steps.forEach((_, index) => {
        const stepTop = stepRefs.current[index]?.current?.getBoundingClientRect()?.top || 0;
        const distance = Math.abs(stepTop - indicatorTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestStepIndex = index;
        }
      });

      setActiveStep(steps[closestStepIndex]?.step);
      setActiveImage(steps[closestStepIndex]?.image);
    };
    const scrollBox = scrollRef.current;

    scrollBox.addEventListener("scroll", handleScroll);
    return () => scrollBox.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="our-process-container">
      <div className="scroll-section">
        <h5 className="main-our-process-h5">Our Process</h5>
        <div className="scroll-wrapper">
          <div className="fixed-step-index" ref={indicatorRef}>
            {activeStep}/06
          </div>
          <div className="text-scroll-box" ref={scrollRef}>
            {steps.map((step, index) => (
              <div className="step-block" ref={stepRefs.current[index]} key={index}>
                <Image
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665226/circle_icon1_xtj4ua.png"
                  alt="Step icon"
                  className="scroll_img"
                  width={40}
                  height={40}
                />
                <h4>{step.title}</h4>
                <ul>
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="newww"></div>
          </div>
        </div>
      </div>

      <div className="image-box">
        <Image src={activeImage} alt="Process Step" width={500} height={500} />
      </div>
    </div>
  );
}
