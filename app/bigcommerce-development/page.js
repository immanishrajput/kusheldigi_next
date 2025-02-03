"use client"
import React from 'react'
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
import BigAskQuestion from './BigAskQuestion/page'
import '../globals.css'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
// import { Helmet } from 'react-helmet';

function BigCommerce3({ notify }) {
  return (
    <>
    <Navbar/>
      {/* <Helmet> */}
        <title>Top-notch Big commerce development services</title>
        <meta
          name="description"
          content="Kushel Digi Solutions elevates your business with top-notch big commerce website, Our best Big-commerce development service is expert to create eCommerce stores"
        />
        {/* <meta
          name="keywords"
          content="Affordable wordpress development services in india"
        /> */}
        <link rel="canonical" href="https://www.kusheldigi.com/bigcommerce-development" />
      {/* </Helmet> */}
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

        <BigAskQuestion />
        {/* <Home2AskQuestion /> */}

        <ContactForm1 notify={notify} />



      </div>
      <Footer/>
    </>
  )
}

export default BigCommerce3