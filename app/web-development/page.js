"use client"
import React, { useState, useEffect } from "react";
import website from "../../public/assets/website.png";
import reactjs1 from "../../public/assets/reactjs.png";
import htmls from "../../public/assets/htmls.png";
import phpos from "../../public/assets/phpos.png";
import nodejs1 from "../../public/assets/nodejs1.png";
import words from "../../public/assets/words.png";
import vuejs1 from "../../public/assets/vuejs1.png";
import mobileJi from "../../public/assets/mobilieji.png";
import docu from "../../public/assets/docu.png";
import setting from "../../public/assets/setting.png";
import sign from "../../public/assets/sign.png";
import admi from "../../public/assets/admi.png";
import admi1 from "../../public/assets/admi1.png";
import admi2 from "../../public/assets/admi2.png";
import track from "../../public/assets/track.png";
import vertical from "../../public/assets/vertical.png";
import arrow1 from "../../public/assets/arrow1.png";
import dec1 from "../../public/assets/dec1.png";
import dec2 from "../../public/assets/dec2.png";
import dec3 from "../../public/assets/dec3.png";
import dec4 from "../../public/assets/dec4.png";
import dec5 from "../../public/assets/dec5.png";
import dec6 from "../../public/assets/dec6.png";
import dec7 from "../../public/assets/dec7.png";
import dilkush from "../../public/assets/dilkush.png";
import punto from "../../public/assets/punto.png";
import process2 from "../../public/assets/process2.png";
import ProcessMobView1 from "../../public/assets/ProcessMobView1.png";
import ProcessMobView2 from "../../public/assets/ProcessMobView2.png";
import ProcessMobView3 from "../../public/assets/ProcessMobView3.png";
import ProcessMobView4 from "../../public/assets/ProcessMobView4.png";
import ProcessMobView5 from "../../public/assets/ProcessMobView5.png";
import posis2 from "../../public/assets/posis2.png";
import posis3 from "../../public/assets/posis3.png";
import posis4 from "../../public/assets/posis4.png";
import posis5 from "../../public/assets/posis5.png";
import posis6 from "../../public/assets/posis6.png";
import posis7 from "../../public/assets/posis7.png";
import posis8 from "../../public/assets/posis8.png";
import posis10 from "../../public/assets/posis10.png";
import tweb from "../../public/assets/tewb.png";
import thir1 from "../../public/assets/thir1.png";
import webMinar from "../../public/assets/webMinar.png";
import conGraphic from "../../public/assets/conGraphic.png";
import secService from "../../public/assets/secService.png";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import thir2 from '../../public/assets/thir2.png';
import CustemslImg from "../../public/assets/CustemslImg.png";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import Image from "next/image";
import '../globals.css'
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm from "../COMMON/ContactForm";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { Helmet } from "react-helmet";


