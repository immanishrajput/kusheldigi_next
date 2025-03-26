'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ScrollSection.css";
import { IoMdArrowDropright } from "react-icons/io";

const ScrollSection = ({ img, title, description, listItems }) => (
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
        </div>
    </div>
);

const ScrollAnimation = () => {
    const containerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const sections = gsap.utils.toArray(".scrolled-section");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: "+=2000",
            },
        });
    }, []);

    return (
        <div className="scroll-section-wrapper">
            <h2 className="scroll-section-heading">Website Design Process</h2>
            <p className="scroll-section-para">
                Take a peek behind the curtain and explore the custom web design process our team follows.<br />
                We build custom sites for brands of all sizes that deliver measurable results.
            </p>
            <div className="scroll-container scrollx" ref={containerRef}>
                {sectionsData.map((section, index) => (
                    <ScrollSection key={index} {...section} />
                ))}
            </div>
        </div>
    );
};

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
