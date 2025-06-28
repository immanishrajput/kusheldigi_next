"use client"

import React, { useEffect } from 'react'
import Navbar from '../COMMON/Navbar'
import '../globals.css'


import LondonBanner from '../ecommerce-development-in-london/LondonBanner/page'
import LogoSlider from '../ecommerce-development-in-london/LogoSlider/page'
import StatsSection from '../ecommerce-development-in-london/StatsSection/page'
import LondonBanners from '../ecommerce-development-in-london/LondonBanners/page'
import EcommerceServices from '../ecommerce-development-in-london/LondonEcomServ/page'
import Footer from '../COMMON/Footer'
import Website from './Home/HomeForm'
import CallToAction from '../ecommerce-development-in-london/CtaLondon/page'
import WhyChooseLondon from '../ecommerce-development-in-london/WhyChooseLondon/page'
import LondonEcoPro from '../ecommerce-development-in-london/LondonEcoProc/page'
import LondonShop from '../ecommerce-development-in-london/LondonShop/page'
import LondonMakeUs from '../ecommerce-development-in-london/LondonMakeUs/page'
import LondonFeature from '../ecommerce-development-in-london/LondonFeature/page'
import CustomBenefitsSection from '../ecommerce-development-in-london/CustomBenefitsSection/page'
import LondonSecSlider from '../ecommerce-development-in-london/LondonSecSlider/page'
import IndustryBanner from '../ecommerce-development-in-london/IndustryBanner/page'
import LondonFAQ from '../ecommerce-development-in-london/LondonFAQ/page'
import LondonSolution from '../ecommerce-development-in-london/LondonSolution/Page'
import LondonSec12 from '../ecommerce-development-in-london/LondonSec12/page'
import LondonCardSection from '../ecommerce-development-in-london/LondonCardSection/page'
import BlogSection from '../ecommerce-development-in-london/BlogSection/BlogSection'


const Page = () => {

const generateMetadata = ({ params }) => {
    return {
      title: 'E-Commerce Website Development Company in London',
      description: 'Partner with top London ecommerce developers for SEO-optimized, secure, and scalable online stores built on Shopify, BigCommerce & custom platforms.',
      metadataBase: new URL(`https://www.kusheldigi.com/`),
    }
  };

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');

    metaDescription ? metaDescription.content = description :
      document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
  }, []);

    return (
        <div>
            <div className='ser-main'></div>
            <Navbar />
            
            <LondonBanner />
            <LogoSlider />
            <StatsSection />
            <LondonBanners />
            <EcommerceServices />
            <LondonSecSlider/>
            <CallToAction />
            <WhyChooseLondon />
            <LondonEcoPro />
            <LondonShop />
            <LondonMakeUs />
            <LondonFeature /> 
            <LondonCardSection/>
            <LondonSec12/>
            <CustomBenefitsSection/>
            <LondonSolution/>
            <IndustryBanner/> 
            <BlogSection/>
            <LondonFAQ/>
            <Website/>
            <Footer />
        </div>
    )
}

export default Page;
