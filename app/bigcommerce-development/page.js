"use client"
import React from 'react'
import BigBanner3 from './BigBanner3/page'
import BigBanner4 from './BigBanner4/page'
import BigBanner6 from './BigBanner6/page'
import BigBanner7 from './BigBanner7/page'
import BigBanner8 from './BigBanner8/page'
import BannerMain from './BannerMain/page'
import Process from './Process/page'
import Navbar from '../COMMON/Navbar'
import Banner10 from '../ecommerce-development/Banner9/page'
import Footer from '../COMMON/Footer'
import BigBanner9 from '../bigcommerce-development/BigBanner9/page'
import BigAskQuestion from '../bigcommerce-development1/BigAskQuestion/page'
const page = () => {
  return (
    <div>
      <Navbar/>
      <BannerMain/>
      <BigBanner8/>
      <BigBanner7/>
      <BigBanner3/>
      <Banner10/>
      <Process/>
      <BigBanner6/>
        <BigBanner4/>
        <BigAskQuestion/>
     <BigBanner9/>
        <Footer/>
    </div>
  )
}

export default page