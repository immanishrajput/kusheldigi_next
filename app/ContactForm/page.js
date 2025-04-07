"use client"
import React from 'react'
import ContactUs from './ContactUs/page'
import ContactSec from './ContactSec/page'
import ContactMap from './ContactMap/page'
import Home2Testimonial from '../components/Home/Home2Testimonial'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'

const page = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <ContactUs/>
        <ContactMap/>
        <ContactSec/>
        <Home2Testimonial/>
        <Footer/>
    </div>
  )
}

export default page