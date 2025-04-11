"use client"
import React from 'react'
import PortfolioBanner from './PortfolioBanner/page'
import PortfolioCard from './PortfolioCard/paje'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import HomeForm from '../components/Home/HomeForm'
const page = () => {
  return (
    <div>
      <Navbar/>
        <PortfolioBanner/>
        <PortfolioCard/>
        <HomeForm/>
        <Footer/>
    </div>
  )
}

export default page