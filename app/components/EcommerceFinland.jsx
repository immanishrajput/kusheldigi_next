"use client"
import React, { useEffect } from 'react'
import '../globals.css'
import Navbar from '../COMMON/Navbar';
import FinlandBanner from '../ecommerce-development-in-finland/FinlandBanner/page';
import LogoSlider from '../ecommerce-development-in-finland/LogoSlider/page';
import StatsSection from '../ecommerce-development-in-finland/StatsSection/page';
import Cutting1Section from '../ecommerce-development-in-finland/CuttingEdge/page';
import FinlandEcomServ from '../ecommerce-development-in-finland/FinlandEcomServ/page';
import LondonSecSlider from '../ecommerce-development-in-london/LondonSecSlider/page';
import CallToAction from '../ecommerce-development-in-finland/CtaBelgium/page';

import DesignDevelopment from '../ecommerce-development-in-finland/DesignDev/page';
import FinlandShop from '../ecommerce-development-in-finland/FinlandShop/page';
import FinlandMakeUs from '../ecommerce-development-in-finland/FinlandMakeUs/page';
import IndustryTabs from '../ecommerce-development-in-finland/FinlandIndustry/page';
import EcommerceFeatures from '../ecommerce-development-in-finland/Features/page';
import FinlandCardSection from '../ecommerce-development-in-finland/FinlandCardSection/page';
import FinlandSec12 from '../ecommerce-development-in-finland/FinlandSec12/page';
import FinlandCustomBenefitsSection from '../ecommerce-development-in-finland/FinlandCustomBenefitsSection/page';
import FinlandBanner3 from '../ecommerce-development-in-finland/FinlandBanner3/Page';
import BlogSection from '../ecommerce-development-in-finland/BlogSection/BlogSection';
import FinlandFAQ from '../ecommerce-development-in-finland/FinlandFAQ/page';
import Website from './Home/HomeForm';
import Footer from '../COMMON/Footer';
import WhyChooseFinland from '../ecommerce-development-in-finland/WhyChooseFinland/page';



const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}
function EcommerceFinland() {

    const generateMetadata = ({ params }) => {
        return {
            title: 'eCommerce Website Development Company in Belgium',
            description: 'Get expert ecommerce website development in Belgium. Kushel Digi offers scalable, secure, and tailored ecommerce solutions for your business growth.',
            metadataBase: new URL(`https://www.kusheldigi.com/`),
        }
    };

    useEffect(() => {
        const { title, description } = generateMetadata({ params: {} });
        document.title = title;
        let metaDescription = document.querySelector('meta[name="description"]');

        metaDescription ? metaDescription.content = description :
            document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
    }, []);

    return (
        <div>
            <div className='ser-main'></div>

            <Navbar />
            <FinlandBanner />
            <LogoSlider />
            <StatsSection />
            <Cutting1Section />
            <FinlandEcomServ />
            <LondonSecSlider />
            <CallToAction />
            <WhyChooseFinland />
            <DesignDevelopment />
            <FinlandShop />
            <FinlandMakeUs />
            <IndustryTabs />
            <EcommerceFeatures />
            <FinlandCardSection />
            <FinlandSec12 />
            <FinlandCustomBenefitsSection />
            <FinlandBanner3 />
            <BlogSection />
            <FinlandFAQ />
            <Website />
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

export default EcommerceFinland;
