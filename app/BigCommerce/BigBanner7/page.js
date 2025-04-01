import React from "react";
import "./BigBanner7.css";

const Result = () => {
  return (
    <div className="ResultBccom">
      <div className="text-contentBccom">
        <h3 className="subtitleBccom">why BigCommerce?</h3>
        <h1 className="titlebccom">BigCommerce gets <i>big</i> results</h1>
        <p className="descriptionbbcom">
          If you're looking for an ecommerce solution that will help you drive
          big business growth, then BigCommerce is your platform. Pretty,
          powerful, and high-performance, it ticks all the right boxes.
        </p>
      </div>
      
   
      <div className="features-containerbbcom">
        {/* Image */}
        <div className="image-containerbbcom">
          <img
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743434032/result_r7baj9.avif"
            alt="BigCommerce Features"
            className="feature-imagebbcom"
          />
        </div>
        
        {/* Features */}
        <div className="features-gridbbcom">
          <div className="feature-itembbcom">
            <span className="iconbbcom">⚙️</span>
            <p>beautifully customisable</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">🧠</span>
            <p>flexible fees</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">📈</span>
            <p>powerful performance</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">⚛️</span>
            <p>ecosystem</p>
          </div>

          <div className="feature-itembbcom">
            <span className="iconbbcom">📈</span>
            <p>user-friendly interface</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">⚛️</span>
            <p>scalable and secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
