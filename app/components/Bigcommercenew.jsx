"use client"
import { useEffect } from 'react'
import BigBanner3 from '../bigcommerce-development/BigBanner3/page'
import BigBanner4 from '../bigcommerce-development/BigBanner4/page'
import BigBanner6 from "../bigcommerce-development/BigBanner6/page"
import BigBanner7 from '../bigcommerce-development/BigBanner7/page'
import BigBanner8 from '../bigcommerce-development/BigBanner8/page'
import BannerMain from '../bigcommerce-development/BannerMain/page'
import Process from '../bigcommerce-development/Process/page'
import Navbar from '../COMMON/Navbar'
import Banner10 from '../ecommerce-development/Banner9/page'
import Footer from '../COMMON/Footer'
import BigBanner9 from '../bigcommerce-development/BigBanner9/page'
import BigAskQuestion from '../bigcommerce-development/BigAskQuestion/page'
import HomeForm from '../components/Home/HomeForm';
import BlogSection from "../COMMON/BlogSection/BlogSection.jsx";
import FeatureSection from '../bigcommerce-development/FeaturesSection/FeatureSection'
import ServicesSection from '../bigcommerce-development/ServiceSection/ServiceSection'
import BigCommercePortfolio from '../bigcommerce-development/BigCommercePortfolio/BigCommercePortfolio';
import { whyBigCommereByKDS } from "../data/data"
import { whyBigCommereByKDSHeading } from "../data/data";
import {BigCommerceServices} from "../data/data"
import {BigCommerceServicesHeading} from "../data/data";
import {BigCommerceFeatures} from "../data/data";
import {BigCommerceFeaturesContent} from "../data/data";
import Banner9 from '../ecommerce-development/Banner8/page';
import {weExpertInBigCommerce} from "../data/data"

const page = () => {
  const generateMetadata = ({ params }) => ({
                  title: ' Best BigCommerce Development Services| Kushel Digi Solutions',
                  description: "Boost your online store with Kushel Digi’s expert BigCommerce development, seamless migration, custom design, and scalable eCommerce solutions for business growth"
                });
                
              useEffect(() => {
                  const { title, description } = generateMetadata({ params: {} });
                  document.title = title;
                  let metaDescription = document.querySelector('meta[name="description"]');
                  metaDescription ? metaDescription.content = description : 
                    document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
                }, []);
                const phoneNumber = "9045301702";

                const whatAppHandler = () => {
                  const whatsappUrl = `https://wa.me/${phoneNumber}`;
                  window.open(whatsappUrl, "_blank");
                };
                const callHandler = () => {
                  const callUrl = `tel:${phoneNumber}`;
                  window.open(callUrl, "_blank");
                }
  return (
    <div>
      <Navbar/>
      <BannerMain/>
      <BigBanner8 weExpert={weExpertInBigCommerce}/>
      <BigBanner7/>
      <BigBanner3 />
      {/* <Banner10 page='BigCommerce'/> */}
      <BigCommercePortfolio page={'BigCommerce'}/>
      <Banner9 page='Delivering powerful, high performance BigCommerce solutions for our clients.'/>
      <Process page='BigCommerce'/>
      <BigBanner6 services={whyBigCommereByKDS} contents={whyBigCommereByKDSHeading}/>
        <BigBanner4 page='Our Bigcommerce Experts are Ready to Launch your Dream Store today!' img='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743157130/bigcommerce-logo-icon_um7a4x.png'/>
       
        <BigBanner9 />
        <ServicesSection services={BigCommerceServices} contents={BigCommerceServicesHeading}/>
        <FeatureSection services={BigCommerceFeatures} contents={BigCommerceFeaturesContent}/>
       
        <BlogSection page="bigcommerce"/>
        <BigAskQuestion/>
    <HomeForm/>
        <Footer/>
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

export default page