const WebDevelopmentUSA = ({ notify }) => {
  const [perPage, setPerPage] = useState(6);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1350px)").matches) {
      setPerPage(4);
    }
    if (window.matchMedia("(max-width: 850px)").matches) {
      setPerPage(3);
    }
    if (window.matchMedia("(max-width: 750px)").matches) {
      setPerPage(1);
    }
  }, []);
  let heading = "www.2ndAmendment.com";
  let heading1 = "www.kickeez.com";
  let heading2 = "www.protrucks.com";
  let heading3 = "www.jonesbuilt.com";
  const [start, setStart] = useState(false);
  const handleChange = () => {
    setStart(!start);
  };


  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);

  const [tab, setTab] = useState(1);

  const ChangeImage1 = () => {
    setTab(1);
    document.getElementById("img1").src = `${thir2}`;
    document.getElementById("img3").src = `${thir1}`;
    document.getElementById("img4").src = `${thir1}`;
    document.getElementById("img5").src = `${thir1}`;
  }
  const ChangeImage2 = () => {
    setTab(2);
    document.getElementById("img1").src = `${thir1}`;
    document.getElementById("img3").src = `${thir1}`;
    document.getElementById("img4").src = `${thir1}`;
    document.getElementById("img5").src = `${thir1}`;
  }
  const ChangeImage3 = () => {
    setTab(3);
    document.getElementById("img1").src = `${thir1}`;
    document.getElementById("img3").src = `${thir2}`;
    document.getElementById("img4").src = `${thir1}`;
    document.getElementById("img5").src = `${thir1}`;
  }

  const ChangeImage4 = () => {
    setTab(4);
    document.getElementById("img1").src = `${thir1}`;
    document.getElementById("img3").src = `${thir1}`;
    document.getElementById("img4").src = `${thir2}`;
    document.getElementById("img5").src = `${thir1}`;
  }

  const ChangeImage5 = () => {
    setTab(5);
    document.getElementById("img1").src = `${thir1}`;
    document.getElementById("img3").src = `${thir1}`;
    document.getElementById("img4").src = `${thir1}`;
    document.getElementById("img5").src = `${thir2}`;
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

  return (
    <>
    <Navbar/>
      {/* <Helmet> */}
        <title>
        your stop for the Best Website Development services 
        </title>
        <meta
          name="description"
          content="KushelDigi Solutions- the best web development services! that Boost your online visibility with our experienced staff committed to making your dreams come true."
        />
        <link rel="canonical" href="https://www.kusheldigi.com/web-development" />
      {/* </Helmet> */}
      <div className="ser-main">
        <div className="ser1 serji serji1 ">
          <div className="ser11  flex items-center justify-between webDoveeee dine-123">
            <div className="ser111 webbb-paraag">
              {/* <h2 className="seru"></h2> */}
              <h1 className="blue change_web" id="change_x">Web development services to lead<br /> the industry</h1>
              <p className="ac">
                Solution based Web development services to skyrocket the growth
              </p>
              <Link href="/contact-us" className="web-button">   <button>
                Lets get started
                <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white" />
                </svg>
              </button></Link>
            </div>
            <div className="ser112">
              {/* <img src={website} alt="Web development services" title="Web development services" /> */}
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842613/website.4562111510d891ebc0d5_m2yqvx.png
" alt="Web development services" title="Web development services" />
            </div>
          </div>
        </div>

        <div className="ser2 ser-vertical">
          <div className="ser21 ser23">
            <div className="home412 flex justify-center items-center dine-123">
              <Splide
                className=" w-full"
                aria-label="Our Services"
                options={{
                  perPage,
                  perMove: 1,
                  autoplay: true,
                  pauseOnHover: true,
                  type: "loop",
                  interval: 1600,
                  drag: true,
                }}
              >
                <SplideSlide>
                  <Link href="/react-js">
                    <div className="home4121">
                      <img className=" block m-auto" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842979/React_2_whb1bf.png
" alt="react" title="react" />
                      <p>REACT JS</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/html">
                    <div className="home4121">
                      <img className=" block m-auto" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842978/732212_1_httgut.png
" alt="html" title="html" />
                      <p>HTML 5</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/php">
                    <div className="w-full sis  home4121">
                      <img className="block m-auto phpos" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842977/png-clipart-php-php_1_1_htj0rh.png " alt="php" title="php" />
                      <p>PHP</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/node-js">
                    <div className="w-full sis1  home4121">
                      <img
                        className=" block m-auto nodejs1"
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842774/png-transparent-node-js-javascript-computer-icons-github-angle-text-logo_1_iohy0b.png"
                        alt="Node"
                        title="Node"
                      />
                      {/* <p>Node</p> */}
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="/wordpress">
                    <div className="home4121">
                      <img className="block m-auto" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842773/wordpress_1_2_h5o1qr.png
" alt="Wordpress" title="Wordpress" />
                      <p>Wordpress</p>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide>
                  <Link href="">
                    <div className="home4121">
                      <img className="block m-auto" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724842772/Vue.js_Logo_2_1_v30zi8.png
" alt=" PYTHON" title="PYTHON" />
                      <p>PYTHON</p>
                    </div>
                  </Link>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>

        <div className="developments dine-1234">
          <marquee behavior="scroll" direction="right" scrollamount="20">
            <img className="dev1" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724843340/download_1_gibf3h.png
" alt=" Web Design animation" title=" Web Design animation" />
          </marquee>

          <div className="development">
            <div className="development1">
              <h3>
                Web Development Solutions <br /> To Grow The Business
              </h3>
              <p className="knowrs">
                Do you want your business to flourish in today's digital era? Then you'll require a website which is a key to establish your online presence and identity. Your website acts as an effective tool to highlight your strength by showcasing your products and services which will definitely excel your online presence. But to attract new customers and traffic to your site is also essential and for this Kushel Digi Solutions is here for you with extensive experience in delivering fast, innovative and user-friendly sites in few weeks
              </p>
              <p className="knowrs">
                While its roots in India, Kushel Digi Solutions
                also emerged as a leading <a href="/web-development-in-usa" className="redirect-to-USA"> web development company in USA</a>  by extending its premier web development services to clients in the USA. Our global approach ensures global service standards to deliver outstanding results. Let us help you succeed online.
              </p>

            </div>
            <div className="development2">
              {/* <img src={mobileJi} alt="Web development solutions" title=" Web Development Solutions" /> */}
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724843511/mobilieji.777f4a1da1940ac55315_qfiv4l.png
" alt="Web development solutions" title=" Web Development Solutions" />
            </div>
          </div>
        </div>

        <div className="why_website">
          <h2>Why website designing?</h2>
          <div className="thir_button_flex">
            <div onClick={ChangeImage1} className="thir_img">
              <p>Customized design</p>
              <Image id="img1" src={thir2} alt="Customized design" title="Customized design" />
            </div>
            <div onClick={ChangeImage2} className="thir_img">
            </div>
            <div onClick={ChangeImage3} className="thir_img">
              <p>Contact & Graphics</p>
              <Image id="img3" src={thir1} alt="Contact & Graphics" title="Contact & Graphics" />
            </div>
            <div onClick={ChangeImage4} className="thir_img">
              <p>SEO Service</p>
              <Image id="img4" src={thir1} alt="SEO Service" title="SEO Service" />
            </div>
            <div onClick={ChangeImage5} className="thir_img" >
              <p>Website Maintenance</p>
              <Image id="img5" src={thir1} alt="Website Maintenance" title="Website Maintenance" />
            </div>
          </div>

          <div className="body_website">
            {
              tab === 1 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Experience the power of tailor-made designs that uniquely reflect your brand and vision.

                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                  <div className="right_website">
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724843937/CustemslImg.17b28f45c8901fb394ee_o8haez.png
" alt="Customized design" title="Customized design" />
                  </div>
                </>
              )
            }


            {
              tab === 3 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>
                        Elevate your online presence with captivating visuals and engaging graphics.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                  <div className="right_website">
                    <Image src={webMinar} alt="contact and graphics" title="contact and graphics" />
                  </div>
                </>
              )
            }

            {
              tab === 4 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>

                        Drive visibility and reach your target audience with our expert SEO solutions.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                  <div className="right_website">
                    <Image src={conGraphic} alt="SEO services" title="SEO services" />
                  </div>
                </>
              )
            }
            {
              tab === 5 && (
                <>
                  <div className="left_website">
                    <div className="left_web_para">
                      <p>

                        We provide seamless ongoing maintenance to keep your site running smoothly.
                      </p>
                    </div>

                    <div className="left_span">
                      <span className="left_hire">Here are the benefits of customized website design:</span>
                      <span>It supports and establishes your brand</span>
                      <span>It optimized the customer experience</span>
                      <span>It helps increase SEO optimization</span>
                      <span>It gives better control over website hosting</span>
                      <span>It gives better control over website hosting</span>
                    </div>
                  </div>
                  <div className="right_website">
                    <Image src={secService} alt="Website maintenance" title="Website maintenance" />
                  </div>
                </>
              )
            }

          </div>

        </div>

        <div className="experience-user">
          <div className="experience-user-sect experience-user-sect1">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724844146/punto.e9c4e937f8bb841bdfd2_1_v4qamu.png
