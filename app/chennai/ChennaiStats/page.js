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
                "We craft e-commerce portals that resonate with the contemporary audience in Chennai. Our <strong>eCommerce Development in Chennai</strong> transforms your business idea into a fully functional online store, from concept to deployment.",
            className: "card-blue",
            route: "/chennai/ecommerce-development-company-in-chennai",
        },
        {
            icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281751_lgbsp9.png",
            // sub: "BigCommerce",
            title: "Bigcommerce Development in Chennai",
            discp:
                "Unleash BigCommerce with solutions that are tailored to meet diverse Chennai markets. With intelligent design and scalable integrations, we build stores that grow with your business.",
            className: "card-yellow",
            route: "/chennai/bigcommerce-development-company-in-chennai",
        },
        // {
        //     icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1752566045/Group_1171281753_eqcabi.png",
        //     // sub: "Shopify",
        //     title: "Shopify Development in Chennai",
        //     discp:
        //         "Set up a Shopify shop that fits the objectives of your brand. Our <strong>ecommerce development team in Chennai</strong> bridges localization with global scalability, turning clicks into conversions across the region.",
        //     className: "card-green center-item-noida ",
        //     route: "/shopify-development-company-in-chennai",
        // },
    ];
    return (
        <>
            <section className="main-stats-sec">
                <h2 className="service-heading">Our Services</h2>
                <section className="stats-section-noida">
                    {stats.map((stat, index) => (
                        <Link href={`${stat.route}`} className={`stat-card-noida ${stat.className}`}>
                            <div className="stat-icon">
                                <img src={stat.icon} alt="icon" />
                            </div>
                            <div className="service-title">
                                <span>{stat.title}</span>
                                {/* <h3>{stat.title}</h3> */}
                            </div>
                            <p
                                className="ptag-service"
                                dangerouslySetInnerHTML={{ __html: stat.discp }}
                            ></p>

                            <Link href={`${stat.route}`}>
                                {" "}
                                <button className="btn-service-visit">Visit More</button>
                            </Link>
                        </Link>
                    ))}
                </section>

                <section className="service-sec2">
                    <h4>Specializing in E-Commerce Website Development</h4>
                    <p>
                        Ecommerce isn’t just trending in Chennai; it’s thriving in this diverse and digitally forward city. Whether starting out as small-time fashion brands or large-scale B2B distributors, <strong>ecommerce development company in Chennai</strong> are finding their way to the internet to find more people and are looking to streamline their efforts. An effective ecommerce site today does more than generate sales—it serves as your brand’s always-on digital storefront.
                    </p>
                    <p>
                        We believe in strategy, design, and technology to build high-converting ecommerce websites that are secure and scalable at Kushel Digi. Our websites are mobile-responsive, ultra-fast, and user-friendly, ensuring you reach customers locally and globally. We future-proof your store with SEO best practices and seamless backend integrations, so you can focus on scaling, not fixing.
                    </p>
                </section>
            </section>
        </>
    );
}
