"use client"
import React, { useEffect } from 'react'
// import "./header.css"
import BigHeader from '../shopify-development/BigHeader/page';
import BigSection2 from '../shopify-development/BigSection2/page';
import BigSection3 from '../shopify-development/BigSection3/page';
import Home2BrandSwiper from '../components/Home/Home2BrandSwiper';

import Bigsection6 from '../shopify-development/Bigsection6/page';
import BigSection7 from '../shopify-development/BigSection7/page';


import Home2Section10 from '../components/Home/Home2Section10';
import Home2Testimonial from '../components/Home/Home2Testimonial';
import YourProject from '../shopify-development/YourProject/page';
import BigAskQuestion from '../shopify-development/BigAskQuestion/page';
import ContactForm1 from '../COMMON/ContactForm1';
import '../globals.css'
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import BigSection5 from '../shopify-development/BigSection5/page';
import BigSection8 from '../shopify-development/BigSection8/page';
// import { Helmet } from 'react-helmet';
import ShopifyProcess from "../shopify-development/ShopifyProcess/ShopifyProcess";
import HomeForm from "../components/Home/HomeForm";
import BlogSection from '../COMMON/BlogSection/BlogSection';
import FeatureSection from '../bigcommerce-development/FeaturesSection/FeatureSection';
import ServiceSection from '../bigcommerce-development/ServiceSection/ServiceSection';
import BigBanner4 from "../bigcommerce-development/BigBanner4/page";
import BigBanner6 from "../bigcommerce-development/BigBanner6/page";
import Banner9 from '../ecommerce-development/Banner9/page';
import BigBanner3 from '../bigcommerce-development/BigBanner3/page';
import ShopifyBanner from '../shopify-development/ShopifyBanner/ShopifyBanner';
import ShopifyServices from "../shopify-development/ShopifyServices/ShopifyServices";
import Banner8 from '../ecommerce-development/Banner8/page'
import BigBanner8 from "../bigcommerce-development/BigBanner8/page";
import ShopifyPortfolio from "../shopify-development/ShopifyPortfolio/page";
import ShopifySecond from "../shopify-development/ShopifySecond/ShopifySecond"
import { ShopifyFeatures, ShopifyFeaturesContent, ShopifyServicesContent, ShopifyServicesHeading, whyBigCommereByKDS, whyBigCommereByKDSHeading,weExpertInShopify } from '../data/data';

function Shopify3({notify}) {
  const generateMetadata = ({ params }) => ({
              title: 'Shopify Experts for eCommerce Development Growth | Kushel Digi ',
              description: "Kushel Digi Solutions delivers Shopify development, theme customization, app integration, and ongoing support. Boost your eCommerce sales with our Shopify expertise."
            });
            
          useEffect(() => {
              const { title, description } = generateMetadata({ params: {} });
              document.title = title;
              let metaDescription = document.querySelector('meta[name="description"]');
              metaDescription ? metaDescription.content = description : 
                document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
            }, []);

            


  return (
    <>
<Navbar/>

        
    

<div className="home-main">

{/* <BigHeader /> */}

{/* <BigSection2 /> */}

{/* <p className="linesbig"></p> */}

{/* <BigSection3 /> */}

{/* <Home2BrandSwiper title={"Featured Technology Partners"} /> */}

{/* <BigSection5/> */}

{/* <Bigsection6 /> */}

{/* <BigSection7 /> */}

{/* <BigSection8/> */}

{/* <Home2Section10  heading={"EMPOWERING INDUSTRIES WITH OUR EXPERT SOLUTIONS"} 
 para={"We have expertise in multiple industries, providing custom digital solutions for growth and success. Be it in transforming customer experience or operational excellence, we engineer technology that caters specifically to your business needs."}/> */}

{/* <Home2Testimonial  /> */}
{/* <YourProject /> */}
<ShopifyBanner/>
{/* <BigBanner3 /> */}
<ShopifySecond weExpert={weExpertInShopify}/>
{/* <BigBanner8 weExpert={weExpertInShopify}/> */}
<ShopifyServices /> 
<ShopifyPortfolio page='Shopify'/>
<ShopifyProcess page='Shopify'/>
<Banner8 page='Building high performance custom Shopify stores in accordance with your business needs.'/>
<BigBanner6 services={whyBigCommereByKDS} contents={whyBigCommereByKDSHeading}/>
<BigBanner4 img='https://res.cloudinary.com/dd9tagtiw/image/upload/v1744609043/images_21_e6hnmi.png' page='Our Shopify Experts are Ready to Launch your Dream Store today!'/>
<ServiceSection services={ShopifyServicesContent} contents={ShopifyServicesHeading}/>
<FeatureSection services={ShopifyFeatures} contents={ShopifyFeaturesContent}/>
<BlogSection/>
<BigAskQuestion />
<HomeForm/>
{/* <ContactForm1 notify={notify} /> */}



</div>
<Footer/>
</>
   
    
  )
}

export default Shopify3;