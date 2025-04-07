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
      <BigBanner3/>
      <Banner10 page='BigCommerce'/>
      <Process/>
      <BigBanner6 page='BigCommerce'/>
        <BigBanner4/>
       
        <BigBanner9 />
        <ServicesSection page='BigCommerce'/>
        <FeatureSection/>
       
        <BlogSection/>
        <BigAskQuestion/>
    <HomeForm/>
        <Footer/>
    </div>
  )
}

export default page