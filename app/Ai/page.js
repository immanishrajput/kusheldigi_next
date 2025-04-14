// "use client"
// import React, { useState, useEffect } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import Head from 'next/head';
// import Link from "next/link";
// import Navbar from "../COMMON/Navbar";
// import Footer from "../COMMON/Footer";
// import '../globals.css'

// const Ai2 = () => {
//     const [perPage, setPerPage] = useState(3);
//     useEffect(() => {
//         if (window.matchMedia("(max-width: 800px)").matches) {
//             setPerPage(2);
//         }
//         if (window.matchMedia("(max-width: 650px)").matches) {
//             setPerPage(1);
//         }
//     }, []);


//     const phoneNumber = "9045301702";

//     const whatAppHandler = () => {
//         const whatsappUrl = `https://wa.me/${phoneNumber}`;
//         window.open(whatsappUrl, "_blank");
//     };
//     const callHandler = () => {
//         const callUrl = `tel:${phoneNumber}`;
//         window.open(callUrl, "_blank");
//     }
//     const generateMetadata = ({ params }) => ({
//         title: 'Kusheldigi.com/Ai',
//         description:"web agency, web design agency , best web design agency in the world, web design agency, web design services, web design and development agency"
//       });
      
//     useEffect(() => {
//         const { title, description } = generateMetadata({ params: {} });
//         document.title = title;
//         let metaDescription = document.querySelector('meta[name="description"]');
//         metaDescription ? metaDescription.content = description : 
//           document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
//       }, []);


//     return (
//         <>

// <Head>
//         {/* Open Graph (OG) Meta Tags */}
//         <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
//         <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
//         <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
//         <meta property="og:url" content="https://www.kusheldigi.com/" />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
//         <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
//         <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
//         <meta name="twitter:url" content="https://www.kusheldigi.com/" />
//       </Head>
      
//         <Navbar/>
//             {/* <helmet> */}
//                 <link rel="canonical" href="https://www.kusheldigi.com/kick-eez" />
//             {/* </helmet> */}
//             <div className="ser-main">
//                 <div>
//                     <div className="side-bg-trio">
//                         <div className="first-kick-pads incheingh11">
//                             <div className="left-section-kids">
//                                 <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993896/hghh_r30or2.png' width="170"  alt="img"></img>
//                                 <p className="shoots_premium mt_top">
//                                 A & I Parts Center was founded over 40 years ago by Bill Blain. From a local parts supplier, the firm has evolved into being a household name in the market. Today, A & I Parts Center is spread across several other towns in Texas, namely Texline, Dalhart, Guymon, Stratford, Amarillo, and Dumas. The firm sells top-grade parts and value for money to different communities with great care and professional skills.

//                                 </p>
//                                 <h1 >Technologies Used</h1>
//                                 <div className="main-box-logic flex">
//                                     <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992050/tim1_fqlls7.svg' id="sim" alt="img"></img>
//                                     <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992101/tim2_mg6etc.svg' id="rotat" alt="img"></img>
//                                 </div>
//                             </div>
//                             <div className="right-section-kids">
//                                 <img className="ai_site fi_site111" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991975/ai_k36pnr.svg' alt="img"></img>
//                             </div>
//                         </div>
//                         {/* *********************************************** */}
//                         <div className="MadFish_press">
//                             <div className="MadFish-back crazy-back">
//                                 <div className="MadFish-back1">
//                                     {/* <div className="MadFish_press_head">
//                 <img src={madlogooooo} alt="madlogooooo" />              
//               </div> */}
//                                     <div className="MadFish_press_para crazy_cms">
//                                         <p>
//                                         Kushel Digi Solutions is proud to undertake the project of A & I Parts Center to develop an eCommerce platform using BigCommerce's technology. Our team has built an excellent user-friendly  online store that would improve customer experience and streamline inventory management.

