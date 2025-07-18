
"use client";
import React, { useEffect } from "react";

import Head from 'next/head';
import '../globals.css'
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";

import ContactForm1 from "../COMMON/ContactForm1";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import Website from "../components/Home/HomeForm";

const IosComponent = () => {
    const phoneNumber = "9045301702";

    const whatAppHandler = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
    };
    const callHandler = () => {
        const callUrl = `tel:${phoneNumber}`;
        window.open(callUrl, "_blank");
    };

    const scrollToTop = () => {
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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

            <Navbar />

            <div className="ser-main">
                <div className="android-back ios-back">
                    <div className="android-back1 ios-back1">
                        <div className="ios-back-under-sec">
                            <h1>
                                <span>Custom IOS</span>
                                <br /> app development company
                            </h1>
                            <p>
                                Develop next-gen iOS apps that are quality tested for perfection
                                with future-forward iOS application development services.
                            </p>
                            <Link href="/contact-us">
                                {" "}
                                <button>
                                    Lets get started{" "}
                                    <svg
                                        className="ml-2"
                                        width="15"
                                        height="13"
                                        viewBox="0 0 19 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div className="android-back2 ios-back2">
                            {/* <img src={iosji} alt="IOS app development company" title="IOS app development company" /> */}
                            <img
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724830570/iosji.c2733f2e61239dec17f3_vk838c.png
"
                                alt="IOS app development company"
                                title="IOS app development company"
                            />
                        </div>
                    </div>
                </div>
                <div className="android2-app dine-1234">
                    <div className="android-fun android-funst">
                        <div className="android-fun1 ios-fun1">
                            <h2>Our Services for Developing iOS Apps</h2>


                            <img
                                className="ftp"
                                src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179701/android-sis_khrtor.png'
                                alt=" Describe your objectives to us "
                                title=" Describe your objectives to us "
                            />
                            <Link className="letsy letsay" href="/contact-us">
                                <h5>
                                    Describe your objectives to us
                                    <svg
                                        className="ml-2"
                                        width="15"
                                        height="13"
                                        viewBox="0 0 19 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z"
                                            fill="#21698E"
                                        />
                                    </svg>
                                </h5>
                            </Link>
                        </div>
                        <div className="android-fun2 ios-fun2">
                            <p>
                                Kushel Digi excels in crafting custom iOS apps designed to boost
                                engagement, elevate brand value, and drive revenue. Our
                                certified developers, who are experts in Apple products, utilize
                                cutting-edge tools to ensure high-quality services.
                            </p>
                            <p className="mt-4">
                                Kushel Digi stands out for its iOS app innovation, creating
                                engaging custom applications that elevates business success.
                                Leveraging deep expertise in the Apple ecosystem, we deliver
                                exceptional solutions.
                            </p>
                        </div>
                    </div>
                    <div className="android-cards">
                        <div className="android-card">
                            <div className="android-box android-box1 android-boxes1">
                                <div className="android0-img flex items-center">
                                    <img
                                        src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179562/bulb1_ggvrkd.png'
                                        alt="OS App Development Consultation"
                                        title="OS App Development Consultation"
                                    />
                                    <h4 className="ml-3">iOS App Development Consultation</h4>
                                </div>
                                <p>
                                    Our iOS app development team helps businesses assess if iOS is
                                    the right platform for their needs and recommends the best
                                    tech stack based on app features.
                                </p>
                            </div>
                            <div className="android-box android-box2 android-boxes1">
                                <div className="android0-img flex items-center">
                                    <img
                                        src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179607/bulb2_esfqpu.png'
                                        alt="Custom iOS App Development"
                                        title="Custom iOS App Development"
                                    />
                                    <h4 className="ml-3">Custom iOS App Development</h4>
                                </div>
                                <p>
                                    Our iPhone app developers excel in creating cutting-edge,
                                    extensible iOS solutions. We specialise in delivering unique,
                                    tailored iOS apps for both established businesses and startups
                                    worldwide.
                                </p>
                            </div>
                        </div>
                        <div className="android-card">
                            <div className="android-box android-box3 android-boxes1">
                                <div className="android0-img flex items-center">
                                    <img
                                        src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179640/bulb3_akygup.png'
                                        alt=" iOS UI/UX Design"
                                        title=" iOS UI/UX Design"
                                    />
                                    <h4 className="ml-3">iOS UI/UX Design</h4>
                                </div>
                                <p>
                                    iOS apps are renowned for their immersive and memorable
                                    designs. Our iOS app developers specialise in crafting
                                    experience-driven designs that align with the Apple ecosystem
                                    and exceed customer expectations.
                                </p>
                            </div>
                            <div className="android-box android-box4 android-boxes1">
                                <div className="android0-img flex items-center">
                                    <img
                                        src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739179666/bulb4_nidj4f.png'
                                        alt=" iOS App Testing and Security"
                                        title=" iOS App Testing and Security"
                                    />
                                    <h4 className="ml-3">iOS App Testing and Security</h4>
                                </div>
                                <p>
                                    We prioritise security and performance in every step of our
                                    iPhone app development process. Combining human testing with
                                    algorithm-driven automated checks, we ensure your app is
                                    bug-free and resilient against hacks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="android-offerss">
                    <div className="android-offer ios-offer">
                        <div className="android-offer1 ios-offer1 ">
                            <h3 className="hideafter450">
                                {" "}
                                Boosting Your Business Through <br /> the Development of Custom{" "}
                                <br /> iOS Applications
                            </h3>
                            {/* <h3 className="hidetill450">
                {" "}
                Boosting Your Business Through the Development of Custom iOS
                Applications
              </h3> */}
                            <p>
                                We have a skilled team of experienced iPhone app developers who
                                specialise in crafting tailored iOS solutions. Our services
                                encompass custom iPhone app development, where we pay meticulous
                                attention to the distinctive design and development guidelines
                                set by Apple for various platforms, including iPad, iPhone,
                                Apple TV, and Apple Watch. Our iOS app developers have a proven
                                track record of creating applications for diverse purposes.
                            </p>
                        </div>
                        <div className="android-offer2 ios-offer2">
                            {/* <img src={iospo} alt="Custom IOS Applications" title="Custom IOS Applications" /> */}
                            <img
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1724830570/iospo.85219d2651da577e1d27_dhm8rn.png
"
                                alt="Custom IOS Applications"
                                title="Custom IOS Applications"
                            />
                        </div>
                    </div>
                </div>

                <div className="android-usa">
                    <div className="android-usa1 ios-usa1">
                        {/* <h3 className="hideafter450">Use Cases That Lead</h3>
            <h3 className="hideafter450">SMEs and Enterprises to Choose</h3>
            <h3 className="hideafter450">iOS Development</h3> */}

                        <h3 className="hideafter450">
                            Use Cases That Lead SMEs and Enterprises to Choose iOS Development
                        </h3>
                        <p>
                            By utilising our custom iOS app development services, you can
                            confidently harness the full potential of the Apple ecosystem.
                        </p>
                    </div>
                    <div className="android-usa2 ios-usa2"></div>
                    <div className="android-usa3">
                        <div className="android-usas">
                            <div className="android-usas1">
                                <div className="android-usast1 w-full">
                                    <h3>1</h3>
                                    <p>Multi-platform presence</p>
                                </div>

                                <div className="android-usast1 android-usast2 w-full">
                                    <h3>2</h3>
                                    <p>Simple integration</p>
                                </div>
                            </div>
                            <div className="android-usas1">
                                <div className="android-usast1 w-full">
                                    <h3>3</h3>
                                    <p>Greater revenue</p>
                                </div>

                                <div className="android-usast1 android-usast2 w-full">
                                    <h3>4</h3>
                                    <p>Increased potential for innovation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="android-pro">
                    <div className="android-process ios-process flex-col items-center justify-center">
                        <div className="android-process1">
                            <h2 className="text-center">
                                The Method We Follow to Become a Leading ios Application
                                Development Company
                            </h2>
                        </div>
                        <div className="android-process2">
                            <div className="prot-process mt-12">
                                <div className="prot-img">
                                    <svg
                                        width="40"
                                        height="34"
                                        viewBox="0 0 40 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M37.7437 0.922852H2.25757C1.65903 0.923529 1.08518 1.16707 0.661947 1.60003C0.238714 2.033 0.000661739 2.62001 0 3.23231V31.6134C0.000661739 32.2257 0.238714 32.8127 0.661947 33.2457C1.08518 33.6786 1.65903 33.9222 2.25757 33.9229H37.7424C38.341 33.9222 38.9148 33.6786 39.3381 33.2457C39.7613 32.8127 39.9993 32.2257 40 31.6134V3.23487C39.9993 2.62257 39.7613 2.03555 39.3381 1.60259C38.9148 1.16963 38.341 0.926085 37.7424 0.925408L37.7437 0.922852ZM38.7112 31.6134C38.7109 31.8758 38.6088 32.1273 38.4275 32.3129C38.2461 32.4984 38.0002 32.6028 37.7437 32.6032H2.25757C2.00097 32.6032 1.75487 32.4989 1.57342 32.3133C1.39197 32.1276 1.29004 31.8759 1.29004 31.6134V6.2029H38.71L38.7112 31.6134ZM38.7112 4.88705H1.29004V3.23487C1.29004 2.97237 1.39197 2.72061 1.57342 2.535C1.75487 2.34938 2.00097 2.2451 2.25757 2.2451H37.7424C37.9989 2.24544 38.2448 2.34982 38.4262 2.53537C38.6076 2.72091 38.7096 2.97247 38.71 3.23487L38.7112 4.88705Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M2.61723 4.27042H3.27223C3.44084 4.26288 3.60011 4.18907 3.71681 4.06435C3.83351 3.93963 3.89864 3.77363 3.89864 3.60098C3.89864 3.42833 3.83351 3.26236 3.71681 3.13764C3.60011 3.01292 3.44084 2.93909 3.27223 2.93155H2.61723C2.52889 2.9276 2.44066 2.94199 2.3579 2.97385C2.27514 3.00571 2.19954 3.05438 2.13566 3.11694C2.07179 3.17949 2.02095 3.25463 1.98622 3.33782C1.95149 3.42101 1.93359 3.51052 1.93359 3.60098C1.93359 3.69144 1.95149 3.78098 1.98622 3.86417C2.02095 3.94736 2.07179 4.02248 2.13566 4.08503C2.19954 4.14758 2.27514 4.19627 2.3579 4.22813C2.44066 4.26 2.52889 4.27437 2.61723 4.27042Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M5.23442 4.27042H5.88942C5.97776 4.27437 6.06597 4.26 6.14873 4.22813C6.23149 4.19627 6.3071 4.14758 6.37098 4.08503C6.43486 4.02248 6.4857 3.94736 6.52043 3.86417C6.55516 3.78098 6.57305 3.69144 6.57305 3.60098C6.57305 3.51052 6.55516 3.42101 6.52043 3.33782C6.4857 3.25463 6.43486 3.17949 6.37098 3.11694C6.3071 3.05438 6.23149 3.00571 6.14873 2.97385C6.06597 2.94199 5.97776 2.9276 5.88942 2.93155H5.23442C5.14607 2.9276 5.05784 2.94199 4.97508 2.97385C4.89232 3.00571 4.81673 3.05438 4.75285 3.11694C4.68897 3.17949 4.63814 3.25463 4.60341 3.33782C4.56868 3.42101 4.55078 3.51052 4.55078 3.60098C4.55078 3.69144 4.56868 3.78098 4.60341 3.86417C4.63814 3.94736 4.68897 4.02248 4.75285 4.08503C4.81673 4.14758 4.89232 4.19627 4.97508 4.22813C5.05784 4.26 5.14607 4.27437 5.23442 4.27042Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M7.74223 4.27042H8.39723C8.48557 4.27437 8.57378 4.26 8.65654 4.22813C8.73931 4.19627 8.81492 4.14758 8.8788 4.08503C8.94267 4.02248 8.99351 3.94736 9.02824 3.86417C9.06297 3.78098 9.08087 3.69144 9.08087 3.60098C9.08087 3.51052 9.06297 3.42101 9.02824 3.33782C8.99351 3.25463 8.94267 3.17949 8.8788 3.11694C8.81492 3.05438 8.73931 3.00571 8.65654 2.97385C8.57378 2.94199 8.48557 2.9276 8.39723 2.93155H7.74223C7.65389 2.9276 7.56566 2.94199 7.4829 2.97385C7.40014 3.00571 7.32454 3.05438 7.26066 3.11694C7.19679 3.17949 7.14595 3.25463 7.11122 3.33782C7.07649 3.42101 7.05859 3.51052 7.05859 3.60098C7.05859 3.69144 7.07649 3.78098 7.11122 3.86417C7.14595 3.94736 7.19679 4.02248 7.26066 4.08503C7.32454 4.14758 7.40014 4.19627 7.4829 4.22813C7.56566 4.26 7.65389 4.27437 7.74223 4.27042Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M21.5178 14.0841C21.353 14.0278 21.1732 14.0407 21.0178 14.1201C20.8623 14.1995 20.7441 14.3388 20.689 14.5073L18.0715 22.5419C18.0216 22.709 18.0376 22.8895 18.116 23.0448C18.1944 23.2001 18.329 23.3179 18.491 23.3731C18.6531 23.4283 18.8299 23.4166 18.9836 23.3404C19.1374 23.2641 19.2559 23.1295 19.314 22.9651L21.9316 14.9306C21.9588 14.8472 21.9697 14.7592 21.9637 14.6715C21.9576 14.5838 21.9347 14.4982 21.8963 14.4196C21.8578 14.341 21.8046 14.2709 21.7397 14.2133C21.6748 14.1557 21.5994 14.1118 21.5178 14.0841Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M24.392 14.3489C24.3445 14.2754 24.2833 14.2121 24.2119 14.1627C24.1405 14.1133 24.0602 14.0788 23.9758 14.0612C23.8486 14.0347 23.7165 14.0475 23.5965 14.098C23.4764 14.1486 23.3738 14.2345 23.3016 14.3449C23.2295 14.4553 23.1911 14.5852 23.1914 14.718C23.1917 14.8508 23.2306 14.9805 23.3033 15.0906L25.6783 18.7377L23.3033 22.3847C23.2557 22.4579 23.2226 22.5399 23.206 22.6261C23.1893 22.7123 23.1895 22.801 23.2064 22.8871C23.2233 22.9733 23.2566 23.0552 23.3044 23.1282C23.3522 23.2012 23.4136 23.2638 23.4851 23.3125C23.5566 23.3612 23.6368 23.395 23.7211 23.412C23.8053 23.429 23.892 23.4289 23.9762 23.4116C24.0605 23.3943 24.1405 23.3602 24.2119 23.3113C24.2832 23.2624 24.3444 23.1996 24.392 23.1264L27.0096 19.1085C27.0813 18.9988 27.1196 18.8697 27.1196 18.7377C27.1196 18.6057 27.0813 18.4766 27.0096 18.3668L24.392 14.3489Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M16.5218 14.1619C16.4502 14.1131 16.37 14.0793 16.2856 14.0622C16.2013 14.0452 16.1145 14.0453 16.0302 14.0627C15.9459 14.08 15.8657 14.1142 15.7944 14.1633C15.723 14.2124 15.6618 14.2754 15.6143 14.3487L12.9967 18.3666C12.925 18.4763 12.8867 18.6054 12.8867 18.7374C12.8867 18.8694 12.925 18.9985 12.9967 19.1083L15.6143 23.1262C15.7104 23.2739 15.86 23.3764 16.0301 23.4113C16.2001 23.4462 16.3768 23.4106 16.5212 23.3122C16.6656 23.2139 16.7658 23.0609 16.7999 22.8869C16.834 22.7129 16.7992 22.5322 16.703 22.3845L14.328 18.7374L16.703 15.0903C16.7508 15.0171 16.7839 14.9351 16.8005 14.8488C16.8172 14.7625 16.817 14.6737 16.8001 14.5874C16.7831 14.5012 16.7497 14.4192 16.7017 14.3462C16.6538 14.2732 16.5934 14.2106 16.5218 14.1619Z"
                                            fill="#0092FF"
                                        />
                                    </svg>
                                </div>
                                <div className="prot">
                                    <p>Platform-agnostic development</p>
                                </div>
                                <div className="prot-img">
                                    <svg
                                        width="40"
                                        height="47"
                                        viewBox="0 0 40 47"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M37.2468 15.8844H30.4354C30.304 15.9107 30.1858 15.9817 30.1008 16.0853C30.0159 16.1889 29.9695 16.3187 29.9695 16.4527C29.9695 16.5867 30.0159 16.7166 30.1008 16.8202C30.1858 16.9238 30.304 16.9948 30.4354 17.021H37.2468C37.6668 17.0659 38.0525 17.2734 38.3212 17.5993C38.59 17.9251 38.7204 18.3432 38.6845 18.764V42.877C38.7208 43.298 38.5905 43.7165 38.3218 44.0426C38.053 44.3687 37.667 44.5765 37.2468 44.6213H2.73945C2.31937 44.5762 1.93368 44.3683 1.66497 44.0423C1.39625 43.7162 1.26587 43.2979 1.30176 42.877V18.764C1.26589 18.3432 1.39631 17.9251 1.66505 17.5993C1.9338 17.2734 2.31949 17.0659 2.73945 17.021H9.55089C9.68227 16.9948 9.8005 16.9238 9.88545 16.8202C9.97039 16.7166 10.0168 16.5867 10.0168 16.4527C10.0168 16.3187 9.97039 16.1889 9.88545 16.0853C9.8005 15.9817 9.68227 15.9107 9.55089 15.8844H2.73945C2.04623 15.9598 1.40991 16.3031 0.966277 16.8411C0.522645 17.3791 0.306829 18.0691 0.364865 18.764V42.877C0.306443 43.5721 0.522092 44.2625 0.965762 44.8008C1.40943 45.3391 2.04597 45.6826 2.73945 45.758H37.2468C37.9403 45.6826 38.5769 45.3391 39.0205 44.8008C39.4642 44.2625 39.6798 43.5721 39.6214 42.877V18.764C39.6795 18.0691 39.4636 17.3791 39.02 16.8411C38.5764 16.3031 37.94 15.9598 37.2468 15.8844Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M37.2481 46.1181H2.74636C1.95556 46.0444 1.2254 45.6629 0.713307 45.0558C0.201214 44.4487 -0.0517918 43.6647 0.00884111 42.8728V18.7654C-0.0514055 17.9738 0.201789 17.1901 0.713844 16.5833C1.2259 15.9765 1.95582 15.5952 2.74636 15.5215H9.55641C9.78486 15.5482 9.99556 15.6578 10.1485 15.8296C10.3014 16.0015 10.3859 16.2234 10.3859 16.4535C10.3859 16.6835 10.3014 16.9055 10.1485 17.0773C9.99556 17.2491 9.78486 17.3587 9.55641 17.3854H2.74636C2.42341 17.4313 2.13095 17.6009 1.93068 17.8584C1.73042 18.1159 1.63802 18.4411 1.67302 18.7654V42.8826C1.63764 43.2072 1.72985 43.5327 1.93015 43.7905C2.13045 44.0483 2.42314 44.2181 2.74636 44.2641H37.2538C37.577 44.2181 37.8697 44.0483 38.07 43.7905C38.2703 43.5327 38.3625 43.2072 38.3271 42.8826V18.7654C38.3621 18.4411 38.2697 18.1159 38.0694 17.8584C37.8692 17.6009 37.5767 17.4313 37.2538 17.3854H30.4437C30.2153 17.3587 30.0046 17.2491 29.8516 17.0773C29.6987 16.9055 29.6142 16.6835 29.6142 16.4535C29.6142 16.2234 29.6987 16.0015 29.8516 15.8296C30.0046 15.6578 30.2153 15.5482 30.4437 15.5215H37.2538C38.0443 15.5952 38.7742 15.9765 39.2863 16.5833C39.7983 17.1901 40.0515 17.9738 39.9913 18.7654V42.8826C40.0491 43.6738 39.7941 44.4561 39.2811 45.0612C38.7681 45.6662 38.0381 46.0458 37.2481 46.1181ZM2.74636 16.2488C2.14942 16.3236 1.60527 16.6285 1.2298 17.0986C0.85433 17.5686 0.677194 18.1667 0.736125 18.7654V42.8826C0.677171 43.4815 0.854273 44.0797 1.22972 44.55C1.60516 45.0203 2.1493 45.3255 2.74636 45.4007H37.2538C37.8508 45.3255 38.395 45.0203 38.7704 44.55C39.1459 44.0797 39.3229 43.4815 39.264 42.8826V18.7654C39.3229 18.1667 39.1458 17.5686 38.7703 17.0986C38.3949 16.6285 37.8507 16.3236 37.2538 16.2488H30.4437C30.4072 16.2488 30.3382 16.329 30.3382 16.4556C30.3382 16.5822 30.4086 16.6595 30.4437 16.6595H37.2538C37.7716 16.7026 38.2513 16.9486 38.5886 17.3438C38.9259 17.739 39.0933 18.2515 39.0544 18.7697V42.8826C39.0933 43.4007 38.9259 43.9132 38.5886 44.3085C38.2513 44.7037 37.7716 44.9497 37.2538 44.9927H2.74636C2.22857 44.9497 1.74879 44.7037 1.41153 44.3085C1.07426 43.9132 0.906831 43.4007 0.945732 42.8826V18.7654C0.906831 18.2473 1.07426 17.7348 1.41153 17.3396C1.74879 16.9443 2.22857 16.6984 2.74636 16.6553H9.55641C9.59298 16.6553 9.66191 16.5765 9.66191 16.4499C9.66191 16.3233 9.59157 16.2446 9.55641 16.2446L2.74636 16.2488Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M20.0562 40.1649C19.9147 40.1653 19.7744 40.1391 19.6426 40.0875L19.4457 39.9989L11.9899 35.6957C11.808 35.5905 11.6569 35.4393 11.5517 35.2574C11.4465 35.0754 11.391 34.8691 11.3906 34.6589V26.0398C11.3911 25.8297 11.4467 25.6234 11.5519 25.4414C11.657 25.2595 11.8081 25.1083 11.9899 25.003L19.4541 20.6956C19.6362 20.5908 19.8426 20.5356 20.0526 20.5356C20.2627 20.5356 20.4691 20.5908 20.6512 20.6956L28.1154 25.0044C28.2973 25.1096 28.4484 25.2608 28.5536 25.4427C28.6588 25.6247 28.7143 25.8311 28.7147 26.0412V34.6603C28.7143 34.8707 28.6587 35.0772 28.5536 35.2594C28.4484 35.4416 28.2973 35.593 28.1154 35.6985L20.4782 40.0861C20.3437 40.1387 20.2005 40.1655 20.0562 40.1649ZM12.848 34.5126L20.0562 38.6737L27.2629 34.5126V26.1889L20.0548 22.0292L12.848 26.1889V34.5126Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M23.4347 16.969H15.7511V9.31215H13.8661C13.6005 9.31199 13.3409 9.23311 13.1201 9.08548C12.8993 8.93785 12.7273 8.7281 12.6257 8.48272C12.524 8.23734 12.4974 7.96733 12.5492 7.70684C12.601 7.44634 12.7288 7.20704 12.9165 7.01916L18.6434 1.29231C18.9028 1.05466 19.2418 0.922852 19.5936 0.922852C19.9454 0.922852 20.2845 1.05466 20.5439 1.29231L26.2707 7.01776C26.4584 7.20564 26.5863 7.44495 26.638 7.70544C26.6898 7.96594 26.6632 8.23592 26.5616 8.4813C26.46 8.72668 26.2879 8.93643 26.0671 9.08406C25.8463 9.23169 25.5868 9.31058 25.3212 9.31074H23.4361L23.4347 16.969ZM17.2043 15.5145H21.9872V7.85898H25.0595L19.5985 2.39942L14.1263 7.85898H17.1986L17.2043 15.5145Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M19.9919 30.5201L12.0156 26.2745L12.6979 24.9916L19.9961 28.8756L27.4181 24.9888L28.0919 26.2773L19.9919 30.5201Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M21.0249 29.6987H19.5703V39.3757H21.0249V29.6987Z"
                                            fill="#0092FF"
                                        />
                                    </svg>
                                </div>
                                <div className="prot ">
                                    <p>Quality Control</p>
                                </div>
                                <div className="prot-img">
                                    <svg
                                        width="25"
                                        height="32"
                                        viewBox="0 0 25 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22.5975 30.2221C22.5975 30.6014 22.5856 30.9095 22.5975 31.2177C22.6094 31.7629 22.3359 32.0236 21.8007 31.9999C21.7174 31.9999 21.6461 31.9999 21.5628 31.9999C14.7241 31.9999 7.88535 31.9999 1.04662 31.9999C0.107041 31.9999 0 31.8814 0 30.9451C0 21.8192 0 12.6932 0 3.56731C0 2.41768 0.0475737 2.38212 1.21313 2.37027C1.39153 2.37027 1.55804 2.37027 1.78402 2.37027C1.78402 1.80138 1.79591 1.29175 1.78402 0.793972C1.77212 0.248787 2.02188 -0.0119538 2.56898 -0.000101929C2.66413 -0.000101929 2.77117 -0.000101929 2.86632 -0.000101929C9.88344 -0.000101929 16.9006 -0.000101929 23.9177 -0.000101929C24.8692 -0.000101929 24.9762 0.106565 24.9762 1.05471C24.9762 4.11249 24.9762 7.18212 24.9762 10.2399C24.9762 10.4177 25.0357 10.6429 24.9405 10.7614C24.7978 10.9629 24.5599 11.2236 24.3696 11.2236C24.1794 11.2236 23.9534 10.951 23.8107 10.7377C23.7274 10.6073 23.7869 10.394 23.7869 10.2162C23.7869 7.45471 23.7869 4.68138 23.7869 1.9199C23.7869 1.70656 23.7869 1.49323 23.7869 1.23249C16.853 1.23249 9.94291 1.23249 3.00904 1.23249C3.00904 1.58805 3.00904 1.93175 3.00904 2.37027C3.22312 2.37027 3.4491 2.37027 3.67507 2.37027C9.64558 2.37027 15.6042 2.37027 21.5747 2.37027C22.4667 2.37027 22.5975 2.50064 22.5975 3.40138C22.5975 11.6977 22.5975 19.994 22.5975 28.2903C22.5975 28.5273 22.5975 28.7525 22.5975 29.0132C23.0019 29.0132 23.3468 29.0132 23.7869 29.0132C23.7869 28.788 23.7869 28.5629 23.7869 28.3258C23.7869 23.3836 23.7869 18.4532 23.7869 13.511C23.7869 13.3095 23.7393 13.0725 23.8226 12.9303C23.9415 12.7406 24.1794 12.4799 24.3459 12.4917C24.5599 12.5036 24.7859 12.7406 24.9405 12.9421C25.0238 13.0606 24.9762 13.2858 24.9762 13.4636C24.9762 18.714 24.9762 23.9762 24.9762 29.2266C24.9762 30.1155 24.8454 30.234 23.9296 30.234C23.5252 30.2221 23.1089 30.2221 22.5975 30.2221ZM1.21313 30.7792C7.9686 30.7792 14.6646 30.7792 21.3606 30.7792C21.3606 21.6888 21.3606 12.634 21.3606 3.59101C14.6289 3.59101 7.93292 3.59101 1.21313 3.59101C1.21313 12.6577 1.21313 21.6888 1.21313 30.7792Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M11.085 15.4075C12.5122 15.4312 13.6302 15.7275 14.653 16.3319C15.0217 16.5452 15.3547 16.8178 15.0812 17.2682C14.8076 17.7186 14.427 17.5645 14.0464 17.3512C10.9304 15.6089 7.23151 17.043 6.18488 20.3971C5.34045 23.123 6.89849 26.1097 9.62209 26.9867C12.417 27.8875 15.4261 26.406 16.3538 23.6919C16.8771 22.1512 16.7106 20.6697 15.9375 19.2356C15.8186 19.0104 15.7234 18.7141 15.7472 18.4771C15.7591 18.3349 16.0564 18.086 16.1992 18.1097C16.437 18.1452 16.7344 18.2993 16.8533 18.5008C18.1259 20.6104 18.221 22.7912 17.0912 24.9838C15.7115 27.6386 12.5954 29.0134 9.81238 28.2904C6.76766 27.4964 4.75767 24.9245 4.78146 21.8549C4.80525 18.8682 6.89849 16.2845 9.87185 15.5852C10.3238 15.4549 10.8233 15.443 11.085 15.4075Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M11.2979 7.11116C8.85977 7.11116 6.42162 7.11116 3.98347 7.11116C3.80506 7.11116 3.57909 7.15857 3.46015 7.07561C3.25797 6.93338 3.03199 6.69635 3.0082 6.48301C2.99631 6.31709 3.25797 6.08005 3.44826 5.96153C3.57909 5.87857 3.79317 5.92598 3.97157 5.92598C8.84788 5.92598 13.7242 5.92598 18.6005 5.92598C18.7789 5.92598 19.0049 5.87857 19.1238 5.96153C19.326 6.10375 19.552 6.34079 19.5758 6.55412C19.5877 6.72005 19.326 6.95709 19.1357 7.07561C19.0049 7.15857 18.7908 7.11116 18.6124 7.11116C16.1742 7.11116 13.7361 7.11116 11.2979 7.11116Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M11.2979 10.6667C8.85977 10.6667 6.42162 10.6667 3.98347 10.6667C3.80506 10.6667 3.57909 10.7141 3.46015 10.6312C3.25797 10.4889 3.03199 10.2519 3.0082 10.0386C2.99631 9.87264 3.25797 9.63561 3.44826 9.51709C3.57909 9.43413 3.79317 9.48153 3.97157 9.48153C8.84788 9.48153 13.7242 9.48153 18.6005 9.48153C18.7789 9.48153 19.0049 9.43413 19.1238 9.51709C19.326 9.65931 19.552 9.89635 19.5758 10.1097C19.5877 10.2756 19.326 10.5126 19.1357 10.6312C19.0049 10.7141 18.7908 10.6667 18.6124 10.6667C16.1742 10.6667 13.7361 10.6667 11.2979 10.6667Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M11.2979 14.2223C8.85977 14.2223 6.42162 14.2223 3.98347 14.2223C3.80506 14.2223 3.57909 14.2697 3.46015 14.1867C3.25797 14.0445 3.03199 13.8075 3.0082 13.5941C2.99631 13.4282 3.25797 13.1912 3.44826 13.0726C3.57909 12.9897 3.79317 13.0371 3.97157 13.0371C8.84788 13.0371 13.7242 13.0371 18.6005 13.0371C18.7789 13.0371 19.0049 12.9897 19.1238 13.0726C19.326 13.2149 19.552 13.4519 19.5758 13.6652C19.5877 13.8312 19.326 14.0682 19.1357 14.1867C19.0049 14.2697 18.7908 14.2223 18.6124 14.2223C16.1742 14.2223 13.7361 14.2223 11.2979 14.2223Z"
                                            fill="#0092FF"
                                        />
                                        <path
                                            d="M10.5968 23.123C11.358 22.0564 12.0597 21.0845 12.7614 20.1008C12.9042 19.9112 12.9993 19.6504 13.1896 19.5438C13.4275 19.4134 13.7962 19.3067 14.0102 19.4015C14.3433 19.5438 14.3433 19.9112 14.1411 20.2193C13.7724 20.7526 13.3918 21.286 13.0112 21.8075C12.4522 22.5897 11.8932 23.3838 11.3223 24.166C10.9298 24.6993 10.6206 24.723 10.1568 24.2726C9.64535 23.7749 9.14583 23.2652 8.6463 22.7675C8.34897 22.4712 8.17057 22.1393 8.53926 21.7956C8.89607 21.4519 9.22908 21.6534 9.51452 21.9497C9.84754 22.3289 10.2043 22.7082 10.5968 23.123Z"
                                            fill="#0092FF"
                                        />
                                    </svg>
                                </div>
                                <div className="prot ">
                                    <p>Submission to an app store</p>
                                </div>
                                <div className="prot-img">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="40" height="40" fill="white" />
                                        <g clipPath="url(#clip0_8259_109)">
                                            <path
                                                d="M4.98251 22.2625C4.08629 22.175 3.06203 22.075 2.05057 22C1.23116 21.9375 1.02631 21.75 1.01351 20.975C1.00071 19.4375 1.00071 17.8875 1.01351 16.35C1.01351 15.5875 1.17995 15.425 1.98655 15.3375C2.85717 15.25 3.72779 15.1625 4.59841 15.1125C4.98251 15.0875 5.16176 14.95 5.30259 14.5625C5.7251 13.4625 6.19882 12.3625 6.71095 11.3C6.87739 10.95 6.83898 10.75 6.60852 10.4875C6.00677 9.8125 5.44343 9.1 4.84168 8.425C4.44478 7.975 4.47038 7.6 4.90569 7.1875C6.08359 6.0625 7.23588 4.925 8.38817 3.7875C8.79788 3.3875 9.16917 3.3625 9.61728 3.7375C10.3471 4.35 11.0769 4.95 11.845 5.525C11.9987 5.6375 12.306 5.675 12.498 5.6C13.6759 5.1375 14.841 4.625 16.0317 4.1625C16.339 4.0375 16.467 3.9125 16.4798 3.6C16.5438 2.6625 16.6591 1.7375 16.7359 0.800001C16.7743 0.262501 17.0432 0.0125008 17.5937 0.0125008C19.2197 0.0125008 20.8329 0.0250008 22.4589 0.0125008C23.1119 0.0125008 23.3039 0.375001 23.3552 0.912501C23.432 1.825 23.5088 2.7375 23.624 3.65C23.6496 3.8375 23.8545 4.0625 24.0337 4.1375C25.1988 4.65 26.3639 5.1375 27.5546 5.5875C27.7339 5.6625 28.0539 5.6375 28.1948 5.525C28.9374 4.975 29.6543 4.3625 30.3713 3.7875C30.9347 3.3375 31.1779 3.3375 31.6901 3.825C32.8424 4.9375 33.969 6.075 35.1341 7.175C35.595 7.6125 35.6079 7.9875 35.1725 8.4625C34.5708 9.1375 34.0074 9.85 33.4057 10.525C33.1752 10.7875 33.1624 10.9625 33.3161 11.2875C33.8282 12.3625 34.3147 13.4375 34.7244 14.55C34.8781 14.9625 35.0957 15.0875 35.4926 15.1125C36.4017 15.175 37.3235 15.2875 38.2325 15.35C38.7574 15.3875 39.0007 15.6375 39.0007 16.15C39.0007 17.8125 38.9879 19.4875 39.0007 21.15C39.0007 21.75 38.6678 21.95 38.1301 21.9875C37.0674 22.075 36.0048 22.175 35.0701 22.2625C34.43 23.625 33.8154 24.925 33.2264 26.2375C33.1752 26.3625 33.2521 26.5875 33.3545 26.7125C33.9562 27.45 34.5708 28.1625 35.1853 28.8875C35.6463 29.4375 35.6335 29.675 35.0957 30.15C34.2379 30.9 33.3801 31.65 32.5095 32.3875C32.0358 32.7875 31.6773 32.75 31.3188 32.275C29.936 30.425 28.5789 28.5625 27.1961 26.7125C26.8376 26.225 27.0041 25.8875 27.3626 25.5125C29.2446 23.55 30.1665 21.225 30.1537 18.55C30.1409 13.6125 26.1719 9.3125 21.1402 8.7875C15.8525 8.2 11.064 11.4875 9.96297 16.5625C9.24599 19.8625 10.091 22.8375 12.4084 25.375C13.0357 26.0625 13.0614 26.1625 12.5236 26.925C11.3073 28.6375 10.091 30.3375 8.8747 32.05C8.32416 32.8125 8.08089 32.8375 7.35111 32.2125C6.54451 31.525 5.75071 30.8375 4.95691 30.15C4.41917 29.6875 4.40637 29.425 4.86728 28.8875C5.46903 28.175 6.08359 27.4875 6.64693 26.7625C6.77496 26.6 6.78777 26.2625 6.71095 26.075C6.16041 24.825 5.58426 23.6 4.98251 22.2625ZM6.14761 7.9125C6.77496 8.6625 7.38952 9.4125 8.04248 10.125C8.46499 10.5875 8.42658 10.975 8.14491 11.525C7.51755 12.7875 6.95421 14.0875 6.48049 15.4125C6.25003 16.0375 5.94275 16.3375 5.27699 16.375C4.32955 16.425 3.3693 16.5375 2.42186 16.625C2.42186 18.0125 2.42186 19.3625 2.42186 20.7125C3.44612 20.8125 4.40637 20.9375 5.39221 20.9875C6.01957 21.0125 6.31405 21.3 6.44208 21.8625C6.77496 23.325 7.37672 24.6625 8.19612 25.925C8.4906 26.3875 8.45219 26.75 8.0937 27.1625C7.44073 27.9 6.81337 28.6625 6.14761 29.45C6.77496 29.9875 7.36391 30.4875 7.99127 31.0375C9.14356 29.425 10.2574 27.8625 11.3713 26.3125C6.5189 20.75 8.17052 13.6125 12.3956 10.1125C16.8127 6.45 23.3808 6.475 27.6186 10.225C29.7824 12.1375 31.0883 14.5 31.4084 17.3125C31.7925 20.6625 30.8322 23.65 28.5149 26.225C29.1166 27.0375 29.6928 27.8375 30.2817 28.625C30.8579 29.4125 31.4468 30.1875 32.0614 31.0125C32.7015 30.45 33.2905 29.95 33.905 29.4125C33.2136 28.6 32.5735 27.825 31.9077 27.075C31.5876 26.7 31.5492 26.3625 31.8181 25.95C32.6631 24.6375 33.2905 23.2375 33.6362 21.7125C33.7386 21.25 34.0203 21.0125 34.5324 20.9875C35.4414 20.9375 36.3632 20.8375 37.2723 20.7375C37.4259 20.725 37.6692 20.525 37.6692 20.4125C37.6948 19.1625 37.682 17.925 37.682 16.625C36.6449 16.5375 35.6719 16.425 34.6988 16.3625C34.0459 16.325 33.7898 16.0125 33.5721 15.4125C33.0984 14.0875 32.5223 12.7875 31.8949 11.525C31.626 10.975 31.562 10.6 31.9973 10.1375C32.6631 9.4125 33.2777 8.65 33.8538 7.9625C32.8424 6.9625 31.8821 6.025 30.8963 5.0625C30.1281 5.6875 29.3215 6.325 28.5149 6.9875C28.1564 7.275 27.8235 7.325 27.4138 7.0625C26.0566 6.2125 24.5971 5.6 23.0223 5.2625C22.5742 5.1625 22.3437 4.9 22.3053 4.4375C22.2669 3.775 22.1645 3.1125 22.1004 2.45C21.9724 1.3375 21.9724 1.3375 20.8329 1.3375C19.8983 1.3375 18.9764 1.3375 18.029 1.3375C17.9266 2.4 17.8114 3.35 17.7473 4.3C17.7089 4.85 17.4529 5.1125 16.9151 5.3125C15.5068 5.825 14.1112 6.3875 12.7541 7.025C12.2035 7.2875 11.8322 7.2875 11.3841 6.8875C10.6415 6.2375 9.86054 5.65 9.09235 5.0375C8.1065 5.9875 7.15906 6.9125 6.14761 7.9125Z"
                                                fill="#0092FF"
                                            />
                                            <path
                                                d="M19.5029 37.35C19.5541 37.8875 19.6309 38.425 19.6565 38.9625C19.7077 39.875 19.3108 40.1375 18.389 39.8375C14.7913 38.6625 13.7158 34.2 16.3661 31.4125C16.5197 31.25 16.6733 31.0375 16.8782 30.95C17.6592 30.575 17.7104 29.9375 17.6976 29.1875C17.6592 26.5 17.672 23.8125 17.6976 21.125C17.6976 20.675 17.5824 20.4375 17.1471 20.2125C15.2266 19.2 14.42 17.5125 14.484 15.45C14.5608 13.2875 15.5723 11.675 17.672 10.8125C18.6963 10.3875 19.1188 10.7125 19.0163 11.7875C18.9523 12.4125 18.9395 13.0375 18.8499 13.65C18.7859 14.05 18.9139 14.25 19.3236 14.2625C19.5413 14.275 19.7461 14.275 19.9638 14.275C20.4503 14.275 20.6423 14.0625 20.5783 13.575C20.4887 12.9 20.4375 12.2125 20.3863 11.525C20.3351 10.8 20.6808 10.5375 21.3977 10.7125C24.7906 11.5125 26.2886 15.425 24.2913 18.4C23.8816 19.0125 23.2414 19.475 22.7293 20.025C22.5628 20.2 22.3836 20.45 22.3836 20.675C22.358 23.675 22.3708 26.675 22.358 29.6625C22.358 30.0375 22.5116 30.1875 22.8317 30.3625C24.893 31.4625 25.7252 33.225 25.5588 35.45C25.4051 37.5125 24.3297 39 22.358 39.8125C21.3849 40.2125 20.988 39.925 21.0648 38.9125C21.1161 38.2875 21.1545 37.6625 21.2313 37.05C21.2953 36.575 21.1289 36.375 20.6295 36.325C19.6565 36.2125 19.4901 36.3625 19.5029 37.35ZM22.4348 38.2875C22.6525 38.15 22.7421 38.1 22.8189 38.0375C25.0979 36.2625 24.5345 32.4125 21.833 31.3875C21.2441 31.1625 21.0136 30.8625 21.0136 30.25C21.0392 26.9 21.0264 23.5375 21.0136 20.1875C21.0136 19.7375 21.1161 19.4125 21.5642 19.1625C23.203 18.2375 23.9456 16.85 23.7663 15C23.6511 13.8125 22.7933 12.625 21.7946 12.3875C21.833 12.975 21.8586 13.5625 21.9227 14.1375C21.9739 14.6125 21.8202 14.925 21.3849 15.1625C20.2198 15.8125 19.0803 15.8 17.9281 15.15C17.5312 14.925 17.3647 14.625 17.4159 14.175C17.4927 13.6 17.5184 13.025 17.5696 12.3625C17.3903 12.475 17.2751 12.525 17.1855 12.5875C14.9321 14.3625 15.4954 18.2125 18.1969 19.2625C18.8115 19.5 19.0291 19.825 19.0291 20.4625C19.0035 23.8 19.0035 27.125 19.0291 30.4625C19.0291 30.9375 18.8755 31.225 18.453 31.4625C16.7374 32.4375 16.0076 33.9375 16.3277 35.825C16.5197 36.925 17.1086 37.7625 18.2481 38.3375C18.1969 37.625 18.1585 37.025 18.0945 36.4375C18.0433 35.9875 18.2353 35.6875 18.6194 35.4625C19.6565 34.825 21.1417 34.8125 22.1147 35.525C22.358 35.7 22.55 36.0875 22.5628 36.4C22.6012 36.975 22.4988 37.5625 22.4348 38.2875Z"
                                                fill="#0092FF"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_8259_109">
                                                <rect
                                                    width="38"
                                                    height="40"
                                                    fill="white"
                                                    transform="translate(1)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="prot ">
                                    <p>Maintenance following launch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="android-perform ">
                        <div className="andoid-perform-flex">
                            <div className="android-pflex">
                                <h3>50+</h3>
                                <p>
                                    in-house iOS developers
                                </p>
                            </div>
                            <div className="android-pflex">
                                <h3>200+</h3>
                                <p>
                                    successful projects completed
                                </p>
                            </div>
                            <div className="android-pflex">
                                <h3>30+</h3>
                                <p>
                                    industry domains targeted
                                </p>
                            </div>
                        </div>

                        <Link className="letsy letsay letsit" href="/contact-us">
                            <h5 className="text-center">
                                Lets Work Together
                                <svg
                                    className="ml-2"
                                    width="15"
                                    height="13"
                                    viewBox="0 0 19 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0811 10.0655C14.8304 10.0655 14.6785 10.0655 14.5342 10.0655C10.1051 10.0655 5.6761 10.0655 1.24707 10.0655C0.35823 10.0655 -0.203945 9.33411 0.0695453 8.54173C0.236678 8.07696 0.578542 7.83316 1.06475 7.77982C1.20149 7.76458 1.34583 7.77982 1.48258 7.77982C5.85083 7.77982 10.2115 7.77982 14.5797 7.77982C14.7165 7.77982 14.8532 7.77982 15.0735 7.77982C14.9368 7.62744 14.8532 7.52839 14.7621 7.43696C13.2883 5.95887 11.8144 4.47316 10.333 2.99506C9.99118 2.6522 9.78606 2.27125 9.9228 1.76839C10.1431 0.976012 11.0548 0.663631 11.7081 1.15887C11.8296 1.2503 11.936 1.36458 12.0424 1.47125C14.2303 3.66554 16.4106 5.8522 18.5985 8.03887C19.1303 8.5722 19.1455 9.25792 18.6137 9.78363C16.3878 12.016 14.1543 14.2484 11.9284 16.4808C11.5865 16.8236 11.1991 17.0141 10.6977 16.8617C9.9228 16.6255 9.62652 15.7341 10.1127 15.0865C10.2039 14.9646 10.3178 14.8579 10.4242 14.7513C11.8676 13.3036 13.3035 11.8636 14.7469 10.416C14.838 10.3246 14.9292 10.2255 15.0811 10.0655Z"
                                        fill="#21698E"
                                    />
                                </svg>
                            </h5>
                        </Link>
                    </div>
                </div>

                <div className="ios-kickstart">
                    <div className="kickstart-sect">
                        <h3>Kickstart Your Dream Project With Us</h3>
                        <p>
                            We have worked with some of the best innovative ideas and brands
                            in the world across industries.
                        </p>
                        <Link href="/contact-us">
                            <button>Lets Start</button>
                        </Link>
                    </div>
                </div>

                <Website />


            </div>

            <div className="whtsApBtns">
                <button onClick={whatAppHandler}>
                    <img
                        className="what-image-universal"
                        src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999651/whatsapp_gqgicq.png'
                        alt="whatsApp-kusheldigi"
                        title="whatsApp-kusheldigi"
                    />
                </button>
                <button onClick={callHandler}>
                    <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740999664/telephone_fxcxxc.png" alt="call-icon" title="call-icon" />
                </button>
            </div>

            <Footer />
        </>
    );
};

export default IosComponent;
