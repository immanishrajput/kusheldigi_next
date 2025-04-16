"use client"
import React from 'react'
import './call.css'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const call = () => {
  return (
    <>

<section className="spot-ssec--2">
  <div className="spot-coon--2">
    <div className="spot-headless-ccon--2-div">
      <div>
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743157130/bigcommerce-logo-icon_um7a4x.png" alt="" className="spot-audit-img" />
      </div>
      <div className="spot-con--2-div-contentt">

        <h3>Our Headless Shopify Experts are Ready to Launch your Dream Store today!</h3>
      </div>

      <div>
      <Link href="/contact-us"> 
         <button className="spot-btn-auditCom">
         Let’s Discuss <FaArrowRight/>
         </button>
         </Link>
      </div>
      </div>
     </div>
</section>

    </>
  )
}

export default call