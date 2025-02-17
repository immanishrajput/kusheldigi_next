"use client"
import React, { useState, useEffect } from "react";
import pick2 from "../../public/assets/pick2.png";
import angrag from "../../public/assets/angrag.png";
import stepback from "../../public/assets/stepback.png";
import stepback1 from "../../public/assets/stepback1.png";
import kick5 from "../../public/assets/kick5.png";
import arrow4 from "../../public/assets/arrow4.png";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import rel1 from "../../public/assets/rel1.png";
import Head from 'next/head';

import rel2 from "../../public/assets/rel2.png";
import rel3 from "../../public/assets/rel3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import trimmer from '../../public/assets/trimer.svg'
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
// import "../components/css/app2.css";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import omis from '../../public/assets/omis.svg';
import fast from '../../public/assets/fast.svg'
import subh from '../../public/assets/subh.svg'
import testjpg from '../../public/assets/testjpg.svg'
import mr from '../../public/assets/mr.svg';
import prek1 from '../../public/assets/prek1.svg'
import prek2 from '../../public/assets/prek2.svg'
import prek3 from '../../public/assets/prek3.svg'
import nodes11 from '../../public/assets/nodes11.svg';
import react11 from '../../public/assets/reacts11.svg';
import srikant from '../../public/assets/srikant.svg'
import srikant1 from '../../public/assets/srikant1.svg';
import priyajan1 from '../../public/assets/priyajan1.svg';
import priyajan2 from '../../public/assets/priyajan2.svg'
import Image from "next/image";
import '../globals.css'
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
const SubhAlloys = () => {
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
    title: 'Kusheldigi.com/subhAlloy',
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
            <div className="first-kick-pads last-kick-pad incheingh">
              <div className="left-section-kids">
                <Image src={subh} alt="img"></Image>
                <p className="shoots_premium kooo">
                Shubhalloys buys and sells iron cuttings as per the demand requirement of their clients. Traditionally, the company was operating with manual processes for ordering and transactions, which was very time-consuming and tended to show several inefficiencies.

                </p>
                <h1>Technologies Used</h1>
                <div className="main-box-logic flex">
                  <Image src={omis} id="sim" alt="img"></Image>
                  <Image className="pokli" src={priyajan1} id="rotat" alt="img"></Image>
                  <Image src={priyajan2} id="rotat" alt="img"></Image>
                </div>
              </div>
              <div className="right-section-kids ramit">
                <Image className="sotal-group fotal-group" src={fast} id="total-group" alt="img"></Image>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="MadFish_press">
              <div className="MadFish-back crazy-back">
                <div className="MadFish-back1">
                 
                  <div className="MadFish_press_para crazy_cms">
                    <p>
                    Kushel Digi Solutions is excited to taken up the project of Shubhalloys to develop a custom software platform that automates and streamlines their buying and selling operations. 

                </p>
                    {/* <h3>Empower Yourself to</h3>
                    <h3>Easily <span>Modify Your</span> </h3>
                    <h3><span>Website</span></h3> */}
                  </div>
                </div>
                <div className="MadFish-back2">
                  <Image className="subh_img" src={testjpg} alt="MadFish" />
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
                  <p className="roboto-tip">Gilroy</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Gilroy</p>
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
            <Image src={mr} id="gang" alt="img" />
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

              Shubhalloys approached Kushel Digi Solutions with the need to find a solution to automate their iron-cutting selling process. Conventionally, they were into tons of manual work, right from taking orders to filling the requirements of the clients. They wanted a system where their clients can log in, place orders, and track their request status directly via some digital platform. This shall reduce the need for manual tasks, increase efficiency, and make the interaction experience more seamless for their clients.


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
                  Shubhalloys relied on the outdated ways of order management and fulfilling customer requirements, which were inefficient to scale.



                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Create an easy-to-use interface that will ensure seamless adaption of the software by both Shubhalloys staff and clients.




                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Integration of software seamlessly with their existing operations while enabling customers to log on and interact with the system in real time.



                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  The system had to be scalable to grow with an ever-increasing client base for Shubhalloys and handle increased volumes of transactions.


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
                  We developed a software platform using React.js in the front and Node.js at the back, automating the buying and selling of iron cuttings. 


                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  The software makes it easy for Shubhalloys' clients to browse, place orders, and track their purchases.

                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  The software lets clients interact in real time with the inventory of Shubhalloys.

                  </p>

                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  We used Node.js to create the back-end for a system that would be able to handle Shubhalloys' operations as they were but also support future needs.

                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      

        <div className="bg_crazy11">
          <div className="bg_cms">
            <div className="bg_left">
              <Image className="kpiu11" src={prek1} alt="lojj" />
            </div>
            <div className="bg_right">
              <Image src={prek2} className="llgg" alt="lojj" />
              <Image src={prek3} className="ep44 ep455" alt="kushel" />
            </div>
          </div>
        </div>

      
        <div className="azib kickazib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">04</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                Automation significantly raised the efficiency of Shubhalloys' operations by removing manual handling and thus reducing errors in order management. The client experience has also become seamless, with clients logging in themselves and placing direct orders through the system. Greater satisfaction among customers translates into repeat business. This scalable platform ensures Shubhalloys will be able to meet the demands for growth from their clients without a degrade in performance.

                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <div className="fopping">
                    <div className="spoing">
                      <Image src={nodes11} alt="kushel" />
                      <p>Node Js</p>
                    </div>
                    <div className="spoing kint">
                      <Image src={react11} alt="kushel" />
                      <p>React</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <Image className="sohhh" src={srikant} alt="azib" />
              <Image className="sohhh" src={srikant1} alt="azib" />
              {/* <img src={azib4} alt="azib" /> */}
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
      <Footer/>
    </>
  );
};

export default SubhAlloys;
