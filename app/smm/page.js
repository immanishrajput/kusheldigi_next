"use client"
import React, { useEffect } from "react";
// import "../components/css/app10.css";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
// import { Helmet } from "react-helmet";
import Head from 'next/head';

import smm1 from "../../public/assets/smmimage/social media image.png";
import smm2 from "../../public/assets/smmimage/leads image.png";
import smm3 from "../../public/assets/smmimage/strategy icon-1.svg";
import smm4 from "../../public/assets/smmimage/strategy icon-2.svg";
import smm5 from "../../public/assets/smmimage/strategy icon-3.svg";
import smm6 from "../../public/assets/smmimage/strategy image.png";
import smm7 from "../../public/assets/smmimage/process image.png";
import smm8 from "../../public/assets/smmimage/process icon-1.svg";
import smm9 from "../../public/assets/smmimage/process icon-2.svg";
import smm10 from "../../public/assets/smmimage/process icon-3.svg";
import smm11 from "../../public/assets/smmimage/process icon-4.svg";
import smm12 from "../../public/assets/smmimage/services icon-1.svg";
import smm13 from "../../public/assets/smmimage/services icon-2.svg";
import smm14 from "../../public/assets/smmimage/services icon-3.svg";
import smm15 from "../../public/assets/smmimage/services icon-4.svg";
import smm16 from "../../public/assets/smmimage/services icon-5.svg";
import smm17 from "../../public/assets/smmimage/services icon-6.svg";
import smm18 from "../../public/assets/smmimage/choose icon-1.svg";
import smm19 from "../../public/assets/smmimage/choose icon-2.svg";
import smm20 from "../../public/assets/smmimage/choose icon-3.svg";
import smm21 from "../../public/assets/smmimage/choose icon-4.svg";
import smm22 from "../../public/assets/smmimage/branding image-1.png";
import smm23 from "../../public/assets/smmimage/branding image-2.png";
import smm24 from "../../public/assets/smmimage/branding image-3.png";
import smm25 from "../../public/assets/smmimage/branding image-4.png";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import Image from "next/image";
import '../globals.css'
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";

