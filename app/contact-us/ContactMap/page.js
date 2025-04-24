"use client"
import React from 'react'
import { IoLocation, IoMail } from 'react-icons/io5'
import './ContactMap.css'
import Link from 'next/link'
const ContactMap = () => {
  return (
    <section className='globalMainContact'>
<div className='globalmaincontent'>
    <p>Ready to Serve You</p>
</div>
<div className='mainGlobalcontactMap'>
  
    <div className='globalDivMap'>
    <h2 className='globalparaMap'>Our office</h2>
    <div className='globalstartMap'>
        <p className='globalMapContry'>India</p>
       <Link href="https://www.google.com/maps/place/Kushel+Digi+Solutions+%7C+E-commerce+Web+Development+%7C+Web+Design+%26+App+Development+Company/@28.6290218,77.3841087,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce49f5d8cdc4b:0xedb207949cd07d2b!8m2!3d28.6290218!4d77.3841087!16s%2Fg%2F11hbvx7ls2?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D" target="blank"> <div className='globalLocation'><span><IoLocation/> </span> First Floor, D242, F-32B, Sector 63 Rd, Noida, Uttar Pradesh
       201301 </div> </Link>
       <Link href="mailto:info@kusheldigi.com"> <p className='globalContryMail'><span><IoMail/></span> info@kusheldigi.com</p></Link>
    </div>
    {/* <div className='globalstartMap'>
        <p className='globalMapContry'>Germany</p>
        <p className='globalLocation'><span><IoLocation/> </span> Friedrichstr. 171, 10117, Berlin, Germany</p>
        <div className='globalContryMail'><span> <IoMail/></span> de.info@edvantis.com</div>
    </div> */}
    </div>
    <div className='iframeMapContact'>
      <iframe
        src="https://www.google.com/maps?q=First+Floor,+D242,+F-32B,+Sector+63+Rd,+Noida,+Uttar+Pradesh+201301&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      ></iframe>
    </div>
</div>
    </section>
  )
}

export default ContactMap