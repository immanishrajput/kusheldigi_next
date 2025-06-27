"use client"
import React from 'react'
import './delhisol.css'
import Link from 'next/link'
const DelhiSolution = () => {
  return (
    <>
      <div className="containerEcom">
        <section className="left-sectionEcom">
          <h6>Ecommerce Development Agency</h6>
          <h2 className='primary-heading'>
            E-Commerce Solutions that Help You Get More Sales and Grow
          </h2>
          <p>
            Since 2017, Kushel Digi has helped over 1000 companies across the globe by providing unique ecommerce development services. This has helped businesses expand quicker and smarter.
          </p>
          <Link href="/contact-us"><button>
            Get a Free Consultation Today</button> </Link>
        </section>
        <section className="right-sectionEcom">
          <div className="content-blockEcom">
            <h3>Design for Conversion</h3>
            <p>
              We make clean, easy-to-use ecommerce websites that help visitors make rapid judgments and increase the number of people who buy things.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Improved Checkout Experience</h3>
            <p>
              Our ecommerce development professionals can help you make your checkout experience faster, safer, and easier, which will help you reduce cart abandonment.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Smart Filters and Navigation</h3>
            <p>
              With predictive search, dynamic filters, and easy-to-use category layouts, you can help consumers discover what they want quickly.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Mobile-First Development</h3>
            <p>
              All of our ecommerce development solutions are made with mobile devices in mind, so they work well on smartphones and tablets and get more people involved.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Scalable Architecture</h3>
            <p>
              We make ecommerce websites that can easily expand with your company as your products, traffic, and objectives change.
            </p>
          </div>
          <div className="content-blockEcom">
            <h3>Ongoing Support and Optimization</h3>
            <p>
              Our work doesn't stop when we launch. To help your company flourish, we are always working on making things faster, better, and easier to use.
            </p>
          </div>
        </section>
      </div>

    </>
  )
}

export default DelhiSolution;