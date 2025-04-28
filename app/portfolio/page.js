"use client";
import React, { useEffect } from 'react';
import PortfolioBanner from './PortfolioBanner/page'; 
import PortfolioCard from './PortfolioCard/paje';     
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import HomeForm from '../components/Home/HomeForm';

const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};

const callHandler = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const Page = () => {
  useEffect(() => {
    const title = 'Showcasing eCommerce & Digital Solutions | Kushel Digi Portfolio';
    const description = 'Explore our portfolio of custom eCommerce development, BigCommerce solutions, web and mobile app projects, and UI/UX design. See Kushel Digi Solutions success stories.';

    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = description;
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {/* <PortfolioBanner /> */}
      <PortfolioCard />
      <HomeForm />
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
  );
};

export default Page;
