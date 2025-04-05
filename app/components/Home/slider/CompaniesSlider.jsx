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
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="logo-container">
      <div className="logo-sliders">
        <div className="logo-heading">
          <p className="primary-heading">
            Trusted choice of Top <strong>E-commerce</strong> Brands Worldwide
          </p>
        </div>
        {/* <Slider {...commonSettings} className="custom-slider">
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662636/deloittle_kmj8zz.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/kick-ezz_equj3m.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/br_dlqqri.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/havells_b5kyai.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/four_fa2sdm.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/graco_dtb86b.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/HINDWARE_yv9fmb.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/lbf_bbxvu8.png`} alt="logo" />
            </div>
        </Slider> */}

<Slider {...commonSettings} className="custom-slider">
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" className="black-rhino-img" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668956/blackrhino_bufosy.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/Group_1_171280660_tyojfe.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" className="madfish-img" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668955/70904_228x204_1_l5j13v.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668955/Slide365_Logo_1_sgrncf.png`} alt="logo" />
            </div>
        </Slider>

        <Slider {...commonSettings} rtl className="custom-slider">
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/rifle_zq5k1k.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" className="ride-img" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/Group_1171280661_capgvx.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" className="armore-img" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668955/2AA_Logo_Black_2_1_ickkxz.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668955/sa_rqpzv0.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/graco_tw5ipb.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/topbrass_miqpat.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/solenoid_f5nbub.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/typhoon_sorthk.png`} alt="logo" />
            </div>
        </Slider>

        {/* <Slider {...commonSettings} rtl className="custom-slider">
            <div  className="slide-item">
              <img width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/mad-fish_a51en6.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662638/ninja_ygx4ex.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662638/rifle-supply_hva4uu.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662638/serva-pure_op3eqz.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662639/shotter_ks0xa5.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662639/sight-and-scope_o4oamm.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662639/slide-365_eaemqs.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662639/SMT_o5vszi.png`} alt="logo" />
            </div>
        </Slider> */}

        {/* <Slider {...commonSettings} className="custom-slider">
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662639/top-brass_ugu1qr.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662640/2nd_krxwsf.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662640/bodcat_e0hoaz.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662640/blackrino_bt4dhq.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662636/deloittle_kmj8zz.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/kick-ezz_equj3m.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/mad-fish_a51en6.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662638/ninja_ygx4ex.png`} alt="logo" />
            </div>
        </Slider> */}

<Slider {...commonSettings} className="custom-slider">
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/bobcat_fo7ruq.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/four_sob0lr.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668954/landf_swe3ad.jpg`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743672316/Group_1171280670_1_fsujvq.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668965/shooters_xyihu9.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668965/veteran_i5glwp.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668956/image_4_mebvv1.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743668955/CodePXL_Web_Logo_1_aueiql.png`} alt="logo" />
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default CompaniesSlider;
