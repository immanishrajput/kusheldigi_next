"use client"
import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
function Advance() {
  return (
    <section className="b2b-section">
      <h3 className="b2b-head primary-heading">
        Expert Ecommerce Solutions for Modern Businesses
      </h3>
      <p className="b2b-paraa secondary-heading">
        Doesn’t matter whether you're a small business or a large enterprise, our custom ecommerce solutions are designed to grow with you. We believe in delivering seamless, high-performing online stores that drive results.
      </p>
      <h3 className="b2b-headss">Business models we deliver for</h3>
      <div className="b2b-content">
        <div className="left-b2b-cards">
          <div className="left-b2b-card">
            <div className="b2b-logo">
             
              <Image loading='lazy'  width="599" height="299"
                src='https://res.cloudinary.com/dqjbzgksw/image/upload/v1747982612/file_1747977192-1747977194_fg0v2k.webp'
                alt="B2B ecommerce website development for fashion industry " />
            </div>
            <div className="b2b-contain">
              <h3 className="b2b-headsss">B2B</h3>
              <p className="b2b-para">
                Our experts at Kushel Digi have long years of experience in designing ecommerce solutions suited for wholesale, bulk ordering, and corporate transactions. We optimize B2B sales channels for higher efficiency.
              </p>
            </div>
            {/* <div className="b2b-btn">
              Learn More <img src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446873/arow-1_szrxfl.png'
                alt="" />
            </div> */}
          </div>
          <div className="left-b2b-card-2" id='leftb2ca'>
            <div className="b2b-logo">
              <Image loading='lazy'  width="599" height="299"
               
                src='https://res.cloudinary.com/dqjbzgksw/image/upload/v1747982612/file_1747977172-1747977173_uxa2uv.webp'
                alt="Multi Vendor ecommerce website development for healthcare industry" />
            </div>
            <div className="b2b-contain">
              <h3 className="b2b-headsss">Multi-vendor</h3>
              <p className="b2b-para">
                We have delivered various marketplace solutions that allow multiple sellers to showcase and sell their products on a single platform. We ensure smooth vendor management, secure transactions, and excellent shopping experience for customers.
              </p>
            </div>
            {/* <div className="b2b-btn">
              Learn More <img 
                src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446873/arow-1_szrxfl.png'

                alt="" />
            </div> */}
          </div>
        </div>
        <div className="right-b2b-cards">
          <div className="right-b2b-card">
            <div className="b2b-logo">
              <Image loading='lazy' width="599" height="299"
                // src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806527/b12_tpd0aj.webp" 
                src='https://res.cloudinary.com/dqjbzgksw/image/upload/v1747982612/file_1747977182-1747977184_mi8acb.webp'
                alt="B2C ecommerce website development for travel industry" />
            </div>
            <div className="b2b-contain">
              <h3 className="b2b-headsss">B2C</h3>
              <p className="b2b-para">
                Kushel Digi has expertise to deliver engaging, scalable, and user-friendly ecommerce solutions that connect businesses with end customers. Our team is committed to help brands grow their online presence and boost sales.
              </p>
            </div>
            {/* <div className="b2b-btn">
              Learn More <img loading='lazy'
                src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446873/arow-1_szrxfl.png'
                // src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806860/arrow-up_felxs8.svg"
                alt="" />
            </div> */}
          </div>
          <div className="right-b2b-card">
            <div className="b2b-logo">
              <Image loading='lazy' width="599" height="299"
                // src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806526/b14_y69yn7.webp"
                src='https://res.cloudinary.com/dqjbzgksw/image/upload/v1747982612/file_1747977159-1747977160_bx4i0a.webp'
                alt="D2C ecommerce website development for financial industry" />
            </div>
            <div className="b2b-contain">
              <h3 className="b2b-headsss">D2C</h3>
              <p className="b2b-para">
                We have been helping brands to establish a direct connection with consumers by removing intermediaries. We create personalized ecommerce experiences to enhance brand loyalty and maximum profit.
              </p>
            </div>
            {/* <div className="b2b-btn">
              Learn More <img loading='lazy'
                src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446873/arow-1_szrxfl.png'
                // src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806860/arrow-up_felxs8.svg" 
                alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advance