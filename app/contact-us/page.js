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
  title: 'KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified',
  description:
    'Discover your dream tech job effortlessly with KushelDigi! Our job search marketplace streamlines the process, connecting talented professionals with top tech companies. Simplify your job hunt today.',
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
