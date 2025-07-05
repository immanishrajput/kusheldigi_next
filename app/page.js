// app/page.js (Simplified version to work with layout.js)

"use client"
import Script from 'next/script';
import Image from 'next/image';
import Home2Section5 from './components/Home/Home2Section5';
import Home2Section10 from './components/Home/Home2Section10';
import Home2Testimonial from './components/Home/Home2Testimonial';
import Home2AskQuestion from './components/Home/Home2AskQuestion';
import HomeSlider from './components/Home/HomeSlider'
import HomeForm from './components/Home/HomeForm'
import HomeCardSection from './components/Home/HomeCardSection'
import HomeSecCard from './components/Home/HomeSecCard'
import HomeFlax from './components/Home/HomeFlax'
import HomeTech from './components/Home/HomeTech';
import HomeVision from './components/Home/Vision/HomeVision'
import Footer from './COMMON/Footer';
import Navbar from './COMMON/Navbar';
import { useEffect } from 'react';
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

  return (
    <>
      {/* Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_TRACKING_ID');
          `,
        }}
      />

      {/* Hotjar Script */}
      <Script id="hotjar-tracking" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:6403397,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      <PopUp />

      <main role="main">
        <div className="home-main">
          <Navbar />
          <HomeNewBanner />
          <HomeTech />
          <HomeVision />
          <HomeSlider />
          <Home2Section5 />
          <HomeFlax />
          <HomeCardSection />
          <HomeSecCard />
          <ScrollSection />
          <Home2Section10
            heading={'Custom Solutions Crafted for Every Industry'}
            para={
              'Our eCommerce solutions are not confined to any specific industry or business domain as we have delivered hundreds of project catered to more than 15 industry.'
            }
          />
          <CompaniesSlider />
          <Home2Testimonial />
          <Home2AskQuestion />
          
          {/* WhatsApp and Call buttons */}
          <div className="whtsApBtns" role="region" aria-label="Contact buttons">
            <button 
              onClick={whatAppHandler}
              aria-label="Chat with us on WhatsApp"
              title="Chat with us on WhatsApp"
              type="button"
            >
              <Image
                className="what-image-universal"
                src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230407/whatsapp_ztk2oe.png"
                alt="WhatsApp chat icon"
                title="Contact us on WhatsApp"
                width={50}
                height={50}
                loading="lazy"
              />
            </button>
            <button 
              onClick={callHandler}
              aria-label="Call us now"
              title="Call us now"
              type="button"
            >
              <Image
                src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230446/telephone_wnquao.png"
                alt="Phone call icon"
                title="Call us now"
                width={50}
                height={50}
                id='callBlinking'
                loading="lazy"
              />
            </button>
          </div>
          
          <HomeForm />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default HomePage;