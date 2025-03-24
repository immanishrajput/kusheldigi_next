"use client"
import React from 'react'
import './homeBan.css'

function Card() {
  return (
    <section className="platforms">
    <h2 className="plt-head">Top eCommerce Platforms We Work With</h2>
    <p className="plt-para">
      Our teams are well versed in top eCommerce technologies like Shopify,
      BigCommerce, Salesforce Commerce Cloud, and WooCommerce. Don’t let a novice
      team destroy your experiences - get the best your brand deserves.
    </p>
    <div className="plt-cards">
      <div className="plt-card">
        <div className="plt-logo">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742803405/Shopify_Logo_1_xypzni.png" alt="Shopify Plus" />
        </div>
        <h3>
          Certified <br /> Shopify Plus Agency
        </h3>
        <ul className="plt-ul">
          <li className="plt-li">Shopify Replatforming &amp; Migration</li>
          <li className="plt-li">Shopify Custom Apps</li>
          <li className="plt-li">Conversion Rate Optimization</li>
          <li className="plt-li">UI/UX Design</li>
          <li className="plt-li">Performance Optimization</li>
          <li className="plt-li">Shopify API Integration</li>
          <li className="plt-li">Shopify Headless</li>
          <li className="plt-li">Shopify SEO</li>
          <li className="plt-li">Shopify B2B</li>
        </ul>
        <a href="#" className="plt-btn">
          Learn More
        </a>
      </div>
      <div className="plt-card">
        <div className="plt-logo">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742803405/BigCommerce_1_bq5rw8.png" alt="BigCommerce" />
        </div>
        <h3>
          Certified <br /> BigCommerce Partner Agency
        </h3>
        <ul className="plt-ul">
          <li className="plt-li"> BigCommerce Replatforming &amp; Migration</li>
          <li className="plt-li"> BigCommerce Custom Apps</li>
          <li className="plt-li"> BigCommerce Implementation</li>
          <li className="plt-li"> BigCommerce Integration</li>
          <li className="plt-li"> BigCommerce B2B</li>
          <li className="plt-li"> BigCommerce CBD</li>
          <li className="plt-li"> BigCommerce for Firearms</li>
          <li className="plt-li"> BigCommerce Headless</li>
        </ul>
        <a href="#" className="plt-btn">
          Learn More
        </a>
      </div>
      <div className="plt-card">
        <div className="plt-logo">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742803405/woo_commerce_1_lga57r.png" alt="WooCommerce" />
        </div>
        <h3>
          Expert <br /> WooCommerce Agency
        </h3>
        <ul className="plt-ul">
          <li className="plt-li"> WooCommerce Replatforming &amp; Migration</li>
          <li className="plt-li"> WooCommerce Custom Themes</li>
          <li className="plt-li"> WooCommerce Custom Plugins</li>
          <li className="plt-li"> WooCommerce Integrations</li>
          <li className="plt-li"> WooCommerce Headless</li>
          <li className="plt-li"> WooCommerce B2B Solution</li>
          <li className="plt-li"> WooCommerce for CBD</li>
        </ul>
        <a href="#" className="plt-btn">
          Learn More
        </a>
      </div>
    </div>
  </section>
  
  )
}

export default Card