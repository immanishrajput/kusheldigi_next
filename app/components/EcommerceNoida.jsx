"use client"

import React from 'react'
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

const page = () => {
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
        </div>
    )
}

export default page;