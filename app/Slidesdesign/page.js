"use client"
import React,{useState,useEffect} from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Head from 'next/head';

import arrow4 from "../../public/assets/arrow4.png";
import rel1 from "../../public/assets/rel1.png";
import rel2 from "../../public/assets/rel2.png";
import rel3 from "../../public/assets/rel3.png";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import pt4 from "../../public/assets/slidesPLP Page.png";
import pt5 from "../../public/assets/slidesHome page design.png";
import pt6 from "../../public/assets/slidesaboutPLP Page z.png";
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import protruckss from "../../public/assets/Slidesrightimg.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
import hh5 from "../../public/assets/slidescolorplat.png";
import hh6 from "../../public/assets/slidesfirst1.png";
import hh7 from "../../public/assets/slidesfirst2.png";
import hh8 from "../../public/assets/slidesfirst3.png";
import pru2 from '../../public/assets/shshhshshshsshshshshsh.png';
import opqweeeeeee2 from "../../public/assets/opqweeeeeee2.png";
import opqweeeeeee3 from "../../public/assets/opqweeeeeee3.png";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import Image from "next/image";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import '../globals.css'
const ProTrucks = () => {
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

const generateMetadata = ({ params }) => ({
         title: 'Kusheldigi.com/Slidesdesign',
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
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <Image src={pru2} className="pru188888888" alt="img"></Image>
                <p className="shoots_premium">
                  1000+ Innovative Slides Design
                </p>
                <h1>Technologies Used</h1>
                <div className="main-box-logic flex">
                  <Image src={opqweeeeeee2} id="rotat" alt="img"></Image>
                </div>
              </div>
              <div className="right-section-kids">
                <Image src={protruckss} id="total-group" alt="img"></Image>
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
        {/* ******************************************** */}

        <div className="fourth-plate-juuls">
          <div className="left-card-hub">
            <div className="vl-chic">
              <p className="fila">Font</p>
              <div className="ywo-stem so_change">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Poppins</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Poppins</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Poppins</p>
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
            <Image src={hh5} id="gang" alt="img" />
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
                {" "}
                Slides365 aimed to serve various needs of professionals by offering subscription-based templates, presentations, design slides, and industry-specific slides. In short, the company aimed to make the chore of creating effective presentations a little easier by providing readymade templates in several sectors. Slides365 wanted to make its services and customer experience even better by searching for a digital partner that could uplift their online platform and make the browsing, subscription, and downloading of presentations easier for users.

              </p>
             
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <Image
              className="stepback solenoid-stepback1"
              src={hh6}
              alt="stepback"
            />
            <Image
              className="stepback1 solenoid-stepback1"
              src={hh7}
              alt="stepback1"
            />
          </div>
        </div>

        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>Challenges & Solutions</h3>
          </div>
          <div className="challenge-story2 flex">
            <div className="challenge-box challenge-box2">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Their old website was making difficult for users to navigate through the vast library of templates.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  The platform lacked a good design that can allow easy access to templates, leading to a high bounce rate.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Handling different subscription plans was complex which requires a solution to automate and simplify the process.

                  </p>
                </div>
              </div>
            </div>
            <div className="challenge-box challenge-box2">
              <h4>Solution</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  We designed a fully scalable website that can efficiently facilitate Slides365 in managing and organizing its huge template library.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Our team conducted extensive user research to redesign the interface that focus on ease in navigation and improved search functionality.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  We introduced sophisticated automation in subscription handling, thereby allowing users to subscribe and renew plans.

                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>

        <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
        
            <div className="kickds">
              <Image className="kick_mart" src={pru2} alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <Image
              className=" relative z-10 about162 pick222"
              src={hh8}
              alt="hh8"
            />
          </div>
        </div>
       
       
        <div className="azib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">04</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                With an optimized user experience and automation of processes, subscription sign-ups increased 30% within the first month. This redesign brought a decrease in bounce rates and an increase in surfing user engagement. The BigCommerce-based platform has now become scalable, future-ready, and able to bear more load. Performance improvement and load time enabled Slides365 to hold its position in the competitive market, while this intuitive interface became vital for increasing customer satisfaction.

                </p>
           
                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <Image className="conjun" src={opqweeeeeee3} alt="conjun" />
                </div>
              </div>
            </div>
            <div className="azib-images flex items-center justify-center">
              <Image src={pt5} alt="pt4" />
              <Image src={pt6} alt="pt5" />
              <Image src={pt4} alt="pt6" />
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
                    <button>View</button>
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
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
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
};

export default ProTrucks;
