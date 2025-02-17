
"use client"

import React, { useState, useEffect } from "react";
import arrow4 from "../../public/assets/arrow4.png";
import Link from "next/link";
import Head from 'next/head';

import rel1 from "../../public/assets/rel1.png";
import rel2 from "../../public/assets/rel2.png";
import rel3 from "../../public/assets/rel3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import opqweeeeeee from "../../public/assets/opqweeeeeee.png";
import opqweeeeeee2 from "../../public/assets/opqweeeeeee2.png";
import opqweeeeeee3 from "../../public/assets/opqweeeeeee3.png";



import ballistic from "../../public/assets/ballistic.png"
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
import madlogooooo from "../../public/assets/madlogooooo.png";


import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"

import ballisticRi from "../../public/assets/balisticright.png"
import elivaterig from "../../public/assets/elivateright.png"
import colorplate from "../../public/assets/batcolorplate.png"
import batright from "../../public/assets/batright.png"
import batmiddle from "../../public/assets/batmiddle.png"
import batleft from "../../public/assets/batleft.png"
import recoil from "../../public/assets/mostrecoil.png"
import el44 from "../../public/assets/ellipse44.png"
import catlog from "../../public/assets/CATALOG2.png"
import home2 from "../../public/assets/HOME32.png"
import productdd from "../../public/assets/PRODUCTdd.png"
import '../globals.css'
import Image from 'next/image'; 


