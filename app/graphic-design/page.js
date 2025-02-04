"use client"
import React from 'react'
import graphic1 from '../../public/assets/graphic1.png';
import graphicImgee from "../../public/assets/graphicImgee.png";
import sinki from '../../public/assets/sinki.png';
import art1 from '../../public/assets/art1.png';
import art2 from '../../public/assets/art2.png';
import art3 from '../../public/assets/art3.png';
import art4 from '../../public/assets/art4.png';
import art5 from '../../public/assets/art5.png';
import art6 from '../../public/assets/art6.png';
import art7 from '../../public/assets/art7.png';
import art8 from '../../public/assets/art8.png';
import art9 from '../../public/assets/art9.png';
import art10 from '../../public/assets/art10.png';
import art11 from '../../public/assets/art11.png';
import '../globals.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import art12 from '../../public/assets/art12.png';

// import { NavLink } from "react-router-dom";
import Link from 'next/link';

import "@splidejs/react-splide/css";
import whatsApp from "../../public/assets/whatsapp.png";
import call from "../../public/assets/telephone.png"
import ContactForm1 from '../COMMON/ContactForm1'
import Image from 'next/image';
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';
import GraphicFAQ from '../COMMON/GraphicFAQ';
// import { Helmet } from 'react-helmet';
const GraphicDesign = ({ notify }) => {

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
            {/* <Helmet> */}
                <title>KushelDigi Solutions- Creative Graphic Design company</title>
                <meta
                    name="description"
                    content="the best graphic design company, Kushel Digi Solutions offers a range of graphic design services, such as motion graphics, infographics, logos, and more."
                />
                <link rel="canonical" href="https://www.kusheldigi.com/graphic-design" />
            {/* </Helmet> */}
            <div className="ser-main">
                <div className="graphic_back0">
                    <div className="graphic_back1 dine-123">
                        <div className='graphic_des'>
                            <h1>Design Services for <br /> Ambitious Brands</h1>

                            <p>
                                Kushel Digi Solution is a creative and professional graphic design company. Our team specializes in crafting and making a unique digital design for websites which make your business stand out. We are providing graphic designing services in the USA and all over the world.
                            </p>
                            <Link href="/contact-us">   <button>Lets get started<svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z" fill="white" />
                            </svg>
                            </button></Link>
                        </div>
                        <div className="grap12">
                            <div>
                                <Image src={graphicImgee} alt="graphic design services" title="graphic design services" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gettttt">
                    <div className="get_graphic dine-123">
                        <div className="get_graphic1">
                            <div className="graphic11">
                                <h3>A VARIETY OF DESIGN SERVICES AT YOUR FINGERTIPS</h3>
                                <h2>Our Graphic Design Services in USA with the Best Quality</h2>
                                <div className='whether56'>
                                    <p>
                                        With Kushel Digi Solution, discover the potential of graphic design services in the USA. Your concepts will be turned into a larger-than-life canvas by our talented designers. Your vision will come to pass with their experience. For each concept you present to us, we create an experience that will never be forgotten—we don't just create a design.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="get_graphic2">
                            <div className="graphic_end_img">
                                <Image src={sinki} alt="graphic design agency" title="graphic design agency" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="gd-designnn">
                    <div className="design_services dine-1234">
                        <h2>Design Services</h2>
                        <div className="design_cants">
                            <div className="design_cant">
                                <div className="design_box">
                                    <div className="arts_img">
                                        <Image src={art1} alt="Brand Logo Design" title='Brand Logo Design' />
                                    </div>
                                    <div className="arts-head arts-head-first">
                                        <h3>Brand Logo Design
                                        </h3>
                                        <p>Our commitment to providing a visually striking representation of your brand's core values and message is reflected in our logo design services. The designers put a lot of effort into distilling your company's core values into a single, unforgettable image. </p>
                                    </div>
                                </div>
                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <Image src={art2} alt="Catalog Design" title='Catalog Design' />
                                    </div>
                                    <div className="arts-head arts-head-first">
                                        <h3>Catalog Design </h3>
                                        <p>Our talented designers use close attention to detail and a deeper comprehension of your clients' needs to fascinate your target consumers. We provide a range of designs that combine different folds, cuts, and themes for different types of catalogs in order to successfully communicate your brand.
                                        </p>
                                    </div>
                                </div>

                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <Image src={art3} alt="Social Media Design" title='Social Media Design' />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Social Media Design</h3>
                                        <p>The graphic design team at Kushel Digi Solution is skilled at producing engaging social media material that is thoughtfully crafted to connect intimately with your target audience. Allow us to assist you in utilizing targeted marketing techniques that will influence and captivate your target demographic.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="design_cant">
                                <div className="design_box">
                                    <div className="arts_img">
                                        <Image src={art4} alt="Graphics for Website" title='Graphics for Website' />
                                    </div>
                                    <div className="arts-head arts-head-firsttt">
                                        <h3>Graphics for Website
                                        </h3>
                                        <p>In website design, graphics have a significant impact on user engagement, retention, and overall user experience. Our design team goes above and beyond mere aesthetics to fully represent the spirit of your brand's personality and beliefs, making sure that your website functions as a tool for conversion and communication.</p>
                                    </div>
                                </div>
                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <Image src={art5} alt="Advertisement Design" title='Advertisement Design' />
                                    </div>
                                    <div className="arts-head arts-head-second">
                                        <h3>Advertisement Design </h3>
                                        <p>Use Kushel Digi Solution's skillfully created designs to discover the potential of advertising to expand your company. When it comes to producing eye-catching 3D advertising concepts and banners, posters, billboards, and digital signs, our committed staff is an expert in turning viewers into buyers.</p>
                                    </div>
                                </div>

                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <Image src={art6} alt="Illustration Design" title='Illustration Design' />
                                    </div>
                                    <div className="arts-head arts-head-second">
                                        <h3>Illustration Design</h3>
                                        <p>Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="design_cant">
                                <div className="design_box">
                                    <div className="arts_img">
                                        <Image src={art7} alt="Branding Services" title='Branding Services' />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Branding Services </h3>
                                        <p>Get Static and motion ad creative, concepts, and variations for testing your way to better result across social media. </p>
                                    </div>
                                </div>
                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <Image src={art8} alt="Video Production" title='Video Production' />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Video Production</h3>
                                        <p>Get original designs for your social media channels. static, animated or video, from instagram to youtube or Facebook.</p>
                                    </div>
                                </div>

                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <Image src={art9} alt="Concept Creation" title='Concept Creation' />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Concept Creation</h3>
                                        <p>Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="design_cant">
                                <div className="design_box">
                                    <div className="arts_img">
                                        <Image src={art10} alt="Print Design" title='Print Design' />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Print Design</h3>
                                        <p>Get Static and motion ad creative, concepts, and variations for testing your way to better result across social media. </p>
                                    </div>
                                </div>
                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <Image src={art11} alt="Email Design" title='Email Design' />
                                    </div>
                                    <div className="arts-head">
                                        <h3>Email Design</h3>
                                        <p>Get original designs for your social media channels. static, animated or video, from instagram to youtube or Facebook.</p>
                                    </div>
                                </div>

                                <div className="design_box design_box1">
                                    <div className="arts_img">
                                        <Image src={art12} alt="eBooks & Reports Design" title='eBooks & Reports Design' />
                                    </div>
                                    <div className="arts-head">
                                        <h3>eBooks & Reports Design</h3>
                                        <p>Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="greet-out">
                    <div className="gret-outcome dine-123">
                        <div className="gret-outcome1">
                            <h2>DRIVING GREAT OUTCOMES</h2>
                            <p>#1 Creative-as-a-Service solution for marketing and creative teams</p>
                        </div>

                        <div className="gret-outcome2">
                            <Link href="/contact-us"><button>Book a Demo</button></Link>
                        </div>

                    </div>
                </div>



                <div className="what_makes dine-123">
                    <div className="what_makes1">
                        
                        <div className="make-head">
                            <h2>
                                How Graphic Designing help in Business
                                <br />
                            </h2>
                            <p>
                                One of the best things you can do to improve your marketing plan is to use graphic design. An audience is drawn in and intrigued by visually striking content that promotes your brand and product. An informed audience is provided by graphics that are purposefully created. According to a common saying, an image speaks a thousand words. You can now express the tale of your business with your own photographs.

                                You may attract readers' attention to content you want to stand out by using informative images on your website. Awe-inspiring pictures are used to break up dense text and to visually illustrate concepts. Generally speaking, images increase user engagement, which increases traffic to websites.

                            </p>
                            <Link href="/contact-us">
                                <button>Book a Call</button> 
                                </Link>
                        </div>
                        
                    </div>
                   
                </div>
                {/* <div className="home9 mb-12 home278 home480 home481">
                    <div className="home91 px-24 dine-1234">
                        <div className="home911 text-center">
                            <h2 className="font-bold text-gray-700">Frequently Asked<br /> Questions</h2>
                        </div>
                        <div className="home912 FAQ-1">
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Why choose Kushel Digi for an ambitious brand graphic design?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Being one of the top providers of graphic design services in Pune, we are experts in combining creativity and technology to provide our clients with unmatched value. We have a lot of expertise offering industry-specific graphic design services in the USA that help brands reach new heights, and we have a particular focus on small enterprises.
                                            Everything that our design team does is entirely new, guaranteeing that every project is unique, genuine, and specifically tailored to your business and corporate objectives.
                                            We collaborate with you to create graphic designs that captivate, excite, educate, and involve your intended audience. You can count on a team of highly competent marketers and designers from all around the world to complete your project quickly.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How can I ensure budget-friendly graphic design services?


                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            From the conceptual phase to the curation of your design, we guarantee that every project is completed with style and enthusiasm. We examine your target market and your company objectives to make sure that every piece of work we produce advances your objectives. We can provide you with low-cost, effective graphic design services that will help you differentiate your company from the competitors.




                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What role does creativity play in Kushel Digi's graphic design approach?



                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            We prioritise creative and innovative design strategies to make your brand stand out.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What key elements make a graphic design successful for ambitious brands?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            The beauty of things draws people in. Amazing hues and imaginative visuals help to boost happiness and motivate consumers to take action. The user's experience is also improved by captivating graphic designs. While websites with captivating images and multiple methods to get information tend to make a stronger and more favorable initial impression, word-only pages can easily become dull.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Why is professional graphic design crucial for ambitious brands?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Professional design enhances brand identity, and credibility, and leaves a lasting impact on your audience.

                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>

                        </div>
                    </div>
                </div> */}
                <GraphicFAQ/>

                <ContactForm1 notify={notify} />

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

export default GraphicDesign