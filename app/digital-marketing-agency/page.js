"use client"
import React from "react";

import VectorArrow from "../../public/assets/Vector.svg";


import Rectangle17725 from "../../public/assets/Rectangle 17725.png";
import Rectangle17726 from "../../public/assets/Rectangle 17726.png";
import Ellipse37 from "../../public/assets/Ellipse 37.png";

import Group72437 from "../../public/assets/Group 72437.svg";
import Speed1 from "../../public/assets/speed 1.svg";
import ContentWriting1 from "../../public/assets/content-writing 1.svg";
import Search1 from "../../public/assets/search 1.svg";
import SaveMoney1 from "../../public/assets/save-money 1.svg";
import Test1 from "../../public/assets/test 1.svg";
import d1 from '../../public/assets/d1.png'

import Arrow from "../../public/assets/arrow.svg";


import chart1 from "../../public/assets/chart (1).svg";
import chart2 from "../../public/assets/chart (2).svg";
import chart3 from "../../public/assets/chart (3).svg";
import chart4 from "../../public/assets/chart (4).svg";
import chart5 from "../../public/assets/chart (5).svg";
import chart6 from "../../public/assets/chart (6).svg";
import Image from "next/image";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import '../globals.css'
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
// import { Helmet } from "react-helmet";
import Head from "next/head";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"