//                                         </p>
//                                         {/* <h3>Empower Yourself to</h3>
//                     <h3>Easily <span>Modify Your</span> </h3>
//                     <h3><span>Website</span></h3> */}
//                                     </div>
//                                 </div>
//                                 <div className="MadFish-back2">
//                                     <img className="subh_img" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992205/markanda_p1f0xj.svg' alt="MadFish" />
//                                 </div>
//                             </div>
//                         </div>
//                         {/* ************************************************** */}
//                         <div className="second-service-conte">
//                             <p className="service-hinking">Services Provided</p>
//                             <div className="main-img-mighty">
//                                 <div className="bepolo">
//                                     <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991375/Group_1000004718_s2l8wf.png' id="ux-safari" alt="img"></img>
//                                     <p>UX/UI Website Design</p>
//                                 </div>
//                                 <div className="bepolo">
//                                     <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991440/Group_1000004715_ap2ujz.png' id="web-safari" alt="img"></img>
//                                     <p>Website Development</p>
//                                 </div>
//                                 <div className="bepolo">
//                                     <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991619/Group_1000004716_ungahx.png' id="qa-safari" alt="img"></img>
//                                     <p>QA & Website Testing</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* *********************************************** */}
//                 <div className="third-wireframe-homie">
//                     <div className="inner-third-local yomni">
//                         <p>Wireframes</p>
//                         <div className="three-section-lab tree_sery">
//                             <img className="yosuf" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992273/yosuf_zhetss.svg' alt="kushel" />
//                             <img className="yosuf1" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992370/yosuf1_vhw2ik.svg' alt="kushel" />
//                         </div>
//                     </div>
//                 </div>
//                 {/* ******************************************** */}
//                 <div className="fourth-plate-juuls">
//                     <div className="left-card-hub">
//                         <div className="vl-chic vl_chic1">
//                             <p className="fila">Font</p>
//                             <div className="ywo-stem">
//                                 <div className="light-aa">
//                                     <p className="hoo">Aa</p>
//                                     <p className="roboto-tip">Montserrat</p>
//                                 </div>
//                                 <div className="dark-aa">
//                                     <p className="dark-canny">Aa</p>
//                                     <p className="prompt-tip">Montserrat</p>
//                                 </div>
//                                 {/* <div className="medium-aa">
//                                     <p className="medium">Aa</p>
//                                     <p className="node-tip">Roboto</p>
//                                 </div> */}
//                             </div>
//                             <div className="sub-worm">
//                                 <p className="tool">Tools Use</p>
//                                 <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991672/Group_1000006500_1_ooftdq.png' id="pals-circle" alt="img"></img>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="right-card-omega">
//                         <p>Color Plate</p>
//                         <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992454/platai_qvrycg.svg' id="gang" alt="img" />
//                     </div>
//                 </div>{" "}



//                 <div className="back-story">
//                     <div className="step1-back">
//                         <div className="step-backs1">
//                             <h3 className="nila">01</h3>
//                             <h3>BACKSTORY</h3>
//                         </div>
//                         <div className="step-backs2">
//                             <p>
//                             A & I Parts Center, being a trusted supplier of quality parts for more than 40 years, started small like a local retail store founded by Bill Blain; however, the demand became greater and their company grew to multiple locations across the state of Texas ultimately A & I Parts realized the opportunity to reach a greater niche through an online platform. They knew that they needed to refresh their approach in order to serve customers better and, so, they set a goal to establish a robust eCommerce platform which could scale up along with the increasing stock and customer base.

//                             </p>

//                         </div>
//                     </div>
//                     <div className="step-images  flex items-start salaruu  justify-center mt-20">
//                         <img className="batleft heightcum addmarginautoples" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992536/tii1_x5yfau.svg' alt="stepback" />
//                         <img className="batleft addmarginautoples" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992643/tii2_uwbzqp.svg' alt="stepback1" />
//                         <img className="batleft addmarginautoples heightcum" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992734/tii3_lezawg.svg' alt="stepback1" />
//                     </div>
//                 </div>
//                 <div className="challenge-story">
//                     <div className="challenge-story1">
//                         <h3 className="nila">02</h3>
//                         <h3>Challenges & Solutions</h3>
//                     </div>
//                     <div className="challenge-story2 flex gap-4">
//                         <div className="challenge-box challenge-box2  ">
//                             <h4>Challenges</h4>
//                             <div className="chal"></div>
//                             <div className="challenge-list mt-8">
//                                 <div className="challenge-list1">
//                                     <div className="nilust"></div>
//                                     <p>
//                                     To design a system that can ensure personal touch of A & I Parts stay intact in transition towards the ecommerce market.

