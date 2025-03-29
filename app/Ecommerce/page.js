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
const Page = () => {
  return (
    <div>
        <Navbar/>
        <Banner1/>
        <Banner2/>
        <Banner3/>
        <Banner4/>
        <Banner6/>
        <Banner9/>
        <Banner8/>
        <Banner7/>
        <Banner10/>
        <Banner11/>
        <Banner5/>
        <UseAccorrodian/>
        <Footer/>
    </div>
  )
}

export default Page