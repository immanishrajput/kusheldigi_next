"use client";
import React, { useEffect } from "react";


import cardone from "../../public/assets/card1.svg";
import cardtwo from "../../public/assets/cards-image2.svg";
import cardthree from "../../public/assets/cards3-image.svg";
import cardthree1 from "../../public/assets/card3-image2.svg";
import cardthree2 from "../../public/assets/cards3-images3.svg";
import cardthree3 from "../../public/assets/cards3-images4.svg";
import cardthree4 from "../../public/assets/cards3-images5.svg";
import cardthree5 from "../../public/assets/cards3-images6.svg";
import cartcard from "../../public/assets/cart-cards.svg";
import arrow from "../../public/assets/aero.png";
import apis from "../../public/assets/api-s.svg";
import agileimg from "../../public/assets/Agile-image1.svg";
import agilebackend from "../../public/assets/Agile-backend.svg";
import onlineimage from "../../public/assets/onlineimage.svg";
import flexibility from "../../public/assets/flexibility.svg";
import apiname from "../../public/assets/erps.svg";
import backends from "../../public/assets/backend-svg.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Helmet } from 'react-helmet';
// import "../components/css/headless.css"
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png";
// import { NavLink } from 'react-router-dom';
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import HeadlessFAQ from "../COMMON/HeadlessFAQ";

