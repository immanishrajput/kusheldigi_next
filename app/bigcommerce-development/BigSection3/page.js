"use client"

const data = [
    {
        num:"01" , 
        title:"BigCommerce Store Custom Development" , 
        para:"Let us turn your vision into a reality through our custom BigCommerce store development. Our eCommerce solutions are designed to meet the needs of your brand. Our platform ensures a seamless and engaging shopping experience for your customers. "
    } ,
    {
        num:"02" , 
        title:"BigCommerce Store Optimization" , 
        para:"Get the most out of your store with our all-rounded optimization services. Every single detail like performance to user experience of your BigCommerce website will be optimized to achieve higher conversions and customer satisfaction."
    } ,
    {
        num:"03" , 
        title:"BigCommerce Theme Design" , 
        para:"Stand out in this saturated market with an attractive, custom-made BigCommerce theme. Our design team will create beautiful, responsive themes that reflect your branding. Give that store an extra edge that gets the customers interacting."
    } ,
    {
        num:"04" , 
        title:"BigCommerce App Integration" , 
        para:"Augment store functionality with BigCommerce app integrations that are seamlessly integrated. We will integrate vital tools and third-party apps to further up your store's capability. Whether it's a payment gateway or a marketing tool, we have got you covered."
    } ,
    {
        num:"05" , 
        title:"BigCommerce Migration Services" , 
        para:"Moving to BigCommerce? Our migration services make sure that your transition runs smoothly with the least amount of downtime. We take responsibility for everything, from data porting to design replicability, so that you do not lose your store functionality."
    } ,
    {
        num:"06" , 
        title:"BigCommerce SEO & Marketing" , 
        para:"Expand your online presence and sales with our BigCommerce SEO and marketing services. We put into action tested strategies that will enhance your search ranking and drive targeted traffic. Let us help you reach your audience effectively."
    } ,
    {
        num:"07" , 
        title:"BigCommerce Maintenance & Support" , 
        para:"Bring the backup for your BigCommerce store and keep it running with our highly customized maintenance and support services. This will include follow-up on updates, troubleshooting, and enhancement of your website to make sure everything is up-to-date."
    } ,
    {
        num:"08" , 
        title:"BigCommerce Performance Optimization" , 
        para:"Ensure that your store is fast, responsive, and reliable with our performance optimization services. We will inspect and improve the load times, server performance, and user experience so that customers always remain satisfied and engaged. "
    } ,
    {
        num:"09" , 
        title:"BigCommerce API Development" , 
        para:"Extend the capabilities of your store with custom BigCommerce API development. We build custom integrations that connect your store with other systems, ensuring seamless data flow and increased functionality. "
    } ,
]

function BigSection3() {
  return (
    <div className='bigcomsec3wrap'>

        <div className="bigcosec3cont">

           
            <h2>OUR BIGCOMMERCE SERVICES FOR YOUR BUSINESS GROWTH
            </h2>

               <div className="bigwebwrapall">
                 {
           data.map((item , index)=>(
            <div key={index} className="singsec3boxe">

                 <span>{item.num}</span>

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

export default BigSection3