"use client"
import React from 'react'
import '../globals.css'


import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import Cutting1Section from '../ecommerce-development-in-belgium/CuttingEdge/page';
import BelgiumBanner from '../ecommerce-development-in-belgium/BelgiumBanner/page';
import LogoSlider from '../ecommerce-development-in-belgium/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-belgium/StatsSection/page';
import WhyChooseBelgium from '../ecommerce-development-in-belgium/WhyChooseBelgium/page';
import DesignDevelopment from '../ecommerce-development-in-belgium/DesignDev/page';
import IndustryTabs from '../ecommerce-development-in-belgium/BelgiumIndustry/page'; 
import BelgiumEcomServ from '../ecommerce-development-in-belgium/BelgiumEcomServ/page';
import BelgiumShop from '../ecommerce-development-in-belgium/BelgiumShop/page';
import BelgiumMakeUs from '../ecommerce-development-in-belgium/BelgiumMakeUs/page';
import Website from './Home/HomeForm';
import Banner3 from '../ecommerce-development/Banner3/Page';
import HomeCardSection from '../components/Home/HomeCardSection'
import HomeSecCard from '../components/Home/HomeSecCard'
import Banner11 from '../ecommerce-development/Banner10/page';
import UseAccorrodian from '../COMMON/UseAccorrodian'
import Banner12 from '../ecommerce-development/Banner11/page';
import LondonSecSlider from '../ecommerce-development-in-london/LondonSecSlider/page';
import Features from '../ecommerce-development-in-belgium/Features/page'

const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}
function EcommerceBelgium() {
    return (
        <div>
            <div className='ser-main'></div>

            <Navbar />


            <BelgiumBanner/>
            <LogoSlider/>
            <StatsSection/>
            <Cutting1Section />
            <BelgiumEcomServ/>
            <LondonSecSlider/>
            <WhyChooseBelgium/>
            <DesignDevelopment/>
            <BelgiumShop/>
            <BelgiumMakeUs/>
            <IndustryTabs/>
            <Features/>
            <HomeCardSection/>
            <Banner12/>
            <Banner3/>
            <Banner11/>
            <UseAccorrodian/>
            <Website/>
            <Footer />


            <div className="whtsApBtns">
                <button onClick={whatAppHandler}>
                    <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
                </button>
                <button onClick={callHandler}>
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png' alt="call-icon" title="call-icon" />
                </button>

            </div>
        </div>
    )
}

export default EcommerceBelgium;
