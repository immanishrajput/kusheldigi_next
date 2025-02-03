import React from 'react'
// import "./section6.css"

const data = [
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202394/bigs7_dhsziw.png" , 
     title:"Customizable Storefronts" , 
     para:"Kushel Digi believes in designing a digital storefront that reflects your brand’s unique identity. We focus on every aspect which is helpful to attract and retain maximum customers."
    } , 
   
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202392/bigs72_ccr7fd.png" , 
     title:"Scalable Solutions" , 
     para:"Our designs are equipped with scalable solutions which allows your business to expand effortlessly with features built for growth and that's too without compromising performance."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202394/bigs73_h3o6mh.png" , 
     title:"Integrated Payment Gateways" , 
     para:"Our team is committed to simplify transactions by integrating various payment gateways and to ensure secure payment options that enhances trust and user satisfaction."
    } , 
   
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202390/bigs75_sdnxpe.png" , 
     title:"Responsive Design" , 
     para:"Our solutions deliver a consistent experience across all devices, from desktop to mobile that enhance user engagement. Ensure your store looks great and functions optimally wherever customers visit."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730450949/Group_1000009988_klh8vg.png" , 
     title:"Advanced SEO Tools" , 
     para:"Kushel Digi knows the importance of SEO that's why our team delivers solutions equipped with built in SEO that Enhance visibility and attract more organic visitors."
    } , 
   
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202390/bigs76_rqvjnz.png" , 
     title:"Real-Time Analytics" , 
     para:"Access key insights with comprehensive performance tracking that helps you to make informed decisions. By analyzing customer behavior, you can refine your strategy."
    } , 
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202390/bigs74_wiyr6p.png" , 
     title:"User-Friendly Admin Interface" ,
     para:"Manage your store efficiently with an intuitive backend as it streamlines your daily tasks. This allows you to maintain control easily and with great efficiency."
    } , 
   
    {
     img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730202390/bigs77_tlgswl.png" , 
     title:"Robust Security Features" , 
     para:"Protect your data and transactions with advanced security measures that ensure compliance and safety. Rest assured with proactive protection against threats."
    } , 
   
   
   
]

function BigSection7() {
  return (
    <div className='bigsec6wrap addbgs7'>

     <div className="bigsec6cont">

        <div className="bigs6topcon">
            <h3>BigCommerce Development Features</h3>
            <p>Quality simply matters. Here are all the extras you get with BigCommerce development.</p>
        </div>


        <div className="alls6elems">
            {
                data.map((item , index)=>(
                    <div key={index} className="singeles7">

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

export default BigSection7