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
  title: 'About Us | Leading eCommerce & Digital Transformation Agency',
  description:
    'Get to know Kushel Digi Solutions leading eCommerce development company dedicated to building high-performing online stores and driving digital success for brands.',
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
  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }
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
