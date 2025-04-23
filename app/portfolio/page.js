"use client";
import React, { useEffect } from 'react';
import PortfolioBanner from './PortfolioBanner/page';
import PortfolioCard from './PortfolioCard/paje';
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import HomeForm from '../components/Home/HomeForm';

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
    </div>
  );
};

export default Page;