//                                     </p>
//                                 </div>
//                                 <div className="challenge-list1">
//                                     <div className="nilust"></div>
//                                     <p>
//                                     To Provide real-time synchronization of inventory across all stores and the online store

//                                     </p>
//                                 </div>
//                                 <div className="challenge-list1">
//                                     <div className="nilust"></div>
//                                     <p>
//                                     Design with a focus on both technologically advanced and regular customers and, most importantly, user-friendly interface
//                                     </p>
//                                 </div>
//                                 <div className="challenge-list1">
//                                     <div className="nilust"></div>
//                                     <p>
//                                     Creating a platform that would support growth and easily handle increased traffic and transactions.

//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="challenge-box challenge-box2  ">
//                             <h4>Solutions</h4>
//                             <div className="chal"></div>
//                             <div className="challenge-list mt-8">

//                                 <div className="challenge-list1">
//                                     <div className="nilust"></div>
//                                     <p>
//                                     Implemented BigCommerce to create a scalable, customizable platform for A & I Parts’ online presence.Inventory synchronization.

//                                     </p>
//                                 </div>

//                                 <div className="challenge-list1">
//                                     <div className="nilust"></div>
//                                     <p>
//                                     Real-time management tools were integrated to synchronize stock across physical stores and the online platform.
//                                     </p>
//                                 </div>

//                                 <div className="challenge-list1">
//                                     <div className="nilust"></div>
//                                     <p>
//                                     Easy interface to browse and pick desired products with an easy checkout process.
//                                     </p>

//                                 </div>

//                                 <div className="challenge-list1">
//                                     <div className="nilust"></div>
//                                     <p>
//                                     Optimized Performance to ensure the website is optimized for speed and scalability.
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="kick-start kick-start22 picko_start">
//                     <div className="kick-first kick-first222">

//                         <div className="kickds">
//                             <img className="kick_mart alisaaa" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993836/gthj_au8qgi.png' alt="kick5" />
//                         </div>
//                     </div>
//                     <div className="kick-second kick-second222 relative">
//                         <div className="about165">
//                             <img
//                                 className="absolute about161 animate__animated animate__pulse animate__infinite"
//                                 src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990949/angrag_uutvur.png'
//                                 alt="kushel"
//                             />
//                         </div>
//                         <img
//                             className=" relative z-10 about162 pick222"
//                             src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738992836/chanderi_k0sabx.svg'
//                             alt="aa"
//                         />
//                     </div>
//                 </div>

//                 <div className="azib kickazib">
//                     <div className="azib1">
//                         <div className="azib1-sect">
//                             <div className="azib1-first">
//                                 <h3 className="azib-pa">03</h3>
//                                 <h3>RESULT</h3>
//                             </div>
//                             <div className="azib1-second">
//                                 <p>
//                                 The new A & I Parts Center eCommerce platform gives the company access to multiple locations other than the firm's actual locations and it is convenient for several customers to access the wide parts catalog. Operations have become streamlined where there is a reduction in manual errors, and more accurate stock management has been introduced. Additionally, the easy use of the platform makes the overall experience better, hence increasing online sales and keeping customers
//                                 </p>

//                                 <div className="azib-tech">
//                                     <h3>Technologies Used</h3>
//                                     <img className="conjun" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991255/opqweeeeeee3_eg5uxy.png' alt="kushel" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="azib-images flex items-center justify-center">
//                             <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993134/inki1_brw3dr.svg' alt="azib" />
//                             <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993201/inki2_cnzhrn.svg' alt="azib" />
//                             <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738993540/inki3_np8d8k.svg' alt="azib" />
//                         </div>
//                     </div>
//                 </div>
             
//                   <div className="client-apperication">
                   
//                    </div>

