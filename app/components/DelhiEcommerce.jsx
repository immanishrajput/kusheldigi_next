"use client"

import React from 'react'
import '../globals.css'
import Navbar from '../COMMON/Navbar'
import DelhiBanner from '../ecommerce-development-in-delhi/DelhiBanner/page'
import LogoSlider from '../ecommerce-development-in-delhi/LogoSlider/page'
import StatsSection from '../ecommerce-development-in-delhi/StatsSection/page'
import EcommerceExpertise from '../ecommerce-development-in-delhi/EcommerceExpertise/page'
import UnleashingSection from '../ecommerce-development-in-delhi/UnleashingSection/page'
import DelhiEcomServ from '../ecommerce-development-in-delhi/DelhiEcomServ/page'
import DelhiSecSlider from '../ecommerce-development-in-delhi/DelhiSecSlider/page'
import DelhiBenfit from '../ecommerce-development-in-delhi/DelhiBenfit/page'
import DelhiShop from '../ecommerce-development-in-delhi/DelhiShop/page'


const DelhiEcommerce = () => {
    return (
        <div>
            <div className='ser-main'></div>
            <Navbar/>
            <DelhiBanner/>
            <LogoSlider/>
            <StatsSection/>
            <EcommerceExpertise/>
            <UnleashingSection/>
            <DelhiEcomServ/>
            <DelhiSecSlider/>
            <DelhiBenfit/>
            <DelhiShop/>
        </div>
    )
}

export default DelhiEcommerce;