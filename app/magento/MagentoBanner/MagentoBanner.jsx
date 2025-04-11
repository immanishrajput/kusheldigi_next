'use client'

import React from 'react';
import "./MagentoBanner.css";
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const MagentoBanner = () => {
    // const navigate = useRouter();
    const scrollToForm = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
          const yOffset = -120; 
          const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };
  return (
    <div className='magento-banner-outer-container'>
        <div className='magento-banner-inner-container'>
            <div className="magento-banner-left">
                <h1 className='magento-banner-heading'>Magento Development Services</h1>
                <div className='magento-banner-para-cont'>
                <p>Our custom magento website development services are tailored to your specific needs.</p>
                <p>Your e-commerce site becomes more reliable, fully customizable, and ready for the future with our dedicated team on your side.</p>
                </div>

                <div className='flex-new-banner-btns'>
                        <button onClick={scrollToForm} className='new-banner-btn colored'>Talk to a Consultant</button>
                        <Link  href='/contact-us'  className='new-banner-btn transparent'>Book a Call  <FaArrowRightLong /></Link>
                </div>
            </div>
            <div className="magento-banner-right">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744202442/63986d38ae551802a6ffe22c_full_version_checkout_tqy9hv.gif" alt="magnto-banner" />
            </div>
        </div>
    </div>
  )
}

export default MagentoBanner