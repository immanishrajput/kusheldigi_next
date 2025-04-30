"use client"
import React from 'react'
import './homeBan.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
function Card() {
const router = useRouter();
  return (
    <section className="platforms">
    <h3 className="plt-head primary-heading">Delivering Success with the Best Ecommerce Platforms

</h3>
    <p className="plt-para secondary-heading">
    Our expert team has specialised experience in  top-tier ecommerce technologies to provide seamless migration, custom development, and optimized solutions according to your business needs. Don't settle for less, we will let your brand get the best.
    </p>
    <div className="plt-cards">
      
      <div className="plt-card">
        <div className="plt-logo">
          <img width="219" height="50" loading='lazy' 
// src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446873/bigcommerce-3_xfn6e6.png'       
   src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835775/bigcommerce-logo_quhwmf.webp" 
          alt="BigCommerce" />
        </div>
        <h3>
          Certified  BigCommerce Partner Agency
        </h3>
        <ul className="plt-ul">
          <li className="plt-li"> BigCommerce Replatforming  Migration</li>
          <li className="plt-li"> BigCommerce Custom Apps</li>
          <li className="plt-li"> BigCommerce Implementation</li>
          <li className="plt-li"> BigCommerce Integration</li>
          <li className="plt-li"> BigCommerce B2B</li>
          <li className="plt-li"> BigCommerce CBD</li>
          <li className="plt-li"> BigCommerce for Firearms</li>
          <li className="plt-li"> BigCommerce Headless</li>
        </ul>
        {/* <Link href="/bigcommerce-development" className="plt-btn">
          Learn More
        </Link> */}
        <span onClick={()=>router.push("/bigcommerce-development")} className="plt-btn">Learn More </span>
      </div>
      <div className="plt-card">
        <div className="plt-logo">
          <img width="156" height="46" loading='lazy' 
      
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835726/shopify-logo_bcrvfv.webp" 
          alt="Shopify Plus" />
        </div>
        <h3>
          Certified  Shopify Plus Agency
        </h3>
        <ul className="plt-ul">
          <li className="plt-li">Shopify Replatforming & Migration</li>
          <li className="plt-li">Shopify Custom Apps</li>
          <li className="plt-li">Conversion Rate Optimization</li>
          <li className="plt-li">UI/UX Design</li>
          <li className="plt-li">Performance Optimization</li>
          <li className="plt-li">Shopify API Integration</li>
          <li className="plt-li">Shopify Headless</li>
          <li className="plt-li">Shopify SEO</li>
          <li className="plt-li">Shopify B2B</li>
        </ul>
        {/* <Link href="/shopify-development" className="plt-btn">
          Learn More
        </Link> */}
             <span onClick={()=>router.push("/shopify-development")} className="plt-btn">Learn More </span>
      </div>
      <div className="plt-card">
        <div className="plt-logo">
          <img width="156" height="46" loading='lazy' 
          // src='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/magento-4_c38yp2.png'
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742835726/manish_sir_logo_e3ckbh.png" 
          alt="WooCommerce" />
        </div>
        <h3>
          Expert  Magento Agency
        </h3>
        <ul className="plt-ul">
          <li className="plt-li">Magento Replatforming & Migration</li>
          <li className="plt-li"> Magento Custom Themes</li>
          <li className="plt-li"> Magento Custom Extensions</li>
          <li className="plt-li"> Magento Integrations</li>
          <li className="plt-li"> Magento Headless</li>
          <li className="plt-li">Magento B2B Solutions</li>
          <li className="plt-li"> Magento for CBD </li>
        </ul>
        {/* <Link href="/magento-development" className="plt-btn">
          Learn More
        </Link> */}
         <span onClick={()=>router.push("/magento-development")} className="plt-btn">Learn More </span>
      </div>
    </div>
  </section>
  
  )
}

export default Card