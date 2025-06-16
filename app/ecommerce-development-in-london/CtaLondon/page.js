'use client';
import React from 'react';
import './ctalondon.css';
import { HiArrowSmallRight } from "react-icons/hi2";


const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-left">
          <h2 className="cta-heading">Join Us in Shaping Your Future</h2>
        </div>
        <div className="cta-right">
          <button className="cta-button">
            Request a Quote <span className="arrow"><HiArrowSmallRight /></span>
          </button>
        </div>
      </div>
      <hr className="cta-divider" />
      <p className="cta-subtitle">
        Every great venture begins with one bold move. Reach out; together, we’ll elevate your business to unprecedented levels.
      </p>
    </section>
  );
};

export default CallToAction;