//                 <div className="other-project">
//                     <h2 className="text-center ">OTHER PROJECTS</h2>
//                     <Splide
//                         aria-label="Our Services"
//                         options={{
//                             perPage: perPage,
//                             perMove: 1,
//                             autoplay: true,
//                             pauseOnHover: true,
//                             type: "loop",
//                             interval: 2000,
//                             drag: true,
//                         }}
//                     >
//                         <SplideSlide>
//                             <div className="other-card">
//                                 <div className="other-box">
//                                     <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991093/rel1_ovaydf.png' alt="rel1" />
//                                 </div>
//                                 <div className="other-tox-para">
//                                     <h3>RELY INNOVATION</h3>
//                                     <p>
//                                         Get peace of mind. install alarms that not only notify you
//                                         of danger, but also clearly instructs you on what to do
//                                         next.
//                                     </p>
//                                     <Link href="/rely">
//                                         <button className="kick_eez-btn">View</button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </SplideSlide>
//                         <SplideSlide>
//                             <div className="other-card">
//                                 <div className="other-box other-box1">
//                                     <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991160/rel2_oi6z9l.png' alt="rel1" />
//                                 </div>
//                                 <div className="other-tox-para">
//                                     <h3>PRO TRUCKS</h3>
//                                     <p>
//                                         Aftermarket suspension lift kits, leveling kits and
//                                         accessories for 4X4 off-road truck and jeep enthusiasts
//                                     </p>
//                                     <Link href="/pro-track">
//                                         <button>View</button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </SplideSlide>
//                         <SplideSlide>
//                             <div className="other-card">
//                                 <div className="other-box other-box3">
//                                     <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991207/rel3_kus4kk.png' alt="rel1" />
//                                 </div>
//                                 <div className="other-tox-para">
//                                     <h3>SOLENOID NINJA</h3>
//                                     <p>
//                                         Due to high volatility in the materials market we are
//                                         currently experiencing longer than normal lead times.
//                                     </p>
//                                     <Link href="/solenoid-ninja">
//                                         <button>View</button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </SplideSlide>
//                     </Splide>
//                 </div>
//                 <div className="req">
//                     <div className="req-sect">
//                         <h3>
//                             Would You Like To Talk To <br /> About Your Project?
//                         </h3>
//                         <p>
//                             {" "}
//                             You can send us the details of your project, and a member of our
//                             team will contact you shortly.
//                         </p>
                       
//                             <button>
//                             <Link href="/contact-us">
//                                 Request A Call{" "}
//                                 <img
//                                     width={13}
//                                     className=" inline ml-2"
//                                     src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991012/arrow4_bdorn7.png'
//                                     alt="alik"
//                                 />
//                                       </Link>
//                             </button>
                  
//                     </div>
//                 </div>

//                 {/*  buttons  */}
//                 <div className="whtsApBtns">
//                     <button onClick={whatAppHandler}>
//                         <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
//                     </button>
//                     <button onClick={callHandler}>
//                         <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738991783/telephone_k9aecl.png' alt="call-icon" title="call-icon" />
//                     </button>

//                 </div>
//             </div>
//             <Footer/>
//         </>
//     );
// };

// export default Ai2;

"use client"
// import "./ride.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import './Ai.css'

