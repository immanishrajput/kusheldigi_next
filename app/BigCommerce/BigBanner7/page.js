import React from "react";
import "./BigBanner7.css";

const Result = () => {
  return (
    <div className="ResultBccom">
      <div className="text-contentBccom">
        <h3 className="subtitleBccom">why bigcommerce</h3>
        <h1 className="titlebccom">Easier, Faster & More Profitable with Bigcommerce Solutions </h1>
        <p className="descriptionbbcom">
        Kushel Digi emerged as a trusted partner for creating robust, scalable eCommerce platforms. Bigcommerce enables our expert team to design and develop stores that are both visually stunning and highly functional. 
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
            <p>Fast Performance</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">🧠</span>
            <p>Scalable with Growth</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">📈</span>
            <p>Seamless Integration</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">⚛️</span>
            <p>Secure & Reliable</p>
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
