"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './home2.css'
import Link from "next/link";
import Slider from "react-slick";

const partners = [
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866181/bigcommerce_partner_logo-01_s0n5yt.png",
    alt: "bigcommerce Partner",
    link: "https://partners.bigcommerce.com/directory/partner/1983347/kushel-digi-solutions",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866181/bigcommerce_certified_logo_2-01_pc85al.png",
    alt: "bigcommerce-certified Partner",
    link: "https://partners.bigcommerce.com/directory/partner/1983347/kushel-digi-solutions",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866181/magento_logo-01_sraymz.png",
    alt: "Magento Partner",
    link: "/magento",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866182/woo_commerce-01_uc1lhg.png",
    alt: "WooCommerce Partner",
    link: "/woocommerce",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866181/aws_logo-01_sohfcs.png",
    alt: "AWS Partner",
    link: "#",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866182/shopify_logo-01_xw6y4h.png",
    alt: "/shopify",
    link: "#",
  },
  {
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866182/shopify_plus_logo-01_anletp.png",
    alt: "Shopify Plus Partner",
    link: "#",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1742836184/kalviyo_n9bfmf.png",
    alt: "Prestashop Partner",
    link: "#",
  },
];

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const Our = () => {
  return (
    <section className="tech-section">
      <div className="tech-container">
        <div className="tech-heading">
          <h2>Our Technology Partnership</h2>
          <p>
          Kushel Digi leverages latest technology to deliver future ready stores
          </p>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="containers">
        {partners.map((partner, index) => (
          <div className="card-1" key={index}>
            <img loading="lazy" width="329" height="192" src={partner.img} alt={partner.alt} />
            <Link href={partner.link}  className="read-more-1">
              Read More{" "}
              <img
              loading="lazy"
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866486/circle-arrow-icon_dcxfmm.svg"
                alt="buttons"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Swiper Slider (Only Mobile) */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="swiper-container"
        style={{display: "none"}}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="card-1" id="swiperIdTech">
              <img width="329" height="192" loading="lazy" src={partner.img} alt={partner.alt} />
              <a href={partner.link} target="_blank" className="read-more-1">
                Read More{" "}
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866486/circle-arrow-icon_dcxfmm.svg"
                  alt="cards"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Our;