import '../globals.css'
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
function Ai() {
    
  const d1 = [
    {
      title1: "Industries",
      title2: "Ecommerce",
    },
    {
      title1: "Client Location",
      title2: "United States",
    },
    {
      title1: "Key Technologies",
      title2: "BigCommerce",
    },
  ];

  const d2 = [
    {
      title: "Discovery Phase",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216631/c2d1_j5clbp.png",
        title: "Discovery Phase",
        para: "Realizing the importance of a firm workflow foundation firsthand, we dedicate a separate chunk of work to researching, studying, and understanding your business's core needs and vision for a desired product or service.",
        points: [
          "Analyzing niches, competitors, & requirements",
          "Strategizing time and cost-efficient workflows",
          "Aiming for individually optimized results",
        ],
      },
    },
    {
      title: "UX/UI Design",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216874/c1bg5_wnepdj.png",
        title: "UX/UI Design",
        para: "We believe in user-centric design principles and to achieve this we design engaging and user friendly interfaces that align with your brand's identity. ",
        points: [
          "User Journey Mapping",
          "Brand Identity Integration",
          "Responsive Design",
        ],
      },
    },
    {
      title: "Development",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216850/c1bg4_wxl6sh.png",
        title: "Web development",
        para: "Our development team is always committed to bringing your vision to life by integrating the latest technologies and best practices to build a scalable eCommerce platform.",
        points: ["Customized Solutions", "Optimized Code", "Agile Approach"],
      },
    },
    {
      title: "Testing Automation",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216817/c1bg3_zabfta.png",
        title: "Testing Automation",
        para: "We thoroughly test every feature on the platform, using automation to deliver reliability, security, and an error-free experience before the user's eyes in front of its launch.",
        points: [
          "Comprehensive Testing",
          "Automated Quality Assurance",
          "User Acceptance Testing",
        ],
      },
    },
    {
      title: "Product-to-market launch",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216787/c1bg2_eog7dh.png",
        title: "Product-to-market launch",
        para: "In this final phase of development, we introduce your platform to the market and ensure a smooth and impactful launch that maximizes visibility and customer engagement.",
        points: [
          "Go-to-Market Strategy",
          "Performance Monitoring",
          "Ongoing Support",
        ],
      },
    },
  ];

  const projects = [
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216954/down1_kgzcrg.png",
      title1: "Topbrass tactical",
      title2: "E-commerce, Bigcomerce ",
      link:"/topbrass"
    },
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216979/down2_m0c8fa.png",
      title1: "Kickeez",
      title2: "E-commerce, Bigcomerce ",
       link:"/kick-eez"
    },
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217009/down3_ucxpri.png",
      title1: "Sights & Scopes",
      title2: "E-commerce, Bigcomerce ",
      link:"/sites"
    },
  ];

  const [selectS4, setSelectS4] = useState(0);
  const [selectdata, setSelectdata] = useState(d2[0].data);
  const [animationDirection, setAnimationDirection] = useState("slide-in-right");

  const handleSelectionChange = (index) => {
    setAnimationDirection("slide-out-left");

    setTimeout(() => {
      setSelectS4(index);
      setSelectdata(d2[index].data);
      setAnimationDirection("slide-in-right");
    }, 300);
  };

  const generateMetadata = ({ params }) => ({
           title: 'Kusheldigi.com/Ai',
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
    <div className="case1wrap home-main">


        <Navbar/>
      {/* first sectino */}
      <section className="case1firsec" id="AiPortfolioImage">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png"
          alt="kushel"
          className="case1fill"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622906/Group_1171279216_j6teud.png"
          alt="kushel"
          className="case1bg"
        />

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <div>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622906/Group_1171279213_ahxsmd.png"
                    alt="kushel"
                  />
                </div>
                <p>A&I Parts Center</p>
              </div>

              <p className="ca1firrigh">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
              </p>
            </div>

            {/* secont */}
            <div className="case1secbot">
              {d1?.map((d, index) => (
                <div key={index} className="singleca1bt">
                  {/* left */}
                  <div className="sli1left">
                    <p>{d?.title1}</p>
                    <h3>{d?.title2}</h3>
                  </div>

                  {index != 2 && <p className="horizline"> </p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* secon section  */}
      <section className="case2secsec2" id="case2_Background_Port">
        <div className="case2seccont">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216503/case2imgs1_xngbpg.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>

            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since

            </p>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744626323/Ellipse_2616_b05zg1.png"
          alt="kushel"
          className="c2el1"
        />
      </section>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head2" id="AiUnique_solution">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
            A&I Parts Center was pursuing a new, strategically sophisticated partner to help grow their ecommerce revenue. They identified Americaneagle.com, a full-service digital agency with big brand experience and respected solutions in ecommerce, as the ideal partner to build their new site. With the agency’s help, they wanted to implement a more user-friendly ecommerce platform, refine search engine optimization (SEO), develop content to support that optimization, and launch an intelligent digital advertising campaign to maximize return on ad spend (ROAS). 


            </p>

            <p className="s3theeparas">
              {" "}
              The new BigCommerce website for Gordy & Sons needed to successfully integrate their graphical point-of-sale environment and inventory management system, CounterPoint. It was critical that the two systems communicated seamlessly to ensure accurate, real-time data for product inventory, orders, and customer detail.

            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744631255/Group_1171281276_psr4aw.png"
            alt="kushel"
            className="c3antoimg"
          />
        </div>
      </section>

      {/* fourth  section  */}

      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pagination: true,
          arrows: false,
          pauseOnHover: false
        }}
      >
        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622912/Group_1171279215_qc1xkm.png"
              alt="kushel"
            />
            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744632483/Group_1171281280_ukeiu6.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_Aii">
                <h4>Compare Functionality
              </h4>
                <p>
                2ndamendment Armory was pursuing a new, strategically sophisticated partner to help grow their ecommerce revenue. They identified Americaneagle.com, a full-service digital agency with big brand experience and respected solutions in ecommerce, as the ideal partner to build their new site. With the agency’s help.

                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622912/Group_1171279215_qc1xkm.png"
              alt="kushel"
            />

            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744632482/Group_1171281283_kpau8o.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="case3Portfolio_Aii">
                <h4>Smart Filters </h4>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 

                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
          <img className="case4bggirl" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744622912/Group_1171279215_qc1xkm.png" alt="kushel" />

            <div className="cas3s4con" id="imgPortfolio_Phone">
             

              <div className="cas3circldata2" id="case3Portfolio_Aii">
                <h4>Mobile Responsive </h4>
                <p>
             
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                </p>
              </div>
              <div className="bgshowdb2" id="imgPortfolio_Ai_Phone">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744632484/Group_1171281284_dpqrse.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>
            </div>
          </section>
        </SplideSlide>
      </Splide>

      {/* fivth  section  */}
      <section className="case2fivsec">
        <div className="c2fivsecont">
          {/* top  */}
          <div className="c2fivtopsec">
            <h4>How we build the E-Commerce development Process</h4>
            <p>
            We’ll turn your custom tech solutions into powerful brands by crafting unique customer experiences at every digital touchpoint with:

            </p>
          </div>

          {/* bbottm  */}
          <div className="c22fivbotsec">
            {/* Left Section */}
            <div className="c3fivbtoleft">
              {d2?.map((d2Item, index) => (
                <p
                  key={index}
                  onClick={() => handleSelectionChange(index)}
                  className={`${
                    selectS4 === index && "addthsomfbg"
                  } cursor-pointer`}
                >
                  {d2Item?.title}
                </p>
              ))}
            </div>

            {/* Right Section with Animation */}
            <div className={`c2fibbotrigh ${animationDirection} `}>
              <img src={selectdata?.img} className="selectdataimg" alt="kushel" />
              <div className="serigh_macont">
                <h4>
                  <span>0{selectS4 + 1}/</span> {selectdata?.title}
                </h4>
                <p className="sledatapar">{selectdata?.para}</p>
                <ul>
                  {selectdata?.points?.map((point, index) => (
                    <li key={index}>
                      <span>
                        <TiTick className="TiTickfds" />
                      </span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="sliderbotse">
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
              {d2?.map((item, index) => (
                <SplideSlide key={index}>
                  <div className={`c2fibbotrigh`}>
                    <img
                      src={item?.data?.img}
                      className="selectdataimg"
                      alt="kushel"
                    />

                    <div className="serigh_macont">
                      <h4>
                        <span>0{index + 1}/</span> {item?.data?.title}
                      </h4>

                      <p className="sledatapar">{item?.data?.para}</p>

                      <ul>
                        {item?.data?.points?.map((point, index) => (
                          <li key={index}>
                            <span>
                              <TiTick className="TiTickfds" />
                            </span>{" "}
                            {point}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>

      {/* six section  */}
      <section className="cs2sexiesec">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216672/similarl1_kq1btu.png"
          alt="kushel"
          className="similarl1"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216703/similarl2_yt5kqi.png"
          alt="kushel"
          className="similarl2"
        />

        <div className="c2sixconta">
          <div className="cssixtop">
            <h4>Have a similar project in mind?      </h4>
            <p>Discover how our expertise can benefit your project
            </p>
          </div>

          <div className="csizbot">
           <a href="contact-us"><button>
              <span>Get A Quote For Your Project</span>
            </button></a> 
            <p>Or Start a conversation</p>
          </div>
        </div>
      </section>

      {/* seven section  */}
      <section className="sc2sevensec">
        <div className="sc2sevnconta">
          <div className="sc2sev_head">
            <h2>Related Projects</h2>
            <p></p>
          </div>

          <div className="sc2_Sev_projects">
            {projects?.map((project, index) => (
              <div key={index} className="singlprojseve">
                <img src={project?.img} alt="kushel" />

                <div className="seven_titls">
                  <p className="sep1">{project?.title1}</p>
                  <p className="sep2">{project?.title2}</p>
                </div>

              <a href={project?.link}> <button>
                  <span>Case study</span>
                </button></a> 
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Ai;

