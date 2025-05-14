"use client"
// import {Metadata} from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Home2Banner from './components/Home/Home2Banner';
import Home2Swiper from './components/Home/Home2Swiper';
import Home2Section3 from './components/Home/Home2Section3';
import Home2Section4 from './components/Home/Home2Section4';
import Home2Section5 from './components/Home/Home2Section5';
import Home2Section6 from './components/Home/Home2Section6';
import Home2Section7 from './components/Home/Home2Section7';
import Home2Section8 from './components/Home/Home2Section8';
import Home2Section9 from './components/Home/Home2Section9';
import Home2Section10 from './components/Home/Home2Section10';
import Home2BrandSwiper from './components/Home/Home2BrandSwiper';
import Home2Testimonial from './components/Home/Home2Testimonial';
import Home2AskQuestion from './components/Home/Home2AskQuestion';
import HomeSlider from './components/Home/HomeSlider'
import HomeForm from './components/Home/HomeForm'
import HomeCardSection from './components/Home/HomeCardSection'
import HomeSecCard from './components/Home/HomeSecCard'
import HomeFlax from './components/Home/HomeFlax'
// import HomeVision from './components/Home/HomeVision'
import HomeTech from './components/Home/HomeTech';
import HomeVision from './components/Home/Vision/HomeVision'
// import Navbar from './components/Home/Navbar';
import './globals.css'
import Footer from './COMMON/Footer';
import Navbar from './COMMON/Navbar';
import { useEffect } from 'react';
// import Home2 from './components/Home/Home2'; 
import HomeNewBanner from "./components/Home/HomeNewBanner";
import CompaniesSlider from "./components/Home/slider/CompaniesSlider";
import ScrollSection from "./components/Scroll-Section/ScrollSection";
import PopUp from './components/Home/PopUp/PopUp';
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'

const HomePage = ({ props }) => {
  const phoneNumber = '9045301702';

  const whatAppHandler = () => {

    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, '_blank');
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  const generateMetadata = ({ params }) => {
    return {
      title: 'Expert eCommerce & BigCommerce Development Company | Kushel Digi',
      description: 'Transform your online presence with Kushel Digi Solutions eCommerce development, BigCommerce solutions, and tailored B2B and marketplace platforms. Start your project today!',
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
    <>
      <PopUp />
      <Head>



      </Head>
      <div className="home-main">
        <Navbar />
        {/* <Home2Banner /> */}
        <HomeNewBanner />
        <HomeTech />
        {/* <Home2Swiper /> */}
        {/* <Home2/> */}

        {/* <Home2Section3 /> */}
        <HomeVision />
        <HomeSlider />

        {/* <Home2Section4 /> */}

        <Home2Section5 />

        {/* <Home2Section6 /> */}
        <HomeFlax />
        {/* <Home2Section7 /> */}
        <HomeCardSection />

        <HomeSecCard />




        {/* <HomeVision/> */}
        {/* <Home2Section8 /> */}
        {/* <Home2Section9 /> */}
        <ScrollSection />
        <Home2Section10
          heading={'Custom Solutions Crafted for Every Industry'}
          para={
            'Our eCommerce solutions are not confined to any specific industry or business domain as we have delivered hundreds of project catered to more than 15 industry.'
          }
        />
        <CompaniesSlider />
        {/* <Home2BrandSwiper title={'Brands We Help Thrive'} /> */}

        <Home2Testimonial />

        <Home2AskQuestion />
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <Image
              className="what-image-universal"
              src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230407/whatsapp_ztk2oe.png"
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
              width={50}
              height={50}
            />
          </button>
          <button onClick={callHandler}>
            <Image
              src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230446/telephone_wnquao.png"
              alt="call-icon"
              title="call-icon"
              width={50}
              height={50}
              id='callBlinking'
            />
          </button>
        </div>
        <HomeForm />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
