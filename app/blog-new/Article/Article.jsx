"use client";
import React from "react";
import "./artcile.css" 

const articles = [
  {
    id: 1,
    title: "BigCommerce System Integration For Large Catalog Management",
    date: "24 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750764362/blog_images/hvvxvh4geaikafxjm5oy.jpg",
    alt: "Article 1"
  },
  {
    id: 2,
    title: "The Best E-Commerce Frameworks For Online Selling In 2025",
    date: "18 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1750242151/blog_images/kiugaq591gjgpqdb6tsi.jpg",
    alt: "Article 2"
  },
  {
    id: 3,
    title: "The Growing Demand For Sustainable E-Commerce: Creating Eco-Friendly Online Stores",
    date: "12 JUNE 2025",
    image: "https://res.cloudinary.com/dt2lhechn/image/upload/v1749726235/blog_images/xvr2czl8eawud3ijwixt.jpg",
    alt: "Article 3"
  }
];

export default function Article() {
  return (
    <section className="latest-articles">
      <h2 className="heading">Latest Articles</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img
              src={article.image}
              alt={article.alt}
              width={420}
              height={250}
              className="article-img"
            />
            <div className="article-content">
              <div className="article-date">{article.date}</div>
              <div className="article-title">{article.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