import ContactForm from "../COMMON/ContactForm";
import DigitalFAQ from "../COMMON/DigitalFAQ";
function DigitalMarketing({notify}) {


  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler=()=>{
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }



  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <Navbar/>
    <Head>
      <title>Hi there</title>
    </Head>
    
      <div className="ser-main digi-ser-main">
        <div className="digitalMarketing">
          <section className="heroSection">
            <div className="hero-container">
              <div className="hero-content">
               
                <h1>
                 Complete Digital Marketing services to <br /> sky rocket your online business
                </h1>
                <hr className="blueLine" />
                <p>
                  Measurable, results-driven digital <br />
                  marketing services.
                </p>
               
                <div className="input">
                  <input
                    type="email"
                    placeholder="Enter your business e-mail"
                  />
                  <Link href="/contact-us">
                  <button class="digital_btn_schue">
                    SCHEDULE YOUR FREE STRATEGY SESSION{" "}
                    <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/> </svg>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="dma-main">
            <div className="ourtalent dine-123">
              <div className="ourtalent-text">
                <div className="ourtalent-text__heading">
                  <h2>
                    Full-Service Digital Marketing Agency in india. Best Place
                    for Digital Advertisement.{" "}
                  </h2>
                </div>
                <div className="ourtalent-text__para">
                  <p>
                   
                    We use our years of expertise and knowledge to provide solutions for our clients that are not only performance-driven but also imaginative. We aim to execute fierce digital campaigns for our clients!

                  </p>
                </div>
                <div className="ourtalent-text__button">
                <Link href="/contact-us">
                  <button>
                    Learn More &nbsp;
                    
                    <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/> </svg>
                  </button>
                  </Link>
                </div>
              </div>
              <div className="ourtalent-image">
                <Image className="not_y" src={Rectangle17725} alt="Digital marketing agency"  title="Digital marketing agency"/>
                <Image className="not_y1"  src={Rectangle17726} alt="bg-design" title="bg-design" />
                <Image className="not_y1" src={Ellipse37} alt="bg-design" title="bg-design" />
              </div>
            </div>
            </div>
          </section>
         
          <section className="packages_section dine-123">
            <div className="packages digi-packages">
              <div className="package-types text-center">
                <h3 className="font-bold">Why Does Your Businesses Need</h3>
                <h3 className="font-bold">Digital Marketing Services</h3>
                <p>
                 
                  These days, going digital is a need, not an option. There are limits to what traditional marketing firms can accomplish. A digital marketing agency has the know-how and vision to position your business to attract more customers and increase sales. The secret is to stick out and stay relevant in a world that is changing quickly.
                </p>
              </div>
              <div className="package-cards w-full">
                <Image className="w-full" src={d1} alt="Digital Marketing Services" title="Digital Marketing Services" />
              </div>
            </div>
          </section>
     
          <section>
            <div className="packages digi-packages digi-packages1">
              <div className="package-types text-center">
                <h3 className="font-bold">
            
                  Digital Marketing Services provided by 

                </h3>
                <h3 className="font-bold">
                Kushel Digi Solution
              
                  </h3>
                <p>
                 
                  Our goal is to serve as our clients' one-stop shop for all services. We now possess the following range.

                </p>
              </div>
             
            </div>
          </section>
          {/* <!-- End of Package Section --> */}

          {/* <!-- Charts Section --> */}
          <section>
            <div className="dmc-chart">
            <div className="charts dine-123">
              <Image src={chart3} alt="individual tracker" title="individual tracker" />
              <Image src={chart4} alt="Region wise lead tracker" title="Region wise lead tracker" />
              <Image src={chart5} alt="Team performnce" title="Team performnce" />
              <Image src={chart6} alt="revenue share" title="revenue share" />
              <Image src={chart1} alt="sales rap individual tracker" title="sales rap individual tracker" />
              <Image src={chart2} alt="lead-generation" title="lead-generation" />
            </div>
            </div>
          </section>
          {/* <!-- End of Charts Section --> */}

          {/* <!-- Portfolio Section --> */}
          <section>
            <div className="DMC-process"></div>
            <div className="process aaj13122023 dine-123">
              <h2 className="font-bold  new1487899641mhhjkkjkj">
                Our <span>R.O.C.K.E.T</span> process
              </h2>
              <div className="process-container">
                <div className="process-container__card">
                  <div className="process-container__card__heading">
                    <h3>Research</h3>
                    <Image src={Group72437} alt="Research" title="Research" />
                  </div>
                  <div className="process-container__card__text">
                    <p>
                      When we kick-off an SEO campaign, your dedicated SEO
                      consultant begins by doing a deep dive into your company,
                      your website, your competitors and your industry. <br />
                      <br />- In-depth Competitor Analysis <br />
                      <br />- Site & Server Analysis <br />
                      <br />- Analyze 200+ On-Site SEO Factors
                      <br />
                      <br />
                      We put on our detective hats and use data to put together
                      a roadmap for your website’s SEO.
                    </p>
                  </div>
                </div>
                <div className="process-container__card">
                  <div className="process-container__card__heading">
                    <h3>Optimize</h3>
                    <Image src={Speed1} alt="Optimize" title="Optimize" />
                  </div>
                  <div className="process-container__card__text">
                    <p>
                      From UI to UX, we make hundreds of changes both big and
                      small to your website to help Google better understand who
                      you are.
                      <br />
                      <br />- Attention-grabbing titles & meta descriptions{" "}
                      <br />
                      <br />- Improve usability <br />
                      <br />- Update Site Architecture
                      <br />
                      <br />
                      With a dedicated web development team, our SEO company
                      will also take care of your technical SEO, helping you
                      increase the usability, speed, and functionality of your
                      website.
                    </p>
                  </div>
                </div>
                <div className="process-container__card">
                  <div className="process-container__card__heading">
                    <h3>Content</h3>
                    <Image src={ContentWriting1} alt="Content" title="Content" />
                  </div>
                  <div className="process-container__card__text">
                    <p>
                      Your website content is what users count on to help
                      educate and guide them through the purchasing funnel.{" "}
                      <br />
                      <br />- Website SEO Copy That Converts <br />
                      <br />- Longform Copy That Educates
                      <br />
                      <br />- Informative Blog Posts That Intrigue
                      <br />
                      <br />
                      Whether discussing your company’s unique selling point or
                      providing educational content, we’ll provide topic
                      suggestions, professional copy, and quality content to
                      propel not only your site’s ranking but also your
                      company’s growth.
                    </p>
                  </div>
                </div>
                <div className="process-container__card">
                  <div className="process-container__card__heading">
                    <h3>Keywords</h3>
                    <Image src={Search1} alt="Keywords" title="Keywords" />
                  </div>
                  <div className="process-container__card__text">
                    <p>
                      Our meticulous keyword research process is at the heart of
                      our SEO services. The specific keywords we target help us
                      define our audience and drive valuable traffic to your
                      site.
                      <br />
                      <br />- Competitor Keyword Analysis <br />
                      <br />- Keyword Mapping Report <br />
                      <br />- Advanced Rank Tracking
                      <br />
                      <br />
                      With relevant traffic heading to your website, your
                      company can secure fresh leads, high-value sales, and
                      more.
                    </p>
                  </div>
                </div>
                <div className="process-container__card">
                  <div className="process-container__card__heading">
                    <h3>Earned media & links</h3>
                    <Image src={SaveMoney1} alt="Earned media & links" title="Earned media & links" />
                  </div>
                  <div className="process-container__card__text">
                    <p>
                      Earned media and off-page SEO are crucial services for
                      getting your site in front of your target audience. <br />
                      <br />- Content Promotion <br />
                      <br />- Relevant Mentions From Blogs/Press
                      <br />
                      <br />- Viral Marketing Campaigns
                      <br />
                      <br />
                      Our dedicated content marketing team will create new
                      opportunities for website growth by helping your company
                      build links (and relationships) with trusted experts in
                      your industry.
                    </p>
                  </div>
                </div>
                <div className="process-container__card">
                  <div className="process-container__card__heading">
                    <h3>Testing</h3>
                    <Image src={Test1} alt="Testing" title="Testing" />
                  </div>
                  <div className="process-container__card__text">
                    <p>
                      Getting relevant, qualified search traffic to your site is
                      just the beginning of our SEO optimization services.{" "}
                      <br />
                      <br />- Conversion Path Analysis <br />
                      <br />- Calls-to-action Improvements
                      <br />
                      <br />- Continual Improvements Via ROI Tracking
                      <br />
                      <br />
                      We believe in testing everything and making continual
                      improvements to your SEO marketing strategy so your
                      business can continue to drive revenue from SEO.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End of Portfolio Section --> */}

          {/* <!-- Contact Us Section --> */}
          <section>
            <div className="dmc-improve">
            <div className="improved dine-1234">
              <h2>
                Improved Sales. Quick ROI. <br /> Faster Growth.
              </h2>

              <p>Kushel Digi Solutions is a full service   <Link href="/digital-marketing-agency"> <span className="raja_hoverrrr"> Digital Marketing Agency </span> </Link> and
