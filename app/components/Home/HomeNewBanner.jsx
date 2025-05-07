'use client'

import React, { useEffect } from 'react';
import "./HomeNewBanner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
import { FaArrowRightLong } from 'react-icons/fa6';
// import { GiShoppingCart } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi"
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

    // useEffect(() => {
    //     const handleHashChange = () => {
    //         const section = document.getElementById("form-section");
    //         if (section) {
    //             setTimeout(() => {
    //                 const offset = 150;
    //                 const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    //                 window.scrollTo({ top: sectionPosition , behavior: "smooth" });
    //             }, 0);
    //         }
    //     };

    //     window.addEventListener("hashchange", handleHashChange, false);

    //     return () => {
    //         window.removeEventListener("hashchange", handleHashChange, false);
    //     };
    // }, []);

    const scrollToFormHome = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            const yOffset = -120;
            const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className='new-banner-container'>
            <div className="inner-new-banner-container">
                <div className="new-banner-left">
                    {/* <h3 className='sm-banner-heading'><img src="/new-banner-star.svg" alt="star-icon" /> s</h3> */}
                    <h3 className='sm-banner-heading'><HiShoppingCart className='hishpoo' />Custom Ecommerce Solutions</h3>
                    <h1 className='new-banner-heading'>Expert E-Commerce Solutions Powered by BigCommerce</h1>
                    <h4 className='new-banner-para'>As a BigCommerce Certified Partner, Kushel Digi designs, develops, and optimizes eCommerce stores that deliver results and help brands to succeed in the ecommerce world.
                    </h4>
                    {/* <button className='new-banner-btn'>SCHEDULE A DEMO</button> */}
                    <div className='flex-new-banner-btns'>
                        <button onClick={scrollToFormHome} className='new-banner-btn colored'>Talk to a Consultant</button>
                        <button onClick={() => navigate.push('/contact-us')} className='new-banner-btn transparent'>Book a Call  <FaArrowRightLong /></button>
                    </div>
                </div>

                <div className="new-banner-right">
                    <div className="new-banner-right-slider">
                        <Slider {...settings}>
                            <Image className='new-banner-scroll-img'

                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                                src='https://res.cloudinary.com/dgif730br/image/upload/v1743433708/images-1_stbpbb.png'
                                width="486"
                                height="463"
                                alt="bigcommerce"
                            />
                            <Image

                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742641401/immmmm-removebg-preview_yhm4on.png"
                                src="https://res.cloudinary.com/dgif730br/image/upload/v1743432676/images-3_o9ytpm.png"
                                width="486"
                                height="463"
                                alt="shopify"
                            />
                            <Image className='new-banner-scroll-img'

                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741089462/Group_1171281256_1_znsijn.png"
                                src="https://res.cloudinary.com/dgif730br/image/upload/v1743433061/images-2_yba04l.png"
                                width="486"
                                height="463"
                                alt="magento"
                            />
                        </Slider>


                        <Image
                            loading='lazy'
                            className='floatingIcon2'
                            src='https://res.cloudinary.com/dal5dlztv/image/upload/v1746528478/Bigcommerce2_z9tsl7.png'
                            width={110}
                            height={110}
                            alt='bigcommerce'
                        // src="https://res.cloudinary.com/dgif730br/image/upload/v1743151035/floatingIcon2_hsudze.png" alt="" 

                        />
                        <Image
                            loading='lazy'
                            className='floatingIcon1'
                            src='https://res.cloudinary.com/dal5dlztv/image/upload/v1746528477/shopify1_qfeocx.png'
                            width={110}
                            height={110}
                            alt='shopify'
                        // src="https://res.cloudinary.com/dgif730br/image/upload/v1743151035/floatingIcon1_twd70z.png" alt=""

                        />
                        <Image
                            loading='lazy'
                            className='floatingIcon3'
                            // src="https://res.cloudinary.com/dgif730br/image/upload/v1743151035/floatingIcon3_x0yhk5.png" alt="" 
                            src='https://res.cloudinary.com/dal5dlztv/image/upload/v1746528477/Magento_zxs0hr.png'
                            width={110}
                            height={110}
                            alt='magento'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewBanner