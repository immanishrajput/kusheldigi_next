'use client';
import React, { useEffect } from 'react';
import Banner from '../about/Banner/page';
import Section2 from '../about/Section2/page';
import Section3 from '../about/Section3/page';
import Section4 from '../about/Section4/page';
import Section5 from '../about/Section5/page';
import Section6 from '../about/Section6/page';
import Section7 from '../about/Section7/page';
import Slider from '../about/Slider/page';
import Section8 from '../about/Section8/page';
import Section9 from '../about/Section9/page';
import Section10 from '../about/Section10/page';
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import ContactForm from '../components/Home/HomeForm';

const generateMetadata = () => ({
  title: 'About Kushel Digi Solutions | eCommerce Development Experts',
  description:
    'Kushel Digi Solutions empower businesses by delivering seamless, scalable as well as revenue-driven online stores to maximize growth in the eCommerce digital marketplace',
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
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Slider />
      <Section8 />
      <Section9 />
      <Section10 />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Page;
