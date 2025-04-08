"use client"
import React, { useEffect } from 'react'
// import "./header.css"
import BigHeader from './BigHeader/page';
import BigSection2 from './BigSection2/page';
import BigSection3 from './BigSection3/page';
import Home2BrandSwiper from '../components/Home/Home2BrandSwiper';

import Bigsection6 from './Bigsection6/page';
import BigSection7 from './BigSection7/page';


import Home2Section10 from '../components/Home/Home2Section10';
import Home2Testimonial from '../components/Home/Home2Testimonial';
import YourProject from './YourProject/page';
import BigAskQuestion from './BigAskQuestion/page';
import ContactForm1 from '../COMMON/ContactForm1';
import '../globals.css'
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import BigSection5 from './BigSection5/page';
import BigSection8 from './BigSection8/page';
// import { Helmet } from 'react-helmet';
import ShopifyProcess from "./ShopifyProcess/ShopifyProcess";
import HomeForm from "../components/Home/HomeForm";
import BlogSection from '../COMMON/BlogSection/BlogSection';
import FeatureSection from '../bigcommerce-development/FeaturesSection/FeatureSection';
import ServiceSection from '../bigcommerce-development/ServiceSection/ServiceSection';
import BigBanner4 from "../bigcommerce-development/BigBanner4/page";
import BigBanner6 from "../bigcommerce-development/BigBanner6/page";
import Banner9 from '../ecommerce-development/Banner9/page';
import BigBanner3 from '../bigcommerce-development/BigBanner3/page';
import ShopifyBanner from './ShopifyBanner/ShopifyBanner';
import ShopifyServices from "./ShopifyServices/ShopifyServices";

function Shopify3({notify}) {
  const generateMetadata = ({ params }) => ({
              title: 'KushelDigi Solutions- Top shopify development company',
              description: "Kushel Digi Solutions experience, you can unlock Shopify's full potential Put your trust in the Shopify development services to build your online success."
            });
            
          useEffect(() => {
              const { title, description } = generateMetadata({ params: {} });
              document.title = title;
              let metaDescription = document.querySelector('meta[name="description"]');
              metaDescription ? metaDescription.content = description : 
                document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
            }, []);

            const leftContent = {
              heading: "Kushel Digi Shopify Development Services",
              subheading: "Kushel Digi is committed to deliver your dream ecommerce store with high powered Shopify",
              buttonLabel: "Get a Free Consultation Today",
              buttonLink: "contact-us"
            };
            
            
            const services = [
              {
                title: "Shopify Custom Store Development",
                description:
                  "Let us turn your vision into a reality through our custom BigCommerce store development. Our eCommerce solutions are designed to meet the needs of your brand. Our platform ensures a seamless and engaging shopping experience for your customers.",
              },
              {
                title: "Shopify Theme Design",
                description:
                  "Stand out in this saturated market with an attractive, custom-made BigCommerce theme. Our design team will create beautiful, responsive themes that reflect your branding. Give that store an extra edge that gets the customers interacting.",
              },
              {
                title: "Shopify App Integration",
                description:
                  "Augment store functionality with BigCommerce app integrations that are seamlessly integrated. We will integrate vital tools and third-party apps to further up your store's capability. Whether it's a payment gateway or a marketing tool, we have got you covered.",
              },
              {
                title: "Shopify Migration Services",
                description:
                  "Moving to BigCommerce? Our migration services make sure that your transition runs smoothly with the least amount of downtime. We take responsibility for everything, from data porting to design replicability, so that you do not lose your store functionality.",
              },
              {
                title: "Shopify Performance Optimization",
                description:
                  "Ensure that your store is fast, responsive, and reliable with our performance optimization services. We will inspect and improve the load times, server performance, and user experience so that customers always remain satisfied and engaged.",
              },
              {
                title: "Shopify SEO & Marketing",
                description:
                  "Expand your online presence and sales with our BigCommerce SEO and marketing services. We put into action tested strategies that will enhance your search ranking and drive targeted traffic. Let us help you reach your audience effectively.",
              },
            ];


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
<BigBanner3 leftContent={leftContent} services={services}/>
{/* <ShopifyServices leftContent={leftContent} services={services}/>  */}
<Banner9 page='Shopify'/>
<ShopifyProcess/>
<BigBanner6 page='Shopify'/>
<BigBanner4/>
<ServiceSection page='Shopify'/>
<FeatureSection/>
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