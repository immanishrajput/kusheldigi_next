"use client"
import { useEffect, useState, useRef } from "react";
import "./Bigbanner8.css";

const Result1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold:0.5 }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  return (
  <section className="mmcainBcoSe">
     <div className="mainBcoSe">
     <div className="containCom">
        
        <div className="bcomcImd">
        <p className="smallcomtext">
        we are experts in 
        </p>
        <div className="logoImgcbom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png" alt="" />
        </div>
    
        </div>
     
      <p ref={descriptionRef} className={`descriptionCon3 ${isVisible ? "visible" : ""}`}>
        Perfect for fast growing and b2b businesses. if you're looking for an ecommerce solution that will help you drive big business growth, then bigcommerce is your platform. pretty, powerful, and high-performance, it ticks all the right boxes. flexible and scalable, bigcommerce is designed to grow with your business.
      </p>
    </div>
    <div className="maSecImgaec">
        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743491265/6777948_preview-e1602745344619_d13gsu.webp" alt="" />
    </div>
   </div>
  </section>
  );
};

export default Result1;
