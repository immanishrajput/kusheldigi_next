import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewSlider.css';
import Slider from "react-slick";


const CompaniesSlider = () => {

const scrollSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1700,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnHover: false
};

const scrollSettings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnHover: false
};

const scrollSettings3 = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1600,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnHover: false
};

  return (
    <div className="logo-container">
      <div className="logo-sliders">
        <div className="logo-heading">
          <p>
            Trusted choice of Top <strong>E-commerce</strong> Brands Worldwide
          </p>
        </div>
        <Slider {...scrollSettings} style={{margin:'10px'}}>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp1_tlo2jq.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp2_udzoec.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp3_kriscj.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp6_oqjqdl.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp4_mjfpjw.png`}
                width="85%"
                alt="logo"
              />
            </div>
        </Slider>


        <Slider {...scrollSettings2} style={{margin:'20px 0px'}}>
        <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp5_sk9ico.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp7_ludrbx.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp8_neiqlr.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp15_udrdig.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp16_romtvs.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp17_awm1ho.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp18_iscwvs.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp19_lg8ebe.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp20_xvpwrq.png`}
                width="85%"
                alt="logo"
              />
            </div>
        </Slider>


        <Slider {...scrollSettings3} style={{margin:'10px'}}>
        <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp10_b2yb2j.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp11_wd33xt.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp12_wdyncp.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp13_uplo8b.png`}
                width="85%"
                alt="logo"
              />
            </div>
            <div>
            <img
                src={`https://res.cloudinary.com/dqjbzgksw/image/upload/v1740985644/sp14_t0ac1k.png`}
                width="85%"
                alt="logo"
              />
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default CompaniesSlider;