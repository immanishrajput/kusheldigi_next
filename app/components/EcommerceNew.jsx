"use client"
import React from 'react'
import Banner1 from '../ecommerce-development/Banner1/page'
import Banner2 from '../ecommerce-development/Banner2/Page'
import Banner3 from '../ecommerce-development/Banner3/Page'
import Banner4 from '../ecommerce-development/Banner4/page'
import Banner5 from '../ecommerce-development/Banner5/page'
import Banner6 from '../ecommerce-development/Banner6/page'
import Banner7 from '../ecommerce-development/Banner7/page'
import  Banner8  from '../ecommerce-development/Banner8/page'
import Banner9 from '../ecommerce-development/Banner9/page'
import Banner10 from '../ecommerce-development/Banner10/page'
import Banner11 from '../ecommerce-development/Banner11/page'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import UseAccorrodian from '../COMMON/UseAccorrodian'
import HomeForm from '../components/Home/HomeForm'
import HomeFlax from '../components/Home/HomeFlax'
import HomeCardSection from '../components/Home/HomeCardSection'
import BlogSection from '../COMMON/BlogSection/BlogSection';
import BigBanner6 from "../bigcommerce-development/BigBanner6/page";
import Process from "../bigcommerce-development/Process/page"
import { whyEcommerceCommereByKDS, whyEcommerceByKDSHeading} from '../data/data'

const Page = () => {
  return (
    <div>
        <Navbar/>
        <title>
        Top eCommerce Development Company | Kushel Digi Solutions
        </title>
        <meta
          name="description"
          content="Elevate your online store with Kushel Digi expert eCommerce development. Custom, scalable solutions on Shopify, Magento, BigCommerce & more. Boost sales with seamless UX & secure payments."
        />
        <link rel="canonical" href="https://www.kusheldigi.com/ecommerce-development" />
        <Banner1/>
        <Banner2/>
        <Banner3/>
        <Banner4 />
        <HomeFlax/>
        <Banner9 page='eCommerce'/>
        <HomeCardSection/>
        <Banner11/>
       
        <Banner5/>
        <Banner8 page='Delivering powerful, high performance ecommerce solutions for our clients.'/>
        {/* <Banner7/>   */}
        <Process page='Ecommerce'/>
        <BigBanner6 services={whyEcommerceCommereByKDS} contents={whyEcommerceByKDSHeading}/>
        <Banner10/>
        <Banner6/>
       
  
      
       
      
    
      
        <BlogSection/> 
        <UseAccorrodian/>
        <HomeForm/>
        <Footer/>
    </div>
  )
}

export default Page