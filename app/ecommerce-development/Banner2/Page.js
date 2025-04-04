"use client"
import React from 'react'
import './Banner2.css'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const Banner2 = () => {
  return (
    <>
<section className="sec-sectionBan2">
  <div className="sec-containerBan2">
    <div className="image-sec-container">
      <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742921060/ecommerce_development_dzmqsy.jpg" alt="Website Mockup" />
    </div>
    <div className="sec-contentBan2">
      <p className="sec-tagBan2">ECOMMERCE STORE DEVELOPMENT</p>
      <h3 className='h3Ban2'>What’s Holding Back Your eCommerce Growth?</h3>
      <p className="sec-descriptionBan2">
      We strongly believe that your eCommerce store has potential, but if sales aren’t growing as per your expectations, there could be underlying issues that are affecting the performance. A well-optimized store always ensures a seamless shopping experience, higher conversions, and healthy business growth. Here’s what might be holding you back:
      </p>
      <ul className="pointsBan2">
        <li>
        Slow Website Performance & Speed
        </li>
        <li>Unclear User Experience (UX)</li>
        <li>Ineffective Product Descriptions</li>
        <li>
         
        Complex Checkout process
        </li>
        <li>Limited Payment Options</li>
      </ul>
      <p>
        <strong className="headlinBan2">
        Let’s Fix It!
        </strong>
      </p>
      <div className="buttonsssBan2">
        <a href='#form-section' className="primary-btnssBan2">Book a Call <FaArrowRight/> </a>
        <Link href="/contact-us">
         <button className="secondary-btnssBan2">  
           Request An Audit </button>  </Link>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Banner2