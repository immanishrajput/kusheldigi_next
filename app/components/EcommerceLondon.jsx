"use client"

import React from 'react'
import Navbar from '../COMMON/Navbar'
import '../globals.css'

import LondonBanner from '../ecommerce-development-in-london/LondonBanner/page'
import LogoSlider from '../ecommerce-development-in-london/LogoSlider/page'
import StatsSection from '../ecommerce-development-in-london/StatsSection/page'
import LondonBanners from '../ecommerce-development-in-london/LondonBanners/page'
import EcommerceServices from '../ecommerce-development-in-london/LondonEcomServ/page'
import CaseStudies from '../ecommerce-development-in-london/LondonCaseStudy/page'
import Footer from '../COMMON/Footer'
import Website from './Home/HomeForm'
import CallToAction from '../ecommerce-development-in-london/CtaLondon/page'
import WhyChooseLondon from '../ecommerce-development-in-london/WhyChooseLondon/page'

const Page = () => {
    return (
        <div>
            <div className='ser-main'></div>
            <Navbar />
            
            <LondonBanner />
            <LogoSlider/>
            <StatsSection/>
            <LondonBanners/>
            <EcommerceServices/>
            {/* <CaseStudies/> */}
            <CallToAction/>
            <WhyChooseLondon/>

            <Website/>
            <Footer/>
        </div>
    )
}

export default Page;
