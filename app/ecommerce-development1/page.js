"use client"
import React, { useState, useEffect } from "react";
import PortCard from "../card/PortCard";

import ContactForm1 from "../COMMON/ContactForm1";

import Link from "next/link";

import '../globals.css'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";



import Ecommpop from "./Ecommpop";

import UseAccorrodian from "../COMMON/UseAccorrodian";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";

const USA = ({ notify }) => {
  const [perPage, setPerPage] = useState(5);
  const [fard, setFard] = useState(1);
  useEffect(() => {
    
    if (window.matchMedia("(max-width: 1300px)").matches) {
      setPerPage(4);
    }
    if (window.matchMedia("(max-width: 1000px)").matches) {
      setPerPage(3);
    }
    if (window.matchMedia("(max-width: 750px)").matches) {
      setPerPage(1);
    }
  }, []);

  let heading = "rideready.ca";
  let heading1 = "www.slides365.com";
  let heading2 = "www.topbrasstactical.com";
  let heading3 = "www.sites.com";
  let heading4 = "www.ballisticdummylab.com";
  let heading5 = "www.aipartscenter.com";

  let para1 = "Ride ready is a well known name for the services of maintenance and repair works of Arctic Cat"

  let para2 = "Slides365 aimed to serve various needs of professionals by offering subscription-based"
  let para3 = "Top Brass sells everything from army clothes and footwear to gun accessories, optics"
  let para4 = "Sites and Scopes has specialized experience in delivering high performance optics and"
  let para5 = "Ballistic Dummy Lab is the leading developer of the most physiologically correct human"
  let para6 = "A & I Parts Center was founded over 40 years ago by Bill Blain.From a local parts supplier,"

  const stats = () => {
    setFard(1);
    document.getElementById("stat1").style.borderBottom = "1px solid #007ac1";
    document.getElementById("stat2").style.borderBottom = "none";
    document.getElementById("stat3").style.borderBottom = "none";
    document.getElementById("stat4").style.borderBottom = "none";
  }

  const stats1 = () => {
    setFard(2);
    document.getElementById("stat1").style.borderBottom = "none";
    document.getElementById("stat2").style.borderBottom = "1px solid #007ac1";
    document.getElementById("stat3").style.borderBottom = "none";
    document.getElementById("stat4").style.borderBottom = "none";
  }

  const stats2 = () => {
    setFard(3);
    document.getElementById("stat1").style.borderBottom = "none";
    document.getElementById("stat2").style.borderBottom = "none";
    document.getElementById("stat3").style.borderBottom = "1px solid #007ac1";
    document.getElementById("stat4").style.borderBottom = "none";
  }

  const stats3 = () => {
    setFard(4);
    document.getElementById("stat1").style.borderBottom = "none";
    document.getElementById("stat2").style.borderBottom = "none";
    document.getElementById("stat3").style.borderBottom = "none";
    document.getElementById("stat4").style.borderBottom = "1px solid #007ac1";
  }


  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [pop, setPop]= useState(false);
  return (



    <>
    <Navbar/>
      {/* <Helmet> */}
        <title>
          Kushel Digi Solutions - top Ecommerce Development Company
        </title>
        <meta
          name="description"
          content="KushelDigi Solutions take your digital aspirations and make them come true! We are your success partners rather than just an e-commerce development company."
        />
        <link rel="canonical" href="https://www.kusheldigi.com/ecommerce-development" />
      {/* </Helmet> */}
      <div className="ser-main">
        <div className="ser121 ecommerce1">
          <div className="ecom-usa em_usa px-24 pt-12 pb-4 flex items-center justify-between dine-123">
            <div className="ser111 ser1143">
              <h1 className="blue change_yy" >Best budget ecommerce development <br /> services for Shopify, Woocommerce, <br /> Big commerce</h1>
              <p className="ac">Tailored eCommerce development solutions</p>
              <a href="contact-us" className="rect-first-btn sameoo"><button className="lets_talking yti"><h5>Lets get started</h5>
                <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                </svg>
              </button>
              </a>
            </div>
            <div className="ser112 ser444 usa-img1">
              {/* <img src={EcommerceImg} alt="ecommerce development services" title="ecommerce development services" /> */}
              <img className="usa_imkk" src="https://res.cloudinary.com/dgif730br/image/upload/v1733299343/Group_1171279306_s3se84.png" alt="ecommerce development services" title="ecommerce development services" />
            </div>
          </div>
        </div>

        <div className="ser2">
          <div className="ser21">
            <div className="home412 flex justify-center items-center dine-123">
              <Splide
                className=" w-full"
                aria-label="Our Services"
                options={{
                  perPage: perPage,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1600,
                  drag: true,
                }}
              >
                <SplideSlide>
                  <Link href="/shopify-development"><div className="home4121">
                    <img
                      className=" block m-auto"
                      src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168276/a7_ve2lkd.png'
                      alt="Shopify" title="Shopify"
                    />
                    <p>Shopify</p>
                  </div></Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/woocommerce"><div className="home4121">
                    <img
                      className=" block m-auto"
                      src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168534/a5_dwu0as.png'
                      alt="Woo Commerce"
                      title="Woo Commerce"
                    />
                    <p>Woo Commerce</p>
                  </div></Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/bigcommerce-development"><div className="home4121">
                    <img
                      className=" block m-auto"
                      src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169474/bigcommerce_logo_cemntj.png'
                      alt="Big Commerce"
                      title='Big Commerce'
                    />
                    <p>Big Commerce</p>
                  </div></Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/magento-development"><div className="home4121">
                    <img
                      className=" block m-auto"
                      src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168332/a8_fmbbmx.png'
                      alt="Magento"
                      title="Magento"
                    />
                    <p>Magento</p>
                  </div></Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/wordpress">
                    <div className="home4121">
                      <img
                        className="block m-auto"
                        src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168590/b3_amelfh.png'
                        alt="Wordpress"
                        title="Wordpress"
                      />
                      <p>Wordpress</p>
                    </div>
                  </Link>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

        <div className="ecommerce-solution ecomm346 usaecom">

          <div className="ecomm dine-123">
            <div className="first-ecom ecommerce-text">
              <h2 className="mt-8"> Navigating the  <span>Intricacies of </span>   the USA's Market for Ecommerce Development Services</h2>

              <p>
                In the rapidly evolving digital era, the demand for robust ecommerce website creation services is escalating, particularly within the dynamic economies of developed nations like the USA. Businesses, ranging from startups to well-established enterprises, seek proficient services to construct online stores that are intuitive, effective, and visually arresting. This surge is notably conspicuous in bustling urban hubs such as Chicago, where ecommerce development services are not merely a luxury but a vital component for the survival and expansion of businesses.

              </p>
            </div>

            <div className="second-ecom kmkm">
              <Splide
                options={{
                  type: "loop",
                  perPage: 1,
                  autoplay: true,
                  interval: 3000,
                  pagination: true,
                  arrows: false,
                  pauseOnHover:false
                }}
              >
                {/* <img src={lohta} alt="USA merket for ecommerce development servicres" title="USA merket for ecommerce development servicres" /> */}
                <SplideSlide>
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1733328325/Group_1171279302_ftglv3.png
" alt="USA merket for ecommerce development servicres" title="USA merket for ecommerce development servicres" />
                </SplideSlide>
                <SplideSlide>
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1733328440/Group_1171279303_zgpezz.png
" alt="USA merket for ecommerce development servicres" title="USA merket for ecommerce development servicres" />
                </SplideSlide>
                <SplideSlide>
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1733328027/Group_1171279300_eywu8l.png
" alt="USA merket for ecommerce development servicres" title="USA merket for ecommerce development servicres" />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

        <div className="ecom_selling usselling">
          <div className="start_collapse">
            <p onClick={stats} id="stat1">START E-STORE</p>
            <p onClick={stats1} id="stat2">MOBILE APPLICATION</p>
            <p onClick={stats2} id="stat3">STORE MIGRATION</p>
            <p onClick={stats3} id="stat4">AUDIT YOUR ONLINE STORE</p>
          </div>

          {
            fard === 1 && (
              <div className="stat_selling mt-24 dine-123">
                <div className="left_selling">
                  <h3>Start e-store</h3>
                  <p>Build an eCommerce site backed by powerful technologies that satisfy customers, drive sales and organize your day-to-day tasks within a single platform. We can rapidly develop custom solutions to get you selling, shipping, and processing payments in no time.</p>
                  <button className="ooop" onClick={() => setPop(true)}>START YOUR PROJECT</button>
                </div>
                <div className="right_selling ">
                  <div className="right_selling_carts">
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>
                        Expertise and Experience

                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Customization and Personalization</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Design Excellence</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Scalability and Future Growth
                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Ongoing Support

                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Post Golive Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          {
            fard === 2 && (
              <div className="stat_selling mt-24 dine-123">
                <div className="left_selling">
                  <h3>Mobile application</h3>
                  <p>Build an eCommerce site backed by powerful technologies that satisfy customers, drive sales and organize your day-to-day tasks within a single platform. We can rapidly develop custom solutions to get you selling, shipping, and processing payments in no time.</p>
                  <button onClick={() => setPop(true)}>START YOUR PROJECT</button>
                </div>
                <div className="right_selling">
                  <div className="right_selling_carts">
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Expertise and Experience

                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Customization and Innovation</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>User-Centered Design</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Seamless Integration
                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Scalability and Future Growth
                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Faster Development Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            )
          }


          {
            fard === 3 && (
              <div className="stat_selling mt-24 dine-123">
                <div className="left_selling">
                  <h3> Store migration</h3>
                  <p>Build an eCommerce site backed by powerful technologies that satisfy customers, drive sales and organize your day-to-day tasks within a single platform. We can rapidly develop custom solutions to get you selling, shipping, and processing payments in no time.</p>
                  <button onClick={() => setPop(true)}>START YOUR PROJECT</button>
                </div>
                <div className="right_selling">
                  <div className="right_selling_carts">
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Experience and Expertise
                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Data Integrity and Accuracy
                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Risk Mitigation</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Efficiency and Time Savings
                      </p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Minimized Downtime</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Post-Migration Support</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          {
            fard === 4 && (
              <div className="stat_selling mt-24 dine-123">

                <div className="left_selling">
                  <h3>Audit your online store</h3>
                  <p>Build an eCommerce site backed by powerful technologies that satisfy customers, drive sales and organize your day-to-day tasks within a single platform. We can rapidly develop custom solutions to get you selling, shipping, and processing payments in no time.</p>
                  <button onClick={() => setPop(true)}>START YOUR PROJECT</button>
                </div>
                <div className="right_selling">
                  <div className="right_selling_carts">
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Objective Assessment</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Comprehensive Evaluation</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Checkout process audit</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>User Experience Enhancement</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>Conversion Rate Optimization(CRO)</p>
                    </div>
                    <div className="sell_hard">
                      <svg width="5" height="5" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1265FF" />
                      </svg>
                      <p>SEO & Visibility Improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="tech_stacksEcom tech-stackkk ustechh">
          <h4>Our <span>eCommerce</span>  technology stack</h4>
          <div className="mxg">
            <p className="mx mx11">Make your next online project go smoothly with our battle-tested </p>
            <p className="mx mx11">eCommerce development services.</p>
            <p className="mx mx111">Make your next online project go smoothly with our battle-tested eCommerce development services.</p>
          </div>
          <div className="stacks-tex">
            <div className="stacks_shop">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169060/grinji1_unubef.png' alt="SHOPIFY" title="SHOPIFY" />
              <p>SHOPIFY</p>
            </div>
            <div className="stacks_shop">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169105/grinji2_jkfipe.png' alt="WOO COMMERCE" title="WOO COMMERCE" />
              <p>WOO COMMERCE</p>
            </div>
            <div className="stacks_shop">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169474/bigcommerce_logo_cemntj.png' alt="BIG COMMERCE" title="BIG COMMERCE" />
              <p>BIG COMMERCE</p>
            </div>
            <div className="stacks_shop">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169222/grinji4_rdtj9s.png' alt="MAGENTO" title="MAGENTO" />
              <p>MAGENTO</p>
            </div>
            <div className="stacks_shop">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169265/grinji5_qiimdq.png' alt="WORDPRESS" title="WORDPRESS" />
              <p>WORDPRESS</p>
            </div>
          </div>
        </div>

        <div className="why_ecoming tech-stackkk ustechh">
          <h4>Why <span> eCommerce  Development</span> with <br />
            kushel digi solutions</h4>
          <div className="headings_para">
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168235/ertia_kybfqs.png' alt="ecomerce design" title="ecomerce design" />
            <p>
              Selecting the right e-commerce development partner in the USA, particularly in cities like Chicago, is pivotal. <br />Seek companies that exhibit:

              <br /></p>
          </div>

          <div className="ecoming_cards">
            <div className="ecoming_card">
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168625/yt1_hrynze.png' alt="Enhance Sales Potential" title="Enhance Sales Potential" />
                </div>
                <div className="yt_heading">
                  <h3>Enhance Sales Potential</h3>
                  <p>If you are a manufacturer, then you are in the right place KushelDigi increases your productivity as your demand.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168662/yt2_sqi8qz.png' alt="Adaptable Scalability" title="Adaptable Scalability" />
                </div>
                <div className="yt_heading">
                  <h3>Adaptable Scalability </h3>
                  <p>Engage us at any point in your eCommerce journey, and our experts will effortlessly adjust to your preferred workflows.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168724/yt3_azn7gd.png' alt="Draw In Customers" title="Draw In Customers" />
                </div>
                <div className="yt_heading">
                  <h3>Draw In Customers</h3>
                  <p>Access thorough proficiency in technical, design and marketing, guaranteeing precise alignment of solutions with your requirements.</p>
                </div>
              </div>
            </div>
            <div className="ecoming_card">
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168775/yt4_mtbrrz.png' alt="Boost System's Dependability" title="Boost System's Dependability" />
                </div>
                <div className="yt_heading">
                  <h3>Boost System's Dependability </h3>
                  <p>We are seamlessly dedicated to your progress, actively seeking strategies to increase traffic, boost sales, and optimise performance. </p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168830/yt5_cccd74.png' alt="Create Innovative Experiences" title="Create Innovative Experiences" />
                </div>
                <div className="yt_heading">
                  <h3>Create Innovative Experiences</h3>
                  <p>We create user-friendly interfaces, establish loyalty programs, and optimise the checkout process to capitalise on conversion prospects.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168910/yt6_gvsvgn.png' alt="Enhance Security Measures" title="Enhance Security Measures" />
                </div>
                <div className="yt_heading">
                  <h3>Enhance Security Measures </h3>
                  <p>Implement tactics, utilise analytics, and employ predictive tools to elevate the average order values and adjust to economic fluctuations. </p>
                </div>
              </div>
            </div>
            <div className="ecoming_card">
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168954/yt7_low4g0.png' alt="Fuel Up  Business " title="Fuel Up  Business " />
                </div>
                <div className="yt_heading">
                  <h3>Fuel Up  Business </h3>
                  <p>Our eCommerce team is committed to fostering your growth, consistently seeking avenues to boost your website traffic, sales, and overall performance. </p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739168995/yt8_qvm6zm.png' alt="Enhance Conversion Metrics" />
                </div>
                <div className="yt_heading">
                  <h3>Enhance Conversion Metrics</h3>
                  <p>We build user-friendly layouts, establish loyalty initiatives, and optimise the checkout process to maximise your potential for conversions.</p>
                </div>
              </div>
              <div className="ecoming_box">
                <div className="yt_img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169029/yt9_nqppgm.png' alt="yt" />
                </div>
                <div className="yt_heading boosttt">
                  <h3>Boost Purchase Sizes </h3>
                  <p>Implement tactics, utilise data analysis, and employ predictive tools to boost average transaction size and adjust to economic shifts. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sureee">
          <div className="suris dine-1234">
            <div className="frtsa">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169299/frtsa_gjyxmk.png' alt="Not sure where to start?" title="Not sure where to start?" />
            </div>
            <div className="suris_tech">
              <div className="suris_tech_left ">
                <h3>Not sure where to start?</h3>
                <p>Take free consultation with our expert eCommerce consultant to get project go Smooth.</p>
                <Link href="/contact-us"><button>LET’S TALK</button></Link>
              </div>
              <div className="suris_tech_right">
                {/* <img src={fourPeople} alt="expert ecommerce consultant-kusheldigi" title="expert ecommerce consultant-kusheldigi" /> */}
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724756987/Rectangle_18263_ewe82a.png" alt="expert ecommerce consultant-kusheldigi" title="expert ecommerce consultant-kusheldigi" />
              </div>
            </div>
          </div>
        </div>

        <div className="Ecommerce_sent dine-123">
          <div className="ecommerce_left our-ecommmmm">
            <h3>Our e-Commerce <br /> Development Process</h3>
            <p>We take care of your projects with proven agile methods that are designed to get all stakeholders (even non-technical ones) in alignment. Our workflow amplifies collaboration and faster turnarounds to achieve even the most ambitious goals.</p>
            <Link href="/howWork" className="letsittt letii"><div className="see_workk mt-8 letsy letsay">
              <span>SEE HOW WE WORK</span>
              <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#085881" />
              </svg>

            </div></Link>
          </div>
          <div className="ecommerce_right">
            {/* <img src={canocialJi} alt="ecommerce development process" title="ecommerce development process" /> */}
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724761632/cannocialji.81d86996bdf5fd2a21ad_qnam0n.png" alt="ecommerce development process" title="ecommerce development process" />
          </div>
        </div>

        <div className="meet_theCom dine-123">
          <div className="theCom_left">
            <div className="lojo1">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739169343/lojoFrame_nulunu.png' alt="ecomerce desigsn" title="ecomerce desigsn" />
            </div>
            {/* <img className="lojokk" src={lojo} alt="Our bussiness development team" title="Our bussiness development team" /> */}
            <img className="lojokk" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724756984/Rectangle_18259_blnpsx.png" alt="Our bussiness development team" title="Our bussiness development team" />
          </div>
          <div className="theCom_right our-ecommmmm">
            <h3>Meet our people</h3>
            <p>In kushel digi, we keep our minds free from any boundaries so that they can imagine and conceive great ideas which can be loved by your clients. We know the value of your trust which you put on us and kushel digi always do its best to safeguard that trust by going beyond than client’s expectation.</p>
            <Link href="/about"><button>ABOUT US</button></Link>
          </div>
        </div>


        <div className="ready_talks">
          <div className="ready_folks">
            <div className="ready_left">
              <div className="rdar_talk">
                <h3>Ready to talk about your </h3>
                <h3>eCommerce project?</h3>
                <div className="fantars">
                  <div className="tellUs">
                    <div className="tellUs_right">
                      <h3>1.</h3>
                    </div>
                    <div className="tellUs_left">
                      <span> Share Your Idea
                      </span>
                      <p>Want to start or scale your online store? Tell us about  your vision, and we’ll help you to shape it into a successful eCommerce platform.
                      </p>
                    
                    </div>
                  </div>
                  <div className="tellUs">
                    <div className="tellUs_right">
                      <h3>2.</h3>
                    </div>
                    <div className="tellUs_left">
                      <span> Get a Custom Plan
                      </span>
                      <p>Our team will analyze your needs and suggest the right features, technology, and strategies to boost sales and engagement.</p>
                    
                    </div>
                  </div>
                  <div className="tellUs">
                    <div className="tellUs_right">
                      <h3>3.</h3>
                    </div>
                    <div className="tellUs_left">
                      <span> Launch & Scale Your Store
                      </span>
                      <p>Our team will be there for you from development to marketing to help you grow a high-performing online business.</p>
                      <Link href="/contact-us"><button>GET IN TOUCH</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ready_right">
              <div className="ready_side">
                {/* <img src={womanMan} alt="About ecommerce project" title="About ecommerce project" /> 
                */}
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724756985/Rectangle_18261_uxrlyd.png
" alt="About ecommerce project" title="About ecommerce project" />
              </div>
            </div>
          </div>
        </div>

        <div className="home5 poty poty1">
          <div className="home51 px-24 dine-1234">
            <div className="home511 text-center ">
              <h3 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h3>
              <p className="view">
                View our custom online Ecommerce solutions and get amazed
              </p>
            </div>
            {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1724756980/Layer_1_1_ijwd1a.png */}
            <div className="home512 flex flex-wrap justify-center mt-14">
              <PortCard heading={heading} pads={"https://res.cloudinary.com/dgif730br/image/upload/v1732807218/image_ak8xup.png"} para={para1} link="/rideready" target="_self"/>
              {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1724756981/Rectangle_17701_rgm3pb.png */}
              <PortCard heading={heading1} pads={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/Group_1000010185_1_h1dk25.png"} para={para2} link="/Slidesdesign" target="_self" />
              {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1724756978/HOME_1_dgsuqj.png */}
              <PortCard heading={heading2} pads={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886338/image_6_s5p9p0.png"} para={para3} link="/topbrass" target="_self"/>
              {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1724758481/jones.0d98683e5468971b2f7d_taeqvk.png */}
              <PortCard heading={heading3} pads={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/image_5_ds431l.png"} para={para4} link="/sites" target="_self"/>

              {/* =========================another two========== */}
              <PortCard heading={heading4} pads={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/Group_1171275953_ylodxi.png"} para={para5} link="/ballistic" target="_self"/>
              <PortCard heading={heading5} pads={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1730447686/home-slider-1_ujqnho.png"} para={para6} link="/Ai" target="_self"/>
            </div>
          </div>
          <div className="home52 w-full text-center usa-btn1">
            <Link href="/portfolio"><button className="btn usa-btn m-auto btn3 olly">
              <span className="mr-2">View All Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button></Link>
          </div>
        </div>
      

        <UseAccorrodian/>


        <ContactForm1 notify={notify} />






        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="call-icon" title="call-icon" />
          </button>

        </div>



      </div>

      {
        pop && <Ecommpop notify={notify} pop={pop} setPop={setPop} />
      }
      <Footer/>
    </>
  );
};

export default USA;
