"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcClock } from "react-icons/fc";
import "./allsec.css";

const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg",
    alt: "E-Commerce Frameworks",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "Sustainable E-Commerce",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1749726235/blog_images/xvr2czl8eawud3ijwixt.jpg",
    alt: "AI E-Commerce Tools",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg",
    alt: "BigCommerce Headless",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "More Tech",
  },
];

export default function SectionAll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 425) setVisibleItems(1);
      else if (width < 768) setVisibleItems(2);
      else if (width < 1024) setVisibleItems(3);
      else setVisibleItems(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(images.length / visibleItems);
  const currentPage = Math.floor(currentIndex / visibleItems) + 1;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentIndex(currentIndex + visibleItems);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentIndex(currentIndex - visibleItems);
    }
  };

  return (
    <>
      <section className="blog-main-con">
        <h3 className="head-sec">All</h3>
        <div className="blog-post">
          <div className="blog-image">
            <img
              src="https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg"
              alt="Blog Post"
              objectfit="cover"
            />
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
        </div>
      </section>

      <section className="main-class-h-ye">
        <div className="ye-carousel-class">
          {images
            .slice(currentIndex, currentIndex + visibleItems)
            .map((item) => (
              <div key={item.id} className="ye-carousel-item-class">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
        </div>

        <div className="ye-pagination-box">
          <button onClick={handlePrev} className="ye-btn-prev">
            Prev
          </button>
          <span className="ye-page-number">
            Page {currentPage} 
          </span>
          <button onClick={handleNext} className="ye-btn-next">
            Next
          </button>
        </div>
      </section>
    </>
  );
}
