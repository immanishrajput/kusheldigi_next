"use client"
import Link from 'next/link'
import React from 'react'
// import "./header.css"

function BigHeader() {
  return (
    <div className="bighewrap21">

        <div className="bigheacont3">

          {/* left side */}
          <div className="bigheleft">
            <h2>Build and Optimize Your Online Store with BigCommerce Solutions.
         

            </h2>
            <p>Kushel Digi Solutions has a successful proven track record in offering modern BigCommerce solutions to grow your business. Our experts work to make sure that your online store is not  just functional but optimized for success. Let us help you leverage BigCommerce to its fullest potential and drive your eCommerce journey.            </p>

          <Link href="contact-us"><button><span>CONNECT WITH US</span></button></Link> 
          </div>

        {/* right side  */}
         <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1725534480/Frame_1597881899_lyhypk.png" className='bigcomright' alt="" />

            
        </div>

    </div>
  )
}

export default BigHeader