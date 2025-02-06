"use client"
import React, { useState, useEffect } from "react";
import pick2 from "../../public/assets/pick2.png";
import angrag from "../../public/assets/angrag.png";
import stepback from "../../public/assets/stepback.png";
import stepback1 from "../../public/assets/stepback1.png";
import kick5 from "../../public/assets/kick5.png";
import arrow4 from "../../public/assets/arrow4.png";
// import { NavLink } from "react-router-dom";
import rel1 from "../../public/assets/rel1.png";
import rel2 from "../../public/assets/rel2.png";
import rel3 from "../../public/assets/rel3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import trimmer from '../../public/assets/trimer.svg'
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
// import "../components/css/app2.css";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import omis from '../../public/assets/omis.svg';
import omis1 from '../../public/assets/omis1.svg';
import omis2 from '../../public/assets/omis2.svg';
import lies from '../../public/assets/lies.svg';
import kpingq1 from '../../public/assets/kping1.svg';
import kpingq11 from '../../public/assets/kping.svg'
import amk1 from '../../public/assets/amk1.svg';
import amk2 from '../../public/assets/amk2.svg';
import crazy1 from '../../public/assets/crazy1.svg'
import crazy2 from '../../public/assets/crazy2.svg'
import fs from '../../public/assets/fs.svg';
import lojj from '../../public/assets/lojj.svg';
import ep44 from "../../public/assets/ellipse44.png"
import Image from "next/image";
import Link from "next/link";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import '../globals.css'
const CrazyCMS = () => {
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
    title: 'Kusheldigi.com/crazyCMS',
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
            <div className="first-kick-pads incheingh">
              <div className="left-section-kids">
                <img src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1725976849/favicon_1_1_iprzaf.svg"} alt="img"></img>
                <p className="shoots_premium kooo">
                My Crazy Simple CMS is an user-friendly content management system which is designed to simplify website management for businesses of all sizes. It emowers users to create, edit, and manage content without any technical expertise.

                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <Image src={omis} id="sim" alt="img"></Image>
                  <Image className="pokli" src={omis1} id="rotat" alt="img"></Image>
                  <Image src={omis2} id="rotat" alt="img"></Image>
                </div>
              </div>
              <div className="right-section-kids">
                <Image className="trimmer" src={trimmer} id="total-group" alt="img"></Image>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="MadFish_press">
              <div className="MadFish-back crazy-back">
                <div className="MadFish-back1">
                  {/* <div className="MadFish_press_head">
                <img src={madlogooooo} alt="madlogooooo" />              
              </div> */}
                  <div className="MadFish_press_para crazy_cms">
                    {/* <p>
                  Elevate your shooting comfort with KICK-EEZ, offering premium
                  American-made recoil pads and accessories. <span>MadFish</span>  Solutions
                  played a key role in bringing KICK-EEZ to life. Together,
                  we’ve redefined shooting comfort and precision, setting new
                  industry standards.
                </p> */}
                    <h3>Manage Your Website 
                    </h3>
                    <h3>with Ease – No Tech</h3>
                    <h3><span>Skills Required!</span></h3>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <Image src={lies} alt="MadFish" />
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
            <div className="vl-chic vl-chic33">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Inter</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Desporm</p>
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
            <img src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1725980437/Group_1000006505_nfqk7l.svg"} id="gang" alt="img" />
          </div>
        </div>{" "}



        {/* <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
           
            <div className="kickds">
              <img className="kick_mart" src={kick5} alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <div className="about165">
              <img
                className="absolute about161 animate__animated animate__pulse animate__infinite"
                src={angrag}
                alt=""
              />
            </div>
            <img
              className=" relative z-10 about162 pick222"
              src={pick2}
              alt="aa"
            />
          </div>
        </div> */}

        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>

                My Crazy Simple CMS was created for ease and smoothness in managing websites by non-technical users and small businesses. This is supposed to be a platform where one may empower users to manage their websites without requiring any sort of coding, which in most circumstances is absent in the complex options available in CMS. They have chosen Kushel Digi Solutions to design and develop a scalable, intuitive CMS that could appeal to both beginners and advanced users.

              </p>

            </div>
          </div>
          {/* <div className="step-images flex items-center justify-center mt-20">
            <img className="stepback" src={stepback1} alt="stepback" />
            <img className="stepback1" src={stepback} alt="stepback1" />
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
                    Designing an intuitive interface that would consider both the needs of the beginners and advanced users, without overwhelming either group.


                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Ensuring the platform was highly scalable for more users and increased websites to be managed.



                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Combining the powers of Python that allow more flexibility on the backend with the strong performance and functionality of Laravel.



                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Creating a robust content editor that offers flexibility but remains easy to use, even for users with no technical background.


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
                    We developed a user-centric interface that focuses on simplicity that can allow users to manage their websites easily along with advanced features for power users

                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    The CMS has been developed using Python and Laravel to ensure scalability of architecture, complementing the growth in the user base of the platform.
                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    We have included a drag-and-drop content editor where no coding is needed. This gives a user total control over design and content on their website.
                  </p>

                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                    Our UX/UI team worked in such a way that the platform's dashboard should be intuitive, clean, and easy to navigate that can ensure  seamless user onboarding and management.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* <div className="goals-statgy">
          <h2>Goals and Strategies</h2>
          <ul>
            <li>Make it easier for customers to reach our company.</li>
            <li>
            Minimize misunderstandings about returns, exchanges, especially when choosing replacement products.
            </li>
            <li>Enhance the efficiency and effectiveness of our client service.
</li>
          </ul>
        </div> */}

        <div className="bg_crazy">
          <div className="bg_cms">
            <div className="bg_left">
              <Image className="kpiu" src={fs} alt="lojj" />
            </div>
            <div className="bg_right">
              <Image src={lojj} className="llgg" alt="lojj" />
              <Image src={ep44} className="ep44" alt="" />
            </div>
          </div>
        </div>

        {/* <div className="bg-video-wrap">
          <video src="/static/images/rima.mp4" loop muted autoPlay></video>
          <div className="overlay"></div>
          <img className="kini" src={kick5} alt="aa" />
        </div> */}
        <div className="azib kickazib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">04</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                  This led to the development of My Crazy Simple CMS: an impressively user-friendly platform that saw user adoption increase by 30% in just a few months since the launch date.The combination of Python and Laravel ensured scalability, allowing the platform to seamlessly handle a growing user base Users have praised the intuitiveness in design and find it easy to navigate and manage the websites very easily without requiring technical expertise. The result of this project was a successful simplification of yet a powerful CMS which made the management of websites as easy as possible for the user.
                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <div className="fopping">
                    <div className="spoing">
                      <Image src={kpingq1} alt="" />
                      <p>Python</p>
                    </div>
                    <div className="spoing kint">
                      <Image src={kpingq11} alt="" />
                      <p>Laravel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <Image className="sohhh" src={crazy1} alt="azib" />
              <Image className="sohhh" src={crazy2} alt="azib" />
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

export default CrazyCMS;
