"use client"
import React from 'react'
import './homeBan.css'
import Link from 'next/link'
function Flagship() {
  return (
    <section className="flagship-section">
    <h2 className="flagship-head">
    Building the Future of Ecommerce
    </h2>
    <div className="flagship-cards">
      <div className="flagship-card">
        <div className="flagship-logo">
          <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742808147/m1_a4lm2y.svg" alt="Shopify Plus" />
        </div>
        <h3>Ecommerce development</h3>
        <ul className="flagship-ul">
          <li className="flagship-li">Expertise in ecommerce </li>
          <li className="flagship-li">Expertise in ecommerce </li>
          <li className="flagship-li">Certified developers </li>
          <li className="flagship-li">Transparent development process </li>
          <li className="flagship-li">Product-centric approach </li>
          <li className="flagship-li">Technology integration </li>
          <li className="flagship-li">Secure payment gateway integration</li>
        </ul>
        <Link href="/ecommerce-development" className="flagship-btn">
          Learn More <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806860/arrow-up_felxs8.svg" alt="" />
        </Link>
      </div>
      <div className="flagship-card">
        <div className="flagship-logo">
          <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742808147/m2_gfvosm.svg" alt="BigCommerce" />
        </div>
        <h3>Ecommerce consulting</h3>
        <ul className="flagship-ul">
          <li className="flagship-li">
          Comprehensive website audit 
          </li>
          <li className="flagship-li">In-depth code review </li>
          <li className="flagship-li">UX audit</li>
          <li className="flagship-li">
          UX/UI analysis 
          </li>
          <li className="flagship-li"> Custom ecommerce redesign </li>
          <li className="flagship-li">Conversion rate optimisation</li>
          <li>Data-driven recommendations </li>
        </ul>
        <a href="#" className="flagship-btn">
          Learn More <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806860/arrow-up_felxs8.svg" alt="" />
        </a>
      </div>
      <div className="flagship-card">
        <div className="flagship-logo">
          <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742808147/m3_iuyndc.svg" alt="WooCommerce" />
        </div>
        <h3>Replatforming</h3>
        <ul className="flagship-ul">
          <li className="flagship-li">Seamless migration </li>
          <li className="flagship-li">
          Customized migration roadmap 
          </li>
          <li className="flagship-li">Risk assessment </li>
          <li className="flagship-li">Backup and recovery planning </li>
          <li className="flagship-li">Database migration</li>
          <li className="flagship-li">Product list transfer</li>
          {/* <li className="flagship-li">Data consistency</li> */}
        </ul>
        <Link href="#" className="flagship-btn">
          Learn More <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806860/arrow-up_felxs8.svg" alt="" />
        </Link>
      </div>
    </div>
    <div className="flagship-cards">
      <div className="flagship-card">
        <div className="flagship-logo">
          <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742808147/m4_miupd6.svg" alt="Shopify Plus" />
        </div>
        <h3>Mobile development</h3>
        <ul className="flagship-ul">
          <li className="flagship-li">Mobile commerce Optimization</li>
          <li className="flagship-li">
          Excellent shopping experience.
          </li>
          <li className="flagship-li">Custom mobile app integration </li>
          <li className="flagship-li">Easy checkout </li>
          <li className="flagship-li">
          Cross-platform compatibility 
          </li>
          <li>
          Payment gateway
          </li>
        </ul>
        <Link href="/mobile-application-development" className="flagship-btn">
          Learn More <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806860/arrow-up_felxs8.svg" alt="" />
        </Link>
      </div>
      <div className="flagship-card">
        <div className="flagship-logo">
          <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742808146/m6_klddr8.svg" alt="WooCommerce" />
        </div>
        <h3>Ecommerce design</h3>
        <ul className="flagship-ul">
          <li className="flagship-li">
          User-centric designs 
          </li>
          <li className="flagship-li">
          Customized UI/UX 
          </li>
          <li className="flagship-li">Modern aesthetics </li>
          <li className="flagship-li">
          Optimized load times
          </li>
          <li className="flagship-li">Mobile-friendly design </li>
        </ul>
        <Link href="#" className="flagship-btn">
          Learn More <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806860/arrow-up_felxs8.svg" alt="" />
        </Link>
      </div>
      <div className="flagship-card">
        <div className="flagship-logo">
          <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742808146/m5_nuxmzb.svg" alt="BigCommerce" />
        </div>
        <h3>Technical support</h3>
        <ul className="flagship-ul">
          <li className="flagship-li">24/7 expert assistance </li>
          <li className="flagship-li">Proactive monitoring </li>
          <li className="flagship-li">Quick response </li>
          <li className="flagship-li">Secure data backup </li>
          <li>
          Performance optimization 
          </li>
          <li>Scalability support </li>
        </ul>
        <Link href="#" className="flagship-btn">
          Learn More <img loading='lazy' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742806860/arrow-up_felxs8.svg" alt="" />
        </Link>
      </div>
      
    </div>
  </section>
  
  )
}

export default Flagship