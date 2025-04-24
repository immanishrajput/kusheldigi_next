"use client"
import React, { useEffect } from 'react'
import BigHeader from './BigHeader/Page'
import BigSection2 from './BigSection2/page'
// import "./header.css"
import BigSection3 from './BigSection3/page'
import Bigsection6 from './Bigsection6/page'
import BigSection7 from './BigSection7/page'
import Home2Section10 from '../components/Home/Home2Section10'
import Home2Testimonial from '../components/Home/Home2Testimonial'
import YourProject from './YourProject/page'
import ContactForm1 from '../COMMON/ContactForm1'
import Home2BrandSwiper from '../components/Home/Home2BrandSwiper'
import BigSection8 from './BigSection8/page'
import BigSection5 from './BigSection5/page'

import '../globals.css'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
// import { Helmet } from 'react-helmet';

const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }
function BigCommerce3({ notify }) {
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
  return (
    <>
    <Navbar/>
     
      <div className="home-main">

        <BigHeader />

        <BigSection2 />

        <p className="linesbig"></p>

        <BigSection3 />

        <Home2BrandSwiper title={"Featured Technology Partners"} />

        <BigSection5 />

        <Bigsection6 />

        <BigSection7 />

        <BigSection8 />

        {/* <BigSection9  /> */}

        <Home2Section10 heading={"EMPOWERING INDUSTRIES WITH OUR EXPERT SOLUTIONS"} para={"We have expertise in multiple industries, providing custom digital solutions for growth and success. Be it in transforming customer experience or operational excellence, we engineer technology that caters specifically to your business needs."} />

        <Home2Testimonial />

        <YourProject />

    
        {/* <Home2AskQuestion /> */}

        <ContactForm1 notify={notify} />


        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default BigCommerce3