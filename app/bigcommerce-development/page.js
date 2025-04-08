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
import BigCommercePortfolio from './BigCommercePortfolio/BigCommercePortfolio'

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

                const leftContent = {
                  heading: "Kushel Digi BigCommerce Development Services",
                  subheading: "Kushel Digi is committed to deliver your dream ecommerce store with high powered Bigcommerce solutions.",
                  buttonLabel: "Get a Free Consultation Today",
                  buttonLink: "contact-us"
                };
                
                
                const services = [
                  {
                    title: "BigCommerce Custom Store Development",
                    description:
                      "Let us turn your vision into a reality through our custom BigCommerce store development. Our eCommerce solutions are designed to meet the needs of your brand. Our platform ensures a seamless and engaging shopping experience for your customers.",
                  },
                  {
                    title: "BigCommerce Theme Design",
                    description:
                      "Stand out in this saturated market with an attractive, custom-made BigCommerce theme. Our design team will create beautiful, responsive themes that reflect your branding. Give that store an extra edge that gets the customers interacting.",
                  },
                  {
                    title: "BigCommerce App Integration",
                    description:
                      "Augment store functionality with BigCommerce app integrations that are seamlessly integrated. We will integrate vital tools and third-party apps to further up your store's capability. Whether it's a payment gateway or a marketing tool, we have got you covered.",
                  },
                  {
                    title: "BigCommerce Migration Services",
                    description:
                      "Moving to BigCommerce? Our migration services make sure that your transition runs smoothly with the least amount of downtime. We take responsibility for everything, from data porting to design replicability, so that you do not lose your store functionality.",
                  },
                  {
                    title: "BigCommerce Performance Optimization",
                    description:
                      "Ensure that your store is fast, responsive, and reliable with our performance optimization services. We will inspect and improve the load times, server performance, and user experience so that customers always remain satisfied and engaged.",
                  },
                  {
                    title: "BigCommerce SEO & Marketing",
                    description:
                      "Expand your online presence and sales with our BigCommerce SEO and marketing services. We put into action tested strategies that will enhance your search ranking and drive targeted traffic. Let us help you reach your audience effectively.",
                  },
                ];

  return (
    <div>
      <Navbar/>
      <BannerMain/>
      <BigBanner8/>
      <BigBanner7/>
      <BigBanner3 leftContent={leftContent} services={services}/>
      {/* <Banner10 page='BigCommerce'/> */}
      <BigCommercePortfolio/>
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