"use client"
import React from 'react'
import Banner1 from './Banner1/page'
import Banner2 from './Banner2/Page'
import Banner3 from './Banner3/Page'
import Banner4 from './Banner4/page'
import Banner5 from './Banner5/page'
import Banner6 from './Banner6/page'
import Banner7 from './Banner7/page'
import  Banner8  from './Banner8/page'
import Banner9 from './Banner9/page'
import Banner10 from './Banner10/page'
import Banner11 from './Banner11/page'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import UseAccorrodian from '../COMMON/UseAccorrodian'
import HomeForm from '../components/Home/HomeForm'
import HomeFlax from '../components/Home/HomeFlax'
import HomeCardSection from '../components/Home/HomeCardSection'
const Page = () => {
  return (
    <div>
        <Navbar/>
        <title>
          Kushel Digi Solutions - top Ecommerce Development Company
        </title>
        <meta
          name="description"
          content="KushelDigi Solutions take your digital aspirations and make them come true! We are your success partners rather than just an e-commerce development company."
        />
        <link rel="canonical" href="https://www.kusheldigi.com/Ecommerce" />
        <Banner1/>
        <Banner2/>
        <Banner3/>
        <Banner4/>
        <HomeFlax/>
        <Banner9/>
        <HomeCardSection/>
        <Banner11/>
       
        <Banner5/>
        <Banner8/>
        <Banner7/>
        <Banner10/>
        <Banner6/>
       
  
      
       
      
    
      
       
        <UseAccorrodian/>
        <HomeForm/>
        <Footer/>
    </div>
  )
}

export default Page