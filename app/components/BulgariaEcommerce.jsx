"use client"
import React, { useEffect } from 'react';
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


const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}

function BulgariaEcommerce() {

    const generateMetadata = ({ params }) => {
        return {
            title: 'eCommerce Development Company in Bulgaria | Kushel Digi',
            description: 'Get expert ecommerce development in Bulgaria. Kushel Digi builds custom, secure, and scalable ecommerce websites to grow your online business.',
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

            <BulgariaBanner />
            <LogoSlider />
            <StatsSection />
            <Cutting1Section />
            <BulgariaEcomServ />
            <LondonSecSlider />
            <CallToAction />
            <WhyChooseBulgaria />
            <DesignDevelopment />
            <BulgariaShop />
            <BulgariaMakeUs />
            <IndustryTabs />
            <EcommerceFeatures />
            <BulgariaCardSection />
            <BulgariaSec12 />
            <CustomBenefitsSection />
            <BulgariaSolution />
            <BlogSection />

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

export default BulgariaEcommerce;