"use client"
import React from "react";
import "./banner.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
// import Slider from "react-slick";
const Banner = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   waitForAnimate: false,
  //   pauseOnHover: false,
  // };

  return (
    <>
      <section className="Mainhero-sectionss">
        <div className="hero-containerMa">
          <div className="hero-containerMaSub">
            <div className="hero-contentBi">
              <p className="hero-tagCo">Top Ecommerce Development Agency</p>
              <h3 className="headssCom">
                Looking for a High-Conversion eCommerce Solution?
              </h3>
              <p className="hero-descriptionCom">
                Your search for the perfect eCommerce solution ends here! Kushel
                Digi has emerged as a top ecommerce development agency as our
                experts build powerful, scalable eCommerce solutions according
                to your business needs.
              </p>
              <div className="buttonsBi">
                <a href="#form-section" className="primary-btn">
                  Book a Call<FaArrowRight/>
                </a>
                <button className="secondary-btn">
                <Link href="/contact-us">  Request Complimentary Audit</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="img-containerCo">
          <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743079133/ecommerce-banner_tyflss.webp"
                  alt="ecommerce"
                  className="image-thumbnail"
                />
              {/* <Slider {...settings}>
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                  alt="ecommerce"
                  className="image-thumbnail"
                />
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                  alt="ecommerce"
                  className="image-thumbnail"
                />
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                  alt="ecommerce"
                  className="image-thumbnail"
                />
              </Slider> */}
            </div>
          {/* <div className="hero-containerMaSub1"> */}
            
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Banner;
