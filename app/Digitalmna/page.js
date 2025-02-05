"use client"
import React,{useState,useEffect} from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import arrow4 from "../../public/assets/arrow4.png";

import rel1 from "../../public/assets/rel1.png";
import rel2 from "../../public/assets/rel2.png";
import rel3 from "../../public/assets/rel3.png";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import pt4 from "../../public/assets/mnaServices-3 1.png";
import pt5 from "../../public/assets/mnaHome Page 1.png";
import pt6 from "../../public/assets/mnaAbout us.png";
import img4 from "../../public/assets/Group 1000004718.png";
import img5 from "../../public/assets/Group 1000004715.png";
import img6 from "../../public/assets/Group 1000004716.png";
import protruckss from "../../public/assets/digitalmna1.png";
import img13 from "../../public/assets/Group 1000006500 (1).png";
import hh5 from "../../public/assets/mnncolurplates.png";
import mnop1 from "../../public/assets/mnop1.png";
import hh6 from "../../public/assets/mnadetail12.png";
import hh7 from "../../public/assets/mnadetail13.png";
import hh8 from "../../public/assets/mna123.png";
import pru2 from "../../public/assets/innermnalogoimgsmall.png";
import opqweeeeeee2 from "../../public/assets/opqweeeeeee2.png";
import opqweeeeeee3 from "../../public/assets/opqweeeeeee3.png";

import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import Image from "next/image";
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
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


  return (
    <>
    <Navbar/>
    {/* <helmet> */}
    <link rel="canonical" href="https://www.kusheldigi.com/Digitalmna"/>
    <title>Kushel Digi Solutions Case Study- Digitalmna</title>
        <meta
          name="description"
          content="Kushel Digi Solutions delivered exceptional UX/UI design and website development for Digitalmna, enhancing user experience and driving digital growth."
        />
    {/* </helmet> */}
      <div className="ser-main">
        <div>
          <div className="side-bg-trio">
            <div className="first-kick-pads">
              <div className="left-section-kids">
                <Image src={pru2} className="pru12" alt="img"></Image>
                <p className="shoots_premium">
                  <span className="heightlisght_premium"> DigitalMnA</span>
                  is a full-service Merger and acquisition company helping
                  companies sell and buy assets by creating value
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  {/* <img src={opqweeeeeee} id="sim" alt="img"></img> */}
                  {/* <img src={opqweeeeeee2} id="rotat" alt="img"></img> */}
                  <img src="https://res.cloudinary.com/ecommerce-website/image/upload/v1725955530/Group_1171276002_fjj8zz.svg" alt="alt" />
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
                  <p className="roboto-tip">Wix madefor Display</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Wix madefor Display</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Wix madefor Display</p>
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
                Digital MNA approached Kushel Digi Solutions with the ambition of rebuilding their website in order to attain an enhanced online presence and user experience. Moving forward with progressive thinking toward the provision of digital solutions, they required a modern, scalable, and performance-oriented website that could reflect commitment to digital transformation. What they wanted was an intuitive and aesthetic user interface that echoed their diverse client base.


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
                  Old design of the website did not represent the innovative brand identity of Digital MNA.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Poor navigation and lack of UI/UX strategy led to low engagement of users on the website.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Low performance of the website and lack of scalability impacted the user experience on all devices.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Need for a technology solution to meet the needs for future growth without losing any speed or functionality.

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
                  Implemented modern, responsive design with Next.js for best performance and scalability.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Designed a user-based UI/UX interface to enhance the level of navigation performance in increasing user experience.

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Optimized the website for speed and better performance on different devices. 

                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Worked closely with Digital MNA in service design to fit into their vision and business objectives.


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
                Digital MNA's newly designed website came out even better than expected. With Next.js, this website loads much faster and has become highly scalable to provide a proper user experience on any type of device. An intuitive UI/UX design turned out way more appealing compared to earlier experiences, increasing site traffic by 40% and conversion rates by 25% in the first quarter after launching. Digital MNA now positions itself as one of the top service providers for digital transformation services, while its online presence portrays this quite well to further cement their brand reputation.


                </p>
             
                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <img className="conjun conki" src="https://res.cloudinary.com/ecommerce-website/image/upload/v1725955530/Group_1171276002_fjj8zz.svg" alt="conjun" />
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
