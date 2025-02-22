
"use client"

import React, { useState, useEffect } from "react";
import pick2 from "../../public/assets/pick2.png";
import angrag from "../../public/assets/angrag.png";
import stepback from "../../public/assets/stepback.png";
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


// import "../components/css/app2.css";


import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"


import ai from "../../public/assets/ai.svg";
import testo from '../../public/assets/testo.png'
import tim1 from '../../public/assets/tim1.svg';
import tim2 from '../../public/assets/tim2.svg';
import markanda from '../../public/assets/markanda.svg';
import yosuf from '../../public/assets/yosuf.svg';
import yosuf1 from '../../public/assets/yosuf1.svg';
import platai from '../../public/assets/platai.svg';
import tii1 from '../../public/assets/tii1.svg'
import tii2 from '../../public/assets/tii2.svg'
import tii3 from '../../public/assets/tii3.svg'
import chanderi from '../../public/assets/chanderi.svg';
import alisa from '../../public/assets/alisa.svg';
import inki1 from '../../public/assets/inki1.svg'
import inki2 from '../../public/assets/inki2.svg'
import inki3 from '../../public/assets/inki3.svg'
import Topo from '../../public/assets/topo.svg';
import logowh from '../../public/assets/logoWh.svg';
import tele from '../../public/assets/tele.svg';
import zva from '../../public/assets/zva.svg';
import seto from '../../public/assets/seto.svg';
import ele from '../../public/assets/elle.svg';
import skl1 from '../../public/assets/skl1.svg';
import skl2 from '../../public/assets/skl2.svg';
import skl3 from '../../public/assets/skl3.svg';
import Image from "next/image";
import '../globals.css'

const TopBrass = () => {
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
         title: 'Kusheldigi.com/topbrass',
         description:"web agency, web design agency , best web design agency in the world, web design agency, web design services, web design and development agency"
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
        
            <div className="ser-main">
                <div>
                    <div className="side-bg-trio">
                        <div className="first-kick-pads">
                            <div className="left-section-kids">
                                <Image src={logowh} width="200" alt="img"></Image>
                                <p className="shoots_premium mt_top">
                                Top Brass sells everything from army clothes and footwear to gun accessories, optics, tactical gear, and bags to make sure the military personnel and outdoor enthusiasts have everything they need.
                                </p>
                                <h1 >Technologies Used</h1>
                                <div className="main-box-logic flex">
                                    <Image src={tim1} id="sim" alt="img"></Image>
                                    <Image src={tim2} id="rotat" alt="img"></Image>
                                </div>
                            </div>
                            <div className="right-section-kids">
                                <Image className="ai_site" src={Topo} alt="img"></Image>
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
                                        Kushel Digi Solutions elated to taken up the work of  Top Brass to design and build a contemporary eCommerce marketplace on the BigCommerce platform.to provide optimized shopping experience for the military professional and outdoor enthusiast.
                                        </p>
                                    </div>
                                </div>
                                <div className="MadFish-back2">
                                    <Image src={tele} alt="MadFish" />
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
                        <div className="vl-chic vl_chic2">
                            <p className="fila">Font</p>
                            <div className="ywo-stem">
                                <div className="light-aa">
                                    <p className="hoo">Aa</p>
                                    <p className="roboto-tip">DM Sans</p>
                                </div>
                                <div className="dark-aa">
                                    <p className="dark-canny">Aa</p>
                                    <p className="prompt-tip">TT Mussels Trl</p>
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
                        <Image src={zva} id="gang" alt="img" />
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
                            Top Brass was established with a vision of providing high-quality military and tactical gear not only to professional military but also to outdoor enthusiasts as well as other professionals who are tactical. Top Brass recognised the need to change and expand the reach of its business thus took the business online in an eCommerce manner to keep things seamless, friendly, and durable/accessible as synonymous with the products.

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
                                    To develop an organized, intuitive platform to showcase a broad range of military products, from clothing to gun accessories.

                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                    Ensure that customers can easily navigate through to find certain products in a very vast catalog.

                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                    Incorporate real-time inventory updates within a dynamic product line with frequent restocks.

                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                    A secure and scalable platform able to accommodate sensitive transactions and increased traffic during periods of high demand.

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
                                       BigCommerce was integrated to create a scalable and flexible eCommerce platform for Top Brass with its unique product offerings.

                                    </p>
                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                    A user-friendly interface was made by designing categorization that is well-organized for army gear, clothing, footwear, optics, and accessories.

                                    </p>
                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                    Automation was put into place to live track inventory levels in real time across all product lines.
                                    </p>

                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                    Optimized Performance to ensure security and responsiveness of the site on mobile devices, with seamless handling of large volumes of traffic and transactions. 

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="kick-start kick-start22">
                    <div className="kick-first kick-first222">

                        <div className="kickds">
                            <Image className="kick_mart" src={logowh} alt="kick5" />
                        </div>
                    </div>
                    <div className="kick-second kick-second222 relative">
                        <div className="about165">
                            <Image
                                className="absolute about161 animate__animated animate__pulse animate__infinite"
                                src={ele}
                                alt="kushel"
                            />
                        </div>
                        <Image
                            className=" relative z-10 about162 pick222"
                            src={seto}
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
                                The new Top Brass eCommerce platform has given the much-required extension to the reach of the company in making its vast army and tactical products available to large numbers of people. Ease of using the interface, including categorization of the products, has simplified customers' journeys for increased use and online sales. Real-time inventory synchronization has minimized errors in stock, while the process of order fulfillment has also been smoothened.

                                </p>

                                <div className="azib-tech">
                                    <h3>Technologies Used</h3>
                                    <Image className="conjun" src={opqweeeeeee3} alt="kushel" />
                                </div>
                            </div>
                        </div>

                        <div className="azib-images flex items-center justify-center">
                            <Image src={skl1} alt="azib" />
                            <Image src={skl2} alt="azib" />
                            <Image src={skl3} alt="azib" />
                        </div>
                    </div>
                </div>
                {/* <div className="client-apperication">
                    <h2>Client Appreciation</h2>
                    <p>
                        “Thank you Affle team for all your hardwork, patience and continuous
                        support. The app is getting positive reviews and we hope to continue
                        to improve and evolve the app. Looking forward to our continued
                        growth.”
                    </p>
                    <h4>Matt Reeder</h4>
                </div> */}
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

export default TopBrass ;
