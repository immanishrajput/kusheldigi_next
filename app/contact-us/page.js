'use client';

import React, { useEffect } from 'react';
import ContactUs from './ContactUs/page';
import ContactSec from './ContactSec/page';
import ContactMap from './ContactMap/page';
import Home2Testimonial from '../components/Home/Home2Testimonial';
import Footer from '../COMMON/Footer';
import Navbar from '../COMMON/Navbar';
import ContactFooter from './ContactFooter/page';

const generateMetadata = () => ({
  title: 'Contact Us | Custom eCommerce Development & BigCommerce Experts',
  description:
    'Connect with Kushel Digi Solutions for expert eCommerce development, BigCommerce solutions, and digital strategy. Get a free discovery call and start your project today',
});

const Page = () => {
  useEffect(() => {
    const { title, description } = generateMetadata();
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
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
      <ContactUs />
      <ContactMap />
      <ContactSec />
      <Home2Testimonial />
      <ContactFooter />
      <Footer />
    </div>
  );
};

export default Page;
