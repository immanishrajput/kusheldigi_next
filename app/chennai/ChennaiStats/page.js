"use client";
import React from "react";
import "./noidastats.css";
import Link from "next/link";

export default function ChennaiStatsService() {
    const stats = [
        {
            icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281752_as3wvy.png",
            // sub: "eCommerce",
            title: "eCommerce Development in Chennai",
            discp:
                "We craft tailored ecommerce websites that captivate customers and boost sales. Let’s turn your vision into a thriving online store.",
            className: "card-blue",
            route: "/ecommerce-development-company-in-chennai",
        },
        {
            icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281751_lgbsp9.png",
            // sub: "BigCommerce",
            title: "Bigcommerce Development in Chennai",
            discp:
                "Unlock the full potential of BigCommerce with custom solutions built for growth. From seamless design to powerful integrations, we elevate your online store.",
            className: "card-yellow",
            route: "/bigcommerce-development-company-in-chennai",
        },
        {
            icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281753_eqcabi.png",
            // sub: "Shopify",
            title: "Shopify Development in Chennai",
            discp:
                "Launch a stunning Shopify store tailored to your brand and goals. From custom themes to smart integrations, we turn clicks into customers.",
            className: "card-green center-item-noida ",
            route: "/shopify-development-company-in-chennai",
        },
    ];
    return (
        <>
            <div>
                <h3 className="service-heading">Our Services</h3>
                <section className="stats-section-noida">
                    {stats.map((stat, index) => (
                        <div key={index} className={`stat-card-noida ${stat.className}`}>
                            <div className="stat-icon">
                                <img src={stat.icon} alt="icon" />
                            </div>
                            <div className="service-title">
                                <span>{stat.title}</span>
                                {/* <h3>{stat.title}</h3> */}
                            </div>
                            <p className="ptag-service">{stat.discp}</p>
                            <Link href={`${stat.route}`}>
                                {" "}
                                <button className="btn-service-visit">Visit More</button>
                            </Link>
                        </div>
                    ))}
                </section>

                <section className="service-sec2">
                    <h4>Specialising in E-Commerce Website Development</h4>
                    <p>
                        E-commerce website development involves creating an online platform
                        where businesses can sell products or services. In 2023, the UK
                        e-commerce sector presented an ideal opportunity. This thriving
                        market was bolstered by advanced technology and strong consumer
                        engagement. In today's digitally driven UK market, e-commerce is a
                        necessity. It expands your reach and operates around the clock.
                        Furthermore, it offers customers the convenience of shopping from
                        anywhere. The right development partner, such as SpaceStem, a top
                        e-Commerce web development agency, can incorporate critical
                        features. They can ensure your website is mobile-responsive and
                        user-friendly. Also, they can help with SEO and create a secure
                        transaction environment, thus making your online venture a success.
                    </p>
                </section>
            </div>
        </>
    );
}
