"use client"
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './home2.css'
import Link from "next/link";
import Slider from "react-slick";

const partners = [
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233923/WhatsApp_Image_2025-03-29_at_12.40.32_PM_apddld.jpg",
    img:"https://res.cloudinary.com/dgif730br/image/upload/v1743429262/bigcommerce-8_1_tyghz8.png",
    alt: "bigcommerce Partner",
    link: "/bigcommerce-development",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233927/WhatsApp_Image_2025-03-29_at_12.40.30_PM_vhjqvg.jpg",
    img:"https://res.cloudinary.com/dgif730br/image/upload/v1743428594/certified-7_lr7eey.png",
    alt: "bigcommerce-certified Partner",
    link: "/Headless-Bigcommerce",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233929/WhatsApp_Image_2025-03-29_at_12.40.30_PM_1_flmzht.jpg",
    img:"https://res.cloudinary.com/dgif730br/image/upload/v1743429400/magento-4_khm8ni.png",
    alt: "Magento Partner",
    link: "/magento-development",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233924/WhatsApp_Image_2025-03-29_at_12.40.31_PM_1_lgmnkv.jpg",
    img:"https://res.cloudinary.com/dgif730br/image/upload/v1743429615/woo-commerce-6_lxye1s.png",
    alt: "WooCommerce Partner",
    link: "/woocommerce",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233924/WhatsApp_Image_2025-03-29_at_12.40.31_PM_2_nenngq.jpg",
    img:"https://res.cloudinary.com/dgif730br/image/upload/v1743429762/aws-5_mhtrx5.png",
    alt: "AWS Partner",
    link: "#",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233924/WhatsApp_Image_2025-03-29_at_12.40.31_PM_ae7idi.jpg",
    img:"https://res.cloudinary.com/dgif730br/image/upload/v1743429911/shopify-8_ck0pgq.png",
    alt: "/shopify",
    link: "/shopify-development",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743234242/WhatsApp_Image_2025-03-29_at_12.40.32_PM_hfpuyo.jpg",
    img:"https://res.cloudinary.com/dgif730br/image/upload/v1743430035/shopify-1_1_p8r4ts.png",
    alt: "Shopify Plus Partner",
    link: "/Headless-shopify",
  },
  {
    // img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1743233923/WhatsApp_Image_2025-03-29_at_12.40.29_PM_q5esb4.jpg",
    img:"https://res.cloudinary.com/dgif730br/image/upload/v1743430213/klaviyo-2_jxxmjr.png",
    alt: "klaviyo",
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
    <section className="tech-section">
      <div className="tech-container">
        <div className="tech-heading">
          <h2 className="primary-heading">Our Technology Partnership</h2>
          <p className="secondary-heading">
          Kushel Digi leverages latest technology to deliver future ready stores
          </p>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="containers">
        {partners.map((partner, index) => (
          <div className="card-1" key={index}>
            <img loading="lazy" width="329" height="192" src={partner.img} alt={partner.alt} />
            <Link href={partner?.link }  className="read-more-1">
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
              <Link href={partner.link} className="read-more-1">
                Read More{" "}
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1741866486/circle-arrow-icon_dcxfmm.svg"
                  alt="cards"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Our;