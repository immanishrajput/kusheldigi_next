'use client'

import React, { useEffect } from 'react';
import "./HomeNewBanner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiShoppingCart } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import Link from 'next/link';
import Image from 'next/image';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NewBanner = () => {
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

  const navigate = useRouter();

  const scrollToFormHome = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      const yOffset = -120;
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className='new-banner-container'>
      <div className="inner-new-banner-container">
        <div className="new-banner-left">
          <span className='sm-banner-heading'>
            <HiShoppingCart className='hishpoo' />
            Custom Ecommerce Solutions
          </span>

          <h1 className='new-banner-heading'>
            Expert E-Commerce Solutions Powered by BigCommerce
          </h1>

          <p className='new-banner-para'>
            As a BigCommerce Certified Partner, Kushel Digi designs, develops, and optimizes
            eCommerce stores that deliver results and help brands to succeed in the ecommerce world.
          </p>

          <div className='flex-new-banner-btns'>
            <button onClick={scrollToFormHome} className='new-banner-btn colored'>
              Talk to a Consultant
            </button>
            <button onClick={() => navigate.push('/contact-us')} className='new-banner-btn transparent'>
              Book a Call  <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="new-banner-right" role="region" aria-label="Banner Image Slider">
          <div className="new-banner-right-slider">
            <Slider {...settings}>
              <Image
                className="new-banner-scroll-img"
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/f_auto,q_auto,w_1080/v1748249452/1_c2jrzl.webp"
                alt="BigCommerce eCommerce store example"
                width={1080}
                height={671}
                layout="responsive"
                loading="lazy"
              />
              <Image
                className="new-banner-scroll-img"
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/f_auto,q_auto,w_1080/v1748249450/2_vkvjrc.webp"
                alt="Shopify development example"
                width={1080}
                height={671}
                layout="responsive"
                loading="lazy"
              />
              <Image
                className="new-banner-scroll-img"
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/f_auto,q_auto,w_1080/v1748249452/3_mzubda.webp"
                alt="Magento platform project example"
                width={1080}
                height={671}
                layout="responsive"
                loading="lazy"
              />
            </Slider>

            <Image
              loading='lazy'
              className='floatingIcon2'
              src='https://res.cloudinary.com/dal5dlztv/image/upload/v1746528478/Bigcommerce2_z9tsl7.png'
              width={110}
              height={110}
              alt='BigCommerce website development service icon Kushel Digi Solutions Noida'
            />
            <Image
              loading='lazy'
              className='floatingIcon1'
              src='https://res.cloudinary.com/dal5dlztv/image/upload/v1746528477/shopify1_qfeocx.png'
              width={110}
              height={110}
              alt='Shopify ecommerce website design service icon Kushel Digi Solutions'
            />
            <Image
              loading='lazy'
              className='floatingIcon3'
              src='https://res.cloudinary.com/dal5dlztv/image/upload/v1746528477/Magento_zxs0hr.png'
              width={110}
              height={110}
              alt='Magento ecommerce development service icon Kushel Digi Solutions'
            />
          </div>
        </div>
      </div>

      {/* ✅ SEO-boosting hidden content */}
      <div className="hidden-seo-content" aria-hidden="true">
        <h2>Custom eCommerce Development for All Industries</h2>
        <p>
          Kushel Digi Solutions builds and optimizes ecommerce platforms using BigCommerce, Shopify, and Magento.
          As a certified partner, we specialize in creating responsive, scalable, and conversion-focused online stores.
          Our services cater to retail, B2B, fashion, education, and other industries looking for digital growth.
        </p>
        <ul>
          <li>BigCommerce Certified Development Partner</li>
          <li>Custom Shopify Store Setup and Design</li>
          <li>Magento eCommerce Solutions</li>
          <li>End-to-End Performance Optimization</li>
        </ul>
      </div>
    </section>
  )
}

export default NewBanner;
