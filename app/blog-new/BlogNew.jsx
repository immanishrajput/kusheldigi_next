"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FcClock } from 'react-icons/fc';
import "./blogNew.css";
import pageData from './pageData';
import Article from './Article/Article';

export default function BlogNew() {
    const [activeTag, setActiveTag] = useState('all');

    const tags = [
        { id: 'all', label: 'All blogs' },
        { id: 'ecommerce', label: 'e-commerce' },
        { id: 'web-dev', label: 'Web Development' },
        { id: 'business', label: 'Business' },
        { id: 'bigcommerce-dev', label: 'BigCommerce Development' },
        { id: 'shopify', label: 'Shopify' },
        { id: 'shopify-dev', label: 'Shopify Development' },
        { id: 'headless', label: 'Headless' },
        { id: 'bigcommerce-headless', label: 'BigCommerce Headless' },
        { id: 'shopify-headless', label: 'Shopify Headless' },
        { id: 'custom-dev', label: 'Custom Development' },
        { id: 'wordpress', label: 'WordPress' },
        { id: 'bigcommerce', label: 'BigCommerce' },
        { id: 'app-dev', label: 'App Development' },
        { id: 'magento', label: 'Magento' },
        { id: 'magento-dev', label: 'Magento Development' },
    ];

    const handleTagClick = (id) => {
        setActiveTag(id);
        // In future: Filter blogs based on this `id`
        console.log("Selected Tag:", id);
    };

    return (
        <section className="blog-main-con">
            <div className="blog-container">
                <h1 className="heading">Innovate With Us</h1>
                <div className="tags">
                    {tags.map((tag) => (
                        <button
                            key={tag.id}
                            className={`tag ${activeTag === tag.id ? 'active' : ''}`}
                            onClick={() => handleTagClick(tag.id)}
                        >
                            {tag.label}
                        </button>
                    ))}
                </div>
                <div>
                    <p
                        style={{
                            border: "1px solid rgba(40, 39, 39, 0.17)",
                            marginTop: 20,
                            marginBottom: 40
                        }}
                    />
                </div>
                {
                    activeTag === "all" ? <div className="blog-post">
                        <div className="blog-image">
                            <img
                                src="https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg"
                                alt="Blog Post"
                                //   layout="fill"
                                objectFit="cover" />
                        </div>
                        <div className="blog-content">
                            <p className="date">24 JUNE 2025</p>
                            <h2>BigCommerce System Integration for Large Catalog Management</h2>
                            <p>
                                The significant challenge faced by modern e-commerce companies is
                                managing thousands of stock-keeping units. If your BigCommerce
                                platform manages large inventories, then system integration becomes
                                necessary for you.
                            </p>
                            <div className="blogClockTime1">
                                <Link href={``}>
                                    <p className="cardBlogStpaarw">Read More</p>
                                </Link>
                                <span className="bimageloDiPargaph1">
                                    <FcClock className="iconBlogClock" />
                                    5:00 Min
                                </span>
                            </div>
                        </div>
                    </div> : <Article title={activeTag}/>
                }
            </div>
        </section>
    );
}


