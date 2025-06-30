"use client"

import React, { useEffect } from 'react'
import Navbar from '../COMMON/Navbar'
import NoidaBanner from '../ecommerce-website-development-company-in-noida/NoidaBanner/page'
import LogoSlider from '../ecommerce-website-development-company-in-noida/LogoSlider/page'
import NoidaFAQ from '../ecommerce-website-development-company-in-noida/NoidaFAQ/page'
import NoidaShop from '../ecommerce-website-development-company-in-noida/NoidaShop/page'
import NoidaMakes from '../ecommerce-website-development-company-in-noida/NoidaMakeUs/page'
import NoidaCardSection from '../ecommerce-website-development-company-in-noida/NoidaCardSection/page'
import IndustryTabs from '../ecommerce-website-development-company-in-noida/NoidaIndustry/page'
import NoidaSec12 from '../ecommerce-website-development-company-in-noida/NoidaSec12/page'
import CustomBenefitsSection from '../ecommerce-website-development-company-in-noida/CustomBenefitsSection/page'
import NoidaSolution from '../ecommerce-website-development-company-in-noida/NoidaSolution/Page'
import Footer from '../COMMON/Footer'
import BlogSection from '../ecommerce-website-development-company-in-noida/BlogSection/BlogSection'
import Website from './Home/HomeForm'
import NoidaStats from '../ecommerce-website-development-company-in-noida/NoidaStats/page'
import NoidaBanner3 from '../ecommerce-website-development-company-in-noida/NoidaBanner3/page'
import EcomServiceNoida from '../ecommerce-website-development-company-in-noida/EcomServiceNoida/page'
import NoidaExpertiseSec from '../ecommerce-website-development-company-in-noida/NoidaExpertiseSec/page'
import NoidaKeyFeatures from '../ecommerce-website-development-company-in-noida/NoidaKeyFeatures/page'
import NoidaSecSlider from '../ecommerce-website-development-company-in-noida/NoidaSecSlider/page'
import NoidaProcessSec from '../ecommerce-website-development-company-in-noida/NoidaProcessSec/page'
import NoidaFeatures from '../ecommerce-website-development-company-in-noida/NoidaFeatures/page'

const phoneNumber = "9045301702";

const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
}

const page = () => {


const generateMetadata = ({ params }) => {
    return {
      title: 'eCommerce Website Development Company in Noida | Kushel Digi',
      description: 'Looking for an ecommerce website development company in Noida? Kushel Digi delivers secure, scalable ecommerce solutions tailored to your business needs.',
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

            <NoidaBanner />
            <LogoSlider />
            <NoidaStats />
            <NoidaBanner3 />
            <EcomServiceNoida />
            <NoidaSecSlider/>
            <NoidaKeyFeatures />
            <NoidaExpertiseSec />
            <NoidaProcessSec/>
            <NoidaShop />
            <NoidaMakes />
            <IndustryTabs />
            <NoidaFeatures/>
            <NoidaCardSection />
            <NoidaSec12 />
            <CustomBenefitsSection />
            <NoidaSolution />
            <BlogSection />
            <NoidaFAQ />
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

export default page;