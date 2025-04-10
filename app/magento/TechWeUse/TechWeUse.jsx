'use client'
import React from 'react';
import "./TechWeUse.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <MdOutlineNavigateNext size={24} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <GrFormPrevious size={24} />
        </div>
    );
}

const TechWeUse = () => {

    const technologies = [
        {
            category: "Frontend Technologies",
            items: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Bootstrap", "Tailwind CSS"]
        },
        {
            category: "Backend Technologies",
            items: ["PHP", "Magento Framework", "Zend Framework", "Symfony", "Node.js"]
        },
        {
            category: "Database Management",
            items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
        },
        {
            category: "Cloud & Hosting Solutions",
            items: ["AWS", "Google Cloud Platform", "Microsoft Azure"]
        },
        {
            category: "Payment Gateways",
            items: ["PayPal", "Stripe", "Authorize.net", "Braintree", "Razorpay"]
        },
        {
            category: "DevOps & Security",
            items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Cloudflare", "SSL/TLS Encryption"]
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (
        <div className='tech-we-use-outer-container'>
            <h3 className='tech-we-use-heading primary-heading'>Tech Stack We Use</h3>
            <p className='tech-we-use-para secondary-heading'>The right tech stack is crucial for Magento (Adobe Commerce) development. We utilize industry-leading technologies to build high-performing, scalable, and secure eCommerce solutions.</p>

            <div className="tech-we-use-slider-container">
                <Slider {...settings}>
                    {technologies.map((tech, index) => (
                        <div key={index} className='tech-we-use-slide-item'>
                            <h3>{tech.category}</h3>
                            <ul>
                                {tech.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default TechWeUse