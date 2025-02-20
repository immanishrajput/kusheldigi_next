"use client"
import React, { useState, useEffect } from "react";
import pick2 from "../../public/assets/pick2.png";
import angrag from "../../public/assets/angrag.png";
import stepback from "../../public/assets/stepback.png";
import Head from 'next/head';

import stepback1 from "../../public/assets/stepback1.png";
import kick5 from "../../public/assets/kick5.png";
import arrow4 from "../../public/assets/arrow4.png";
import conjun from "../../public/assets/conjun.png";
import azib2 from "../../public/assets/azib2.png";
import azib3 from "../../public/assets/azib3.png";
import azib4 from "../../public/assets/azib4.png";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import rel1 from "../../public/assets/rel1.png";
import rel2 from "../../public/assets/rel2.png";
import rel3 from "../../public/assets/rel3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import opqweeeeeee from "../../public/assets/opqweeeeeee.png";
import opqweeeeeee2 from "../../public/assets/opqweeeeeee2.png";
import opqweeeeeee3 from "../../public/assets/opqweeeeeee3.png";
import img1 from "../../public/assets/Mask group.png";
import img0 from "../../public/assets/Group 1000006637.png";

import img2 from "../../public/assets/1200x630wa (1) 1.png";
import img3 from "../../public/assets/circle.png";
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import img7 from "../../public/assets/Aboust us sx (1).png";
import img8 from "../../public/assets/HOME 2 (1).png";
import img9 from "../../public/assets/Aboust us Header (1).png";
import img10 from "../../public/assets/Shop now Header 1 (1).png";
import img11 from "../../public/assets/Login Screen 1 (1).png";
import img12 from "../../public/assets/Group 1000006505 (1).png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
import matsection from "../../public/assets/matsection.png";
import madlogooooo from "../../public/assets/madlogooooo.png";
// import "../components/css/app2.css";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import Footer from "../COMMON/Footer";
import Image from "next/image";
import Navbar from "../COMMON/Navbar";
import '../globals.css'