const Smm = () => {


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
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

const generateMetadata = ({ params }) => ({
            title: 'KushelDigi Solutions- the Best SMM Service company',
            description: 'Unlock the power of social media with KushelDigi Solutions, your trusted partner for the best SMM services. Boost your brand today!',
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
      
    <Navbar/>
      
      <div className="ser-main">
        <div className="main-section">
          <div className="social-media dine-123">
            <div className="social-media-first-section">
              <h1>Social Media Marketing</h1>
              <p>
                Visibility and awareness, engagement, and driving website
                traffic along with helping in data analytics and insights for a
                greater impact concerning the customers and audiences.
              </p>
            </div>
            <div className="social-media-second-section">
              <Image src={smm1} alt="Social Media Marketing" title="Social Media Marketing" />
            </div>
          </div>
        </div>
        {/* ---------------Lead-section--------------------  */}
        <div className="lead-main-section">
          <div className="lead-smm dine-123">
            <div className="lead-first-section">
              <h2>From Likes to Leads: How SMM Can Drive Your Success !!!</h2>
              <hr className="line" />
              <p>
                Social Media Marketing (SMM) is a vital approach for businesses
                aiming to increase brand
              </p>
            </div>
            <div className="lead-second-section">
              <Image src={smm2} alt="SMM can drive your success" title="SMM can drive your success" />
            </div>
          </div>
        </div>
        {/*  ---------------End-Lead-section-------------------- * / */}
        {/* ---------------strategy-section--------------------  */}
        <div className="strategy-main-section">
          <div className="strategy-section dine-123">
            <div className="strategy-first-section">
              <div className="under-strategy-section">
                <h4>Your Strategy, Amplified !</h4>
                <h2>One Stop Shop For All Your Social Media Needs!</h2>
                <p>
                  With our variety of services grow on social media in no time
                  without hassle.
                </p>
              </div>
              <div className="strategy-icon-section">
                <div className="icon">
                  <Image src={smm3} alt="Real Followers" title="Real Followers" />
                </div>
                <div className="text">
                  <h3>Real Followers</h3>
                  <p>
                    This organic social engagement will bring you real and
                    engaged Instagram users, who will actively interact with
                    your account.
                  </p>
                </div>
              </div>
              <div className="strategy-icon-section">
                <div className="icon-2">
                  <Image src={smm4} alt="Real Like" title="Real Like" />
                </div>
                <div className="text">
                  <h3>Real Likes</h3>
                  <p>
                    Find the people who love your content, and monetize them
                    with real likes on any digital media platform.
                  </p>
                </div>
              </div>
              <div className="strategy-icon-section">
                <div className="icon">
                  <Image src={smm5} alt="Real Views" title="Real Views" />
                </div>
                <div className="text">
                  <h3>Real Views</h3>
                  <p>
                    Our real viewers will give a kick start to your promotion.
                    Simply great for any kind of content!
                  </p>
                </div>
              </div>
            </div>
            <div className="strategy-second-section">
              <Image src={smm6} alt="Social Media Needs" title="Social Media Needs" />
            </div>
          </div>
        </div>
        {/* ------------------End-strategy-section-------------------- */}
        {/* ------------------process-section-------------------- */}
        <div className="process-main-section">
          <div className="process-section">
            <h3>Process</h3>
            <h2>It's Easier Than Making A Cup Of Tea !</h2>
            <p>
              Your social media success is largely dependent on the number of
              likes, comments <br />
              and followers you have.
            </p>
          </div>
          <div className="process-under-section dine-123">
            <div className="process-first-section">
              <Image src={smm7} alt="Social Media Process" title="Social Media Process" />
            </div>
            <div className="process-second-section">

              <div className="process-icon-section">
                <div className="icon-1">
                  <Image src={smm8} alt="Sign Up To Create New Accoun" title="Sign Up To Create New Accoun" />
                  <div className="line-1">
                    <hr />
                  </div>
                </div>
                <div className="text">
                  <h4>Step 1</h4>
                  <h3>Sign Up To Create New Account</h3>
                  <p>
                    Sign Up &amp; create account for best social media marketing
                    services in world, Indian smm services is cheapest SMM Panel
                    with speed delivery.
                  </p>
                </div>
              </div>

              <div className="process-icon-section">
                <div className="icon-1">
                  <Image src={smm9} alt="Add Funds To Account" title="Add Funds To Account" />
                  <div className="line-1">
                    <hr />
                  </div>
                </div>
                <div className="text">
                  <h4>Step 2</h4>
                  <h3>Add Funds To Account</h3>
                  <p>
                    Add funds to your smm panel account with plenty of available
                    major payment gateways such as paytm, coinbase, stripe,
                    paypal and more.
                  </p>
                </div>
              </div>

              <div className="process-icon-section">
                <div className="icon-1">
                  <Image src={smm10} alt="Select Service You Want To Order" title="Select Service You Want To Order" />
                  <div className="line-1 line-3">
                    <hr />
                  </div>
                </div>
                <div className="text">
                  <h4>Step 3</h4>
                  <h3>Select Service You Want To Order</h3>
                  <p>
                    Find the perfect service according to your requirement from
                    100s of categories such as Instagram, Facebook, Youtube,
                    Twitter etc.
                  </p>
                </div>
              </div>

              <div className="process-icon-section">
                <div className="icon-1">
                  <Image src={smm11} alt="Sit Back Enjoy" title="Sit Back Enjoy" />
                  <div className="line-1 line-2">
                    <hr className="extraheight" />
                  </div>
                </div>
                <div className="text">
                  <h4>Step 4</h4>
                  <h3>Put x, Sit Back &amp; Enjoy</h3>
                  <p>
                    Add proper link and quantity to get price for service
                    automatically. Verify details and you are good to go.
                  </p>
                </div>
              </div>

              <div className="btn">
                <a href="/contact-us"><button type="submit">Contact us</button></a>
              </div>

            </div>
          </div>
        </div>
        {/* ------------------end process-section-------------------- */}
        {/* ------------------Our Services-------------------- */}
        <div className="main-services-section">
          <div className="services-section">
            <div className="our-services-first-section">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                Tap the power of your online presence in this digital world
                using - SMM which will use its expertise to paint your brand’s
                image with an artistic approach, a lit fire of creativity, and
                exciting content, engaging in meaningful conversations with your
                target audience.
              </p>
            </div>
            <div className="services-second-section">
              <div className="second-section">
                <div className="second-section-card">
                  <div className="card-content">
                    <Image src={smm12} alt="Social Media Management" title="Social Media Management" />
                    <h3>Social Media Management</h3>
                    <p>
                      Day-to-day maintenance of social network accounts,
                      including making posts, keeping track of the likes,
                      responding to replies and comments, shares, subscriptions,
                      scheduling; also analyzing the records.
                    </p>
                  </div>
                </div>
                <div className="second-section-card">
                  <div className="card-content">
                    <Image src={smm13} alt="Social Media Advertising" title="Social Media Advertising" />
                    <h3>Social Media Advertising</h3>
                    <p>
                      Using paid ad campaigns on sites that include but are not
                      limited to Facebook, Instagram, Twitter, and LinkedIn
                      targeted towards increasing reach and engagement which
                      also helps in maintaining favorable connections in the
                      future as well.
                    </p>
                  </div>
                </div>
                <div className="second-section-card">
                  <div className="card-content">
                    <Image src={smm14} alt="Influencer Marketing" title="Influencer Marketing" />
                    <h3>Influencer Marketing</h3>
                    <p>
                      Influencer marketing involves social media influencers in
                      the promotion of your brand, product, or services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="second-section">
                <div className="second-section-card">
                  <div className="card-content">
                    <Image src={smm15} alt="Reputation Management" title="Reputation Management" />
                    <h3>Reputation Management</h3>
                    <p>
                      Keeping track of online reviews, feedback, and brand
                      sentiments and just not it but further working on the same
                      to help it improve to a larger extent.
                    </p>
                  </div>
                </div>
                <div className="second-section-card">
                  <div className="card-content">
                    <Image src={smm16} alt="Community Buildingt" title="Community Buildingt" />
                    <h3 style={{ marginTop: 15 }}>Community Buildingt </h3>
                    <p>
                      Establishing and cultivating an engaged online community
                      that is keenly interested in your brand around you.
                    </p>
                  </div>
                </div>
                <div className="second-section-card">
                  <div className="card-content">
                    <Image src={smm17} alt="Crisis Management" title="Crisis Management" />
                    <h3>Crisis Management</h3>
                    <p>
                      Coming up with different approaches or strategies to
                      tackle and mitigate the potential negative publicity or
                      social media crises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------end Our Services-------------------- */}
        {/* ------------------choose section-------------------- */}
        <div className="main-choose-section">
          <div className="choose-section dine-123">
            <div className="choose-first-section">
              <h2>
                Why You Choose <span>kushel Digi</span>
              </h2>
              <p>
                Picking Kushel Digi opens up to you a variety of knowledge and
                uniquely personal solutions. Our goal is to achieve significant
                outcomes through unique content, evidence-based approaches, and
                budget-friendly options along with helping you save time,
                maintain dignity in the branding process, and give your business
                an upper hand over competitors in this ever-changing social
                media arena. We are a one-stop shop for content generation and
                promotion.
              </p>
            </div>
            <div className="choose-second-section">
              <div className="upper-second-section-card">
                <div className="choose-second-section-card">
                  <div className="card-content">
                    <Image src={smm18} alt="Expertise" title="Expertise" />

                    <h3>Expertise</h3>
                  </div>
                </div>
                <div className="choose-second-section-card next-card">
                  <div className="card-content">
                    <Image src={smm19} alt="Creative Content" title="Creative Content" />

                    <h3>Creative Content</h3>
                  </div>
                </div>
              </div>
              <div className="upper-second-section-card">
                <div className="choose-second-section-card">
                  <div className="card-content">
                    <Image src={smm20} alt="Tailored Strategies" title="Tailored Strategies" />

                    <h3>Tailored Strategies</h3>
                  </div>
                </div>
                <div className="choose-second-section-card next-card">
                  <div className="card-content">
                    <Image src={smm21} alt="Result-Driven Approach" title="Result-Driven Approach" />

                    <h3>Result-Driven Approach</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------End choose section--------------------  */}
        {/* ------------------------Benefits section-------------------------- */}
        <div className="main-benefit-section">
          <div className="benefit-section">
            <div className="benefit-heading">
              <h2>Benefit of using our SMM Services</h2>
              <p>
                Your social media success is largely dependent on the number of
                likes, comments <br />
                and followers you have.
              </p>
            </div>
            <div className="benefit-main-card dine-123">
              <div className="benefit-card">
                <div className="card-img">
                  <Image src={smm22} alt="SMM consistent branding" title="Consistent Branding" />

                </div>
                <div className="card-text">
                  <h3>Improved Brand Awareness:</h3>
                  <p>

                    Our SMM strategies are developed to increase your brand's exposure across a wide array of social media platforms. With the regular posting of engaging content and through focused advertising, we make sure that your brand reaches a larger audience and cultivates better recognition and trust.

                  </p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="card-img">
                  <Image src={smm23} alt="SMM consistent branding" title="SMM consistent branding" />

                </div>
                <div className="card-text">
                  <h3>Improved Customer Engagement:
                  </h3>
                  <p>
                    We believe in engaging with your audience, creating meaningful interactions with them. Our team comes up with customized content that speaks to your customers, driving likes, comments, shares, and direct messages,whether you want to engage customers for better customer relationships and loyalty.

                  </p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="card-img">
                  <Image src={smm24} alt="SMM consistent branding" title="SMM consistent branding" />

                </div>
                <div className="card-text">
                  <h3>Higher Conversion Rates:
                  </h3>
                  <p>
                    Through correct targeting and compelling calls-to-action in our SMM services, we drive loads of traffic to your website and turn followers into customers. We keep a tab on engagement metrics to track and analyze them so that we can further refine our approach to maximize your ROI.


                  </p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="card-img">
                  <Image src={smm25} alt="SMM consistent branding" title="SMM consistent branding" />

                </div>
                <div className="card-text">
                  <h3>Cost-Effective Marketing:
                  </h3>
                  <p>
                    Compared to the traditional modes of advertisement, social media marketing is way cheaper. We know how to optimize ad spend with organic growth strategies so you get tremendous results without spending a fortune.
                  </p>
                </div>
              </div>
            </div>
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

export default Smm;
