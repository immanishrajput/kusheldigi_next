'use client';

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewSlider.css';
import Slider from "react-slick";
import Image from "next/image";

const slider1Images = [
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668956/blackrhino_bufosy.png', className: 'black-rhino-img' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/Group_1_171280660_tyojfe.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/70904_228x204_1_l5j13v.png', className: 'madfish-img' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/Slide365_Logo_1_sgrncf.png' },
];

const slider2Images = [
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/rifle_zq5k1k.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/Group_1171280661_capgvx.png', className: 'ride-img' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/2AA_Logo_Black_2_1_ickkxz.png', className: 'armore-img' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/sa_rqpzv0.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/graco_tw5ipb.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/topbrasstactical_miqpat.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/solenoid_f5nbub.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/typhoon_sorthk.png' },
];

const slider3Images = [
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/bobcat_fo7ruq.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/four_sob0lr.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668954/landf_swe3ad.jpg' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743672316/Group_1171280670_1_fsujvq.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png' },
  { src: 'https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png' },
];

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
          slidesToShow: 2,
        }
      }
    ]
  };

  const renderSlider = (images, rtl = false) => (
    <Slider {...commonSettings} rtl={rtl} className="custom-slider">
      {images.map((img, index) => (
        <div className="slide-item" key={index}>
          <Image
            width={298}
            height={173}
            loading="lazy"
            src={img.src}
            alt="logo"
            className={img.className || ''}
          />
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="logo-container">
      <div className="logo-sliders">
        <div className="logo-heading">
          <p className="primary-heading">
            Trusted choice of Top <strong>E-commerce</strong> Brands Worldwide
          </p>
        </div>
        {renderSlider(slider1Images)}
        {renderSlider(slider2Images, true)}
        {renderSlider(slider3Images)}
      </div>
    </div>
  );
};

export default CompaniesSlider;
