"use client"
import React, { useEffect } from 'react'

import arrow4 from "../../public/assets/arrow4.png";
import conjun from '../../public/assets/conjun.png';
import Link from 'next/link';
// import { NavLink } from "react-router-dom";
import trackent1 from "../../public/assets/trackent1.png";
import solenoidfff from "../../public/assets/solenoidfff.png";
import soling1 from '../../public/assets/soling1.jpg';
import soling2 from '../../public/assets/soling2.jpg';
import soling3 from '../../public/assets/soling3.jpg';

import img2 from "../../public/assets/1200x630wa (1) 1.png";
import img3 from "../../public/assets/circle.png";
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
import hh10 from "../../public/assets/hh10.png";
import hh12 from "../../public/assets/hh12.png";
import hh13 from "../../public/assets/hh13.png";
import hh14 from "../../public/assets/hh14.png";

import hh9 from "../../public/assets/hh9.png";
import pru3 from '../../public/assets/pru3.png';
import opqweeeeeee from "../../public/assets/opqweeeeeee.png";
import opqweeeeeee2 from "../../public/assets/opqweeeeeee2.png";
import opqweeeeeee3 from "../../public/assets/opqweeeeeee3.png";
import madlogooooo from "../../public/assets/madlogooooo.png";
import mad5 from "../../public/assets/mad5.png";

import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import Image from 'next/image';
import '../globals.css'
const Solenoid = () => {


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
         title: 'Kushel Digi Solutions Case Study- solenoid-ninja',
         description:"Explore the Kushel Digi Solutions case study on Solenoid Ninja: Discover how expert UX/UI design and website development enhanced their digital presence."
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
            <Image src={pru3} className='pru3'  alt="img"></Image>
            <p className="shoots_premium">
              <span className="heightlisght_premium"> Given that </span>{" "}
               the materials market is highly volatile, we are currently facing extended lead times beyond the usual duration.
            </p>
            <h3>Technologies Used</h3>
            <div className="main-box-logic flex">
              <Image src={opqweeeeeee} id="sim" alt="img"></Image>
              <Image src={opqweeeeeee2} id="rotat" alt="img"></Image>
            </div>
          </div>
          <div className="right-section-kids">
            <Image src={solenoidfff} id="total-group" alt="img"></Image>
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
                    Materials market volatility has led to extended lead times. Solenoid Ninja, in collaboration withc <span>MadFish </span>  Solutions, enhances your access to expertise and innovation. Elevate your procurement experience with us. Experience innovation like never before, backed by our partnership with MadFish Solutions.

                    </p>
                  </div>
                </div>
                <div className="MadFish-back2">
                  <Image src={mad5} alt="MadFish" />
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
            <Image src={hh9} id="pads-cats" alt="img"></Image>
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
          <Image src={hh10} id="gang" alt="img" />
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
              Solenoid Ninja was born out of a passionate engineer's desire to simplify and enhance the world of solenoid valves. Fueled by a deep understanding of industrial automation and a commitment to innovation, Solenoid Ninja set out to provide a comprehensive online platform that offers not only a wide range of high-quality solenoid valves but also valuable expertise and guidance. With a dedication to serving diverse industries and solving intricate fluid control challenges, Solenoid Ninja quickly established itself as a trusted source of solenoid solutions.

              </p>
          
            </div>
          </div>
          <div className="step-images flex items-center justify-center mt-20">
            <Image className="stepback solenoid-stepback" src={hh13} alt="stepback" />
            <Image className="stepback1 solenoid-stepback1" src={hh12} alt="stepback1" />
          </div>
        </div>




        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>
              Challenges  & Solutions
            </h3>
          </div>
          <div className="challenge-story2 flex">
            <div className="challenge-box">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Solenoid Ninja encountered various challenges on its path to becoming a prominent solenoid valve provider. They encompassed navigating the complexities of the constantly evolving industrial automation landscape, managing supply chain disruptions, and maintaining consistent product quality. Moreover, establishing a robust online presence and fostering trust within a diverse customer base were critical challenges in an intensely competitive market. However, Solenoid Ninja's unwavering commitment to innovation and customer satisfaction empowered the company to overcome these obstacles and prosper.
                  </p>
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
                  In response to the challenges at hand, Solenoid Ninja adopted a multifaceted approach. First, they diversified their product range, expanding to encompass a wide variety of solenoid valves tailored to meet the needs of diverse industries. Additionally, they streamlined their supply chain management, implementing strategies to mitigate disruptions and ensure on-time deliveries. 
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Diversified product range	

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Streamlined supply chain

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Quality assurance


                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Online expertise

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="kick-start kick-start22">
          <div className="kick-first kick-first222">
        
            <div className="kickds">
                <Image className="kick_mart" src={trackent1} alt="kick5" />
            </div>
          </div>
          <div className="kick-second kick-second222 relative">
          
            <Image className=" relative z-10 about162 pick222" src={hh14} alt="pick" />
          </div>
        </div>

        <div className="azib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                Solenoid Ninja's dedication to diversifying its product range, streamlining its supply chain, and maintaining product quality has led to increased customer satisfaction, reduced lead times, and a stronger position as a trusted solenoid valve provider in the competitive industrial automation market.
                </p>
                
                <div className="azib-tech">
                    <h3>Technologies Used</h3>
                    <Image className="conjun" src={opqweeeeeee3} alt="conjun" />
                </div>
              </div>
            </div>

              <div className="azib-images flex items-center justify-center">
                  <Image className='soling1' src={soling1} alt="soli" />
                  <Image className='soling1' src={soling2} alt="soli" />
                  <Image className='soling1' src={soling3} alt="soli" />
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
          <h4>Sandeep Sharma</h4>
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
          <Link href="/contact-us"><button>
              Request A Call{" "}
              <Image width={13} className=" inline ml-2" src={arrow4} alt="ml" />
            </button></Link>
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
  )
}

export default Solenoid