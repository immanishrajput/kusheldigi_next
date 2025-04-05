'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ScrollSection.css";
import { IoMdArrowDropright } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });


const ScrollAnimation = () => {
    const containerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (window.innerWidth <= 768) return; 
    
        const sections = gsap.utils.toArray(".scrolled-section");
    
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                start:'top-=110',
                scrub: 1,
                end: "+=2000",
            },
        });
    
    }, []);


    const settings = {
        dots: true,
        // fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        pauseOnHover: false
    };

   

    return (
        <div className="scroll-section-wrapper">
            <h3 className="scroll-section-heading primary-heading">Website Design Process</h3>
            <p className="scroll-section-para secondary-heading">
                Take a peek behind the curtain and explore the custom web design process our team follows.<br />
                We build custom sites for brands of all sizes that deliver measurable results.
            </p>
            <div className="scroll-container scrollx" ref={containerRef}>
                {sectionsData.map((section, index) => (
                    <ScrollSection key={index} {...section} showSvg={index === 0} />
                ))}
            </div>
            <div className="mobile-scroll-section">
            <Slider {...settings}>
            {sectionsData.map((section, index) => (
                    <ScrollSection key={index} {...section}  />
                ))}
            </Slider>
            </div>
        </div>
    );
};

const ScrollSection = ({ img,number, title, description, listItems, showSvg, maskRef  }) => (
    <div className="scrolled-section">
        <img
            className="scroll-card-img"
            decoding="async"
            loading="lazy"
            src={img}
            alt={title}
            width={210}
            height={149}
        />
        
        {/* {showSvg && (
            <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
                <mask id="mask0_0_1" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
                    <rect ref={maskRef} width="0%" height="100%" fill="white" />
                </mask>
                <g mask="url(#mask0_0_1)">
                    <rect className="mask" y="-49" height="99" fill="black"/>
                </g>
            </svg>
        )} */}


        <div>
            <h3 className="scroll-card-heading">{title}</h3>
            <p className="scroll-card-para">{description}</p>
            <ul className="scroll-card-ul">
                {listItems.map((item, index) => (
                    <li className="scroll-card-li" key={index}>
                        <IoMdArrowDropright className="scroll-card-li-icon" />{item}
                    </li>
                ))}
            </ul>
            <span className="counter">{number}</span>
        </div>
    </div>
);

const sectionsData = [
    {
        number: "01",
        title: "Discovery Phase",
        img: 'https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-2.png.webp',
        description:
            "Kushel Digi always prioritizes understanding your business model, target audience, and growth objectives. It helps us to create a personalized eCommerce strategy best suited for your vision and market demands.",
        listItems: [
            "In-depth business analysis",
            "Identifying target audience & goals",
            "Personalized eCommerce strategy",
        ],
    },
    {
        number: "02",
        title: "Strategy Phase",
        img: 'https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png',
        description:
            "After understanding your requirements, our team designs a development plan that includes platform selection, feature integration, and user experience design. It ensures a solid foundation for an excellent online store.",
        listItems: [
            "Platform selection & tech stack",
            "Feature planning & UX optimization",
            "Roadmap for scalable growth",
        ],
    },
    {
        number: "03",
        title: "Design & Prototyping",
        img: 'https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp',
        description:
            "We have a team of dedicated UI/UX designers who design interactive prototypes to visualize your store's layout and functionality. Kushel Digi is committed to a seamless and user-friendly shopping experience.",
        listItems: [
            "Wireframes & interactive prototypes",
            "User-centric design approach",
            "Focus on seamless navigation",
        ],
    },
    {
        number: "04",
        title: "Development Phase",
        img: "https://www.digitalsilk.com/wp-content/uploads/2024/06/responsive.png.webp",
        description:
            "We have a team of the country's best developers with a wide range of experience in building scalable eCommerce platforms with advanced features and third-party integrations.",
        listItems: [
            "Scalable & high-performance solutions",
            "Custom features",
            "Third-party integrations",
        ],
    },
    {
        number: "05",
        title: "Testing Phase",
        img: 'https://www.digitalsilk.com/wp-content/uploads/2024/06/quality.png.webp',
        description:
            "We perform rigorous testing to identify and resolve bugs. It also helps us optimize performance and ensure your website is responsive and secure. We are committed to a better user experience without errors.",
        listItems: [
            "Multi-device & browser compatibility",
            "Performance & security checks",
            "Bug fixing & optimization",
        ],
    },
    {
        number: "06",
        title: "Launch & Ongoing Support",
        img: 'https://www.digitalsilk.com/wp-content/uploads/2024/06/launch.png.webp',
        description:
            "After a successful launch, we provide continuous monitoring, updates, and technical support. Our team is always there with you to keep your site optimized according to market trends.",
        listItems: [
            "Smooth deployment & go-live support",
            "Continuous monitoring & updates",
            "24/7 technical assistance",
        ],
    },
];

export default ScrollAnimation;