" alt="Web development" title="Web development" />
          </div>
        </div>

        <div className="how-we">
          <h3>How We Works</h3>
          <h2>3 Easy Steps</h2>
          <div className="step-card">
            <div className="step-box">
              <div className="step-img">
                <img src={setting} alt="Choose the Services" title="Choose the Services" />
              </div>
              <div className="step-head">
                <h4>Choose the Services</h4>
                <p>
                  Reaserch, Decide which services to <br /> purchase based on
                  your needs.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="step-img">
                <Image src={docu} alt="Give us your Requirement" title="Give us your Requirement" />
              </div>
              <div className="step-head">
                <h4>Give us your Requirement</h4>
                <p>
                  Give us requirement during our <br /> strategic kickoff
                  meeting.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="step-img">
                <Image src={sign} alt="Relax and Rest" title="Relax and Rest" />
              </div>
              <div className="step-head">
                <h4>Relax and Rest</h4>
                <p>
                  Do what you love, and we’ll obtain <br /> the best result for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="top-chose">
          <h3>


            Services provided by Kushel Digi Solution <br /> during  Web Development


          </h3>
          <p className="reason">

            The same fundamental phases are often followed in the entire flow of the website design process. The most typical services that Kushel Digi Solution offers are listed below.

          </p>
          <div className="card-son">
            <div className="business-card">
              <div className="business-box business-box3 relative text-center cursor-pointer usaCard1">
                <div className="business-card-img bus-card-img1">
                  <Image src={track} alt="Make a decision about your website" title="Make a decision about your website" />
                </div>

                <h5>Make a decision about your website's architecture, framework, and navigation:</h5>
                <p>

                  This entails determining the general structure and navigation of your website. Generally, Kushel Digi Solution approaches this procedure with consideration for the needs of your end user, be it external clients or staff members.


                </p>
              </div>
              <div className="business-box business-box3 relative text-center cursor-pointer usaCard1">
                <div className="business-card-img bus-card-img1">
                  <Image src={admi} alt="Choose your website" title="Choose your website" />
                </div>

                <h5>Choose your website's optimal code language: </h5>
                <p>

                  JavaScript, PHP, and HTML are a few of the more popular coding languages. Multiple languages can be utilized to create efficient websites, thus often the choice of coding language is more based on the process that your website developer wants to use.

                </p>
              </div>
            </div>
            <div className="business-card">
              <div className="business-box business-box3 relative text-center cursor-pointer usaCard1">
                <div className="business-card-img bus-card-img1">
                  <Image src={admi1} alt="Write code for your website" title="Write code for your website" />
                </div>

                <h5>Write code for your website's backend</h5>
                <p>

                  Because it offers functions that are critical to the user experience, the website's backend acts as its cornerstone. For instance, databases, application programming interfaces (APIs), and other components could make up the website's back end.

                </p>
              </div>
              <div className="business-box business-box3 relative text-center cursor-pointer usaCard1">
                <div className="business-card-img bus-card-img1">
                  <Image src={admi2} alt="Create the user interface and user experience for the front end:" title="Create the user interface and user experience for the front end:" />
                </div>

                <h5>Create the user interface and user experience for the front end:</h5>
                <p>

                  Your website's front end is powered by the user interface and user experience, but its back end is crucial to its fundamental operation. Facilitating visitor interaction should be simple, convenient, and enjoyable.

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ben-da">
          <h3>
            Benefits Of Working With Us <br />
            To Build Your Website
          </h3>
          <p>
            A quality website offers several chances to demonstrate your
            authenticity. When you choose us, you can relax knowing that we'll
            take care of your website's design and development needs as well as
            SEO services to improve website ranking.
          </p>

          <img className="ben-img" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724844335/vertical.036b19ce6d8d5d31e526_1_tihxl4.png" alt="Benefits Of Working With Us" title="Benefits Of Working With Us" />
          <Link href="/contact-us">
            <button>
              Request A Call{" "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 24L9.8625 21.9L18.2625 13.5H0V10.5H18.2625L9.8625 2.1L12 0L24 12L12 24Z" fill="white" /> </svg>
            </button>
          </Link>
        </div>

        <div className="development-process dine-1234">
          <h3>Our development process</h3>
          <p>
            Our process ensures that an interface is seamless for the end-user
            to become familiar with and competent in using during the first
            contact they make. The agile approach makes it intuitive for users
            to achieve their objectives and easy to recall on subsequent visits.
            Our designers work with developers to make the attributes stand out
            by turning the usability to the max.
          </p>

          <Image src={process2} alt="our development process" title="our development process" />

          {/* mobile view image */}
          <div className="mobileview-imgg">
            <Image src={ProcessMobView1} alt="our development process" title="our development process" />
            <Image src={ProcessMobView2} alt="our development process" title="our development process" />
            <Image src={ProcessMobView3} alt="our development process" title="our development process" />
            <Image src={ProcessMobView4} alt="our development process" title="our development process" />
            <Image src={ProcessMobView5} alt="our development process" title="our development process" />
          </div>

        </div>

        <div className="home5     poty poty1">
          <div className="home51 px-24 dine-1234">
            <div className="home511 text-center ">
              <h2 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h2>
            </div>


            <div className="homeswar mt-14">
              <h4>We create success stories.</h4>
              <h3>Website Development Portfolio</h3>
              <div className="homeswar-side mt-5">
                <div className="homeswar-flex">
                  <div className="homeswar-card homeswar-card9 ">
                    <div className="homeswar-sect">
                      <h5>SUMMER-READY SKIN</h5>
                      <p>
                        Hydrate and plumb with the <br />
                        super serum duo
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>


                      <a target="_blank" href="https://skknbykim.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card10">
                    <div className="homeswar-sect">
                      <h5>
                        CREATE THE REMARKABLE <br /> DIMENSIONS WITH MPM
                      </h5>
                      <p>
                        Connecting people across the globe.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>

                      <a target="_blank" href="https://mpmoverseas.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card11">
                    <div className="homeswar-sect">
                      <h5>DOLIWALA EVENTS & WEDDING</h5>
                      <p>
                        Solution for all weddings and corporate events management and entertainment.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>

                      <a target="_blank" href="https://www.doliwala.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="homeswar-flex">
                  <div className="homeswar-card homeswar-card12 ">
                    <div className="homeswar-sect">
                      <h5>SPINNING</h5>
                      <p>
                        Bring the studioexperience homewith <br /> the original indoor cycling brand.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>


                      <a target="_blank" href="https://spinning.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card13">
                    <div className="homeswar-sect">
                      <h5>MIX IT UP</h5>
                      <p>
                        Find your look for your iphone 14
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>

                      <a target="_blank" href="https://speckproducts.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                  <div className="homeswar-card homeswar-card14">
                    <div className="homeswar-sect">
                      <h5>DISCOVER YOUR BETTER</h5>
                      <p>
                        With a daily routine customized to your <br /> wellness goals.
                      </p>
                    </div>
                    <div className="homeswar-sect1">

                      <button>Details</button>

                      <a target="_blank" href="https://www.bulletproof.com/" rel="noopener">
                        <p>visit site</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home52 w-full text-center"></div>
        </div>

        <div className="indu-s dine-1234">
          <h3>INDUSTRIES WE SERVE</h3>
          <p>
            We have the expertise and skills to serve a wide range of industries
            and meet their requirements of web & mobile development on any
            scale. Our team has years of experience in delivering projects for
            clients/businesses across industry verticals.
          </p>
          <div className="indu-fard mt-8">
            <div className="indu-card">
              <div
                className="indu-box"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img src={hovered ? posis10 : dilkush} alt="Healthcare & Wellness" title="Healthcare & Wellness" />
                <p>Healthcare & Wellness</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
              >
                <img src={hovered2 ? posis2 : dec1} alt="Real Estate" title="Real Estate" />
                <p>Real Estate</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
              >
                <img src={hovered3 ? posis3 : dec2} alt="Software & Internet Marketing" title="Software & Internet Marketing" />
                <p>IT, Software & Internet Marketing</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered4(true)}
                onMouseLeave={() => setHovered4(false)}
              >
                <img src={hovered4 ? posis4 : dec3} alt="Finance & Banking" title="Finance & Banking" />
                <p>Finance & Banking</p>
              </div>
            </div>
            <div className="indu-card">
              <div
                className="indu-box"
                onMouseEnter={() => setHovered5(true)}
                onMouseLeave={() => setHovered5(false)}
              >
                <img src={hovered5 ? posis5 : dec4} alt="Government & Public" title="Government & Public" />
                <p>
                  Government & Public <br /> Sector Enterprises
                </p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered6(true)}
                onMouseLeave={() => setHovered6(false)}
              >
                <img src={hovered6 ? posis6 : dec5} alt="Travel & Tour" title="Travel & Tour" />
                <p>Travel & Tour</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered7(true)}
                onMouseLeave={() => setHovered7(false)}
              >
                <img src={hovered7 ? posis7 : dec6} alt="Retail" title="Retail" />
                <p>Retail</p>
              </div>
              <div
                className="indu-box"
                onMouseEnter={() => setHovered8(true)}
                onMouseLeave={() => setHovered8(false)}
              >
                <img src={hovered8 ? posis8 : dec7} alt="SPORTS" title="SPORTS" />
                <p>SPORTS ( outdoor & indoor )</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Certified /> */}

        <div className="home9 mb-12 home278">
          <div className="home91 px-24 dine-1234">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">Frequently Asked<br /> Questions</h2>
            </div>
            <div className="home912 FAQ-1">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Why Kushel Digi for US web development?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Approximately 89% of consumers prefer to browse websites before making a purchase, according to recent research. Therefore, websites can be a great way to increase the number of people who see your business.

                      A well-designed website can boost sales, enhance brand awareness, and draw in new customers for the company. A seasoned web development firm understands how to make a website that is easy to use and converts effectively. Your website can be made to be both user- and search engine-friendly by Kushel Didi Solutions' team of skilled website developers, graphic designers, content writers, and SEO specialists.


                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What sets Kushel Digi apart in web development?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Kushel Digi differentiates itself through unwavering dedication to innovation, client-centric practices, and a proficient team committed to delivering customised, high-quality solutions.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How does Kushel Digi ensure cutting-edge solutions?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Kushel Digi ensures cutting-edge solutions by staying abreast of the latest technologies, incorporating industry best practices, and maintaining an unwavering focus on client satisfaction.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Key factors for choosing a web development provider?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      When selecting a web development provider, it's essential to consider factors such as expertise, client reviews, and alignment with your business needs and goals.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Insights into the latest USA web development trends?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Stay informed about the latest trends in USA web development by exploring industry publications, participating in conferences, and actively engaging with online communities for valuable insights.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <ContactForm notify={notify} />


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

export default WebDevelopmentUSA;
