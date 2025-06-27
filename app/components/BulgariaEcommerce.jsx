"use client"
import React from 'react';
import '../globals.css'

import Navbar from '../COMMON/Navbar';
import BulgariaBanner from '../ecommerce-development-in-bulgaria/BulgariaBanner/page';
import LogoSlider from '../ecommerce-development-in-bulgaria/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-bulgaria/StatsSection/page';
import Cutting1Section from '../ecommerce-development-in-bulgaria/CuttingEdge/page';
import BulgariaEcomServ from '../ecommerce-development-in-bulgaria/BulgariaEcomServ/page';
import LondonSecSlider from '../ecommerce-development-in-london/LondonSecSlider/page';
import CallToAction from '../ecommerce-development-in-bulgaria/CtaBulgaria/page';
import WhyChooseBulgaria from '../ecommerce-development-in-bulgaria/WhyChooseBulgaria/page';
import DesignDevelopment from '../ecommerce-development-in-bulgaria/DesignDev/page';
import BulgariaShop from '../ecommerce-development-in-bulgaria/BulgariaShop/page';
import BulgariaMakeUs from '../ecommerce-development-in-bulgaria/BulgariaMakeUs/page';
import IndustryTabs from '../ecommerce-development-in-bulgaria/BulgariaIndustry/page';
import EcommerceFeatures from '../ecommerce-development-in-bulgaria/Features/page';
import BulgariaCardSection from '../ecommerce-development-in-bulgaria/BulgariaCardSection/page';
import BulgariaSec12 from '../ecommerce-development-in-bulgaria/BulgariaSec12/page';
import CustomBenefitsSection from '../ecommerce-development-in-bulgaria/CustomBenefitsSection/page';
import BulgariaSolution from '../ecommerce-development-in-bulgaria/BulgariaSolution/Page';
import BlogSection from '../ecommerce-development-in-bulgaria/BlogSection/BlogSection';
import Website from './Home/HomeForm';
import Footer from '../COMMON/Footer';

function BulgariaEcommerce() {
    return(
        <div>
            <div className='ser-main'></div>

            <Navbar/>

            <BulgariaBanner/>
            <LogoSlider/>
            <StatsSection/>
            <Cutting1Section/>
            <BulgariaEcomServ/>
            <LondonSecSlider/>
            <CallToAction/>
            <WhyChooseBulgaria/>
            <DesignDevelopment/>
            <BulgariaShop/>
            <BulgariaMakeUs/>
            <IndustryTabs/>
            <EcommerceFeatures/>
            <BulgariaCardSection/>
            <BulgariaSec12/>
            <CustomBenefitsSection/>
            <BulgariaSolution/>
            <BlogSection/>

            <Website/>
            <Footer/>

        </div>
    )
}

export default BulgariaEcommerce;