"use client"

import React, { useState, useEffect } from "react";
import arrow4 from "../../public/assets/arrow4.png";
import Link from "next/link";
// import { NavLink } from "react-router-dom";
import rel1 from "../../public/assets/rel1.png";
import rel2 from "../../public/assets/rel2.png";
import rel3 from "../../public/assets/rel3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import opqweeeeeee3 from "../../public/assets/opqweeeeeee.png";
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
// import "../components/css/app2.css";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"

// import "../components/css/app2.css";
import '../globals.css'
import tim1 from '../../public/assets/tim1.svg';
import tim2 from '../../public/assets/tim2.svg';
import sambar from '../../public/assets/sambar.svg';
import lk11 from '../../public/assets/lk11.svg';
import lk22 from '../../public/assets/lk22.svg';
import lk33 from '../../public/assets/lk33.svg';
import simar from '../../public/assets/simar.png';
import Image from "next/image";
const Sites = () => {
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
         title: 'Kusheldigi.com/site',
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
                <div>
                    <div className="side-bg-trio">
                        <div className="first-kick-pads incheingh">
                            <div className="left-section-kids">
                                <img src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1726142417/image_18_yj36zo.svg"} width="120" alt="img"></img>
                                <p className="shoots_premium mt_top">
                                    Sites and Scopes has specialized experience in delivering high performance optics and accessories for marksmen, hunters, and tactical professionals. All their aim is on delivering a precision-engineered product for utmost reliability and clearness in any environment.
                                </p>
                                <h3 >Technologies Used</h3>
                                <div className="main-box-logic flex">
                                    <Image src={tim1} id="sim" alt="img"></Image>
                                    <Image src={tim2} id="rotat" alt="img"></Image>
                                </div>
                            </div>
                            <div className="right-section-kids">
                                <Image className="ai_site fi_site" src={sambar} alt="img"></Image>
                            </div>
                        </div>
                        {/* *********************************************** */}
                        <div className="MadFish_press">
                            <div className="MadFish-back">
                                <div className="MadFish-back1">
                                    {/* <div className="MadFish_press_head">
                                        <img src={madlogooooo} alt="madlogooooo" />
                                    </div> */}
                                    <div className="MadFish_press_para">
                                        <p>
                                            Sites and Scopes has specialized experience in delivering high performance optics and accessories for marksmen, hunters, and tactical professionals. All their aim is on delivering a precision-engineered product for utmost reliability and clearness in any environment.

                                        </p>
                                    </div>
                                </div>
                                <div className="MadFish-back2">
                                    <img src="https://res.cloudinary.com/ecommerce-website/image/upload/v1726150027/Group_1171275974_1_p0bran.svg" alt="MadFish" />
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
                        <div className="vl-chic vl_chic3">
                            <p className="fila">Font</p>
                            <div className="ywo-stem">
                                <div className="light-aa">
                                    <p className="hoo">Aa</p>
                                    <p className="roboto-tip">Helvetica Neue</p>
                                </div>
                                <div className="dark-aa ml-6">
                                    <p className="dark-canny">Aa</p>
                                    <p className="prompt-tip">Trump Gothic Pro</p>
                                </div>
                                {/* <div className="medium-aa">
                                    <p className="medium">Aa</p>
                                    <p className="node-tip">Roboto</p>
                                </div> */}
                            </div>
                            <div className="sub-worm">
                                <p className="tool">Tools Use</p>
                                <Image src={img13} id="pals-circle" alt="img"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="right-card-omega">
                        <p>Color Plate</p>
                        <img src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1726205579/Group_1171276051_kenw1s.svg"} id="gang" alt="img" />
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

                                Kushel Digi Solutions undertook the project of designing and developing a modern, user-friendly website for Sites and Scopes which aims to enhance their online presence along with customer engagement.

                            </p>

                        </div>
                    </div>
                    {/* <div className="step-images flex items-start salaruu  justify-center mt-20">
                        <img className="batleft heightcum" src={tii1} alt="stepback" />
                        <img className="batleft " src={tii2} alt="stepback1" />
                        <img className="batleft heightcum" src={tii3} alt="stepback1" />
                    </div> */}
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
                                        The translation of the passion and precision of the brand into a digital platform.
                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Ensuring that BigCommerce integrates smoothly with custom features.
                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Balancing aesthetic appeal with functionality for a diverse user base, which includes hunters, tactical professionals, and firearms enthusiasts.
                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Creating a website that performs well across various devices and browsers.
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
                                        We designed a modern, clean, and intuitive interface that appeals to the target audience.
                                    </p>
                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        We integrated BigCommerce, allowing Sites and Scopes to manage their product catalog, orders, and customers efficiently.
                                    </p>
                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        The site was optimized for search engines to ensure high visibility in relevant searches.
                                    </p>

                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Fast loading times and a seamless user experience were prioritized to keep visitors engaged and improve conversion rates.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="kick-start kick-start22">
                    <div className="kick-first kick-first222">

                        <div className="kickds">
                            <img width="210" src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1726206845/image_19_qgz5jx.png"} alt="kick5" />
                        </div>
                    </div>
                    <div className="kick-second kick-second222 relative">
                        <div className="about165">
                            <img
                                className="absolute about161 animate__animated animate__pulse animate__infinite"
                                src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1726206677/Ellipse_451_bi1imf.png"}
                                alt=""
                            />
                        </div>
                        <Image
                            className="relative z-10 about162 pick222"
                            src={simar}
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
                                    The new site of Sites and Scopes resulted in great jump of 45 percent in organic traffic and 25 percent in sales conversions in the first three months. The new design boosted user engagement to the tune of 30 percent more engagement with longer sessions and positive feedback from the customer. The streamlined checkout process with secure payment integration thus boosted customer trust and repeated business and hence increased brand credibility.
                                </p>

                                <div className="azib-tech">
                                    <h3>Technologies Used</h3>
                                    <Image className="conjun" src={opqweeeeeee3} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="azib-images flex items-center justify-center">
                            <Image src={lk11} alt="azib" />
                            <Image src={lk22} alt="azib" />
                            <Image src={lk33} alt="azib" />
                        </div>
                    </div>
                </div>
                <div className="client-apperication">
                   
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

                <Footer/>

                {/*  buttons  */}
                <div className="whtsApBtns">
                    <button onClick={whatAppHandler}>
                        <Image className="what-image-universal" src={whatsApp} alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
                    </button>
                    <button onClick={callHandler}>
                        <Image src={call} alt="call-icon" title="call-icon" />
                    </button>

                </div>
            </div>
        </>
    );
};

export default Sites;
