"use client"
import React, { useEffect, useRef, useState } from "react";
import "./delhiprocess.css";

const steps = [
  {
    title: "Understanding Requisite",
    points: [
      "Requirement elicitation from the client",
      "Business analytics of the inputs.",
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665229/teacher-smart_chwcbk.png",
    step: "01",
  },
  {
    title: "Defining Scope",
    points: [
      "Project scoping and requirement prioritization.",
      "Technology stack evaluation and selection.",
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665242/teacher-smart_2_soxynl.jpg",
    step: "02",
  },
  {
    title: "Architecture Wireframing",
    points: [
      "Wireframing and mockup design for workflows.",
      "Application data and system architecture planning.",
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665232/teacher-smart_7_oy1cvz.jpg",
    step: "03",
  },
  {
    title: "Development",
    points: [
      "Backend and frontend development.",
      "Integration with third-party services.",
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665243/teacher-smart_4_mgh4jw.jpg",
    step: "04",
  },
  {
    title: "Quality Assurance",
    points: ["Manual and automated testing.", "Bug tracking and resolution."],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665232/teacher-smart_5_nfatb4.jpg",
    step: "05",
  },
  {
    title: "Deployment & Support",
    points: [
      "Production deployment and go-live.",
      "Post-launch maintenance and support.",
    ],
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665244/teacher-smart_6_pkj2nr.jpg",
    step: "06",
  },
];

const OurProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 6;
      let closestIndex = 0;
      let closestDistance = Infinity;

      stepRefs.current.forEach((el, i) => {
        if (el) {
          const box = el.getBoundingClientRect();
          const distance = Math.abs(box.top - centerY);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="our-process-section">
      <div className="our-process-wrapper">
        {/* LEFT SIDE */}
        <div className="our-process-left">
          <div className="our-process-heading-sticky">
            <h2 className="our-process-heading">Our Process</h2>
          </div>

          <div className={`process-content ${window.innerWidth <= 768 ? "scroll-snap-container" : ""
            }`}>
            {steps.map((step, index) => (
              <div
                className={`timeline-wrapper ${index === activeIndex ? "active" : ""}`}
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
              >
                <div className="timeline-left">
                  <span className="step-count">
                    {step.step}/{steps.length.toString().padStart(2, "0")}
                  </span>
                  <div className="timeline-line" />
                </div>

                <div className="timeline-content">
                  <div className="step-icon">
                    <img
                      src="https://res.cloudinary.com/dknrega1a/image/upload/v1751026232/circle_icon1_j5xftk.png"
                      alt="Step Icon"
                    />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <ul className="step-points">
                    {step.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: STICKY IMAGE */}
        <div className="our-process-right">
          <div className="sticky-image-wrapper">
            <img
              src={steps[activeIndex].image}
              alt="Process Step"
              className="step-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