const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:${phoneNumber}`;
  window.open(callUrl, "_blank");
};

const Headless = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
   const generateMetadata = ({ params }) => ({
          title: "Kushel Digi Solutions | Headless Commerce Web Development Company",
          description: 'offers headless commerce development services and e-commerce solutions, including custom coding and responsive design. and we holds the experience and expertise to accommodate all your eCommerce platform needs.',
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
      <Navbar />
      
      {/* </Helmet> */}
      <div id="kushel-headless-commerce">
        <div className="headless-commerce-banner">
          <div className="headless-commerce-container">
            <div className="headless-commerce-content">
              <h1>Leading Headless Commerce Development Services in USA</h1>
              <p>
                Kushel Digi is a leading provider of headless commerce
                development services in the USA, specializing in creating
                seamless, future-proof e-commerce solutions. Partner with Kushel
                Digi to transform your e-commerce capabilities.
              </p>
              <div className="headless-commerce-button-group">
                <Link href={"/contact-us"}>
                  {" "}
                  <button type="submit">Start a Project</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="headless-commerce-banner1-main">
          <div className="headless-commerce-banner1">
            <div className="headless-commerce-conainer1">
              <div className="headless-commerce-content1">
                <h2>Headless Commerce: Essence and Benefits</h2>
                <p>
                  Headless Commerce involves decoupling of front-end
                  presentation layer from the back-end commerce engine. This
                  architectural model allows businesses to create flexible,
                  scalable, and highly customized e-commerce solutions. Headless
                  commerce facilitates seamless integration across various
                  digital touchpoints, including websites, mobile apps, and IoT
                  devices via APIs ultimately results into improved performance
                  and faster time-to-market for new features.
                </p>
              </div>
              <div className="headless-commerce-cards1">
                <Slider {...settings}>
                  <div className="headless-commerce-cards-flex">
                    <div className="headless-commerce-cards-column">
                      <Image
                        src={cardone}
                        alt="launch multichannel retail cost effectively"
                        title="launch multichannel retail cost effectively"
                      />
                      <h3>
                        A Possibility to launch multichannel retail cost
                        effectively
                      </h3>
                      <p>
                        Headless Commerce streamlines multichannel retailing by
                        separating front and back ends, cutting costs and
                        simplifying integration across web, mobile, social, and
                        in-store platforms.
                      </p>
                    </div>
                  </div>
                  <div className="headless-commerce-cards-flex">
                    <div className="headless-commerce-cards-column">
                      <Image
                        src={flexibility}
                        alt="Greater design flexibility"
                        title="Greater design flexibility"
                      />
                      <h3>Greater design flexibility</h3>
                      <p>
                        Headless commerce provides flexibility by decoupling
                        Developers can leverage preferred front-end frameworks
                        like, integrating seamlessly with diverse back-end
                        technologies.
                      </p>
                    </div>
                  </div>
                  <div className="headless-commerce-cards-flex">
                    <div className="headless-commerce-cards-column">
                      <Image
                        src={agileimg}
                        alt="Agility in the front-end design"
                        title="Agility in the front-end design"
                      />
                      <h3>Agility in the front-end design</h3>
                      <p>
                        Headless commerce facilitates swift access and
                        deployment of e-commerce experiences via reusable UI
                        components and flexible layouts, adaptable across
                        various platforms and devices.
                      </p>
                    </div>
                  </div>
                  <div className="headless-commerce-cards-flex">
                    <div className="headless-commerce-cards-column">
                      <Image
                        src={agilebackend}
                        alt="Agility in the back-end"
                        title="Agility in the back-end"
                      />
                      <h3>Agility in the back-end development</h3>
                      <p>
                        Headless commerce developers need to quickly integrate
                        and deploy APIs to support multiple channel devices,
                        where agility is important in areas in backend
                        development
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="headless-commerce-banner2">
          <div className="headless-commerce-container2">
            <div className="headless-commerce-content2">
              <h2>Types of Headless Architecture</h2>
              <p>
                At Kushel Digi, we distinguish headless architecture into three
                types depending upon the construction of backend. We either put
                a platform (e-commerce or CMS) to the core of build a micro
                sevice based backend.
              </p>
            </div>
            <div className="headless-commerce-cards2">
              <div className="headless-commerce-cards-main-flex">
                <div className="headless-commerce-cards-main-content">
                  <div className="headless-commerce-cards-contain headless-commerce-cards-width">
                    <h2>Based on API driven E-commerce platform</h2>
                    <p>
                      This approach allows businesses to integrate various
                      technologies and deliver seamless user experiences across
                      multiple channels. By using this approach we assure
                      flexible, scalable, and highly customizable e-commerce
                      solution.
                    </p>
                    <h3>Key E-commerce Features You Get:</h3>
                  </div>
                  <div className="headless-commerce-cards-lists">
                    <ul>
                      <li>Product management along with catalog management.</li>
                      <li>Order management.</li>
                      <li>Product Pricing management </li>
                      <li>Product Content management </li>
                      <li>
                        Multiple payment gateways with secure transactions{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="headless-commerce-cards-main-content">
                  <div className="headless-commerce-cards-contain">
                    <h2>Unshackle Your E-commerce Freedom</h2>
                    <p>
                      Unlock the full potential of e-commerce with headless
                      commerce, where a modular decoupling the front-end and
                      backend to enable rapid innovation, improved performance,
                      and unparalleled customer experience
                    </p>
                    <h3>Key CMS Features You Get :</h3>
                  </div>
                  <div className="headless-commerce-cards-lists">
                    <ul>
                      <li>Ideal pair for integrated E-commerce</li>
                      <li>Power of Modularity with CMS.</li>
                      <li>Perfect Match for integrated E-commerce.</li>
                      <li>Separate your showcase with headless CMS.</li>
                      <li>streamlining your entire ecosystem.</li>
                    </ul>
                  </div>
                </div>
                <div className="headless-commerce-cards-main-content">
                  <div className="headless-commerce-cards-contain">
                    <h2>
                      Revolutionize E-commerce with Headless Commerce
                      Architecture
                    </h2>
                    <p>
                      Revolutionize E-commerce with Headless Commerce
                      Architecture: Say goodbye to siloed thinking and hello to
                      a unified, decoupled approach where APIs, microservices,
                      and APIs orchestrate a seamless shopping experience,
                      effortlessly scaling to meet the demands of the digital
                      age.
                    </p>
                    <h3>Key Features You Get :</h3>
                  </div>
                  <div className="headless-commerce-cards-lists">
                    <ul>
                      <li>Full-Stack progress for recovery.</li>
                      <li>APIs form foundation of marketing.</li>
                      <li>Inflexible design has independent structure.</li>
                      <li>Data streaming to personalized experiences.</li>
                      <li>Design high traffic of data to retail journey.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headless-commerce-banner3">
          <div className="headless-commerce-container3">
            <div className="headless-commerce-content3">
              <h2>Example of Headless Ecommerce Architecture</h2>
              <p>Headless ecommerce solutions consist of:</p>
              <div className="headless-commerce-cards2">
                <div className="headless-commerce-card2-flex2">
                  <div className="headless-commerce-cards2-column2">
                    <div className="headless-commerce-cards2-containt-main">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M40.7906 79.9999C40.2686 79.9999 39.7466 79.9999 39.2246 79.9999C38.9468 79.8561 38.6712 79.7082 38.3914 79.5686C26.1926 73.4811 13.9959 67.3916 1.79084 61.3145C0.761399 60.802 0.0117638 60.1395 0.01594 58.8957C0.0201163 57.652 0.773927 56.9874 1.80963 56.4874C3.61795 55.6166 5.40538 54.7041 7.19907 53.802C7.37447 53.7124 7.65846 53.6791 7.65637 53.4353C7.65428 53.1936 7.37447 53.1582 7.19698 53.0686C5.35735 52.1436 3.51772 51.2186 1.66764 50.3124C0.679962 49.8291 0.0180281 49.1395 0.01594 47.9749C0.0138519 46.8124 0.663257 46.1145 1.65303 45.6291C3.45507 44.7457 5.24877 43.8436 7.04037 42.9416C7.26589 42.829 7.62922 42.7874 7.64593 42.5166C7.66681 42.2166 7.28886 42.1874 7.06961 42.077C5.20909 41.1353 3.33605 40.2186 1.47762 39.2707C0.345863 38.6936 -0.16155 37.7332 0.0389093 36.5915C0.208047 35.6291 0.863716 35.0811 1.70105 34.6645C7.16357 31.952 12.6177 29.2207 18.0823 26.5082C18.5939 26.2541 18.9969 25.9666 19.189 25.3895C19.3582 24.8811 19.7424 24.4561 20.2352 24.277C21.7345 23.7311 21.9913 22.6874 21.9976 21.1853C22.0059 19.5853 21.7198 18.5249 20.1412 17.8124C18.9239 17.2645 18.5898 15.8186 19.2454 14.6457C20.7948 11.8728 22.386 9.1228 24.0126 6.39572C24.6996 5.24155 26.0047 4.94155 27.2304 5.53322C27.6042 5.71447 27.98 5.90822 28.3183 6.1478C28.8821 6.54572 29.3686 6.55614 29.9408 6.11447C30.4941 5.68739 31.1039 5.28739 31.7533 5.0478C32.7054 4.6978 33.0542 4.10197 32.8913 3.14364C32.8746 3.04155 32.8975 2.9353 32.8871 2.83114C32.7681 1.50822 33.3173 0.568636 34.5158 -0.00219727C38.1701 -0.00219727 41.8243 -0.00219727 45.4785 -0.00219727C46.4536 0.489469 47.22 1.21239 47.0759 2.3603C46.8775 3.93739 47.5436 4.68947 48.8988 5.4728C50.325 6.29572 51.3795 6.56447 52.7952 5.56447C53.833 4.83114 55.2509 5.20822 55.894 6.27697C57.5749 9.06447 59.2058 11.8832 60.7886 14.7291C61.4025 15.8332 60.9848 17.0936 59.9262 17.8166C59.5169 18.0957 59.0867 18.3436 58.6482 18.5728C58.2014 18.8061 58.0176 19.1332 58.0427 19.6416C58.0803 20.4478 58.1387 21.2645 58.0406 22.0603C57.9257 22.9957 58.3016 23.5124 59.1097 23.8874C59.8197 24.2186 60.538 24.6166 60.8199 25.4082C61.0266 25.9874 61.4338 26.2603 61.9412 26.5124C67.3828 29.2145 72.814 31.9353 78.2578 34.6374C79.2621 35.1353 79.9825 35.802 79.9909 37.0061C80.0013 38.2103 79.3081 38.9061 78.2974 39.402C76.5643 40.2499 74.8395 41.1124 73.1147 41.9811C72.8433 42.1186 72.3943 42.1749 72.3755 42.477C72.3546 42.8124 72.8161 42.852 73.0792 42.9874C74.7769 43.8499 76.4745 44.7124 78.1868 45.5395C79.2183 46.0374 79.9805 46.6999 79.9909 47.9436C80.0013 49.227 79.2141 49.8978 78.1575 50.4082C76.3972 51.2582 74.6537 52.1457 72.908 53.0249C72.7055 53.127 72.3713 53.1666 72.363 53.4103C72.3526 53.7186 72.7201 53.7436 72.9372 53.8541C74.7288 54.7603 76.5246 55.6603 78.3267 56.5457C79.3102 57.0291 79.9825 57.7124 79.993 58.8791C80.0034 60.0832 79.3102 60.777 78.3016 61.2749C75.9859 62.4166 73.6785 63.5749 71.3691 64.727C61.179 69.8207 50.9848 74.9103 40.7906 79.9999ZM71.9036 37.0374C71.8138 36.8061 71.5695 36.7457 71.3711 36.6457C67.4998 34.7103 63.6221 32.7895 59.7612 30.8353C59.1953 30.5499 58.9468 30.6999 58.6649 31.2061C57.8443 32.6853 56.9944 34.152 56.1237 35.602C55.3156 36.9457 53.9228 37.4145 52.6512 36.5436C51.3523 35.6541 50.4252 35.8603 49.1014 36.604C47.6334 37.4291 46.8545 38.229 47.0675 39.9957C47.2116 41.1832 46.1153 42.2124 44.9126 42.227C41.6509 42.2645 38.3893 42.2624 35.1297 42.2311C33.9541 42.2207 32.8098 41.229 32.956 40.104C33.2066 38.1832 32.2857 37.352 30.7343 36.502C29.5252 35.8416 28.7046 35.6811 27.5311 36.4603C26.0778 37.4249 24.7121 36.9874 23.8247 35.4936C23.002 34.104 22.173 32.7165 21.4066 31.2978C21.0767 30.6853 20.7865 30.5603 20.1371 30.8936C16.794 32.602 13.4279 34.2603 10.0681 35.9353C9.55447 36.1916 9.04079 36.4436 8.53129 36.7061C8.37677 36.7853 8.13455 36.8186 8.14916 37.0395C8.16169 37.2436 8.39974 37.2749 8.55217 37.3666C8.64196 37.4207 8.73801 37.4603 8.83198 37.5082C18.9552 42.5561 29.0826 47.5999 39.1974 52.6686C39.8071 52.9749 40.2749 52.9478 40.87 52.6499C46.201 49.9645 51.5486 47.3082 56.89 44.6436C61.6948 42.2457 66.5016 39.8499 71.3043 37.4478C71.5069 37.3457 71.7491 37.2874 71.9036 37.0374ZM29.4709 30.1645C30.1517 30.202 30.7217 30.4832 31.2291 30.9291C32.5969 32.1291 34.14 33.0228 35.8669 33.6186C37.2137 34.0853 37.7065 34.8311 37.719 36.2645C37.7211 36.3936 37.7295 36.5249 37.719 36.6541C37.671 37.2186 37.9153 37.4624 38.4937 37.4436C39.354 37.4186 40.2164 37.4374 41.0767 37.4374C42.2857 37.4374 42.2857 37.4353 42.2983 36.2416C42.3108 34.8707 42.7869 34.1061 44.0293 33.6728C45.8543 33.0374 47.4768 32.0832 48.9301 30.8166C49.8113 30.0499 50.799 29.9686 51.8368 30.5103C51.9976 30.5957 52.1667 30.6728 52.3129 30.7791C52.8203 31.1541 53.1627 31.102 53.4655 30.4916C53.8456 29.7228 54.3154 28.9978 54.7476 28.2561C55.2947 27.3145 55.2947 27.3145 54.353 26.7499C53.0876 25.9936 52.718 25.2186 52.956 23.7561C53.1815 22.3645 53.3486 20.9749 53.121 19.5666C53.0583 19.1811 53.0103 18.7957 52.9498 18.4103C52.7263 16.9582 53.0938 16.1811 54.3655 15.4228C55.2968 14.8686 55.2968 14.8686 54.7393 13.9103C54.3467 13.2353 53.9562 12.5582 53.5637 11.8811C53.0479 10.9936 53.0479 10.9936 52.1625 11.4874C50.7447 12.2791 49.9157 12.2061 48.6754 11.1478C47.3515 10.0186 45.8773 9.1603 44.2298 8.58947C42.7911 8.09155 42.3108 7.38114 42.2983 5.84155C42.2983 5.73739 42.2899 5.63322 42.2983 5.52905C42.3463 4.96655 42.1062 4.72072 41.5257 4.73739C40.6654 4.76239 39.803 4.74364 38.9427 4.74364C37.7315 4.74364 37.7315 4.74572 37.719 5.93947C37.7065 7.30822 37.2325 8.07489 35.9901 8.51239C34.1671 9.15197 32.5405 10.0957 31.0872 11.3624C30.1809 12.1499 29.1661 12.2166 28.1116 11.6332C27.9529 11.5457 27.7837 11.4686 27.6376 11.3624C27.1782 11.027 26.8712 11.0874 26.5956 11.6228C26.178 12.4311 25.6915 13.2041 25.2342 13.9936C24.7267 14.8686 24.7267 14.8686 25.6038 15.3936C26.9527 16.1999 27.3327 16.9561 27.0508 18.5061C26.7647 20.0832 26.6979 21.6561 26.9798 23.2374C27.3515 25.3124 27.1281 25.8666 25.3093 26.9478C24.8124 27.2436 24.8165 27.5082 25.0838 27.9436C25.6142 28.8103 26.13 29.6853 26.6081 30.5811C26.865 31.0603 27.1343 31.1561 27.5916 30.8541C28.1575 30.4791 28.761 30.1665 29.4709 30.1645ZM13.3047 45.2999C13.146 45.3686 12.9268 45.4499 12.718 45.552C11.4108 46.202 10.1036 46.8499 8.80274 47.5145C8.56261 47.6374 8.15334 47.6624 8.16587 47.9936C8.17631 48.2499 8.55008 48.2999 8.77769 48.4124C18.9468 53.4895 29.1181 58.5603 39.2809 63.6457C39.8009 63.9061 40.2227 63.9124 40.7426 63.6478C43.7182 62.1374 46.7084 60.6582 49.6944 59.1686C56.8337 55.6082 63.9708 52.0478 71.108 48.4811C71.3795 48.3457 71.8431 48.2874 71.8451 47.9895C71.8493 47.6207 71.3586 47.5895 71.0725 47.4416C69.8677 46.8186 68.6357 46.252 67.4434 45.6082C66.8775 45.3041 66.4181 45.3124 65.8418 45.602C57.8255 49.6207 49.7904 53.602 41.7825 57.6353C40.5463 58.2582 39.473 58.2582 38.2348 57.6332C30.2498 53.6082 22.2398 49.6332 14.2381 45.6436C13.9604 45.5061 13.6973 45.3249 13.3047 45.2999ZM39.9846 74.8832C40.183 74.8061 40.3814 74.7457 40.5651 74.6561C41.1978 74.3478 41.8263 74.0311 42.457 73.7166C52.0686 68.9228 61.6802 64.1291 71.2876 59.327C71.5048 59.2186 71.8723 59.1936 71.8598 58.8811C71.8493 58.6395 71.5173 58.5957 71.3148 58.4936C70.0347 57.8478 68.7338 57.2395 67.4747 56.5582C66.8796 56.2353 66.4035 56.2561 65.8021 56.5582C57.8109 60.5686 49.7988 64.5353 41.8138 68.5603C40.5484 69.1978 39.4605 69.1895 38.1951 68.552C30.2122 64.5249 22.198 60.5561 14.2047 56.5499C13.6367 56.2645 13.1753 56.227 12.6031 56.5353C11.3168 57.2249 9.99506 57.8457 8.69207 58.502C8.49162 58.602 8.16796 58.6416 8.16169 58.8999C8.15543 59.1666 8.48326 59.2041 8.68163 59.3041C18.8967 64.4041 29.1118 69.502 39.331 74.5957C39.5336 74.6999 39.7528 74.7832 39.9846 74.8832Z"
                          fill="#0E151D"
                        />
                      </svg>
                      <h3>The Front End</h3>
                      <p>User-facing part of a software application or site</p>
                    </div>
                  </div>
                  <div className="headless-commerce-cards2-column2">
                    <div className="headless-commerce-cards2-containt-main">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          width="80"
                          height="80"
                          fill="url(#pattern0_4824_3608)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_4824_3608"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_4824_3608"
                              transform="scale(0.00195312)"
                            />
                          </pattern>
                          <image
                            id="image0_4824_3608"
                            width="512"
                            height="512"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                      <h3>APIs</h3>
                      <p>Intermediary between front end &amp; back end</p>
                    </div>
                  </div>
                  <div className="headless-commerce-cards2-column2">
                    <div className="headless-commerce-cards2-containt-main">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <mask
                          id="mask0_5108_3556"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="80"
                          height="80"
                        >
                          <rect
                            width="80"
                            height="80"
                            fill="url(#pattern0_5108_3556)"
                          />
                        </mask>
                        <g mask="url(#mask0_5108_3556)">
                          <rect width="80" height="80" fill="#0E151D" />
                        </g>
                        <defs>
                          <pattern
                            id="pattern0_5108_3556"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_5108_3556"
                              transform="scale(0.00195312)"
                            />
                          </pattern>
                          <image
                            id="image0_5108_3556"
                            width="512"
                            height="512"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>

                      <h3>The Back End</h3>
                      <p>Server-side part of a software application or site</p>
                    </div>
                  </div>
                  <div className="headless-commerce-cards2-column2">
                    <div className="headless-commerce-cards2-containt-main">
                      <svg
                        width="80"
                        height="81"
                        viewBox="0 0 80 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          y="0.5"
                          width="80"
                          height="80"
                          fill="url(#pattern0_4824_3619)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_4824_3619"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_4824_3619"
                              transform="scale(0.00195312)"
                            />
                          </pattern>
                          <image
                            id="image0_4824_3619"
                            width="512"
                            height="512"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XecpXV1+PHP9mWXLbDUpS4LSFUpggooQbAFIqLYElFRIRojGpOoiVE0GsvPGLFF0UQFYxCwBBAVsICoSFF67x2Wsn1Zdnfm98e54wzDzOzcmefe85TP+/U6rzs7sHvP0+5z7vf5FpAkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkKdOE7ASkEpkBTAMmA7Nav5sDTAQ2AKYP8Xc2BKYM8++tA5YO8fvVwEqgF1jc+t0K4ElgDbB8DLlLUlssAFQHs4CNgbnARgNi4J9nEzf4OcBM4oY+u/V3NyBu5GWyElgFLCEKglXAslasJAqLx4kC4vEhfu77syQNyQJAZbUZsCWwdevnzVuvmwCbtv68aSumJeVYdmuAR4BFwMOtGPjnB4EHgPuAh4gWC0kNYQGgDJsB2wHbA9sSN/n5wFat2BJv6t22jigC7iWKgntar3cDd7bifqAnJz1JRbMAUCdsAOzUioX03+z7YkZSXhqfJ4nC4K5W3AncBtwK3AI8lpaZpLZZAGisJgELgF2Anem/4e8EbIPnVhM9ShQCN7de+36+kejDIKlE/JDWaMwHdgN2H/D6bKIznTQaDwDXAdcPeL0SRzxIaSwANNCGwDOBvYgb/F7EzX6o4W/SePUAdxCFwJXAH1uv92UmJTWFBUBzzQaeA+xL/w1/J2LMu5RpEf0FwR+BS4HbUzOSasgCoBkmEc/q92nFAcRN35u9qmIJcC1wMfAb4BKiUJA0RhYA9TQbOBA4iLjZ74M971U/txCFwK9bcWNuOlK1WADUw2xgP+BQ4sa/H8NPTyvV1cPE44K+VoLfE5MhSRqCBUA1bQgcTNzwDyV65nsspadaClwEXNCK63LTkcrFm0Y1TCI66fXd8A/CmfKkdj0MXEgUAz8lZjmUGssCoLw2AV4OHA68mFjERlJxrgPOAX4M/BbXQlDDWACUyw7AEcRN/4X4HF/qlseAnxMFwdnEaopSrVkA5JoA7A+8GjiKmFpXUq61REfC7wM/IBZBkmrHAiDH7sDRwF8COybnIml4PcRkROcApxKLH0m1YAHQPfsSN/xXEYvlSKqWXmJo4RnA/xLrG0iVZQHQWfOJb/pvJnrxS6qHHuB3wCnAd3FRI1WQBUDxphMd+Y4BXgpMzk1HUoetov8RwU+IPgRS6VkAFGcX4pv+24GNc1ORlOQ+4DvAV3CeAZWcBcD4TAP+AjiOmKBHkiDmFPglcDIxksA5BlQ6FgBjswB4F/AmYF5yLpLK7Tbg6614LDkX6U8sANqzN/Ae4PX4bF9Se54gRhD8G65cqBKwAFi/icCfA+/GZn5J49cDnAucRKxLIKWwABjeZOCvgA8COyfnIqmeLgU+QUw/3JucixrGAuDpJhKT9Xwcb/ySuuMa4F+BM7EQUJdYAPTzxi8p2zXAZ4mhhD3JuajmLADCUcCngJ2yE5Ek4Erg/cB52YmovppeAOwD/Dux9K4klc0FwN8DV2UnovqZmJ1Akq2ArxEdcLz5SyqrQ4E/AKcD2yXnopppWgvANOADRNPaBsm5qLyWEM9fVwKrgTX0L/by+BD//1pg2TD/1kRgzhC/nwrMJK7Bua3fzSJGn0zH81NPt4KYQ+CzwJPJuagGmlQAHAx8FXhGch7qnDXAo8Rsa4+34rFBr0uID9IlxE19RSsWt15Xdz3r4c0CZhCFwkat1xmt389pxUbE2hMbDfp5Y1yToq6uB94BXJSdiKqtCQXAPKJifhPN2N666QUeJBZZuR+4F1jUigeBh1s/P4zTrA42Gdi0FVsAm7V+3rwV84GtWzE7KUeNTS/wLeAfgUdyU1FV1f2G+HrgC8Am2YloWGuBu4j50vvi3gHxADZ3dsOGwDZE/5itiOfNOwILW7F5XmoawSPAe4lhg1Jb6loAzAb+H7FKn/I9SdzMbx8irifWU1e5TSMKgx1asTuwW+vn7YBJeakJ+D5wPPEITBqVOhYALwBOwR6zGR4AriaGLN1E/zf6+3B2szqbSqyQuWMrdgOeRRQJGybm1TT3A2/BuQM0SnUqAKYAHyOeiTV1eGO3PAFcR9zsryZmL7sKn0XqqSYSLQTPAvZsxbNav6vTZ0+Z9AJfJj4HbVnTiOpyEW5OLLN5UHYiNXQXT73JXw3cAqzLTEqVtiGwB/DMQTHUcEmNzR+Iqc3vTM5DJVaHAmBv4AfY5F+ENcQN/jfAFcCFRAEgdcMOwIHEDJ0HAHtha954PAq8AR8JaBhVLwD+CjgZJ00ZqweIG/3FxE3/cqJ5XyqD2cB+PLUo2Cg1o+pZRyxw9jFcXEg1MRH4D+J5lzG6WEtMffx54LXE2G+pSiYBzwb+BjiVaJ3Kvq6qEt8jRnJIlTYZ+G/yL6gqxAPEHOLH4KxwqqcdiOG+pxOzOWZfc2WOX2E/C1XYDOBc8i+kssYK4HxirYN9xriPpaqaRJz37yeugzXkX5Nli2uw9U8VtBHxrDr7AipTrCOe23+KWDXMJj6p3zzgaGLlzzvIv17LEnfgmiiqkDnEjS77wilDrCUKoROALcezU6WG2R04kZjDIvs6zo6HgF3GtTelLphBrHqVfcGU5abvnOzS+O1AXE9NblW8h5jBUSqlqTT3mf8q4GyiA58dd6TO2Z7+YqCH/Gu/m3ErsSqkVCqTgR+Rf4F0M9YSN/3X4hzqUobtgb+nWY8JrsMVU1UynyP/wuhW3E105NuukD0nqQj7ACcRM+plf0Z0Oi4mWlyldG8g/4LodKwixi4fSvVnZJTqbDoxmuB86v2I4MtF7TBprJ5FjGfPvhg6FZcTzxudmEeqnp2JkQR1nYXwuML2lNSmedRzvO4q4BvEimeSqm8y8GrqN4pgNfD8AveTNGqnkX8BFBkPEs/27WUr1dfexGRDq8j/zCki7gBmFbqHpPV4JfknflFxK/B27FQjNcnWxGJbdXiE+ZWC9400rHnEt+Xsk368cS0xbn9ysbtHUoVsQvQTeIz8z6SxRg/wkoL3izSk75B/wo8nbgReg735JfWbC3wCWEb+Z9RY4k58FKAOO5D8E32scTfRa9Zv/JKGswnRF6iKfQQ+0YH9If3JL8k/yduN5UQT3/Tid4ekmtoaOIVqzSWwEtimEztDOpz8E7yd6CEu4C06sTMkNcL+wO/I/zwbbZzcmd2gJpsI/JH8k3u0cTXw3I7sCUlNM5F4fLiE/M+29cVaYLfO7AY11ZHkn9ijiZXAB4EpndkNkhpsG+As8j/n1hendmoHqJl+Rv5Jvb64AtilUztAklreCCwm/zNvuHgC2LRjW69GWQisI/+kHi56iFXAnMhHUrdsC/yK/M+/4eL9HdtyNcpnyD+Zh4tHgMM6t+mSNKxJwCcp50iB24m+C9KYTQYWkX8yDxVXANt1btMlaVSOApaS/5k4OF7ayY1W/b2A/JN4qPgRsEEHt1uS2rEncB/5n40DwzUCNC6fJP8kHhzfwtn8JJXPdsAN5H9G9sXdnd1c1V3Zxv5/Cefwl1Rem1GuImCPzm6u6mpLytW55RTs1CKp/LYiOuFlf2b2Av/Q4W1VTb2G/JO3L84netxKUhU8g3LMFXBOpzdU3dHtb79laTq6G3gDMReBJFXBTcSEQT3Jeeye/P6qqDPJr157gIM6vaGS1CFfJP8zdFbHt1K1cyP5BcBXO76VktQ5s4B7yP0cdWE0tWUasIbck3YlzmctqfreRu5n6Vs7v4nqtG72AZhH/lj7bxGzEEpSlZ0KPJD4/lsmvrcK0s0CYE4X32s4p2QnIEkFWA2cnvj+9gGogW4WANknzGPAZck5SFJRfpr43mX4QqdxalILwE047E9SfVyf+N6zE99bBWlSC4DP/iXVyUOJ720BUAPdLACyZ93zhJVUJ5mtqtmf5ypAk+bB3y47AUkqkJ9pGpcmFQALgIXZSUhSQQ7NTkDV1qQCAODI7AQkqSCvzE5A1da0AuA9wNTsJCRpnF4IPCc7CVVb0wqArYFjs5OQpHGYAJyYnYSqr2kFAMCngPnZSUjSGL0JODg7CVVfEwuAOcDXaOa2S6q27YDPZiehemjqTfBw4F+yk5CkNkwHziQWVpPGrakFAMCHgddlJyFJozCJWAFw3+xEVB9NLgAmEqsDHpGdiCSNYALwVeDV2YmoXppcAABMIZbUfEV2IpI0hEnA14G3ZSei+ml6AQDxXO37wPHZiUjSANOA04C3ZieierIACJOA/wQ+gYtcSMo3H/glNvurgywA+k0A/gk4H9g0ORdJzXUAcDnwvOxEVG8WAE/3Z8Dv8eKT1F0TgfcBvwC2TM5FDWABMLQFwK+JWQNdO0BSp20BnENM8uNnjrrCAmB4k4D3AxcDz0zORVI9TQDeAtwAvCw5FzWMBcD6PQe4AjgJmJmci6T6WAicB/w3MDc5FzWQBcDoTAbeDVyJEwdJGp8ZxGp+1wKH5qYidcfRQG9N4ufAnsXuHkkNcARwB/mfYeONnxS9Y9R9tgCMzSHAH4CvYG9dSev3QuC3wFnA9rmpSMECYOwmA+8gqvmvAZvlpiOphPYkphv/FQ4tVslYAIzfNOA44GbgY8AmuelIKoF9gB8AVxGPP6VGq1MfgJFiOTFiYOtidpukCjkQOBvoIf+zyD4AKo2mFAB98QTwDewsKNXdJGLO/t+Q/7ljAaBSaloBMDAubm2/Cw1J9TELOIF69Oq3AGigydkJNMQBrbgF+C/gFOCB1IwkjdX+wLHA64kiQNJ6NLkFYHCsI1YdPBqYMp6dKqkr5hKdff9I/udHGcIWgBqwBSDHRGIGsEOBB4lhQt8ArslMStJTTCTm/DiGeMa/QW46UnXZAjBy9AAXAW8CNhzjPpY0fguAjwJ3k/+5UNawBUBtsQAYfawihhIdg4uESN2wgOjQdzH1H8JXRFgA1ICPAMppOnB4K9YBlwBnAKcBDyXmJdXJ7sQ1dgTRSVdSh9gCMP5YS3xDOQGY397ul0Tc9E8Erif/eq5y2AJQA7YAVMsk+ocUfo6YeORcYk3xK4mmS0n9ZgIHAy8mvukvSM1GKhELgOqaCBzUik8CjwC/BC4Afkp0YJKaqK9p/1Di+piWm45UThYA9bEJ8Zilb+GR24li4ALgZ8DSpLykTtsceAFxwz8cH49Jo2IBUF87EBOXHAesJh4XXNB6vRxYmZeaNC5bAs8FXggcBuyWm45UTRYAzTCNmNDkkNaf1xLLF19MFARXANflpCaNaBKwC9Hv5UBimd1dgQmZSUl1YAHQTJOJb027ES0EEGsTXEF/UXA5saKh1E2zgf3ov9kfiHNhSB1hAaA+W9I/9wDEzf8K4FLg6lZcj0WBirMJ8CxiyexnE836z0jNSGoQCwANZzr9Qw77rAPuIgqBvscG19M/ploaymTixr4b0UN/n9bPC7ApX0pjAaB2TCI6F+5Af0sBwOP0txJcA1wF3AAs63aCSrcVcXN/NvHNfs/Wn6dmJiXp6SwAVISNiB7ZLxz0+weBm4BbiE6Hfa+3ESMTVE0bAzsCOxPf7Hdqxc64kJVUGRYA6qQtWjG4MOglOh3eMSDuHPB6H/Bkt5LU08wGtiGa6Pti+wE/z0nLTFJhLACUYQIxWct8hl+E5UHgfqIYuKf1871E4fAgsKgVazudbI3MADYjirJNga2JY7AN0XS/Vetnv8VLDdCkAuCHwI+ADxLjilVufa0He4/w//TSXwgsIoqDR4k+CY8Djw3x81Jgecey7o4JxNC4OcTjl42IZvmBP88jbvKb0n/T98ZeD73AWcDHgcuSc1GFNakAWAucAnyHmC73n4kOSqquCcTNbbMx/N3FwIpWLCMKgxXAKqJAWEP0U1hJLLK0pPX3lhKjIQZax/BTLU8imtQH24AYaTEZmNX63Vxim2YSnebmtH6e0fp51oA/q3l6iGXB/43ocCuNS5MKgD49wPeA04me7P8CPCc1I2WYixPMqBp6gO8DHwZuTM5FNTIxO4FEvcDZxKxjhwGX5KYjSU/xJHAq8cjyNXjzV8GaXAAMdAHwPKIQOA8ntZGUZynwOWAhcAwxfFYqnAXAU10AvISouL9APA+WpG54APgoMeTyfcSoF6ljLACGdjNwAjHm+aNEz3JJ6oQ/AG8CtgNOJEarSB1nATCyh4gLciviAvUZnKQi9ADnEI8d9yFGKK1JzUiNYwEwOquJC3R34FXAL7GfgKT2LSYeLz4DOIJ47CilsABoTw/wA+AQ4gL+ND4ekLR+VwDHE7MvngDcmpuOZAEwHrcAHyAu6NcAv8lNR1LJPEFM3HMgsC9wMjHZlFQKFgDj50UuaaCb8cuBKsACoFh9zXzbEs18f8xNR1KXLAe+Rax8uQs+HlQFWAB0xmNER5+9iY6DnyZGFEiqjx7i2/3xwJbAW4CLsIOwKsICoPOuJ5oDtyKG/JyKEwxJVXY3UdTvRDz6O5nqrzCpBrIA6J51xJCfY4g1198NXJ6akaTRehz4BnAQMVPfB4DbMxOSxquJqwGWwaPAF1uxHXAksUTxAZlJSXqKJcBZRCffnxGL80i1YQGQ7y7gpFYsAP4CiwEpy0rgF8RN/8zWn6VasgAolzvoLwZ2J4YQvZaYdEhSZywnlgY/HfgpMbRXqj0LgPK6DvhIK3Ygpg09HDgYj5s0Xg8TzfpnEEuAr85NR+o+byTVcDv9LQPziKmIjwBeAcxOzEuqkuuJb/rnEMP3HK6nRrMAqJ5HiW8tZwDTgD8j+g0cTowukBRWEgt3nUXc9O/PTUcqFwuAaltNPLP8KfBO4lHBoa04DJibl5rUdeuAK4nhthcAv8amfWlYFgD1cjsxKcnJwCTg2fQXBC8ApualJnXE7fTf8H9OzMIpaRQsAOprHbE2wRXErGWziMcFf0bMXvZsPP6qntuBi4kpd38O3JmajVRh3gCaYxnxLPSs1p9nAnsR8w0c2AofGahM1gE3ETf83wAXEvNmSCqABUBzrSA+WC8mWggm018QHATsRyxnKnXLYqLF6nfEefk7YGlqRlKNWQCoz1rgslZ8vvW7ucAewD4DYreU7FQ3y4Cr6X9MdQVwA7HCnqQusADQSBbT30rQZwv6i4G9gT2JxVFcWErDuZ+Y2Ooq+m/2t+I4fCmVBYDa9SDw41b0mUosjbobMYVx3+suWBg0yePEZDvXDXi9BngoMylJQ7MAUBGeJD7sryMmKOozC9iVKAYWtmKH1uu8LueoYiwBbmvF7a3XW4BrgUcS85LUJgsAddIy4NJWDDaHpxYEOxCrIW7VijldylFPtRS4l2i2v4f+m3zfDd+bvFQTFgDKsgT4QyuGMoMYhbDloNf5RD+EjQfEtE4nW3FPEFNIP9aKR4D7iJt8343+wdbriqQcJXWZBYDKaiVwcyvWZyZPLQg2Jh4xbARsAEwnFk2aQrQsTCMKjA1bv9toPf9+3//XQxQuEFPM9q0VvxxY0/r58dbrlNbfg+gjMbP18/RWTuvTS3TC7PMEsIr4hv5k63VV6/dLWvkso/8mP/CG75r2kp7GAkB1sKIV92QnIklVYQ9tSZIayAJAkqQGsgCQJKmBLAAkSWogCwBJkhrIAkCSpAayAJAkqYEsACRJaiALAEmSGsiZACVpbDYBNgM2BeYSUz/PIqabnkP/F6yhpprum8YZYirp5cRUzkuJqZ0fI9ZnWERM8ywVzgJAkp5uCrAz/atUbt+K7YjFqDZt/T/dsJgoBu4D7hwU0phZAEhSLNb0IuClwH7AHpRnlcm5rdglOxHViwWApKaaBLwMeGvrtSw3fKkrLAAkNc104DjgH4Ctk3OR0lgASGqKCcCxwMeA+cm5SOksACQ1wbOA/wSel52IVBbOAyCp7o4Dfo83f+kpbAGQVFczgFOAV2UnIpWRBYCkOpoH/B9wQHYiUllZAEiqmy2AC4mJfCQNwz4AkupkDnAu3vyl9bIAkFQXU4EfA3tlJyJVgQWApLr4Aj7zl0bNAkBSHbwROD47CalKLAAkVd2WwEnZSUhVYwEgqeq+DGyUnYRUNRYAkqrsBcArs5OQqsgCQFJVTQA+lZ2EVFUWAJKq6qU4v780ZhYAkqrq3dkJSFVmASCpinYEXpKdhFRlFgCSquj1RB8ASWNkASCpio7OTkCqOgsASVWzLbBndhJS1VkASKqaA7MTkOrAAkBS1Tw/OwGpDiwAJFXNM7MTkOrAAkBS1eyYnYBUBxYAkqpkBrBFdhJSHVgASKqSjXD8v1QICwBJVbJhdgJSXUzOTkCS2jAjO4EhrAMeBh4E7gceAZa0YmkrAFYBTxTwfm8C/ryAf0cNZwEgqUqyWy0fAb4G3Abc3nq9H+jpYg7PwwJABbAAkKTRuwv4UHYSUhGyq2lJkpTAAkCSpAZqUgHg4w5JKoZDMWugSQXAptkJSFJNTM9OQOPXpAJgh+wEJKkmZmUnoPFrUgEwH9gtOwlJqoGZ2Qlo/JpUAAC8KjsBSaqBpt07aqlpHePeCXwGWJ2diFQSGwPbt17nEB/svcDiVtwBPJqVnEprRXYCLdOABcBWxCyRfX0TlrfiLuA+YrZGDdK0AmAL4HjgC9mJSAk2AA4BDgL2A/YC5o7i7y0BrgQuAS4Gfk5Ma9ttzwA+kPC+errlSe+7N3AwMRvic4BtWf+IhDXATcClwO+AnwL3di5FDeVo4ptFdiwGtuzwtkplMRl4JfAj4ltbEdfQCuD7wFF050vELsB3gLUF5T+euLzD2zoanyN/P9xI3Hy7YTdim+8oKPce4Arg/cDmXdqGxitLAdALnI3jWFVvs4F/Ieap7+S1dA/wz633K9q2wClE8232Z0ZfWAD0xyrgs8C8Dm3nEcAvO7wNq4HTgD07tA1qKVMB0At8sLObK6WYRjSTP0p3r6dFwPsoZnz4XODTxA0m+3NicFgAPD0eJ865olZqfCHw2y5vwzrgdGBhQdugQcpWAKwFjuzoFkvddQjRNJt5Xd1OPBoYi0nA3xAr7mV/PgwXFgDDx73A2xn7Y6GdgB8mb8NKYrGnqWPcBg2jbAVAL/EN4+AObrPUDVOB/yCebWZfU31xAbBHG9vwfOAPJch7fWEBsP64Fjiwje2ZSzxKWF2C3PviD0RBooKUsQDoBZZiEaDq2obo3Zx9HQ0Va4AvEkMMh7MJ8N+Uq3gZKSwARhc9wMnARiNsx2RiaPaiEuQ7VCwFXj1C/mpDWQuAXuAJPNCqnt2Bu8m/ftYXjwEn8PSm4SOIMdrZ+bUTFgDtxaPAcTy90/WLgKtKkN/6ogc4caSDodEpcwHQS3xbeVfHtl4q1v5E56vs66aduIpobdsMOKME+YwlLADGFucBOwK7Aj8uQT7txidHdWQ0rLIXAH3xX0RPaqms9qD7vfyLjGUlyGGsYQEw9lhFfNHKzmOs8c+jOThV4nzOT3cscBGuHqhy2hr4GSM/Vy+7DbMTqLje7ATGaDrVnn3248Qoh9qwABjafsTUp8dlJyINMAX4X2JlS+VYmp0AMTWzcnwZOCA7iaJYAAxvFvA1YpaozZJzkQD+nfaGV6l4i7IToBw5NFVfEb5JdiJFsABYv9cC1wNvzE5EjfZ64G+zkxD3ZCdATLakPNsA3yUmrqo0C4DRmUfMSX4e0YtV6qadiTHVyveb7ASIaXLXZifRcIcBH81OYrwsANpzGDGU6XOMbhlVabymEt827DiXr4dYDjnbMuCy7CTEB4FDs5MYDwuA9k0B3kusL/0unDNanfVxYJ/sJATE6IuyPH//ZnYCYiLwbWrSH6DTqjIPQLtxO9E/wGJKRTuMci2F2/T4i5EPV1fNBBaTv08M+NF6jpWobwHQF9cAr8NCQMWYS6yuln1eGxGXU75r++/I3y9GxF+v51g1Xt0LgL64CXgz8ahAGqtvkX8uGxHrgOeOeLRyTCFW3svePwasAHYZ+XA1W1MKgL64k6jQZxew79QsR5B//hr9UeZ54PcgJifK3kdGjBApWytRaTStAOiLJcRa7QvGvwvVABsD95N/3hoR/0f5P9SPoNpz7Ncp3rOeY9VYTS0A+mIt8WHycsr/gaI83yD/XDUizgJmjHy4SuMIohk6e581PZbjOjJDanoBMDDuIFaW2mJce1R1cyAx1jz7/DTgK1Rv4ZrnAreRv++aHr8AJqznWDWOBcDTYw3xLeNVuARx09mhqxxxJ/CSkQ9Vqc0kHjmuJn9fNjnetr4D1TQWACPHo8CXgP2xemyiD5B/DjY5bgKOJ5asrYP5wKeJz5XsfdvEeISYQl4tFgCjj7uBk4hpJqvWDKn2bUU8O8w+75oWK4HTiefndb3OphHbdzq2CnQ7vjqK49MYFgBji/uIloFDqMHqUxrSd8g/z5oUVwBvIZrLm2RToqXpTvKPQRNiHfCc0RyYJrAAGH88TKwK91Jcg6Aunocd/7oRa4HvAQeM7rDU2iTgSGJho+zjUvf4PY76AiwAio7HiFXi3kw0Iat6JgKXkn8u1TmeBP4L2GmUx6RpXkgsc559nOocx476aNSYBUBn4zqi9+/LaV7TZlW9nvzzpq6xlrjxbzvqo9FsBxAz2WUft/HEk8CvSpDH4LiX6swn0TEWAN2L1cRY1A8C+2ITVBlNAW4l/1wZGCuAq0uQx3jjx8QUuWrfUcSIiOxj2G7cQHzWTaachcw/tXMQ6sgCIC8WAacBfwPsTX17PFfJO8k/LwbHe4nnw8cT/U2y82k3bqbaY/jLYipxw6rCzII9wBeADQbkvx3xiDQ7t4GxhOiE2VgWAOWJ5URT2SeJNc43G/6wqQNmAg+Qfx4MjMELmcwF/p1oVs3ObX2xEvgXnEyraNsD55B/fIeLe4ih0kM5qgT5DY4vjLy7680CoNxxC3Aq0UqwF7YSdNI/kH+8B8Yq4BnD5LozcHYJchwufjdC7irGm4HF5B/rgfE/wEbryfsrJciLzWXvAAAgAElEQVRzYKwmiqpGsgCoVvS1EnyemNbyOdiRpQgzgAfJP74D4x9GkfdLiI6m2bn2xRPA+3FujG7ZBjif/OP+KPDaUeY8HbiqBDkPjJNHmXvtWADUI+4nvhF+CjgG2B0/hNvxd+Qfw4FxCaM/fpOB48jvH3AHsN8oc1ZxJgAnkPdY6Dxg6zZz3glYmpTvUPEkDW0FsACobywnJrz4OvBuYtbCbXBNg8GmEwVU9vHqiyeA3cawHRsDXyRnDfrTgNljyFnFOZjunscriE6zY/08eUcXcx1N/OcYt6PSLACaFyuJJrgziQ6HxwIvIKr4Jg5NLNsH0T+Pc3t2A37WpVzXEMWlymE+cBmdP+6XEP1QxmMC5ZofYDXxBalRLACMgbGaGAd/AfAN4EPAXwEHAQupz6psfSZSrvHVt1Fcr/kjOrxtjwMvLihXFWcGMb1yJ475k8CHKa4z8o6Ua1jjFwvarsqwADDajUeIiWl+TBQJJxKjFF5FFAq7EM3RVfAK8vfnwDiq4O2bCryP4nuLX4u9/MtsAtEZs8iVBvsm9Sna3xeY43hjOSX47OrmM9qjiSUps1xI3EzexlMnjVD1rSEmO1pETADy+BCxuPW6lHg0sRRY1vp5RRdyvIgoWsrgl0Q/jU7YFPg48FbG1zm0l1gF8x+Jvgoqt2cRUy/vM45/o5f4ZvwBYmhq0SYBv6U8HUj/iXg0mqZJBcAZwGuAzYlvKu8ANkzMR+WymCgGniA+fJ4glvNc2vrvS1t/7vvvQ1lOFCODzQTeVWSy47CO+JC+qsPvsycxFfXRtN+Mew7R2nNFwTmpsyYQj4M+CDy3jb+3mljY7PPEl7RO2oM4r8qwmur9wALicUftZT8CGFx8zAM+SvmmjDSMTka3xyFvTzQRX8jwowZWEx3KPgTs2uX81BkLiCGvZwLX89Shgw8Tq2D+F3FfWN+EPkX7CN251kYTb+zwtpZG2QqAPrOJijV7bLNhdDoWkzvt8xRgB2IJ2kNbsVvr91K3TKU8HXL/0OFtLY2yFgB9ZgDvAe5MztMwOhWjmfFPaoLDyb8e+6KdxyWFauJY7OGsJJ5B7UAskPOb3HSkQj1IdKqTFP1MfpqdRMvbs97YAuDpeoipbg8khqKcCqxNzUgav0/TmZ7VUlX9HUN32u221xOrb3adBcDIriDmu9+Z+ABdnJuONCYP0eBFSKRh3EA5puXdAHhDxhtbAIzOHcTY1O2J56i3p2Yjtef/EY+4JD3VicQKg9mOz3hTC4D2LAE+S6wwdRgxt0AZmpCk4TwCfC07CamkHiemHM72TGJl1a6yABibHmIO+9cQnQY/CtyXmpE0tM8SExRJGtrJwI3ZSRDThXeVBcD43Us0I21PzK9+HlEgSNkeBb6cnYRUcmuBf81OgphFsassAIqzFvgh8BKi0+AnieJAynISfvuXRuM0YsbCTHvT5VVQLQA64zZioYftiAVgTsYPYnXXk9jzXxqtHvJbAaYSRUDXWAB0Vg9wMdHDcz5wLLEqXG9mUmqE7xPD/ySNzunAdck5PLubb2YB0D3LgG8S86AvJPoN3JaZkGrtK9kJSBXTQ3TozrR9N9/MAiDHHcSJtiPwHOAzrd9JRbiKaHmS1J7vA9ckvv/23XwzC4B8lxPLpe4A7E8M27orNSNVnd/+pbHpAb6V+P7zuvlmFgDlcikx0+D2wB5EK4GPCdSOJcD/ZCchVdA8YuTMZxJz2KCbb2YBUF7XEf0EdiIeE3yMWDvaDoQaybeBFdlJSBUylf4p3t8NTErMxWGAeope4jHBR4B9gG2BvwZ+jKu76el2IqYVlbR+ryC+bH0GmJ2cC9R4zY6jiZtZVpze+U3suhnECfx14H5y969RnugB/o/oUyLp6fYAzif/Wh0cP+nkRmeyAOisCcCewHuJ1oFl5J/MRn6cRww9lQSbEJ1k15B/bQ4Vp3Zu03NZAHTXJOKRwfuJSnc1+Se3kRcXE3ONT0BqninAccAi8q/FkeLEDm1/OguAXLOBvwD+A7iM8lbARmfjcuCV2P9HzfEy4Abyr73RxBs7tA/SWQCUy0zgQKKF4GzgMfJPfqN7cS1wDDAZqZ52Jj7bsq+1dmK3juyJErAAKLdJxEIU7wa+R8xMmH0xGJ2PW4C3EkOhpDrYCPg8sSBW9vXVTjxGjVvmLACqZx7wYuCDwJlYFNQ57gb+li5PRCIVaDLwTuAR8q+nscRZxe+S8rAAqId5wGHAB4AzgBuxP0Gd4kFiUpRZSNVxCDGHf/b1M554W+F7pUQsAOprKjH5zOuAjwM/AG4G1pJ/URlji3uBlyCV25ZE62T29TLeWAtsVvC+WS87AKkITwJXt2KgacCurdiRWPBoYet1q24mqLZtRUxKchLwPmJyIalM9iKazbfOTqQAPwEe7vabWgCok1YDV7ZisOk8tSBYCCwgbjxbApvjmPVsE4D3AJsCbya+pUhl8ALgXGI0Ux18OeNNLQCU5Qng+lYMZQpRBGwDbEFU+VsSBcLmxIxe84CNKccc3nX2l8S6E2/PTkQi1rv4AfW5+V9PzNjZdRYAKqs1xHPoe0fx/04mCoHBMZfo1T6L6Kcwh2h52IAoGqbSXzzMIB5ZjGQa0aoBMdVy3zfiJUQTeS+weNDf2Zto3ai6twG/B76RnYgabSqxzsW87EQK9BEa8IjNToBqov3oLw6qHiuox/NWVdcHyL8OiozLSHzUWdtJB6SSuJT6LPAxA/hEdhJqrM2AD2UnUaB1xLwFvVkJWABInfd3xPj6Ovgr6vFIQ9XzZurz3B/gi0QLQBoLAKnzHiWm263Dc76JwJuyk1DjTKBenVCvBv4pOwkLAKk7zqUEF3xB3pCdgBpnx1bUwVKiT9yq7EQsAKTu+TTwnewkCrCQGJopdct+2QkUZA0xY+rN2YmABYDUbW8HfpudRAH2z05AjfLM7AQK0AO8hZj1rxQsAKTueoKYY//87ETGaZvsBNQoc7ITGKe1wLHA/2QnMpAFgNR9y4HDqfbcFFX/QFa1bJidwDisAo4Cvp2dyGAWAFKOJ4HXE4vtVNGU7ATUKMuzExijW4HnA2dnJzIUCwApTw+x2M7RPH0K4bLr+splarQ7sxMYg9OAfRl6MbRSsACQ8p0J7A78KDuRNtRlYiNVw53ZCbThbuAIooVvSXIuI7IAkMrhfuCVxAfHLcm5jMZN2QmoUapwTawCPg7sBpyTnEvpuBiQNDpTgBOIbw/Zi5UMFStxJVF11yzyz/vhooe4vyzo2NZ3iC0AUvmsIToHLgS+QPmmEL6W/qWQpW5YRjkfO10OvAB4DXBHci5tswCQyusRoiXgecDvk3MZ6NrsBNRIt2YnMMA9wF8SMxRenJzLmFkASOV3KVEEvIboYJTttuwE1Ej3ZidAPP76NPGc/7skLuVbBJ/jSdXQC5wB/JQoCHZJzOXOxPdWc92X/P5PAjuXII/C2AIgVcsy4LHkHCr3rFO1kH3jnUo8lqsNCwBJ7cr+IFYzlWHyqY2yEyiSBYCkdi3KTkCN9Hh2AsC87ASKZAEgqR1PEB2hpG4rw3TZtgBIaqxHsxNQY5WhAJiZnUCRLAAktWNVdgJqrDKce1OzEyiSBYCkdqzJTkCNtTo7ASwAJDXYk9kJqLHKcO5ZAEhqrHXZCaixyrD+RK0mz7MAkNSOSdkJqLHK8O27DK0QhbEAkNQOCwBlmZadABYAkhrMAkBZLAAKZgEgqR3TsxNQY22YnQDlGIlQGAsASe2o1UxoqpSNsxMAlmYnUCQLAEntmEPNekKrMspQfNZqJkwLAEntmADMzU5CjVSGAqAMCxIVxgJAUru2yE5AjbRl8vv3UI71CApjASBVyxHATsk5bJ/8/mqmrZPfvwc4lhqNhLEAkKphN+Bc4Cxg0+Rctk9+fzXTNsnvPxn4OnAN8LLkXAphASCV21bAtyjXh8722QmokbbNTqBlV6IY/yH5rXHjYgEgldNM4P3ADcCbKNe1umt2AmqcicDC7CQGORK4DvgasElyLqV3NNCbGKd3fhOlcZsIHAPcT+71MlLc27Gtl4a2A/nn/UjxKHACFRsiW6ZvFVLTHQJcCXyb/B7PI9kKmJedhBpl5+wE1mNj4PPE9XtYci6jZgEg5duaaKH6ObBnci6j9czsBNQo22cnMEq7A+cBpwHzk3NZLwsAKdfRRAe/o7MTaVN2j2w1S9XOt9cC1wOvzk5kJBYAUo4pwFeJb/5VnFlv8+wE1CjZQ1/HYg5wBvAl4novHQsAqfvmEMOIjs9OZBxmZCegRlmVncA4/A1wDjArO5HBLACk7poHXAQcmp3IONVqSlSV3rLsBMbpxcCvKMeKhn9iASB1zxzgZ9SjA12tVkVT6d2cnUAB9gZ+AmyYnUifbhYAvV18r6FY7CjTFOD/gH2yEynIldkJqFEuz06gIPsRMwiWYr6Abt4UV3TxvYZSqqYXNc5JwAuzkyjIEqKHs9QtNwIPZCdRkEOBT2cnAd0tAJZ28b2GUrVhJKqPNwLvyE6iQD8mVkaTuqUH+J/sJAr0XuBV2Ul0057kT9eYvZykmmcr4HHyz/0io+odGFVNuwHryD//i4qHqebwxjHZjvwd/tcd30rpqc4m/7wvMq7G/jTK8y3yr4Ei47uF7p0Sm03+zr4WmNDpDZVaDiP/nC86XlToHpLaszXxODn7OigyDih0D5XYfeTv7Fd0fCul+JZ8Ffnne5FRp2ewqq7slWWLjl8Xu3vK62fk7+zbgQ06vaFqvCPJP9eLjGuAmYXuIWnsPkX+NVFkNKJl7d/J39G9wGc7vaFqvAvJP8+LituBBcXuHmnc/o38a6Oo+L+C900pHUv+ju4lhpQc2eFtVXOVYcRLUXENFVjWVI3118QcM9nXyXhjHQ0osvcgf0f3xeJWPlLRPkn++T3e6AG+jM3+Kr+diXn2s6+Z8cb7C94vpXQ3+Tu6L+6jAVWXumoCcAf55/Z44jrgkKJ3jNRhBxFz7WdfP2ONy4rfJeXzVfJ39MC4Bdi2o1usJtmV/HN6rPE4cAIlXbtcGqW9gTOp3qRBPcDmHdgfpfIK8nf04LifeG4rjdc7yT+f2411wCnAZh3YH1KWhcQaHE+Qf42NNo7qyJ4okZnAKvJ39OB4mAZNyKCO+R/yz+V24iJgr47sCakctgO+BKwk/3pbX/xHh/ZBqZxC/o4eKtYAf9vB7Vb9XU3+eTyauBc4BmfGVHNsCpxIudfm+FmnNr5Mnkf+jh4pvoqTBal9kyl/c+NK4KPAjA7tA6nsNgL+BVhE/vU4OO7s3GaXyx/I39kjxbXYL0Dt2Yr883akOINoDpUUj6PfS7SGZV+bfbGO+CJRe28nf2evL1YRJ8ikDu0D1cszyT9nh4qrgIM7t9lSpU0j7ke3kn+t9gIbd3Zzy2EG0fs+e2ePJi7BSYO0fgeTf64OjEeIUQkWsNL6TSJGDWRftzt0ekPL4njyd/ZoYzXwr/jsVMN7EfnnaS/RmfWLNOSbhFSgi8m/fnfu+FaWxCTgevJ3eDth72kN58/IPz9/QTyKkNSevcm/fntp2MR0ryJ/h48lLgL268D+UHWVYXSLi1xJY1OW4em1nw1woAnEzTR7p48leoDvE9O/SgvIPyevBiZ2ekOlmtmCcgzhXUMD++zsRLWXdFwLfBPYsegdo0qZThSF2efjGzq9oVLNnEj+ddsL3NXh7Sytd5O/84soBL6LIwaa7B7yz8ObachYYqkA04AHyL9ue4FfdnhbS2sisfHZB6CI6AF+RCxPqWY5m/zzrxd4a6c3VKqJN5J/vfbFZzu8raW2gHLP0zyWuAx4PS6x2hQfI/+c6yWaEqd1eFulqpsAXEn+9doXr+3s5pbfy4im9OwDUXTcA3wI2LK4XaUSKsNQwL5wYStpZK8k/zrtix68PwDwfvIPRqfiSWLkwIuxt3YdTQGWkH+e9QIPArM7u7lSZU0A/kj+ddoXl3Z2c6tjAvC/5B+QTsdtwIeJRx+qj++Rf271RSPWF5fG4Ejyr8+B8aHObm61zAB+T/5B6Ub0AL8C3gLMKmDfKdcLyT+n+mINjkqRBptAuVakXYcrdT7NXMp1kLoRq4ie5McBm45/FyrJZeSfS33xa5y6WhqobN/+f9zZza2uTaneegFFxVpicYoTiJmqVB1vJv/8GRhODiT1K1OB3otTeI9oG+AO8g9SZqwFfg78DTB/fLtTXTANeIj886Yv7sPHSxLAK8i/Hgdfm07ctR47ALeSf7DKEOuIloEPAPvgaIKy+ij558rAaPQkIxIxSucG8q/FgfHxjm7xCKr2XHBz4Fxi2Ub1e4RYBvb8VjR2PumS2RK4E5ianEefNcC+xIJB3TSJWCnxAGK9jG1av+slztXrgcuB3xLFraptKnAg8CxgN2BO6/driON9K/F5dWdCbu8GTkp43+GsARYS88RoFGYDF5BftZU5bgK+RDR1OQ4816nknw8D40q6V5AsAL4CLBplbg8AXwS271J+Kta+wLcZ/Wyu1wDvAzbsUn4bA4+OMrduxXc7usU1NQ04jfyDV4VYQzwu+AhwGBYE3bYv+efA4Oh0k+NGwNeJSa/Gkt9q4MvEKCCV3zOAsxj7SpiPAv8MbNDhPD8/xvw6Gft2dItrbAIxic468g9ilWIdUXl/HTiWaKKzD0FnXUj+cR8Ya4D9O7StLyM6NRWR553EowOV11uB5RR3vF/ToTyfwdgL0k7FhR3a1kb5c+q3gFC343HgJ8Sa2C/Fb15FexH5x3hw3ECx37hmAScz9m+Bw8Ua4rmtymUD4BQ6c25eRPH9vMqySufAeEXB29hYOxIdm7IPaF2iB7gO+CYxB8HBWBSMV9laAXopbprgg+n8MN1vAtMLylfjsw3RabOTx3sd8A2i4/d4HdbhXMcS12PLa6FmEh1Qsg9sneN24IdEf4JXAbvg+NXROpj84zc41rXyGqsNiOeq3XoM93vsIJjtRXR3foslwD8y9qWtp1G+YX+9ODFXxxxNDIvLPsBNidVE68v3iD4ZrwaeSfd69lbJL8g/XoPjTmDeGLblucCNCfk+ThSf6q7JROfRrD5XtzK22fL+NSnfkeJGYhisOmQ+8DPyD3TT4yHgEmKoy8eJTocHA9vSzOavg8g/JkPFuYz+eEwF/o2YmTIz5/8kWv3UeQuIkUTZ52kvMQR8z1HmvSfxBSU758Hxl6PMX+MwAXgXsIL8A248PVYT8xX8hBjy9T7glcQ3y62IGbvq6Hzy9/1Q8eFR5P5s4KoS5NoXtxJFlTpjAvAOYBn5x3pgrCXml9hkhNwnEV8+snMdHH7777IFxEpL2QfeaC96iIlh/kD04P0aMUrhXcBriZaEPYhOQlW6oJ5P/r4dKtYBLx4m58nEWuVl/Da1jpjZzUdOxVpIrD2SfXxHiseA9zD0l4V3lyC/oaJUz/6rNhXweLya+KBwIZ16WkQ8H17ciiWD/tz3uyeApUTL0BOt361s/by4S7n+FHhJl96rHY8Qa0vcPeB3uxKda5+TktHo3Qe8FzgjO5GKm050uvsAnZ+Ypyg3Ei2I57b+vB1wLeUrCq8A9iO+3JRCkwoAiFnwPg68k2p9a1R3LSfGn0MUBb1Es+Oy9fy91UQxsT5bETfWMvo98AJie98DfIJqDb87nygErstOpIIOBz4H7JSdyBj9hCgE/p2YkKpsXkR0BFayZwHnkd8cZBhljFOIyViy8xhrrCXGkG+FRmM/4FfkH7cioqwzw/54tAdD3fNSnEDIMOoaK4DPAJuhoTwLOJPiZ280nhprif5KKqFJxHzWRc1fbhhGuWIFMeuh/X/CPsCP8Mbfrfja6A6LMs0E/p7uznJlGEb3YjWxPHMTV2CbRAyz/RX5x6FJsYixTbSlJDOAvwMeJP/kMQyjM/Eb4E3UfzKh+cAHiWm8s/d5E+Nt6z9EKqMZRC/o+8k/iQzD6EwsIVYx3Iv6mAj8BTF/RvaMjU2O39HMGU9rZTpRxV1H/gllGEbn4ufAn1Fdk4khzreQvy+bHmupV1HZeBOIsaVlncrVMIzxRw/wX1Rv+etnExPNZO8/I+JzIx+ucmjaREBFeSYx2cjrqNYkKZJG5zZimPCt2YmMwhuAbxILNSnfrcQQy9FMCpbKAmB85hEdiY4DnpGci6RiPUysj3BVdiIjOIEY4uhneTn0EI+RLspOZDQ8aYqzD1EIvJHqzKEtaWT3EzPl3ZedyBCOBL6PHc3K5IvEQkSVYAFQvM2IIuAY4lGBpGr7LbE+wrrsRAbYmXjmX7YFb5rsDmBPYuKpSnBBnOKtIIZ/fJVYmewRYHuq16lIUtiGmBfk8uxEBjgV2D07Cf1JD3AUMQKjMmwB6I5JwCFEy8CRwKzcdCS16XFgYes125HAD7OT0FN8BPhYdhLtsgWgO3qJmbh+SAwPuZRYWnZb6j8TmVQHGxDThF+SnQjRurh9dhL6k4uJ9WR6sxNply0AuaYChwGvJmbu2jg3HUkjuBnYhdwP+l2A6/GzuyweJ+ZguDs7kbGw92iuJ4l1ot8CbAG8iGghuDkzKUlD2pm4AWc6HG/+ZdFLzBJbyZs/WACUyRrgF8D7iDkFFgLHA+cQhYKkfAclv/+Bye+vfp8FfpCdxHhYSVbDHKJ14NBW7JSbjtRYXyfm+8hyF9F3SLl+SUwStTY7kfGwAKimLYhvIocCfw5slZuO1BhnAa9IfP+VONFYtgeIid8eyE5kvCwAqm8iMeHQC4ii4ECiQJBUvN8Bz0967+nAqqT3VngSeCHlGA0ybhYA9TQfOIBoITgQ2BWPtVSEK4B9k957NrAk6b0Vnf7eAnw7O5GieFNohi2I+cz3A/YHnkP0K5C67S7gWuLRVRVZAIzdMqJT86uBKcm5jMXfAl/KTkIar4lEq8CbgK8AvyeeLWavoW3UN1YQs6X1Pb9+NTG9bnZe7UbmdMCzR8ir7HEB/ZMXPQM4uwQ5jTbWETd/qbYmAbsRa4t/BjgfWET+xWdUP05j6J7r84DvlCC/dsICoL1YSgxnHqq1+TDg6hLkOFKsBl433AGR6m5r4GXA3wP/Tf80xtkXplH++CPROXV9DgNuKkG+owkLgNHHGcTnx0gmEQXCQyXId3DcSTwylTTABKI57+XAPwDfAC4k1k7PvmiN/FhEfKi3s9bIVOCDxKOC7PxHCguA9cfNxBj5dswhWh6fKEH+vcCZODW71LYNgb2A1wD/BHwT+DVwD/EsLfvCNjoXq4GTgI0Yu22JxwI9JdieocICYPhYDHwAmDaObVwIfD9xG+4hd54HqbamEhf4IcCxwEeJITUXArcSY5yzP8SM9mM58HlgG4qzD/DzEmzb4LAAeHqsBv6D6NNRlP2JjoPd2oZFRGvmjAK3ofQcBqiy2ZiYx2BrYvjiNsCWrd9tAmza+v3srAQrqpfir/fLgO8S39gfKfjf7vNy4F+BvTv077fLYYD91gL/C5xILHfeCc8D3gW8ivG1LAznOmJ55W8TfZsaxQJAVTWNKAb6CoJNiKbnvpg7xOts6jn/wXLgUaIPxsPEFKUPEp2Y7mrFvUQx9VLgJcQEUe0+43yEWPv8ImIVy26tWjkBOAL4MNEykMkCIBYu+w7wb0TLXTdsCrwSOJJoQRxPMXAL8CPgh8TMjo1lAaAmmkk09c1qxYzW7+YSHdf6ioRZwGTiw2YGcb3MHeLfm9r6++1aTnyYQkwxumLAf1tMfGtfS3wzebz1urT1uoy4GSwhnpePxXxgD2JxqY1b0dcEuoxo2r2H+JC/jSgoesf4XkWYQCzE89XEHJpeANwNHAzckZjDBkSL0HOJ83cBsB1x3c4krsfFxCPFB4lcbyNGMF1CFMOSpIrZB/sANHX7VbCJ2QlIkqTuswCQJKmBLAAkSWogCwBJkhrIAkCSpAayAJAkqYEsACRJaiALAEmSGsgCQJKkBpqcnYAktWHN+v+XjtqDmFZ2MTGVc9+0zEtbv1tG5Liu9bs+q4i17vtMIZbO7tM3he0k+tesmDUgZjO+ZZaLsjY7ARXHAkBSlaxY///SUdOAHZJzyLQ8OwEVx0cAkqrEG1Au93+NWABIqpJHiJUTleOh7ARUHAsASVWyDrgrO4kGuy07ARXHAkBS1dySnUCDWQDUiAWApKq5LDuBBnPf14gFgKSq+U12Ag11H3B3dhIqjgWApKq5BDsCZrgwOwEVywJAUtUsA87LTqKBfpidgIplASCpis7ITqBhVgE/yU5CxbIAkFRFP+SpU+2qs35A/iyMKtik7AQkaQyeBLYAnpudSEO8negEKElSuh2JxWl6jY6Goy5qyhYASVX1GLANsHd2IjX3FuCO7CQkSRpoPrFATfa35LrGuaM/FKoaWwAkVdky4jHAYdmJ1NATwFHEAkySJJXOROI5dfa35brFP7ZzECRJyrArMSww+6ZZl/g1MLmtIyBJUpJXAD3k3zyrHg8QfStUc/YBkFQXNwETgIOT86iylcCfAzdkJyJJUrs+S/636CrGauDlY9jfkiSVwgTgy+TfUKsUK4EjxrKzJUkqmxOAdeTfXMsejwIHjXEfS5JUSkcDS8i/yZY1rgR2HvPelSSpxBYCl5J/sy1T9BCPSaaPY79KklR6E4HjsDWglxgt4cyJkqRGmQ98hZjmNvtG3O24j+gXMWXce1GSpIraGvgcMc999o2503EN8A5s7pck6U+mAa8DzqRejwduA74I7F/crlLdTMhOQJJKYgrwPOKmuTewJ7AAmJGZ1Cg8BNxK9Oi/ErgIuDk1I1WCBYAkjWwe8chgG2BbYHNgU2CL1usmrddZwNSC3nM5sdTxIuIG/3Dr50XAvcA9rbiX6M8gtc0CQJKKMw2YTRQDG7V+N5f4rJ1Gf2vCYqKp/klgRet1GfEYYgkxTE+SJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJOLoyfgAAAAgSURBVEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJKnG/j809msjdug+4gAAAABJRU5ErkJggg=="
                          />
                        </defs>
                      </svg>

                      <h3>Third-Party Services</h3>
                      <p>
                        Integration of payment gateways &amp; marketing tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="headless-commerce-button-group2">
                <Link href={"/contact-us"}>
                  {" "}
                  <button type="submit">
                    Request a quote
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.207 17.707L16.914 12L11.207 6.29303L9.79297 7.70703L14.086 12L9.79297 16.293L11.207 17.707Z"
                        fill="#F2F2F2"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="headless-commerce-content3-l-para">
                <p>
                  On our <span>illustration,</span> you can see&nbsp;the key
                  specifics of headless architecture - a single back end
                  connects to multiple fronts via APIs. Here, we give examples
                  of user interfaces and system integrations that are most
                  commonly used in Kushel Digi projects, still other integration
                  scenarios may arise from your particular business situation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="headless-commerce-banner5">
          <div className="headless-commerce-container5">
            <div className="headless-commerce-content5">
              <h2>Different faces of the front-end layer</h2>
            </div>
            <div className="headless-commerce-cards-last-content5">
              <div className="design">
                <div className="headless-commerce-cards-content-flex5">
                  <div className="headless-commerce-cards-main5">
                    <Image
                      src={cartcard}
                      alt="Ecommerce Front End"
                      title="Ecommerce Front End"
                    />
                    <p>Ecommerce Front End </p>
                  </div>
                  <div className="headless-commerce-cards-main5">
                    <Image
                      src={cartcard}
                      alt="Ecommerce Front End"
                      title="Ecommerce Front End"
                    />
                    <p>Ecommerce Front End </p>
                  </div>
                  <div className="headless-commerce-cards-main5">
                    <Image
                      src={cartcard}
                      alt="Ecommerce Front End"
                      title="Ecommerce Front End"
                    />
                    <p>Ecommerce Front End </p>
                  </div>
                </div>
                <div className="headless-commerce-cards-content5">
                  <div className="headless-commerce-cards-flex5">
                    <div className="headless-commerce-aero-images">
                      <Image src={arrow} alt="arrow" title="arrow" />
                    </div>
                    <div>
                      <p>
                        Front-end frameworks Vue.Js, React, Angular, Next.Js,
                        Inferno
                      </p>
                    </div>
                  </div>
                  <div className="headless-commerce-cards-flex5">
                    <div className="headless-commerce-ccc">
                      <Image
                        src={arrow}
                        alt="arrow"
                        title="frontend-technology"
                      />
                    </div>
                    <div className="headless-commerce-para-p">
                      <p>
                        Front-end frameworks Vue.Js, React, Angular, Next.Js,
                        Inferno
                      </p>
                    </div>
                  </div>
                  <div className="headless-commerce-cards-flex5">
                    <div>
                      <Image
                        src={arrow}
                        alt="frontend-technology"
                        title="frontend-technology"
                      />
                    </div>
                    <div>
                      <p>
                        Front-end frameworks Vue.Js, React, Angular, Next.Js,
                        Inferno
                      </p>
                    </div>
                  </div>
                </div>
                <div className="headless-commerce-rest-api">
                  <div className="headless-commerce-card">
                    <div className="headless-commerce-card-content-main5">
                      <Image
                        className="imhggg"
                        src={apis}
                        alt="REST APIs"
                        title="REST APIs"
                      />
                    </div>
                    <div className="headless-commerce-para">
                      <p>REST APIs</p>
                    </div>
                  </div>
                </div>
                <div className="headless-commerce-aero-s">
                  <div className="headless-commerce-aero-svg">
                    <svg
                      width={40}
                      height={93}
                      viewBox="0 0 40 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1={20}
                        y1={35}
                        x2={20}
                        y2={65}
                        stroke="#D2D2D2"
                        strokeWidth={4}
                      />
                      <path d="M40 34.5H0L20.5 0L40 34.5Z" fill="#D9D9D9" />
                      <path
                        d="M3.01609e-06 58L40 58L19.5 92.5L3.01609e-06 58Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="headless-commerce-aero-third-section-main">
                  <div className="headless-commerce-aero-third-section">
                    <div className="headless-commerce-aero-third-section-part1">
                      <Image
                        className="imhggg"
                        src={backends}
                        alt="BACK-END"
                        title="BACK-END"
                      />
                      <p>BACK-END</p>
                    </div>
                    <div className="headless-commerce-aero-svg">
                      <svg
                        width={40}
                        height={93}
                        viewBox="0 0 40 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1={20}
                          y1={35}
                          x2={20}
                          y2={65}
                          stroke="#D2D2D2"
                          strokeWidth={4}
                        />
                        <path d="M40 34.5H0L20.5 0L40 34.5Z" fill="#D9D9D9" />
                        <path
                          d="M3.01609e-06 58L40 58L19.5 92.5L3.01609e-06 58Z"
                          fill="#D9D9D9"
                        />
                      </svg>
                    </div>
                    <div className="headless-commerce-aero-third-section-part3">
                      <Image
                        className="imhggg"
                        src={onlineimage}
                        alt="bar-graph"
                        title="bar-graph"
                      />
                      <Image
                        className="imhggg"
                        src={onlineimage}
                        alt="bar-graph"
                        title="bar-graph"
                      />
                      <Image
                        className="imhggg"
                        src={onlineimage}
                        alt="bar-graph"
                        title="bar-graph"
                      />
                    </div>
                    <div className="headless-commerce-aero-svg">
                      <svg
                        width={40}
                        height={93}
                        viewBox="0 0 40 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1={20}
                          y1={35}
                          x2={20}
                          y2={65}
                          stroke="#D2D2D2"
                          strokeWidth={4}
                        />
                        <path d="M40 34.5H0L20.5 0L40 34.5Z" fill="#D9D9D9" />
                        <path
                          d="M3.01609e-06 58L40 58L19.5 92.5L3.01609e-06 58Z"
                          fill="#D9D9D9"
                        />
                      </svg>
                    </div>
                    <div className="headless-commerce-aero-third-section-part4">
                      <Image
                        className="imhggg"
                        src={backends}
                        alt="DATA ANALYTICS"
                        title="DATA ANALYTICS"
                      />
                      <p>DATA ANALYTICS</p>
                    </div>
                  </div>
                  <div className="headless-commerce-aero-third-apicall-sec">
                    <div className="headless-commerce-apicall">
                      <p>API Calls</p>
                      <svg
                        width="217"
                        height="40"
                        viewBox="0 0 217 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="182"
                          y1="20"
                          x2="34"
                          y2="20"
                          stroke="#D2D2D2"
                          stroke-width="4"
                        />
                        <path
                          d="M182 40L182 -1.50804e-06L216.5 20.5L182 40Z"
                          fill="#D9D9D9"
                        />
                        <path
                          d="M34.5 4.52413e-06L34.5 40L2.68825e-06 19.5L34.5 4.52413e-06Z"
                          fill="#D9D9D9"
                        />
                      </svg>
                    </div>
                    <div className="headless-commerce-api-nextstep">
                      <div className="headless-commerce-api-nextstep-partfirst">
                        <Image src={apiname} alt="ERP" title="ERP" />
                        <p>ERP</p>
                      </div>
                      <div className="headless-commerce-api-nextstep-partfirst">
                        <Image src={apiname} alt="ERP" title="ERP" />
                        <p>ERP</p>
                      </div>
                      <div className="headless-commerce-api-nextstep-partfirst">
                        <Image src={apiname} alt="ERP" title="ERP" />
                        <p>ERP</p>
                      </div>
                      <div className="headless-commerce-api-nextstep-partfirst">
                        <Image src={apiname} alt="ERP" title="ERP" />
                        <p>ERP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="headless-commerce-handle">
                  <div class="headless-commerce-cards-backend">
                        <img   src={backends} alt="">
                  </div>
                  <div class="headless-commerce-cards-para">
                      <p>BACK-END</p>
                  </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="headless-commerce-banner4">
          <div className="headless-commerce-container4">
            <div className="headless-commerce-content4">
              <h2>Headless Commerce Development Life Cycle</h2>
            </div>
            <div className="headless-commerce-cards-content4">
              <div className="headless-commerce-cards-content-flex4">
                <div className="headless-commerce-cards-content-main4">
                  <Image
                    src={cardthree}
                    alt="Informalytics"
                    title="Informalytics"
                  />
                  <p>Informalytics</p>
                </div>
                <div className="headless-commerce-cards-content-main4">
                  <Image
                    src={cardthree1}
                    alt="Headless Theme Crafting"
                    title="Headless Theme Crafting"
                  />
                  <p>Wire planning</p>
                </div>
                <div className="headless-commerce-cards-content-main4">
                  <Image src={cardthree2} alt="" />
                  <p>Headless Theme Crafting</p>
                </div>
                <div className="headless-commerce-cards-content-main4">
                  <Image
                    src={cardthree3}
                    alt="API Headway"
                    title="API Headway"
                  />
                  <p>API Headway</p>
                </div>
                <div className="headless-commerce-cards-content-main4">
                  <Image
                    src={cardthree4}
                    alt="Headless Integration"
                    title="Headless Integration"
                  />
                  <p>Headless Integration</p>
                </div>
                <div className="headless-commerce-cards-content-main4">
                  <Image
                    src={cardthree5}
                    alt="Headless Testing"
                    title="Headless Testing"
                  />
                  <p>Headless Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headless-commerce-banner6">
          <div className="headless-commerce-container6">
            <div className="headless-commerce-content6">
              <h2>Let’s Talk</h2>
              <p>
                Book a free call and have a no-strings-attached chat about your
                ideas.
              </p>
              <div className="headless-commerce-buton-group-3">
                <Link href={"/contact-us"}>
                  {" "}
                  <button type="submit">
                    Book a Call
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.207 17.707L16.914 12L11.207 6.29297L9.79297 7.70697L14.086 12L9.79297 16.293L11.207 17.707Z"
                        fill="#F2F2F2"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="home9 mb-12">
        <div className="home91 px-24 dine-1234">
          <div className="home911 text-center newclasscentre">
            <h2 className="font-bold text-gray-700">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="home912 FAQ-1">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q. What is headless commerce?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Headless E-commerce is an E-commerce architecture where the
                    front-end is decoupled from the back-end.{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q. What are the benefits of using a headless commerce
                    solution?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Benefits of using headless commerce are greater flexibility
                    in design and user experience, improved performance, easier
                    integration with other systems.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q. How does headless commerce differ from traditional
                    E-commerce platforms?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Traditional E-commerce platforms are monolithic, with the
                    front-end and back-end tightly coupled whereas headless
                    commerce separates these layers.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q. Can headless commerce solutions integrate with existing
                    systems and services?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, headless commerce solutions are designed to integrate
                    easily with various third-party systems and services such as
                    payment gateways, shipping providers and other existing
                    systems.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q. What kind of businesses can benefit from headless
                    commerce?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Headless commerce may be advantageous for businesses of all
                    sizes, especially those seeking more performance and
                    customisation.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div> */}
      <HeadlessFAQ />
      <div className="whtsApBtns">
        <button onClick={whatAppHandler}>
          <Image
            className="what-image-universal"
            src={whatsApp}
            alt="whatsApp-kusheldigi"
            title="whatsApp-kusheldigi"
          />
        </button>
        <button onClick={callHandler}>
          <Image src={call} alt="call-icon" title="call-icon" />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Headless;
