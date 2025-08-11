"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FcClock } from 'react-icons/fc';
import "./blogNew.css";
import pageData from './pageData';
import Article from './Article/Article';

export default function BlogNew({ parentfunct }) {
    const [activeTag, setActiveTag] = useState('all');

    
    const articles = [
        //Latest
        {
            id: 1,
            category: "Latest",
            culture: "More in Culture",
            title: "BigCommerce System Integration For Large Catalog Management",
            desc: "We provide innovative digital solutions tailored to your business needs. From web and mobile app development to SEO and eCommerce integration, our expert team ensures your online presence stands out. With a focus on quality, creativity, and performance, we help businesses grow and succeed in the digital world.",
            date: "24 JUNE 2025",
            image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg",
            alt: "Article 1"
        },
    ]

    const tags = [
        { id: 'all', label: 'All blogs' },
        { id: 'eCommerce', label: 'e-commerce' },
        { id: 'web-dev', label: 'Web Development' },
        { id: 'Business', label: 'Business' },
        { id: 'bigcommerce-development', label: 'BigCommerce Development' },
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
        parentfunct(id)
    };


    function slugify(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
    }
    return (
        <>
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
              
            </div>
        </section>
          {
                    activeTag === "all" ? <div className="blog-post">
                        {articles                           
                            .map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/blog-new/${slugify(article.title)}`}
                                    className="blog-image">
                                    <img
                                        src="https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg"
                                        alt="Blog Post"
                                        //   layout="fill"
                                        objectFit="cover" />
                                </Link>
                            ))}
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

                    </div> : <Article   title={activeTag} />

                }
        </>
    );
}


