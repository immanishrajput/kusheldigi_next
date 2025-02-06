"use client"
import React, { useEffect } from "react";
import reactNativeImgg from "../../public/assets/reactNativeImgg.png";
import arrow4 from "../../public/assets/arrow4.png";
import androidSis from "../../public/assets/android-sis.png";
import arrowing from "../../public/assets/arrowing.png";
import fluting1 from "../../public/assets/fluting1.png";
import fluting2 from "../../public/assets/fluting2.png";
import fluting3 from "../../public/assets/fluting3.png";
import piston from "../../public/assets/piston.png";
import cost from "../../public/assets/cost.png";
import cost1 from "../../public/assets/cost1.png";
import cost2 from "../../public/assets/cost2.png";
import cost3 from "../../public/assets/cost3.png";
import cost4 from "../../public/assets/cost4.png";
import cost5 from "../../public/assets/cost5.png";
import lok from '../../public/assets/lok.png';
import lok1 from '../../public/assets/lok1.png';
import lok2 from '../../public/assets/lok2.png';
import lok3 from '../../public/assets/lok3.png';
import key from '../../public/assets/key.png';
import key1 from '../../public/assets/key1.png';
import keys from '../../public/assets/keys.png';
import keys1 from '../../public/assets/keys1.png';
import keys2 from '../../public/assets/keys2.png';
import pret from '../../public/assets/pret.png';
import pret1 from '../../public/assets/pret1.png';
import fantaji from '../../public/assets/fantaJi.png';
import ReactNativeFAQ from "../COMMON/ReactNativeFAQ";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm1 from "../COMMON/ContactForm1";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import '../globals.css'
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
// import { Helmet } from "react-helmet";
const Native = () => {


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
const generateMetadata = ({ params }) => ({
            title: 'Empowering Mobile Experiences: React Native Development Company',
            description: 'Kushel Digi Solutions stays is top React Js development company We specialize in developing ReactJS web applications for small to large-scale enterprises.',
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
        <div className="react-bg">
        <div className="android-back native-back react-native-app dine-123 nativee-backk">
          <div className="android-back1 native-back1">
            <p className="android-son">Expert React Consulting</p>
            
            <h1>React Native App <br /> development services</h1>
            <Link href="/contact-us"><button>
            Lets get started
            <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="white"/>
                  </svg>
            </button></Link>


          </div>
          <div className="android-back2 native-back2">
            {/* <img className="" src={refant} alt="androids" /> */}
            <Image src={reactNativeImgg} alt="react native app development services" title="react native app development services"/>
          </div>
        </div>
        </div>
        <div className="native-app  flex items-start justify-center dine-123">
          <div className="native-app1">
            <h2>React Native App
            <br/>Development
            <br/>Services</h2>
            <Image className="ftp" src={androidSis} alt="underline-design"  title="underline-design" />
            <Link className="tismart letsy letsay" href="/contact-us">
              <h5>
                Discuss your goals with us{" "}
                <svg className="ml-2" width="15" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z" fill="#21698E"/>
                  </svg>
              </h5></Link>
            <p>
              Kushel Digi Team offers React Native app development services. Our team of React Native experts can create apps from the ground up or seamlessly integrate the framework into your existing app, significantly boosting delivery speed at no additional cost.

            </p>
          </div>
          <div className="native-app2">
            <div className="android-cards mt-0 flutter-cards sluter-cards">
              <div className="android-card">
                <div className="android-box flutter-box flyinh android-box1 native-box">
                  <div className="android0-img flex items-center ">
                    <Image className="fluting1" width={40} src={fluting1} alt=" Crafting Success with React Native" title=" Crafting Success with React Native"/>
                    <h4 className="ml-3">
                      Crafting Success with React Native
                    </h4>
                  </div>
                  <p>
                    While React Native offers abundant advantages, it's not one-size-fits-all. Our mobile app developers collaborate with you, aligning React Native with your business goals and product vision.
                  </p>
                </div>
                <div className="android-box flyinh flutter-box android-box2 native-box native-box1">
                  <div className="android0-img flex items-center">
                    <Image className="fluting2" width={30} src={fluting2} alt="Elevate with Full-Cycle React Native" title="Elevate with Full-Cycle React Native" />
                    <h4 className="ml-3">
                      Elevate with Full-Cycle React Native

                    </h4>
                  </div>
                  <p>
                    Our full-cycle React Native app development process encompasses design, development, testing, and more. It's your ticket to top-tier app performance in your industry.

                  </p>
                </div>
              </div>
              <div className="android-card">
                <div className="android-box flyinh flutter-box android-box1 native-box native-box3">
                  <div className="android0-img flex items-center">
                    <Image className="fluting3" width={30} src={fluting3} alt="Seamless App Transformation" title="Seamless App Transformation"/>
                    <h4 className="ml-3">Seamless App Transformation
                    </h4>
                  </div>
                  <p>
                    Experience effortless migration as we transform your existing iOS or Android app into a high-performing React Native masterpiece. Our deployment experts ensure glitch-free user performance across various platforms, web, and smart devices.
                  </p>
                </div>
                <div className="android-box flyinh flutter-box android-box2 native-box native-box1 native-box4">
                  <div className="android0-img flex items-center">
                    <Image className="fluting4" width={30} src={piston} alt=" fluttering Across Platforms" title=" fluttering Across Platforms" />
                    <h4 className="ml-3">
                      fluttering Across Platforms

                    </h4>
                  </div>
                  <p>
                    Unlock cross-platform potential with our Android and iOS app migration expertise using flutter. Our dedicated team excels in taking your app across diverse platforms and operating systems, earning the trust of the world as the go-to flutter app development company for platform-agnostic applications.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="native-benifits dine-123">
          <div className="native-benifits1">
            <h2>
              React Native Benefits Go Beyond <br /> Cost-Saving
            </h2>
            <Image className="ftp" src={androidSis} alt=" React Native Benefits Go Beyond" title=" React Native Benefits Go Beyond" />
            <p>
              Our React Native mobile development goes beyond budget considerations. We deliver quality, open communication, transparency, and a human touch, all within a cost-effective framework.

            </p>
          </div>
          <div className="native-benifits2">
            <div className="native-cards w-full">
              <div className="native-card">
                <div className="native-boxs native-boxs1">
                  <Image src={cost} alt=" Blazing Fast Performance"  title=" Blazing Fast Performance" />
                  <p>
                    Blazing Fast Performance <br /> and Speed
                  </p>
                </div>
                <div className="native-boxs native-boxs2">
                  <Image src={cost1} alt="Reusable Code" title="Reusable Code" />
                  <p>Reusable Code</p>
                </div>
              </div>
              <div className="native-card native-card2">
                <div className="native-boxs native-boxs3">
                  <Image src={cost2} alt="Live Reload" title="Live Reload" />
                  <p>Live Reload</p>
                </div>
                <div className="native-boxs native-boxs4">
                  <Image src={cost3} alt="Open Source" title="Open Source" />
                  <p>Open Source</p>
                </div>
              </div>
              <div className="native-card native-card3">
                <div className="native-boxs native-boxs5">
                  <Image src={cost4} alt="Great Developer" title="Great Developer" />
                  <p>Great Developer <br /> Tools</p>
                </div>
                <div className="native-boxs native-boxs6">
                  <Image src={cost5} alt="Rapid Multi-platform" title="Rapid Multi-platform" />
                  <p>Rapid Multi-platform <br /> Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nat-why">
        <div className="native-why dine-1234">
          <h2>Why Choose Kushel Digi as Your React JS</h2>
          <h2>Development Services Partner?</h2>
          <div className="native-whys">
            <div className="why-card">
              <div className="why-box wy-box-1">
                <Image src={lok} alt="Experienced React.js" title="Experienced React.js" />
                <p>Experienced React.js <br /> Team</p>
              </div>
              <div className="why-box wy-box-2">
                <Image src={lok1} alt="No-Cost Project" title="No-Cost Project" />
                <p>No-Cost Project <br /> Managers</p>
              </div>
              <div className="why-box wy-box-3">
                <Image src={lok2} alt="Consistent" title="Consistent" />
                <p>Consistent <br /> Delivery</p>
              </div>
              <div className="why-box wy-box-4">
                <Image src={lok3} alt="Cu solutionstomized solution" title="Customized" />
                <p>Customized <br /> Solutions</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="key-value">
          <div className="keys-val">
            <h2>Key values of Kushel Digi team</h2>
            <Image className="key-images" src={androidSis} alt="unserline design" title="unserline design" />
            <p className="text-center ku-t">
              Your mission at Kushel Digi Team is to empower teams to deliver exceptional products by cultivating expertise in JavaScript technologies and continuously enhancing skills through internal gatherings and external conferences.
            </p>
          </div>
          <div className="key-value-cards">
            <div className="key-value-card">
              <div className="key-value-box">
                <Image className="key" src={key} alt="topleft-designed" title="topleft-designed" />
                <Image className="keyst" src={keys} alt="Knowledge Amplified" title="Knowledge Amplified" />
                <h4>Knowledge <br /> Amplified
                </h4>
                <p>We actively share wisdom within the community, among our client's teams, and internally. Our internal meetings and conferences serve as the bedrock for constant improvement among our team members.
                </p>
                <Image className="key1" src={key1} alt="bottomright-dsign" title="bottomright-dsign" />
              </div>
              <div className="key-value-box">
                <Image className="key" src={key} alt="topleft-designed" title="topleft-designed" />
                <Image className="keyst" src={keys1} alt="Elevated Collaboration" title="Elevated Collaboration" />
                <h4>Elevated Collaboration <br /> Standards
                </h4>
                <p>We consistently showcase our best performance, whether partnering with clients, in projects, or during conferences and meetings. Upholding lofty standards and self-imposed demands keeps us at the pinnacle of global excellence.
                </p>
                <Image className="key1" src={key1} alt="bottomright-dsign" title="bottomright-dsign" />
              </div>
              <div className="key-value-box">
                <Image className="key" src={key} alt="topleft-designed" title="topleft-designed" />
                <Image className="keyst" src={keys2} alt="Client-Centric" title="Client-Centric" />
                <h4>Client-Centric
                  <br /> Dedication</h4>
                <p>When we integrate into our client's projects, we fully immerse ourselves, becoming dedicated members of their development efforts. We actively participate in development meetings, offering unwavering support for product advancement.
                </p>
                <Image className="key1" src={key1} alt="bottomright-dsign" title="bottomright-dsign" />
              </div>
            </div>
          </div>
        </div>

        <div className="how-native-work">
          <h2>How we can start working together?</h2>
          <Image className="how-nat-img" src={androidSis} alt="unserline-design" title="unserline-design" />
          <p className="dep-nat">We assemble a team of specialists tailored to your precise needs, ready to provide support for as long as you require.
          </p>
          <div className="native-work-cards">
            <div className="native-work-card">
              <div className="native-work-box">
                <Image className="pret" src={fantaji} alt="Tailored Solutions" title="Tailored Solutions" />
                <h4>Tailored Solutions <br /> Begin Here</h4>
                <p>Share your requirements with us, and we'll curate a roster of skilled team members perfectly aligned with your project. Once approved, your tech team evaluates our candidates.
                </p>
                <div className="native-steps">
                  <h3>STEP 01</h3>
                </div>
              </div>
              <div className="native-work-box">
                <Image className="pret" src={pret} alt="Team Curation and" title="Team Curation and" />
                <h4>Team Curation and <br /> Proposal Review
                </h4>
                <p>We'll handpick the best-suited talents from our team based on your unique needs. Upon your acceptance, your tech team conducts a thorough review of our candidates.
                </p>
                <div className="native-steps">
                  <h3>STEP 02</h3>
                </div>
              </div>
              <div className="native-work-box">
                <Image className="pret1" src={pret1} alt="Seamless Team  integration" title='Seamless Team  integration' />
                <h4>Seamless Team  <br />Integration</h4>
                <p>After your team's review and approval, we seamlessly integrate into your development team, functioning as an invaluable in-house asset.</p>
                <div className="native-steps">
                  <h3>STEP 03</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm1 />

      <ReactNativeFAQ/>
       
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

export default Native;
