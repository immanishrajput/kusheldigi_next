import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";
import './silder.css'
const Slider = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".logo-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 11000,
        pauseOnFocus: false,
        pauseOnHover: false,
        rtl: true,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

      $(".logo-slider-1").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 11000,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  }, []);

  return (
    <div className="logo-container">
      <div className="logo-sliders">
        <div className="logo-heading">
          <p>
            Trusted choice of Top <strong>E-commerce</strong> Brands Worldwide
          </p>
        </div>
        <div className="logo-slider">
          {["sp1_tlo2jq.png", "sp2_udzoec.png", "sp3_kriscj.png", "sp6_oqjqdl.png", "sp4_mjfpjw.png"].map((img, index) => (
            <div key={index}>
              <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/${img}`}
                width="90%"
                alt="logo"
              />
            </div>
          ))}
        </div>
        <div className="logo-slider-1">
          {["sp5_sk9ico.png", "sp7_ludrbx.png", "sp8_neiqlr.png", "sp15_udrdig.png", "sp16_romtvs.png", "sp17_awm1ho.png", "sp18_iscwvs.png", "sp19_lg8ebe.png", "sp20_xvpwrq.png"].map((img, index) => (
            <div key={index}>
              <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985655/${img}`}
                width="90%"
                alt="logo"
              />
            </div>
          ))}
        </div>
        <div className="logo-slider">
          {["sp10_b2yb2j.png", "sp11_wd33xt.png", "sp12_wdyncp.png", "sp13_uplo8b.png", "sp14_t0ac1k.png"].map((img, index) => (
            <div key={index}>
              <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985652/${img}`}
                width="90%"
                alt="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
