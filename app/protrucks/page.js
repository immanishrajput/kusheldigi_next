
"use client"
import React from "react";
import Link from "next/link";

import '../globals.css'

import arrow4 from "../../public/assets/arrow4.png";

import conjun from "../../public/assets/conjun.png";

import trackent from "../../public/assets/trackent.png";

import pt4 from "../../public/assets/pt4.jpg";

import pt5 from "../../public/assets/pt5.jpg";
import pt6 from "../../public/assets/pt6.jpg";
import img2 from "../../public/assets/1200x630wa (1) 1.png";
import img3 from "../../public/assets/circle.png";
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import protruckss from "../../public/assets/pro-trucks-s.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
import hh5 from "../../public/assets/hh5.png";
import mnop1 from "../../public/assets/mnop1.png";
import hh6 from "../../public/assets/hh6.png";
import hh7 from "../../public/assets/hh7.png";
import hh8 from "../../public/assets/hh8.png";
import pru from "../../public/assets/pru.png";
import opqweeeeeee from "../../public/assets/opqweeeeeee.png";
import opqweeeeeee2 from "../../public/assets/opqweeeeeee2.png";
import opqweeeeeee3 from "../../public/assets/opqweeeeeee3.png";
import matsection from "../../public/assets/matsection.png";
import madlogooooo from "../../public/assets/madlogooooo.png";
import mad2 from "../../public/assets/mad2.png";

import Image from "next/image";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"


const ProTrucks = () => {



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
    <link rel="canonical" href="https://www.kusheldigi.com/pro-track"/>
    <title>Kushel Digi Solutions Case Study- pro-track</title>
        <meta
          name="description"
          content="Kushel Digi Solutions crafted a dynamic website for Pro-Track, enhancing user experience and showcasing their services, driving online engagement and growth."
        />
    {/* </helmet> */}
      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <Image src={pru} className="pru" alt="img"></Image>
                <p className="shoots_premium">
                  <span className="heightlisght_premium"> Pro Trucks,</span> a
                  family-owned business, is here to turn your dream vehicle into
                  a reality. We specialize in crafting unique, functional, and
                  amazing rides. From mild to wild, we're here to bring your
                  vision to life!
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <Image src={opqweeeeeee} id="sim" alt="img"></Image>
                  <Image src={opqweeeeeee2} id="rotat" alt="img"></Image>
                </div>
              </div>
              <div className="right-section-kids">
                <Image src={protruckss} id="total-group" alt="ProTrucks bussiness"></Image>
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
                      Pro Trucks, a family-owned business, makes your dream
                      vehicle a reality, from mild to wild. The Pro Trucks
                      program, backed by <span>MadFish</span> Solutions, ensures
                      you experience excellence and innovation. Choose us for
                      your automotive dreams, and drive your dreams with Pro
                      Trucks and MadFish Solutions.
                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <Image src={mad2} alt="MadFish" />
                </div>
              </div>
            </div>

            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img src={img4} id="ux-safari" alt="img"></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img src={img5} id="web-safari" alt="img"></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img src={img6} id="qa-safari" alt="img"></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *********************************************** */}
        <div className="third-wireframe-homie-PRO-TRUCKS">
          <div className="inner-third-local-PRO-TRUCKS">
            <p>Wireframes</p>
            <div className="three-section-lab-PRO-TRUCKS">
              <div className="single_big-PRO-TRUCKS">
                <Image src={mnop1} id="pads-cats" alt="img"></Image>
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
                  <p className="roboto-tip">Gilroy</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Montserrat</p>
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
        </div>{" "}
      
        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>
                {" "}
                Pro Trucks and Cars, a thriving family business, renowned for
                its aftermarket performance vehicle expertise, is now embracing
                the digital era under the leadership of Luke Kowalski. This
                project, initiated on December 5, 2022, with a target completion
                date of February 28, 2023, includes E-commerce site design,
                BigCommerce setup, data import, Zoho sales automation, and SEO
                services.
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
                  <p>
                  Amidst remarkable success, the business aspires to leap into the digital realm. Luke's unwavering dedication to this transition is evident as he's enlisted a social media specialist to bolster his brand's online presence.

                  </p>
                </div>
              </div>
            </div>
            <div className="challenge-box challenge-box3 ml-3 challenge-box2">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <p>
                  We're embarking on creating a store with a distinctive design. The Data Here to There plugin will seamlessly import all essential data, covering categories, products, images, pricing, and specifications. In addition, we're integrating the innovative MadFish Launch Pack, which encompasses:

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Comprehensive BigCommerce training.
</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>In-depth competitive analysis.</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>Precise SEO keyword analysis.</p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>The development of 20 SEO-centric category descriptions.
</p>
                </div>
                <div className="challenge-list1">
                  <p>
                    -The next steps involve the installation of an email marketing program, the utilisation of Google Analytics and Google Search Console, and the creation of a keyword-rich email template for marketing. We’re developing an SEO project using our in-house tools customised for SE Ranking. To ensure effective marketplace management, we’re formulating a detailed plan along with regular reviews at 30, 60, and 90-day checkpoints. During the initial year, we'll conduct quarterly reviews for continuous refinement. In the realm of client engagement, we're also setting up Zoho CRM Plus, offering email marketing, marketing automation, chatbots, and customer support chat – a powerful tool with significant future revenue potential.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
            <div className="kickds">
              <Image className="kick_mart" src={trackent} alt="kick5" />
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
        <div className="azib prozib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                The incorporation of Zoho CRM Plus and website optimization has significantly elevated customer-business interaction. The streamlined onboarding form adds substantial convenience for customers, resulting in a notable enhancement of the overall business experience.

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
        <div className="client-apperication">
          <h2>Client Appreciation</h2>
          <p>
            “We would like to express our sincere appreciation to the diligent Affle team for your steadfast dedication, patience, and consistent assistance. The application has been well-received, with favourable feedback, and we are fully dedicated to its continual improvement and progression as we look forward to our sustained expansion in the future.
”
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

export default ProTrucks;
