"use client"
import React from 'react'
import './BigBanner4.css'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const Flex = ({page}) => {
  return (
    <>

<section className="ssec--2">
  <div className="coon--2">
    <div className="ccon--2-div">
      <div>
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743157130/bigcommerce-logo-icon_um7a4x.png" alt="" className="audit-img" />
      </div>
      <div className="con--2-div-contentt">

        <h3>{page}</h3>
      </div>

      <div>
      <Link href="/contact-us"> 
         <button className="btn-auditCom">
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

export default Flex