const Ballistic = () => {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      setPerPage(2);
    }
    if (window.matchMedia("(max-width: 650px)").matches) {
      setPerPage(1);
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

const generateMetadata = ({ params }) => ({
         title: 'Kusheldigi.com/ballistic',
         description:"Web Development Company | Kushel Digi Solutions"
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

<Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>
      
    <Navbar/>
      {/* <helmet> */}
        <link rel="canonical" href="https://www.kusheldigi.com/kick-eez" />
      {/* </helmet> */}

      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads incheingh iynyj">
              <div className="left-section-kids ">
                <img src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1725976506/image_75_1_aha5l9.svg"} id="plus-circle" className="ballistic" alt="img"></img>
                <p className="shoots_premium">
                Ballistic Dummy Lab is the leading developer of the most physiologically correct human analogues for the firearms testing, medical training, and special effects in film and television industries. It is recognized by its innovative products made of organic and synthetic 
                 gel, which have set the global standard of realism and accuracy.
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995220/opqweeeeeee_azs2la.png' id="sim" alt="img"></img>
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995270/opqweeeeeee2_vxdqbc.png' id="rotat" alt="img"></img>
                </div>
              </div>
              <div className="right-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995743/balisticright_kdawdg.png' className="ballisticRi" id="total-group" alt="img"></img>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="MadFish_press">
              <div className="MadFish-back">
                <div className="MadFish-back1">
                  <div className="MadFish_press_head">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995629/madlogooooo_xosnia.png' alt="madlogooooo" />
                  </div>
                  <div className="MadFish_press_para">
                    <p>
                    Kushel Digi Solutions is excited to contribute to the development of this excellent solutions for the firearms testing, medical training, and special effects industries for Ballistic Dummy lab.
                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995792/elivateright_qh3tj3.png' alt="MadFish" />
                </div>
              </div>
            </div>
            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995461/Group_1000004718_ak9vhy.png' id="ux-safari" alt="img"></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995505/Group_1000004715_fycg7j.png' id="web-safari" alt="img"></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995546/Group_1000004716_wfdkyq.png' id="qa-safari" alt="img"></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********************************************** */}

        {/* ******************************************** */}
        <div className="fourth-plate-juuls">
          <div className="left-card-hub">
            <div className="vl-chic vl-chic22">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Urbanist</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Urbanist</p>
                </div>
                {/* <div className="medium-aa">
                  <p className="medium">Aa</p>
                  <p className="node-tip">Roboto</p>
                </div> */}
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995586/Group_1000006500_1_fbbz4c.png' id="pals-circle" alt="img"></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995859/batcolorplate_wznd4z.png' id="gang" alt="img" />
          </div>
        </div>{" "}


        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>

                Ballistic Dummy Lab wanted to move away from the manual sales process and sell on a fully automated eCommerce platform for the growing customer base. Their goal was an online storefront reflecting expertise, providing excellent user experiences, and an online storefront that seamlessly integrates with operations.



              </p>

            </div>
          </div>
          <div className="step-images flex  justify-center mt-20">
            <img className="batleft heightcum" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738996203/batleft_thcjdp.png' alt="stepback" />
            <img className="batleft " src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995959/batmiddle_xjv0yf.png' alt="stepback1" />
            <img className="batleft heightcum" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995916/batright_mxtkv1.png' alt="stepback1" />
          </div>
        </div>

        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>Challenges & Solutions</h3>
          </div>
          <div className="challenge-story2 flex gap-4">
            <div className="challenge-box challenge-box2  ">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Complex Showcase of Products that were to be made in such a manner as to highlight the unique selling points.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    One system to handle high traffic and increased demand across industry types.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    International customers had to be supported with a easy buying experience.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Seamless backend integration was necessary to manage inventory, process orders, and ship merchandise.
                  </p>
                </div>

              </div>
            </div>
            <div className="challenge-box challenge-box2  ">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    We customized Shopify to highlight the distinctive features of Ballistic Dummy Lab products. Thus, very detailed product pages with high-quality visuals were possible.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Configured Shopify to be scalable to handle high traffic volumes while leading customers through an end-to-end experience locally and internationally.


                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Optimized the platform for search engines and built a user friendly interface to attract and retain customers around the world.



                  </p>

                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Built an effective inventory and order management system that fits with their production and shipping.


                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <div className="ballilabwrap">

          <div className="ballisconta">

            <img src={ballistic} className="lerbalifsd" alt="" />

            <div className="rightballis">
              <img src={recoil} className="recoil432" alt="" />
              <img src={el44} className="el44" alt="" />
            </div>

          </div>

        </div> */}

<div className="kick-start kick-start22">
                    <div className="kick-first kick-first222">

                        <div className="kickds">
                            <img width="210" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995361/ballistic_zidjq3.png' alt="kick5" />
                        </div>
                    </div>
                    <div className="kick-second kick-second222 relative">
                        <div className="about165">
                            <img
                                className="absolute about161 animate__animated animate__pulse animate__infinite"
                                src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738996335/ellipse44_ov7l61.png'
                                alt=""
                            />
                        </div>
                        <img
                            className=" relative z-10 about162 pick222"
                            src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738996280/mostrecoil_eust8k.png'
                            alt="aa"
                        />
                    </div>
                </div>


        <div className="azib kickazib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  The development of Ballistic Dummy Lab's eCommerce platform has greatly streamlined their sales process which enables the automation and ultimately  improved efficiency. This resulted in increased global reach, attracting more customers from various industries. It also enhances the overall user experience with seamless navigation and product discovery. The scalable Shopify platform now supports higher traffic and order volumes ultimately positioning Ballistic Dummy Lab for continuous growth.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img className="conjun" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995317/opqweeeeeee3_k1i3rr.png' alt="" />
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738996453/HOME32_w7ghbu.png' alt="azib" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738996501/PRODUCTdd_efgvyg.png' alt="azib" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738996392/CATALOG2_ab9mrk.png' alt="azib" />
            </div>
          </div>
        </div>

        <div className="client-apperication">
          {/* <h2>Client Appreciation</h2>
          <p>
            “Thank you Affle team for all your hardwork, patience and continuous
            support. The app is getting positive reviews and we hope to continue
            to improve and evolve the app. Looking forward to our continued
            growth.”
          </p>
          <h4>Matt Reeder</h4> */}
        </div>

        <div className="other-project ">
          <h2 className="text-center ">OTHER PROJECTS</h2>
          <Splide
            aria-label="Our Services"
            options={{
              perPage: perPage,
              perMove: 1,
              autoplay: true,
              pauseOnHover: true,
              type: "loop",
              interval: 2000,
              drag: true,
            }}
          >
            <SplideSlide>
              <div className="other-card">
                <div className="other-box">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995014/rel1_qw4omv.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>RELY INNOVATION</h3>
                  <p>
                    Get peace of mind. install alarms that not only notify you
                    of danger, but also clearly instructs you on what to do
                    next.
                  </p>
                  <Link href="/rely">
                    <button className="kick_eez-btn">View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="other-card">
                <div className="other-box other-box1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738995139/rel2_godfrk.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>PRO TRUCKS</h3>
                  <p>
                    Aftermarket suspension lift kits, leveling kits and
                    accessories for 4X4 off-road truck and jeep enthusiasts
                  </p>
                  <Link href="/pro-track">
                    <button>View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="other-card">
                <div className="other-box other-box3">
                  <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991207/rel3_kus4kk.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>SOLENOID NINJA</h3>
                  <p>
                    Due to high volatility in the materials market we are
                    currently experiencing longer than normal lead times.
                  </p>
                  <Link href="/solenoid-ninja">
                    <button>View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>

        <div className="req">
          <div className="req-sect">
            <h2>
              Would You Like To Talk To <br /> About Your Project?
            </h2>
            <h2>
              Would You Like To Talk To <br /> About Your Project?
            </h2>
            <p>
              {" "}
              You can send us the details of your project, and a member of our
              team will contact you shortly.
            </p>
            <Link href="/contact-us">
              <button>
                Request A Call{" "}
                <img
                  width={13}
                  className=" inline ml-2"
                  src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738994962/arrow4_j4oot6.png'
                  alt="alik"
                />
              </button>
            </Link>
           
          </div>
        </div>

  
        <Footer/>
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
      

    </>
  );
};

export default Ballistic;