also the best place for digital advertisement as they use years of expertise
and knowledge to provide solutions for their clients. They can help you
understand why your business needs digital marketing services such as
wider audience reach, cost-effectiveness, data-driven approach, increased
competitiveness, measurable results, and improved customer experience.
They offer the best and high quality digital marketing services. Their clients
have seen significant growth in their business through their online
marketing strategies. They follow R.O.C.K.E.T process involving Research,
Optimize, Content, Keywords, Earned media & links, and Testing. </p>

<p>What are you waiting for- get a free consultation; book and appointment
with their team through google meet/ zoom call and get a 15 day free trial
as well!</p>
              <div className="improved-btn flex items-center justify-center">
              <Link href="/contact-us">
                <button className="sign">SIGN UP FOR FREE</button> </Link>
                <Link href="/contact-us"><button className="plans">SEE PLANS AND PRICING</button></Link> 
              </div>
            </div>
            </div>
            <div className="bookus">
              <div className="bookus-heading">
                <h2>Get free Consultation</h2>
                <p>
                  Book an appoinment with our team through google meet / Zoom
                  call
                </p>
              </div>
              <div className="bookus-button">
              <Link href="/contact-us">
                <button>
                  Schedule a meeting &nbsp; 
                  
                  <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/> </svg>
                </button> </Link>
              </div>
            </div>

             <div className="dmc-conection">
            <div className="connectus dine-123">
              <p>DO YOU WANT TO RANK YOUR WEBSITE</p>
              <Link href="/contact-us">
              <button>LET’S CONNECT</button> </Link>
            </div>
            </div>

           <DigitalFAQ/>
            <ContactForm notify={notify}/>
          </section>
        </div>
    
    
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <Image className="what-image-universal" src={whatsApp} alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <Image src={call} alt="call-icon" title="call-icon" />
          </button>

        </div>

  </div>
  <Footer/>
    </>
  );
}

export default DigitalMarketing;
