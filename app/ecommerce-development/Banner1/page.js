"use client"
import React, { useEffect } from "react";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Banner = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnHover: false
};

  useEffect(() => {
          const handleHashChange = () => {
              const section = document.getElementById("form-section");
              if (section) {
                  setTimeout(() => {
                      const offset = 150;
                      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
                  }, 0);
              }
          };
  
          window.addEventListener("hashchange", handleHashChange, false);
  
          return () => {
              window.removeEventListener("hashchange", handleHashChange, false);
          };
      }, []);

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
                  Book A Call<FaArrowRight/>
                </a>
                <Link href="/contact-us">
                 <button className="secondary-btn">
                  TALK TO A CONSULTANT
                 </button></Link>
              </div>
            </div>
          </div>

          <div className="img-containerCo">
          <Slider {...settings}>
                            <img className='new-banner-scroll-img'
                                width="486"
                                height="463"
                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                                src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1743830377/indrpal-images-3_ifezxi.png'
                                alt="bigcommerce"
                            />
                            <img
                                width="486"
                                height="463"
                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742641401/immmmm-removebg-preview_yhm4on.png"
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743830377/indrpal-images-2_hc9lle.png"
                                alt="shopify"
                            />
                            <img className='new-banner-scroll-img'
                                width="486"
                                height="463"
                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741089462/Group_1171281256_1_znsijn.png"
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743830376/indrpal-images-1_q1vqc5.png"
                                alt="magento"
                            />
                        </Slider>

          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
