"use client"
import React from 'react'
import './sync.css'

function Soloar() {
  return (
    <div>
      <section className="floor" style={{ backgroundImage: "url('https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744152667/main-hero-img-1x_ribodx.webp')" }}>
        <div className="floor-overlay">
          <div className="floor-container">
            <div className="floor-left">
              <h1>BigCommerce Headless Commerce Solutions
              </h1>
              <p>
              Take your ecommerce experience to the next level with our BigCommerce Headless Commerce Solutions. By isolating your front-end presentation layer from the BigCommerce back-end, we provide ultra-fast, scalable, and personalized shopping experiences.
              </p>
              <ul className="checklist">
                <li>8+ Years of Experience in eCommerce Industry
                </li>
                <li>Certified BigCommerce Partner
                </li>
                <li>Custom front-end development using React.Js
                </li>
                <li>Fast, responsive, and SEO-optimized ecommerce sites
                </li>
              </ul>

              
              <div className="floor-buttons">
                <button className="btn white-btn">Talk to a Consultant</button>
                <button className="btn blue-btn">
                  BOOK A CALL <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="floor-right">
              <div
                className="image-box"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744152831/main-frame-7-1--ktepemiy_esk8ce.webp')"
                }}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Soloar
