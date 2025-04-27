"use client"
import React from 'react'
import Navbar from '../COMMON/Navbar'
import Troff from './Troff/page'
import Ssss from './Ssss/page'
import Some from './Some/page'
import Servicess from './Servicess/page'
import Porfolio from './Porfolio/page'
import Call from './Call/page'
import Left from './Left/page'
import Perfect from './Perfect/page'
import ShopifyHfaq from './ShopifyHfaq/page'
import Shopify from './Shopify/page'
import HomeForm from '../components/Home/HomeForm'
import Footer from '../COMMON/Footer'
import BigBanner6 from "../bigcommerce-development/BigBanner6/page";
import { whyHeadlessShopifyByKDS, whyHeadlessShopifyByKDSHeading } from '../data/data'

function page() {
  return (
    <div>
      <Navbar/>
      <Troff/>
      <Ssss/>
      <Some/>
      <Servicess/>
      {/* <Porfolio/> */}
      <Call/>
      <Left/>
      <Perfect/>
      <BigBanner6 services={whyHeadlessShopifyByKDS} contents={whyHeadlessShopifyByKDSHeading}/>
      <Shopify/>
      <ShopifyHfaq/>
      <HomeForm/>
      <Footer/>
    </div>
  )
}

export default page
