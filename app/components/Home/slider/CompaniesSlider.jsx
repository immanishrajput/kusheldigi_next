'use client';

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewSlider.css';
import Slider from "react-slick";

const CompaniesSlider = () => {
  const [autoplaySpeed, setAutoplaySpeed] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplaySpeed(4000);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const commonSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: autoplaySpeed,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnHover: false,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="logo-container">
      <div className="logo-sliders">
        <div className="logo-heading">
          <p>
            Trusted choice of Top <strong>E-commerce</strong> Brands Worldwide
          </p>
        </div>

        <Slider {...commonSettings} className="custom-slider">
          {["sp18_iscwvs.png", "sp19_lg8ebe.png", "sp20_xvpwrq.png", "sp1_tlo2jq.png", "sp2_udzoec.png", "sp3_kriscj.png", "sp6_oqjqdl.png", "sp4_mjfpjw.png"].map((img, index) => (
            <div key={index} className="slide-item">
              <img src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/${img}`} alt="logo" />
            </div>
          ))}
        </Slider>

        <Slider {...commonSettings} rtl className="custom-slider">
          {["sp5_sk9ico.png", "sp7_ludrbx.png", "sp8_neiqlr.png", "sp15_udrdig.png", "sp16_romtvs.png", "sp17_awm1ho.png", "sp18_iscwvs.png", "sp19_lg8ebe.png"].map((img, index) => (
            <div key={index} className="slide-item">
              <img src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/${img}`} alt="logo" />
            </div>
          ))}
        </Slider>

        <Slider {...commonSettings} className="custom-slider">
          {["sp3_kriscj.png", "sp6_oqjqdl.png", "sp4_mjfpjw.png", "sp10_b2yb2j.png", "sp11_wd33xt.png", "sp12_wdyncp.png", "sp13_uplo8b.png", "sp14_t0ac1k.png"].map((img, index) => (
            <div key={index} className="slide-item">
              <img src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/${img}`} alt="logo" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompaniesSlider;
