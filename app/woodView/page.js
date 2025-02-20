"use client"
import React, { useState, useEffect } from "react";
import arrow4 from "../../public/assets/arrow4.png";
// import { NavLink } from "react-router-dom";
import rel1 from "../../public/assets/rel1.png";
import rel2 from "../../public/assets/rel2.png";
import rel3 from "../../public/assets/rel3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Head from 'next/head';

import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
// import "../components/css/app2.css";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png";
import omis from "../../public/assets/omis.svg";
import omis1 from "../../public/assets/omis1.svg";
import omis2 from "../../public/assets/omis2.svg";
import lies from "../../public/assets/lies.svg";
import kpingq1 from "../../public/assets/kping1.svg";
import kpingq11 from "../../public/assets/kping.svg";
import crazy1 from "../../public/assets/crazy1.svg";
import crazy2 from "../../public/assets/crazy2.svg";
import fs from "../../public/assets/fs.svg";
import lojj from "../../public/assets/lojj.svg";
import ep44 from "../../public/assets/ellipse44.png";
import viewimg from "../../public/assets/viewimg2.png"
import img22 from "../../public/assets/img222.png"
import woodview22 from "../../public/assets/woldview22.png"
import colorplate from "../../public/assets/woodcolorplate.png"
import ell451 from "../../public/assets/ellipse451.png"
import woodlogo from "../../public/assets/logowood.png"
import wooduser from "../../public/assets/woodadduser.png"
import wooduser2 from "../../public/assets/woodadduser2.png"
import renid from '../../public/assets/renid.svg';
import Footer from "../COMMON/Footer";
import Image from "next/image";
import Navbar from "../COMMON/Navbar";
import '../globals.css'
import Link from "next/link";
const WoodView = () => {
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
  };
  const generateMetadata = ({ params }) => ({
    title: 'Kusheldigi.com/woodView',
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
     

      <div className="ser-main">

        <div className="changebgcolor">
          <div className="side-bg-trio ">

            <div className="first-kick-pads incheingh  ">
              <div className="left-section-kids">
                <Image
                  src={viewimg}
                  alt="img"
                ></Image>
                <p className="shoots_premium kooo">
                Wood View focuses on mental health, autism support, and counseling services for individual and family support. The programs offered help improve mental well-being through personalized care and professional guidance.
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <Image src={omis} id="sim" alt="img"></Image>
                  {/* <img className="pokli" src={omis1} id="rotat" alt="img"></img> */}
                  <Image src={omis2} id="rotat" alt="img"></Image>
                </div>
              </div>
              <div className="right-section-kids ramit">
                <Image className="sotal-group" src={renid} id="total-group" alt="img"></Image>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="MadFish_press">

              <div className="MadFish-back crazy-back2">

                <div className="MadFish-back1">
                
                  <div className="MadFish_press_para crazy_cms">
           
                    <p className="sociawrodfs">
                    Kushel Digi Solutions is proud to contribute to Wood View to enhance their digital platform that aims to strengthen their online presence and help them to  deliver personalized care and guidance to individuals and families.
                    </p>
                  </div>

                </div>

                <div className="MadFish-back2">
                  <Image src={woodview22} alt="MadFish" />
                </div>

              </div>

            </div>

            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <Image src={img4} id="ux-safari" alt="img"></Image>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <Image src={img5} id="web-safari" alt="img"></Image>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <Image src={img6} id="qa-safari" alt="img"></Image>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="fourth-plate-juuls">
          <div className="left-card-hub">
            <div className="vl-chic">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Inter</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Gilroy</p>
                </div>
             
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <Image src={img13} id="pals-circle" alt="img"></Image>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <Image
              src={ colorplate}
              id="gang"
              alt="img"
            />
          </div>
        </div>

        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>
          
              Wood View was relying on manual processes to collect feedback from clients participating in their various programs, such as mental health, autism support, and counseling services. Due to the gradual increase in the scale of the organization, it had now become difficult to handle and analyze the increasing amount of survey data. This was seriously impacting their ability to better respond to the needs of clients. They approached Kushel Digi Solutions to design an effective survey management system, which automated data collection for richer reporting and subsequently improved program outcomes.


              </p>
            </div>
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
                  The collection and analysis of feedback were time-consuming and prone to errors, hindering decision-making.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Management of a continuous increase in volume of survey data across various programs with confidentiality.


                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  The new system had to be compatible with current operations and technologies in place at Wood View. 


                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  As the process was manual, reports were not timely enough to make quick decisions or track the effectiveness of programs.

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
                  We developed an extensive survey management system using Laravel, which automated the intake of data and allowed real-time analysis of the stored information. 


                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  In-depth reporting capabilities were integrated that allowed Wood View to observe trends in feedback and create informed improvements to the programs.


                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  We ensured the new system had the capability to integrate seamlessly with their existing workflows, further streamlining operations.

                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  We have implemented automated reporting features displaying quick insights to enable Wood View to track the effectiveness of its programs.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg_crazy4">
          <div className="bg_cms">
            <div className="bg_left">
              <Image src={woodlogo} alt="lojj" />
            </div>
            <div className="bg_right">
              <Image src={lojj} className="llgg" alt="lojj" />
              <Image src={ell451} className="ep44" alt="kushel" />
            </div>
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
                The new survey management system has resulted in a massive turnabout for Wood View in its collection of clients' feedback to ensure that the program keeps improving. With automated data collection and reporting, they can now make quicker data-driven decisions in improving their service delivery across their mental health, autism, and counseling programs.

                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <div className="fopping">
                    {/* <div className="spoing">
                      <img src={kpingq1} alt="kushel" />
                      <p>Python</p>
                    </div> */}
                    <div className="spoing kint">
                      <Image src={kpingq11} alt="kushel" />
                      <p>Laravel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <Image className="sohhh" src={wooduser} alt="azib" />
              <Image className="sohhh" src={wooduser2} alt="azib" />
              {/* <img src={azib4} alt="azib" /> */}
            </div>
          </div>
        </div>

        <div className="other-project">
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
                  <Image src={rel1} alt="rel1" />
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
                  <Image src={rel2} alt="rel1" />
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
                  <Image className="rel3" src={rel3} alt="rel1" />
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
            <h3>
              Would You Like To Talk To <br /> About Your Project?
            </h3>
            <p>
              {" "}
              You can send us the details of your project, and a member of our
              team will contact you shortly.
            </p>
            <Link href="/contact-us">
              <button>
                Request A Call{" "}
                <Image
                  width={13}
                  className=" inline ml-2"
                  src={arrow4}
                  alt="alik"
                />
              </button>
            </Link>
          </div>
        </div>
        
        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <Image
              className="what-image-universal"
              src={whatsApp}
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
            />
          </button>
          <button onClick={callHandler}>
            <Image src={call} alt="call-icon" title="call-icon" />
          </button>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default WoodView;
