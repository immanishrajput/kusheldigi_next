"use client"
import React from 'react'
import './BigBanner.css'
import { FaArrowRight } from 'react-icons/fa'
const BigBanner = () => {
  return (
    <>
    <section>
        <div className='BBComMainsec'>
        <div className='BigBanComMain'>
            <div className='BBComDiv'>
                <p className='BBComDivPa'>Built to Grow - Expert BigCommerce Solutions</p>
                <p className='BBComDivpara'>We craft tailored BigCommerce stores that prioritize flexibility and ease of management, giving your business a scalable eCommerce solution that's built for growth.</p>
                <div className='bcImageS'>
            <span className='bcImageS1'>
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png" alt="big dev" />
            </span>
            <span className='bcImageS2'>
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png" alt="B2B" />
            </span>
            <span className='bcImageS3'>
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png" alt="bigcommerce" />
            </span>
        </div>
        <div className="buttonsBiBBC">
                <button className="primary-btnBBCOM">
                  Book a Call <FaArrowRight/>
                </button>
                <button className="secondary-btnBBCOM">
                Talk to a Consultant
                </button>
              </div>
            </div>
            <div className='BBComDiv'>
                <div className='BBComDivImg'>
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742920177/2nd_k78and.png" alt="bigCommerce" />
                </div>
            </div>
        </div>
        
        </div>
      
    </section>
    </>

    
   
  )
}

export default BigBanner