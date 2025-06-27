"use client";
import React from "react";
import "../globals.css";

import Navbar from "../COMMON/Navbar";
import QatarBanner from "../ecommerce-development-in-qatar/QatarBanner/page";
import LogoQatar from "../ecommerce-development-in-qatar/LogoQatar/page";
import QatarStack from "../ecommerce-development-in-qatar/QatarStack/page";
import EcommerceExpertise from "../ecommerce-development-in-delhi/EcommerceExpertise/page";
import UnleashingSection from "../ecommerce-development-in-qatar/UnleashingSection/page";
import QatarEcomServ from "../ecommerce-development-in-qatar/QatarEcomServ/page";
import QatarSecSlider from "../ecommerce-development-in-qatar/QatarSecSlider/page";
import QatarBenfit from "../ecommerce-development-in-qatar/QatarBenfit/page";
import QatarEcomDev from "../ecommerce-development-in-qatar/QatarEcomDev/page";
import QatarShop from "../ecommerce-development-in-qatar/QatarShop/page";
import QatarMakes from "../ecommerce-development-in-qatar/QatarMakeUs/page";
import IndustryTabs from "../ecommerce-development-in-qatar/QatarIndustry/page";
import QatarSec12 from "../ecommerce-development-in-qatar/QatarSec12/page";
import CustomBenefitsSection from "../ecommerce-development-in-london/CustomBenefitsSection/page";
import QatarSolution from "../ecommerce-development-in-qatar/QatarSolution/Page";
import QatarFAQ from "../ecommerce-development-in-qatar/QatarFAQ/page";
import Website from "./Home/HomeForm";
import Footer from "../COMMON/Footer";
import CallToAction from "../ecommerce-development-in-qatar/CtaQatar/page";
import BlogSection from "../ecommerce-development-in-qatar/BlogSection/BlogSection";

const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:${phoneNumber}`;
  window.open(callUrl, "_blank");
};

function QatarEcommerce() {
  return (
    <div>
      <div className="ser-main"></div>

      <Navbar />
      
      <QatarBanner />
      <LogoQatar/>
      <QatarStack/>
      <EcommerceExpertise/>
      <UnleashingSection/>
      <QatarEcomServ/>
      <QatarSecSlider/>
      <CallToAction/>
      <QatarBenfit/>
      <QatarEcomDev/>
      <QatarShop/>
      <QatarMakes/>
      <IndustryTabs/>
      <QatarSec12/>
      <CustomBenefitsSection/>
      <QatarSolution/>
      <BlogSection page='eCommerce'/>
      <QatarFAQ/>
      <Website/>
      <Footer/>
      

      <div className="whtsApBtns">
        <button onClick={whatAppHandler}>
          <img
            className="what-image-universal"
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png"
            alt="whatsApp-kusheldigi"
            title="whatsApp-kusheldigi"
          />
        </button>
        <button onClick={callHandler}>
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png"
            alt="call-icon"
            title="call-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default QatarEcommerce;