const Kickiz = () => {
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
  const generateMetadata = ({ params }) => ({
    title: 'Kushel Digi Solutions Case Study- Kick-Eez',
    description: "Kushel Digi Solutions' case study on Kick-Eez highlights successful digital transformation, boosting brand visibility and driving sales through website development.",
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
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180844/Mask_group_nph9bb.png' id="plus-circle" alt="img"></img>
                <p className="shoots_premium">
                  <span className="heightlisght_premium">
                    {" "}
                    KICK- EEZ Premium,
                  </span>{" "}
                  Made in America recoil pads and accessories to make your
                  shooting experience more comfortable.
                </p>
                <h1>Technologies Used</h1>
                <div className="main-box-logic flex">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180661/opqweeeeeee_o4siwu.png' id="sim" alt="img"></img>
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180713/opqweeeeeee2_pktwlr.png' id="rotat" alt="img"></img>
                </div>
              </div>
              <div className="right-section-kids">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739181014/Group_1000006637_mnbkzj.png' id="total-group" alt="img"></img>
              </div>
            </div>
                  {/* *********************************************** */}
        <div className="MadFish_press">
          <div className="MadFish-back">
            <div className="MadFish-back1">
              <div className="MadFish_press_head">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253403/madlogooooo_be7bvx.png' alt="madlogooooo" />              
              </div>
              <div className="MadFish_press_para">
                <p>
                  Elevate your shooting comfort with KICK-EEZ, offering premium
                  American-made recoil pads and accessories. <span>MadFish</span>  Solutions
                  played a key role in bringing KICK-EEZ to life. Together,
                  we’ve redefined shooting comfort and precision, setting new
                  industry standards.
                </p>
              </div>
            </div>
            <div className="MadFish-back2">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253359/matsection_gir7lg.png' alt="MadFish" />
            </div>
          </div>
        </div>
            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739181059/Group_1000004718_a47xwg.png' id="ux-safari" alt="img"></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253073/Group_1000004715_fmnfpj.png' id="web-safari" alt="img"></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253113/Group_1000004716_iwby0b.png' id="qa-safari" alt="img"></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* *********************************************** */}
        <div className="third-wireframe-homie">
          <div className="inner-third-local">
            <p>Wireframes</p>
            <div className="three-section-lab">
              <div className="double-camp">
                <div className="on-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253152/Aboust_us_sx_1_vrzkbk.png' id="pads-cats" alt="img"></img>
                </div>
                <div className="too-img">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253222/Aboust_us_Header_1_nx4wfj.png' id="pads-cats" alt="img"></img>
                </div>
              </div>
              <div className="single_big">
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253186/HOME_2_1_bu8ods.png' id="pads-cats" alt="img"></img>
              </div>
              <div className="triple-badge">
                <div className="five-cross">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180966/Group_1000006637_l5pmu6.png' id="pads-cats" alt="img"></img>
                </div>
                <div className="login-faire">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253255/Login_Screen_1_1_je822c.png' id="pads-cats" alt="img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ******************************************** */}
        <div className="fourth-plate-juuls">
          <div className="left-card-hub">
            <div className="vl-chic">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Roboto</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Prompt</p>
                </div>
                <div className="medium-aa">
                  <p className="medium">Aa</p>
                  <p className="node-tip">Roboto</p>
                </div>
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253323/Group_1000006500_1_tntuqq.png' id="pals-circle" alt="img"></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739253286/Group_1000006505_1_ez6xxs.png' id="gang" alt="img" />
          </div>
        </div>{" "}
      
        <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
           
            <div className="kickds">
              <img className="kick_mart" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180216/kick5_xhzccf.png' alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <div className="about165">
              <img
                className="absolute about161 animate__animated animate__pulse animate__infinite"
                src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179872/angrag_za5zsc.png'
                alt="kushel"
              />
            </div>
            <img
              className=" relative z-10 about162 pick222"
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179766/pick2_ckac0c.png'
              alt="aa"
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
             
                Three years ago, RJ bought the business and used Shopify to
                create its first online store. He had a clear logo and a strong
                brand. The website failed to make an emotional connection with
                the customer or explain the problem that he solved. The website
                makes use of ShipStation.
              </p>
            
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <img className="stepback" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180180/stepback1_gj9wcz.png' alt="stepback" />
            <img className="stepback1" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179934/stepback_kybzwb.png' alt="stepback1" />
          </div>
        </div>
        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>Challenges & Solutions</h3>
          </div>
          <div className="challenge-story2 flex">
            <div className="challenge-box challenge-box2  ">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <p>
                    Shopify is becoming less and less tolerant of firearms.
                    Their website was poorly designed and only converted at a
                    rate of 1.25%. The website as it stands does not engage the
                    audience emotionally or convey the problem that KICK-EEZ®
                    solves.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="challenge-box ml-3 challenge-box2 challenge-box3 ">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <p>
                    -Design a new website in Figma and develop the website in
                    BigCommerce
                  </p>
                </div>
                <div className="challenge-list1">
                  <p>
                    -Data Migration of KICK-EEZ® from Shopify to BigCommerce
                  </p>
                </div>
                <div className="challenge-list1">
                  <p>-Incorporate ShipStation, as RJ was already using it.</p>
                </div>
                <div className="challenge-list1">
                  <p>
                    -Build the material that the search engines are currently
                    crawling.
                  </p>
                </div>
                <div className="challenge-list1">
                  <p>
                    -The use of Hoth to provide SEO services We resell The
                    Hoth's services as a white-label SEO firm.
                  </p>
                </div>
                <div className="challenge-list1">
                  <p>
                    -To handle trade in both wholesale and retail We must ensure
                    that all price categories and levels are included in the
                    data conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="goals-statgy">
          <h3>Goals and Strategies</h3>
          <ul>
            <li>Make it easier for customers to reach our company.</li>
            <li>
            Minimize misunderstandings about returns, exchanges, especially when choosing replacement products.
            </li>
            <li>Enhance the efficiency and effectiveness of our client service.
</li>
          </ul>
        </div>

        <div className="bg-video-wrap">
          {/* <video src="../../public/assets/rima.mp4" loop muted autoPlay></video> */}
          <video 
      src="/assets/rima.mp4" 
      loop 
      muted 
      autoPlay 
      className="w-full h-auto"
    />
          <div className="overlay"></div>
          <img className="kini" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180216/kick5_xhzccf.png' alt="aa" />
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
                  With the improved site, a significant number of sales have
                  been achieved by KICK-EEZ. The emotional connection between
                  the customer and the company has become stronger.
                </p>
           
                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img className="conjun" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180754/opqweeeeeee3_xujeli.png' alt="kushel" />
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180334/azib2_qrxwwx.png' alt="azib" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180392/azib3_bjoshw.png' alt="azib" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180429/azib4_hbae29.png' alt="azib" />
            </div>
          </div>
        </div>
        <div className="client-apperication">
          <h2>Client Appreciation</h2>
          <p>
            “Thank you Affle team for all your hardwork, patience and continuous
            support. The app is getting positive reviews and we hope to continue
            to improve and evolve the app. Looking forward to our continued
            growth.”
          </p>
          <h4>Matt Reeder</h4>
        </div>
        <div className="other-project">
          <h3 className="text-center">OTHER PROJECTS</h3>
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
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180461/rel1_azwccy.png' alt="rel1" />
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
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180527/rel2_up6uex.png' alt="rel1" />
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
                  <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180622/rel3_calt2h.png' alt="rel1" />
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
                <img
                  // width={13}
                  className=" inline ml-2"
                  src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739180293/arrow4_rxxlsw.png'
                  alt="alik"
                />
              </button>
            </Link>
          </div>
        </div>

               {/*  buttons  */}
               <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172941/whatsapp_cowbb8.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172987/telephone_qjoh3j.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Kickiz;
