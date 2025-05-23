"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Banner.css'
import Link from 'next/link';
import '../../components/Home/HomeNewBanner.css'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Router } from 'react-router-dom';
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router = useRouter();
    const scrollToForm = () => {
        const formSection = document.getElementById('contacthtmlForm');
        if (formSection) {
            const yOffset = -210;
            const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
    return (

        <>
            <section className='aboutBannerSeC'>
                <div className='aboutBannerMain'>
                    <div className='Kushaboutban'>
                        <h2 className='KushaboutH2'>
                            Who <span> We Are</span>
                        </h2>
                        <div className='Kushaboupara'>
                            <p>Kushel Digi Solutions has a dedicated team of experts who have delivered advanced eCommerce development and digital transformation solutions. We have deep expertise in latest technologies like Bigcommerce, Shopify, Woocommerce to deliver customised e-commerce solutions. We're here to give your brand the digital identity to make you standout in thus competitive world.</p>
                        </div>
                        {/* <div className='Kushabouparbtn'>
                            <Link href="/contact-us"> <button>Get in touch <FaArrowRight/></button></Link>
                        </div> */}
                        <div className='flex-new-banner-btns'>

                            <button onClick={scrollToForm} className='new-banner-btn colored'>Talk to a Consultant</button>
                            <button onClick={() => router.push('/contact-us')} className='new-banner-btn transparent'>Book a Call  <FaArrowRightLong /></button>
                        </div>
                        <div className='ourAboutpra'>
                            <p>Our recognition</p>

                            <div className='aboutImagKush'>
                                <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148178/Certified-Bigcommerce-Partner__of0fqt.png" alt="certified" />
                                <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993082/designrush_jkyjny.webp" alt="best" />
                                <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993106/ecommerce-developers-india_zfydfo.png" alt="ecoomerce" />
                                <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png" className='aboutimgkush' alt="bigcommerce" />
                            </div>
                        </div>
                    </div>
                        <div className='KushaboupaImage'>
                            <img loading='lazy' src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748021711/file_1747984679-1747984681_-_Copy_raoppu.webp" alt="banner" />
                        </div>
                </div>
            </section>
        </>
    )
}

export default Banner