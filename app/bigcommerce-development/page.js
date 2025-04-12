"use client"
import { useEffect } from 'react'
import BigBanner3 from './BigBanner3/page'
import BigBanner4 from './BigBanner4/page'
import BigBanner6 from './BigBanner6/page'
import BigBanner7 from './BigBanner7/page'
import BigBanner8 from './BigBanner8/page'
import BannerMain from './BannerMain/page'
import Process from './Process/page'
import Navbar from '../COMMON/Navbar'
import Banner10 from '../ecommerce-development/Banner9/page'
import Footer from '../COMMON/Footer'
import BigBanner9 from '../bigcommerce-development/BigBanner9/page'
import BigAskQuestion from '../bigcommerce-development1/BigAskQuestion/page'
import HomeForm from '../components/Home/HomeForm';
import BlogSection from "../COMMON/BlogSection/BlogSection.jsx";
import FeatureSection from './FeaturesSection/FeatureSection'
import ServicesSection from './ServiceSection/ServiceSection'
import BigCommercePortfolio from './BigCommercePortfolio/BigCommercePortfolio';
import { whyBigCommereByKDS } from "../data/data"
import { whyBigCommereByKDSHeading } from "../data/data";
import {BigCommerceServices} from "../data/data"
import {BigCommerceServicesHeading} from "../data/data";
import {BigCommerceFeatures} from "../data/data";
import {BigCommerceFeaturesContent} from "../data/data";
import Banner9 from '../ecommerce-development/Banner8/page'

const page = () => {
  const generateMetadata = ({ params }) => ({
                  title: 'Top-notch Big commerce development services',
                  description: "Kushel Digi Solutions elevates your business with top-notch big commerce website, Our best Big-commerce development service is expert to create eCommerce stores"
                });
                
              useEffect(() => {
                  const { title, description } = generateMetadata({ params: {} });
                  document.title = title;
                  let metaDescription = document.querySelector('meta[name="description"]');
                  metaDescription ? metaDescription.content = description : 
                    document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
                }, []);

  return (
    <div>
      <Navbar/>
      <BannerMain/>
      <BigBanner8/>
      <BigBanner7/>
      <BigBanner3 />
      {/* <Banner10 page='BigCommerce'/> */}
      <BigCommercePortfolio page={'BigCommerce'}/>
      <Banner9 page='Delivering powerful, high performance BigCommerce solutions for our clients.'/>
      <Process page='BigCommerce'/>
      <BigBanner6 services={whyBigCommereByKDS} contents={whyBigCommereByKDSHeading}/>
        <BigBanner4 page='Our Bigcommerce Experts are Ready to Launch your Dream Store today!'/>
       
        <BigBanner9 />
        <ServicesSection services={BigCommerceServices} contents={BigCommerceServicesHeading}/>
        <FeatureSection services={BigCommerceFeatures} contents={BigCommerceFeaturesContent}/>
       
        <BlogSection/>
        <BigAskQuestion/>
    <HomeForm/>
        <Footer/>
    </div>
  )
}

export default page