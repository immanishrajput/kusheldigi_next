import React from "react";
import "./BigBanner7.css";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaChalkboardUser } from "react-icons/fa6";
const Result = () => {
  return (
    <div className="ResultBccom">
      <div className="text-contentBccom">
        <h3 className="subtitleBccom secondary-heading">why bigcommerce</h3>
        <h1 className="titlebccom primary-heading">Easier, Faster & More Profitable with Bigcommerce Solutions </h1>
        <p className="descriptionbbcom">
        Kushel Digi emerged as a trusted partner for creating robust, scalable eCommerce platforms. Bigcommerce enables our expert team to design and develop stores that are both visually stunning and highly functional. 
        </p>
      </div>
      
   
      <div className="features-containerbbcom">
        {/* Image */}
        <div className="image-containerbbcom">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743583983/0c9edf987448f34d616dbbf7faadf3f928b67b5a-730x348_ta0x2v.avif"
            alt="BigCommerce Features"
            className="feature-imagebbcom"
          />
        </div>
        
        {/* Features */}
        <div className="features-gridbbcom">
          <div className="feature-itembbcom">
            <span className="iconbbcom">
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743584036/d704d9a1621f3c3700095e893bcfd390801315c6-38x51_brcrpt.svg" alt="card"/>
            </span>
            <p>Fast Performance</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">
            <BsGraphUpArrow/>
            </span>
            <p>Scalable with Growth</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743584150/c07445e4b5d13cebc40186dd51734bdccb3d9b75-34x43_figxys.svg" alt="card"/>
            </span>
            <p>Seamless Integration</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743584175/b6d8da038668961c8f9a8caba4306f2287bb96eb-36x36_akvc1x.svg" alt="card"/>
            </span>
            <p>Secure & Reliable</p>
          </div>

          <div className="feature-itembbcom">
            <span className="iconbbcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743584010/d2337faaf3553596cfedf0ed17ab7e1ddc6e5f4f-33x35_xvzete.svg" alt="card"/>
            </span>
            <p>user-friendly interface</p>
          </div>
          <div className="feature-itembbcom">
            <span className="iconbbcom">
            <FaChalkboardUser/>
            </span>
            <p>scalable and secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
