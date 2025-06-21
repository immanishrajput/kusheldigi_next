"use client"
import React from 'react'
import '../globals.css'

import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import Website from './Home/HomeForm';
import UseAccorrodian from '../COMMON/UseAccorrodian'
import QatarBanner from '../ecommerce-development-in-qatar/QatarBanner/page';
import LogoQatar from '../ecommerce-development-in-qatar/LogoQatar/page'
import QatarStack from '../ecommerce-development-in-qatar/QatarStack/page';
import QatarEcomServ from '../ecommerce-development-in-qatar/QatarEcomServ/page';
import EcommerceExpertise from '../ecommerce-development-in-qatar/EcommerceExpertise/page';
import UnleashingSection from '../ecommerce-development-in-qatar/UnleashingSection/page';
import QatarBenfit from '../ecommerce-development-in-qatar/QatarBenfit/page';
import QatarEcomDev from '../ecommerce-development-in-qatar/QatarEcomDev/page';
import Banner12 from '../ecommerce-development/Banner11/page';
import CustomBenefitsSection from '../ecommerce-development-in-london/CustomBenefitsSection/page';
import Banner3 from '../ecommerce-development/Banner3/Page';
import Banner11 from '../ecommerce-development/Banner10/page';
import QatarFeatures from '../ecommerce-development-in-qatar/QatarFeatures/page';


const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}
function EcommerceQatar() {
    return (
        <div>
            <div className='ser-main'></div>

            <Navbar />

            <QatarBanner />
            <LogoQatar />
            <QatarStack />
            <QatarEcomServ />
            <EcommerceExpertise />
            <QatarBenfit />
            <QatarEcomDev />
            <QatarFeatures/>
            <UnleashingSection />
              <Banner12/>
            <CustomBenefitsSection/>
            <Banner3/>
            <Banner11/>
           
            <UseAccorrodian />
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

export default EcommerceQatar;
