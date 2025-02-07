"use client"
import React from 'react'
// import "./section6.css"


const data = [
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202136/setingimg_lc7zdx.png" , 
     title:"Proven BigCommerce Expertise" , 
     para:"Our extensive experience in the development and optimization of BigCommerce stores means our solutions are customer-oriented, result-driven, and geared to help increase your online visibility."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg2_rfjulk.png" , 
     title:"Customized Solutions" , 
     para:"We offer BigCommerce services tailored for the specific needs of your business. Our solution is carefully designed to optimize your store performance and scalability."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg3_tdtqta.png" , 
     title:"Dedicated Support" , 
     para:"Get reliable and continued support from our committed maintenance services. Rest assured that with us, your BigCommerce store will be secure, updated, and working at maximum capacity."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg4_yl3zry.png" , 
     title:"Excellent User Experience" , 
     para:"Provide your shop with truly unique innovative design and user experience. We design engaging, responsive designs that impress your audience and increase conversions."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg5_kxruv6.png" , 
     title:"SEO and Marketing Strategy" , 
     para:"Boost the visibility of your store with our professional SEO and marketing strategies. We implement tactics that will help drive traffic and maximize your search rankings."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202156/settingImg6_ewo3om.png" , 
     title:"Seamless Integration" , 
     para:"Get a smooth transition into BigCommerce with our integration and migration services. We ensure zero hassle for a seamless process."
    } , 
]

function Bigsection6() {
  return (
    <div className='bigsec6wrap'>

     <div className="bigsec6cont">


        <div className="bigs6topcon">
            <h3>Why BigCommerce Development by Kushel Digi Solutions?</h3>
            <p>With deep BigCommerce expertise, Kushel Digi always believes in a client-centric approach to deliver customized eCommerce solutions. Here are some excellent benefits you can expect by availing our services.            </p>
        </div>

        <div className="alls6elems2">
            {
                data.map((item , index)=>(
                    <div key={index} className="singeles6">

                        <img src={item.img} alt="" />

                        <h5>{item.title}</h5>

                        <p>{item.para}</p>

                    </div>
                ))
            }
        </div>



     </div>

    </div>
  )
}

export default Bigsection6