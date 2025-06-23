"use client"; 
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./delhiprocess.css";

const DelhiProcessSec = () => {
  const [activeImage, setActiveImage] = useState("https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665229/teacher-smart_chwcbk.png");
  const [activeStep, setActiveStep] = useState("01");

  const scrollRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);
  const step6Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBox = scrollRef.current;
      const scrollTop = scrollBox.scrollTop;
      const containerHeight = scrollBox.clientHeight;
      const middleY = scrollTop + containerHeight / 2;

      if (middleY >= step6Ref.current.offsetTop) {
        setActiveImage("https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665244/teacher-smart_6_pkj2nr.jpg");
        setActiveStep("06");
      } else if (middleY >= step5Ref.current.offsetTop) {
        setActiveImage("https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665232/teacher-smart_5_nfatb4.jpg");
        setActiveStep("05");
      } else if (middleY >= step4Ref.current.offsetTop) {
        setActiveImage("https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665243/teacher-smart_4_mgh4jw.jpg");
        setActiveStep("04");
      } else if (middleY >= step3Ref.current.offsetTop) {
        setActiveImage("https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665232/teacher-smart_7_oy1cvz.jpg");
        setActiveStep("03");
      } else if (middleY >= step2Ref.current.offsetTop) {
        setActiveImage("https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665242/teacher-smart_2_soxynl.jpg");
        setActiveStep("02");
      } else {
        setActiveImage("https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665229/teacher-smart_chwcbk.png");
        setActiveStep("01");
      }
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
          <div className="fixed-step-index">{activeStep}/06</div>
          <div className="text-scroll-box" ref={scrollRef}>
            <div className="step-block" ref={step1Ref}>
              <Image
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665226/circle_icon1_xtj4ua.png"
                className="scroll_img"
                alt="Step icon"
                width={40}
                height={40}
              />
              <h4>Understanding Requisite</h4>
              <ul>
                <li>Requirement elicitation from the client</li>
                <li>Business analytics of the inputs.</li>
              </ul>
            </div>

            <div className="step-block" ref={step2Ref}>
              <Image
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665226/circle_icon1_xtj4ua.png"
                className="scroll_img"
                alt="Step icon"
                width={40}
                height={40}
              />
              <h4>Defining Scope</h4>
              <ul>
                <li>Project scoping and requirement prioritization.</li>
                <li>Technology stack evaluation and selection.</li>
              </ul>
            </div>

            <div className="step-block" ref={step3Ref}>
              <Image
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665226/circle_icon1_xtj4ua.png"
                className="scroll_img"
                alt="Step icon"
                width={40}
                height={40}
              />
              <h4>Architecture Wireframing</h4>
              <ul>
                <li>Wireframing and mockup design for workflows.</li>
                <li>Application data and system architecture planning.</li>
              </ul>
            </div>

            <div className="step-block" ref={step4Ref}>
              <Image
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665226/circle_icon1_xtj4ua.png"
                className="scroll_img"
                alt="Step icon"
                width={40}
                height={40}
              />
              <h4>Development</h4>
              <ul>
                <li>Backend and frontend development.</li>
                <li>Integration with third-party services.</li>
              </ul>
            </div>

            <div className="step-block" ref={step5Ref}>
              <Image
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665226/circle_icon1_xtj4ua.png"
                className="scroll_img"
                alt="Step icon"
                width={40}
                height={40}
              />
              <h4>Quality Assurance</h4>
              <ul>
                <li>Manual and automated testing.</li>
                <li>Bug tracking and resolution.</li>
              </ul>
            </div>

            <div className="step-block" ref={step6Ref}>
              <Image
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750665226/circle_icon1_xtj4ua.png"
                className="scroll_img"
                alt="Step icon"
                width={40}
                height={40}
              />
              <h4>Deployment & Support</h4>
              <ul>
                <li>Production deployment and go-live.</li>
                <li>Post-launch maintenance and support.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="image-box">
        <Image
          src={activeImage}
          alt="Process Step"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default DelhiProcessSec;
