"use client"
import Link from 'next/link'
import React from 'react'


function BigHeader() {
  return (
    <div className="bighewrap21">

        <div className="bigheacont3">

          {/* left side */}
          <div className="bigheleft">
            <h1>Build and Optimize Your Online Store with BigCommerce Solutions.
         

            </h1>
            <p>Kushel Digi Solutions has a successful proven track record in offering modern BigCommerce solutions to grow your business. Our experts work to make sure that your online store is not  just functional but optimized for success. Let us help you leverage BigCommerce to its fullest potential and drive your eCommerce journey.            </p>

         <button> <Link href="contact-us"><span>CONNECT WITH US</span></Link> </button>
          </div>

        {/* right side  */}
         <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1725534480/Frame_1597881899_lyhypk.png" className='bigcomright' alt="kushel" />

            
        </div>

    </div>
  )
}

export default BigHeader