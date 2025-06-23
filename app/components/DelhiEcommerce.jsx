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
import DelhiMakes from '../ecommerce-development-in-delhi/DelhiMakeUs/page'
import IndustryTabs from '../ecommerce-development-in-delhi/DelhiIndustry/page'
import DelhiFeatures from '../ecommerce-development-in-delhi/DelhiFeatures/page'
import DelhiCardSection from '../ecommerce-development-in-delhi/DelhiCardSection/page'
import DelhiSec12 from '../ecommerce-development-in-delhi/DelhiSec12/page'
import DelhiCustomBenefitsSection from '../ecommerce-development-in-delhi/DelhiCustomBenefitsSection/page'
import DelhiSolution from '../ecommerce-development-in-delhi/DelhiSolution/Page'
import DelhiProcessSec from '../ecommerce-development-in-delhi/DelhiProcessSec/page'
import DelhiEngage from '../ecommerce-development-in-delhi/DelhiEngage/page'
import DelhiFAQ from '../ecommerce-development-in-delhi/DelhiFAQ/page'
import Website from './Home/HomeForm'
import Footer from '../COMMON/Footer'


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
            <DelhiProcessSec/>
            <DelhiEngage/>
            <DelhiShop/>
            <DelhiMakes/>
            <IndustryTabs/>
            <DelhiFeatures/>
            <DelhiCardSection/>
            <DelhiSec12/>
            <DelhiCustomBenefitsSection/>
            <DelhiSolution/>

            <DelhiFAQ/>
            <Website/>
            <Footer/>

            
        </div>
    )
}

export default DelhiEcommerce;