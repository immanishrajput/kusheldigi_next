"use client"
import React from "react";


import arrow4 from "../../public/assets/arrow4.png";
import conjun from "../../public/assets/conjun.png";
import Link from "next/link";
// import { NavLink } from "react-router-dom";
import trackent2 from "../../public/assets/trackent2.png";
import img2 from "../../public/assets/1200x630wa (1) 1.png";
import img3 from "../../public/assets/circle.png";
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import hh15 from "../../public/assets/hh15.png";
import hh17 from "../../public/assets/hh17.png";
import hh18 from "../../public/assets/hh18.png";
import hh19 from "../../public/assets/hh19.png";
import hh20 from "../../public/assets/hh20.png";
import hh21 from "../../public/assets/hh21.png";
import hh22 from "../../public/assets/hh22.png";
import hh23 from "../../public/assets/hh23.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";

import '../globals.css'
import hh16 from "../../public/assets/hh16.png";
import pouo from "../../public/assets/pouo.png";
import opqweeeeeee from "../../public/assets/opqweeeeeee.png";
import opqweeeeeee2 from "../../public/assets/opqweeeeeee2.png";
import opqweeeeeee3 from "../../public/assets/opqweeeeeee3.png";
import madlogooooo from "../../public/assets/madlogooooo.png";
import mad3 from "../../public/assets/mad3.png";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"

import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Image from "next/image";
const Rely = () => {

  
 
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


  return (
    <>
    <Navbar/>
    {/* <helmet> */}
    <link rel="canonical" href="https://www.kusheldigi.com/rely"/>
    <title>Kushel Digi Solutions Case Study- rely</title>
        <meta
          name="description"
          content="Discover how Kushel Digi Solutions crafted an impactful website for Rely, boosting their online presence with cutting-edge design and functionality."
        />
    {/* </helmet> */}
      <div className="ser-main">
      
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <Image src={pouo} className="pru1" alt="img"></Image>
                <p className="shoots_premium">
                  <span className="heightlisght_premium">
                    {" "}
                    Rely Innovation{" "}
                  </span>{" "}
               delivers cutting-edge and user-friendly safety technology solutions, empowering both organisations and individuals to safeguard their most vital assets.
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <Image src={opqweeeeeee} id="sim" alt="img"></Image>
                  <Image src={opqweeeeeee2} id="rotat" alt="img"></Image>
                </div>
              </div>
              <div className="right-section-kids">
                <Image src={hh15} id="total-group" alt="img"></Image>
              </div>
            </div>
            {/* ........................................ */}
            <div className="MadFish_press">
              <div className="MadFish-back">
                <div className="MadFish-back1">
                  <div className="MadFish_press_head">
                    <Image src={madlogooooo} alt="madlogooooo" />
                  </div>
                  <div className="MadFish_press_para">
                    <p>
                      Find peace of mind with smart alarms powered by Rely
                      Innovation, seamlessly integrated by <span>MadFish</span>  Solutions.
                      Elevate your security to a whole new level with our
                      expertise. Choose the future of safety today and trust in
                      Rely Innovation, partnered with MadFish Solutions
                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <Image src={mad3} alt="MadFish" />
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
        
        {/* *********************************************** */}
        <div className="third-wireframe-homie-solenoid-s">
          <div className="inner-third-local-solenoid-s">
            <p>Wireframes</p>
            <div className="three-section-lab-solenoid-s">
              <div className="single_big-solenoid-s">
                <Image src={hh16} id="pads-cats" alt="img"></Image>
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
                  <p className="roboto-tip">Acumin Pro</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Lato</p>
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
            <Image src={hh17} id="gang" alt="img" />
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
              Rely Innovations, the safety solutions division of National Presto Industries, Inc., has a rich history encompassing three distinct product categories. Rusoh, with its groundbreaking Rusoh® Eliminator® fire extinguisher, revolutionised fire safety as the first self-maintained extinguisher. OneEvent Technologies provides early warning systems for potential disasters, while Rely Innovations offers unique bilingual voice and digital display carbon monoxide alarms.Rely Innovations continually innovates to empower organisations and individuals to protect what matters most through intuitive safety technology solutions.

              </p>
              
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <Image
              className="stepback solenoid-stepback1"
              src={hh18}
              alt="stepback"
            />
            <Image
              className="stepback1 solenoid-stepback1"
              src={hh19}
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
            <div className="challenge-box">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Rely Innovation has faced several challenges while striving to offer cutting-edge safety technology solutions. These challenges encompass  staying at the forefront of rapidly evolving safety technology, ensuring compliance with ever-changing industry regulations, and effectively communicating the value of its innovative products to a diverse market. Striking the right balance of innovation with market demands while maintaining a competitive edge in the safety technology sector is an ongoing challenge.                  </p>
                </div>
               
                
              </div>
            </div>
            <div className="challenge-box ml-3">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Their approach involves leveraging artificial intelligence and machine learning to optimize processes, create predictive analytics, and enhance decision-making. This ultimately empowers businesses to maintain competitiveness and agility in today’s fast-paced world. With a dedicated focus on user-centric design, Rely Innovation ensures that its solutions are effective and user-friendly, making technology accessible to a broader audience. <br />Highlighted Products:
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  OneEvent® System: Cellular refrigeration monitoring with Thermo Heartbeat™                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Rusoh® Eliminator®: Owner-maintained fire extinguisher and specialized solutions.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Carbon Monoxide Alarms: Bilingual voice alerts and digital display.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
            <div className="kickds">
              <Image className="kick_mart" src={trackent2} alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
            <Image
              className=" relative z-10 about162 pick222"
              src={hh20}
              alt="kick"
            />
          </div>
        </div>
        <div className="azib azibbb">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">04</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                Rely Innovations has achieved remarkable results through its innovative solutions, encompassing cellular refrigeration monitoring with early alerts to prevent breakdowns, groundbreaking owner-maintained fire extinguishers for specialized fire protection, and enhanced home safety with bilingual voice alerts and digital displays in their Carbon Monoxide Alarms. These solutions collectively reflect their commitment to safeguarding businesses and homes while leveraging cutting-edge technology for optimal efficiency and security.
                </p>
              
                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <Image className="conjun" src={opqweeeeeee3} alt="conjun" />
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <Image className="soling1" src={hh21} alt="soling" />
              <Image className="soling1" src={hh22} alt="soling" />
              <Image className="soling1" src={hh23} alt="soling" />
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
            <Link href="/contact-us" className="rely-btnn">
              <button>
                Request A Call{" "}
                <svg className="ml-2" width="16" height="16" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#000000"/>
                  </svg>
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

export default Rely;
