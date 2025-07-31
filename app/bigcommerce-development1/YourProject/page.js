"use client"

import Link from "next/link"

function YourProject() {
  return (
    <div className="yprwrap">

   <div className="yrproconta">

    <div className="yrcontentns">
        <h3>Start Your Project. It’s Risk-Free.</h3>
        <p>Let's make it happen! With our risk-free approach, you can rest assured that your project is in good hands. Submit your inquiry today and receive a prompt response from our team.</p>

      <Link href="/contact-us"><button><span>Get A Quote For Your Project</span></button></Link>  

       <Link href="/contact-us" ><span className="undeliconv">Or Start a conversation</span></Link>
    </div>

   </div>


    </div>
  )
}

export default YourProject