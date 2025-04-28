"use client"
import React from 'react'
import Sync1 from './Sync1/page'
import Luna from './Luna/page'
import Sumo from './Sumo/page'
import Telephonic from './Telephonic/page'
import Track from './Track/page'
import Power from './Power/page'
import Partner from './Partner/page'
import Salot from './Salot/page'
import Splet from './Splet/page'
import Serviicess from './Serviicess/page'
import Actionnn from './Actionnn/page'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import BigBanner6 from '../bigcommerce-development/BigBanner6/page'
import { whyHeadlessBigcommerceByKDS, whyHeadlessBigcommerceByKDSHeading } from '../data/data'
import HomeForm from '../components/Home/HomeForm'
const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:${phoneNumber}`;
  window.open(callUrl, "_blank");
}
function page() {
  return (
    <div>
      <Navbar/>
      <Sync1/>
      <Luna/>
      <Sumo/>
      <Serviicess/>
      <Actionnn/>
      <Telephonic/>
      <Track/>
      <Splet/>
      {/* <Discover/> */}
      {/* <Mention/> */}
      <Power/>
      <Partner/>
      <BigBanner6 services={whyHeadlessBigcommerceByKDS} contents={whyHeadlessBigcommerceByKDSHeading}/>
      <Salot/>
      {/* <Mouse/> */}
     
      <HomeForm/>
      <Footer/>
      <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
    </div>
  )
}

export default page
