"use client"
import React, { useState, useEffect } from "react";
import arrow from "../../public/assets/arrow.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import full from "../../public/assets/full.png";
import full1 from "../../public/assets/full1.png";
import full2 from "../../public/assets/full2.png";
import full3 from "../../public/assets/full3.png";
import pathji from "../../public/assets/pathji.png";
import PortCard from "../card/PortCard";
import a9 from "../../public/assets/a9.png";
import pads from "../../public/assets/pads.png";
import bds from "../../public/assets/bds.png";
import jones from "../../public/assets/jones.png";
import bhojan from "../../public/assets/bhojan.png";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import ustu from "../../public/assets/ustu.png";
import UIUXimg from "../../public/assets/UIUXimg.png";
import stand from "../../public/assets/stand.png";
import howux from "../../public/assets/howux.png";
import Image from "next/image";
import '../globals.css'
import Footer from "../COMMON/Footer";
// import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm from "../COMMON/ContactForm";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import Navbar from "../COMMON/Navbar";
const Uiux = ({notify}) => {
  let heading = "www.2ndAmendment.com";
  let heading1 = "www.kickeez.com";
  let heading2 = "www.protrucks.com";
  let heading3 = "www.jonesbuilt.com";
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1100px)").matches) {
      setPerPage(2);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 520px)").matches) {
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
     {/* <Helmet> */}
        <title>KushelDigi: UI/UX Design Services | Leading UI UX Design Company</title>
        <meta
          name="description"
          content="We Provide one of the best UI UX design services with unique and creative designs that transform your website performance to new hights"
        />
        <link rel="canonical" href="https://www.kusheldigi.com/ui-ux-design"/>
      {/* </Helmet> */}
      <div className="ser-main">
        <div className="ser1 serji  serji2 uiux_bg">
          <div className="uiux_padd px-24 pt-12 pb-4 flex justify-between dine-123">
            <div className="ser111 uiux-btn">
              <h2 className="seru">CUSTOM WEB DESIGN COMPANY</h2>
              <h1 className="blue">Strategic Brand Communication with custom web design</h1>
              <a href="contact-us" className="rect-first-btn"><button className="lets_talking"><h5>Lets get started</h5>
            <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/>
                  </svg>
            </button>
            </a>
            </div>
            <div className="ser112 uiuximggg">
              <Image src={UIUXimg} alt="UI/UX design" title="UI/UX design" />
            </div>
          </div>
        </div>

        <div className="experiencedji">
          <div className="first-experiencedji">
            <h2>
              Get Experienced UI/UX Design <br />
              Services!
            </h2>
            <div className="para-exp">
              <p className="mt-2">
                We have been able to streamline and improve the interaction
                between the target customers of our clients' businesses and
                their online presence thanks to our expertise in user experience
                design (UX).
                <p className="mt-3">
                  Our designs provide a distinctive digital experience, whether
                  they are used in a website, mobile application, email
                  campaign, social media campaign, or even an ad banner. Our UX
                  has made it possible for our companies to build appealing
                  online presences, which has increased brand value and sparked
                  customer loyalty.
                </p>
              </p>
            </div>
             <Link href="/contact-us">
            <button>
              Learn More{" "}
              <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/> </svg>
            </button> </Link>
          </div>
          <div className="second-experiencedji">
            <Image src={ustu} alt="UI/UX design services" title="UI/UX design services" />
          </div>
        </div>

        <div className="uiux-process">
          <h2>Our UI/UX Process</h2>
          <p>
            We Take A User-Centric Approach To UI/UX Design, Which Means That We
            Put The Needs Of Your Users First. Here Are The Significant Steps Of
            Our UI/UX Design Process:
          </p>
          <div>
            <Image src={stand} alt="process" title="process" />
          </div>
        </div>

        <div className="perfect-choice dine-1234">
          <h2>
            Why Is kushel digi A Perfect Choice <br /> For UI/UX Design
            Services?
          </h2>
          <p className="perf-p">
            With years of experience in the field and a team of talented UI/UX
            designers, we are the perfect choice for all your UI/UX design
            needs. Look at some of our core strengths and benefits below to see
            why TheJointApps is the right choice for you:
          </p>
          <div className="mt-20">
            <Splide
              aria-label="Our Services"
              options={{
                perPage,
                perMove: 1,
                autoplay: true,
                pauseOnHover: true,
                type: "loop",
                interval: 2000,
                drag: true,
              }}
            >
              <SplideSlide>
                <div className="business-box business-box20 relative text-center cursor-pointer">
                  <div className="business-card-img">
                    <Image src={full} alt="Excellent User Experience" title="Excellent User Experience" />
                  </div>
                  <h5>Excellent User Experience</h5>
                  <p>
                  After all, UI/UX is all about creating an excellent user experience. And that’s something we surpass With years of experience and UX/UI best practices, we can help you create a user-friendly port and user experience to engage and convert your target audience. 
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="business-box business-box20 relative text-center cursor-pointer">
                  <div className="business-card-img">
                    <Image src={full1} alt="Increased Engagement And Conversion Rates" title="Increased Engagement And Conversion Rates" />
                  </div>
                  <h5>Increased Engagement And Conversion Rates</h5>
                  <p>
                  After all, UX/UI is all about creating an excellent user experience, and that is something we stand out. With our years of experience and UI/UX best practices, we can help in producing a user-friendly interface and user experience to affirm and convert your target audience. 
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="business-box business-box20 relative text-center cursor-pointer">
                  <div className="business-card-img">
                    <Image src={full2} alt="Comprehensive Design Services" title="Comprehensive Design Services" />
                  </div>
                  <h5>Comprehensive Design Services</h5>
                  <p>
                    In addition to UI/UX design, we also offer eCommerce design
                    and development, wearables app design, AR/VR app design, and
                    product design services. Whatever your UI/UX needs may be,
                    The kushel digi has you covered.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="business-box business-box20 relative text-center cursor-pointer">
                  <div className="business-card-img">
                    <Image src={full3} alt="Vast Industry Expertise" title="Vast Industry Expertise" />
                  </div>
                  <h5>Vast Industry Expertise</h5>
                  <p>
                    We have worked with clients in various industries, including
                    healthcare, education, retail, and more. No matter what
                    industry you’re in, we can help you create UI/UX designs
                    tailored to your specific needs.
                  </p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>

        <div className="how-ux dine-123">
          <div className="how-ux1">
            <h2>
              How is UX design valuable to my <br /> business?
            </h2>
            <p>
              Everyone wants to be customer-focused, but websites often serve
              splintered, internal agendas that don’t resonate with the intended
              audience. Here’s your opportunity to stand out. All you have to do
              is answer the needs of your target audience on your site. Reduce
              barriers on your site to increase engagement and conversion.
              Delight your customers more and annoy them less to improve their
              satisfaction with your brand. Optimize your ecommerce checkout to
              help them convert more easily. By definition, UX design should
              help your customers—while your business gains even more.
            </p>
          </div>
          <div className="how-ux2">
            <Image src={howux} alt="UI/UX design valuable" title="UI/UX design valuable" />
          </div>
        </div>

        <div className="deliver-p dine-1234">
          <h2>How We Deliver UI & UX Services</h2>
          <p>
            A decade in design has allowed our team to perfect the process of
            delivering UI and UX services. We follow established design
            standards, workflows, and guidelines — you get the product you need,
            delivered by expert designers within the set timeframe.
          </p>

          <div className="deliver-p-img">
            <Image src={pathji} alt="UI/UX Services" title="UI/UX Services" />
          </div>
        </div>

        <div className="benifits-ui dine-1234">
          <h2>Benefits Of Our UI & UX Services</h2>
          <p className="when-p">
            When you choose our services, you get everything to realise your
            product idea properly, from experience of working with Fortune 500
            clients to design standards that will help us deliver your product
            quicker and without loss in quality.
          </p>

          <div className="benifits-ui-card">
            <div className="benifits-ui-box">
              <div className="ui-sect">
                <h4>DECADE IN DESIGN</h4>
                <p>
                  From basic event apps to scalable enterprise software for
                  Fortune 500 companies, our long-standing design team can help
                  your any idea come into being with the latest tools and tech.
                  Our well-established process and standardised approach to
                  design will ensure the final product looks and works as you
                  required.
                </p>
              </div>
            </div>
            <div className="benifits-ui-box1">
              <div className="ui-sect">
                <h4 className="text-center">ESTABLISHED IN-HOUSE STANDARDS</h4>
                {/* CHANGE THIS PARA  */}
                <p>
                Our UI/UX design services maintain rigid in-house standards to ensure quality and user-oriented solutions in every project. We are concerned with the delivery of designs that must be both pleasing to the eye and highly functional to meet your exact needs.

                </p>
              </div>
            </div>
            <div className="benifits-ui-box2">
              <div className="ui-sect">
                <h4 className="text-center">BROAD-RANGING EXPERTISE</h4>
                {/* CHANGE THIS PARA  */}
                <p>
                Our team members bring broad-ranging expertise, with extensive experience across industries on every project. From complex enterprise applications to engaging consumer interfaces, we draw upon a diverse skill set for impactful and intuitive designs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home5     poty poty1">
          <div className="home51 px-24 dine-1234">
            <div className="home511 text-center ">
              <h2 className="font-bold mb-2 mt-4">OUR PORTFOLIO</h2>
            </div>
            <div className="home512 flex flex-wrap justify-center mt-14">
              <PortCard pads={a9} heading={heading} link="" />
              <PortCard pads={pads} heading={heading1} link="/kick-eez" />
              <PortCard heading={heading2} pads={bds} link="/pro-track" />
              <PortCard heading={heading3} pads={jones} link="" />
            </div>
          </div>
         
        </div>

        <div className="how-did flex items-start justify-center">
          <div className="how-did-first">
            <Image src={bhojan} alt="UI/UX work" title="UI/UX work" />
          </div>
          <div className="how-did-second">
            <h3>How do we work?</h3>
            <div className="how-did-para">
              <p>
                We provide UX/UI and web design services that unlock your
                product value for the customer. With over ten years of online
                experience creating websites and themes, we bring the expertise
                you need and adapt our team to your plan.
              </p>
              <p>
                You are in the right place whether you already have a perfect
                pixel design or you need magic for a brand new digital image.
                Our friendly team supports you in each step of the project and
                builds it in stages as you are in complete control and approve
                the changes.
              </p>
            </div>
            <Link href="/contact-us">
            <button>
              Request A Quote{" "}
              <svg className="" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/> </svg>
            </button>
            </Link>
          </div>
        </div>

        <div className="home9 mb-12 home278">
          <div className="home91 px-24 dine-1234">
            <div className="home911 text-center">
              <h2 className="font-bold text-gray-700">Frequently Asked<br/> Questions</h2>
            </div> 
            <div className="home912 FAQ-1">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Why choose Kushel Digi Solutions for UI/UX design?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Kushel Digi Solutions excels in UI/UX design, offering a perfect blend of creativity, user-centricity, and a skilled team for crafting engaging and intuitive user experiences.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    How does Kushel Digi Solutions approach UI/UX to enhance digital products?

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Kushel Digi prioritises a user-centric approach, combining research, creativity, and a deep understanding of user behaviours to design interfaces that captivate and delight users.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    What sets Kushel Digi apart in UI/UX design, and how does it benefit clients?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Kushel Digi distinguishes itself through a commitment to innovative design thinking, client-centric practices, and a proficient team dedicated to delivering aesthetically pleasing and functional user experiences.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Key considerations when selecting a UI/UX design service provider?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    When choosing a UI/UX design provider, consider factors such as creativity, user research capabilities, and alignment with your brand values for a successful collaboration.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    Insights into the latest UI/UX trends and practices?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Stay updated on UI/UX trends by exploring industry insights, and best practices, and engaging with online communities for valuable design perspectives.
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

export default Uiux;
