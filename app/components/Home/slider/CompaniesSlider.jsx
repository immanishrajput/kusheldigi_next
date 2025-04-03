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
          <p>
            Trusted choice of Top <strong>E-commerce</strong> Brands Worldwide
          </p>
        </div>
        <Slider {...commonSettings} className="custom-slider">
          {/* {["blackrino_mvfdoz.png", "sight-and-scope_xn7xq8.png", "mad-fish_rhilwq.png", "2nd_urklot.png ", "top-brass_bwqbk2.png", "kick-ezz_oohev7.png", "SMT_ktymk6.png", "havells_ykmkip.png"].map((img, index) => ( */}
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662636/deloittle_kmj8zz.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/kick-ezz_equj3m.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/br_dlqqri.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/havells_b5kyai.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/four_fa2sdm.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/graco_dtb86b.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/HINDWARE_yv9fmb.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/lbf_bbxvu8.png`} alt="logo" />
            </div>
          {/* ))} */}
        </Slider>

        <Slider {...commonSettings} rtl className="custom-slider">
          {/* {["sp5_sk9ico.png", "sp7_ludrbx.png", "sp8_neiqlr.png", "sp15_udrdig.png", "sp16_romtvs.png", "sp17_awm1ho.png", "sp18_iscwvs.png", "sp19_lg8ebe.png"].map((img, index) => ( */}
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
          {/* ))} */}
        </Slider>

        <Slider {...commonSettings} className="custom-slider">
          {/* {["sp3_kriscj.png", "sp6_oqjqdl.png", "sp4_mjfpjw.png", "sp10_b2yb2j.png", "sp11_wd33xt.png", "sp12_wdyncp.png", "sp13_uplo8b.png", "sp14_t0ac1k.png"].map((img, index) => ( */}
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
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662636/deloittle_kmj8zz.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              {/* <h1>{index}</h1> */}
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/kick-ezz_equj3m.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662637/mad-fish_a51en6.png`} alt="logo" />
            </div>
            <div  className="slide-item">
              <img  width="298" height="173" loading="lazy" src={`https://res.cloudinary.com/dgif730br/image/upload/v1743662638/ninja_ygx4ex.png`} alt="logo" />
            </div>
          {/* ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default CompaniesSlider;
