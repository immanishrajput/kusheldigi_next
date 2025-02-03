import { useState } from "react"
// import "./big8.css"


const data = [
[] , 
[
        {
            num:"01" , 
            heading:"Discovery & Planning" , 
            para:"We start by meticulously understanding your business needs and goals, then draw up a detailed project roadmap to guide our process, so that each and everything will be well-structured according to your business needs."
        } , 
        {
            num:"02" , 
            heading:"Design & Prototyping" , 
            para:"Our team designs intuitive, user-friendly layouts and prototypes that reflect your brand identity and best user experience. We finalize these designs through your feedback so that they perfectly align with your vision."
        } , 
        {
            num:"03" , 
            heading:"Custom Development" , 
            para:"A BigCommerce store is developed with the required features and functionalities that best suit your business. Our development process makes sure to develop a scalable and future-proof platform  for the long term."
        } , 
        {
            num:"04" , 
            heading:"Quality Assurance & Testing" , 
            para:"Rigorous testing is performed to ensure your store is fully functional, secure, and optimized across all devices. We address potential issues proactively to guarantee a smooth user experience."
        } , 
        {
            num:"05" , 
            heading:"Deployment & Support" , 
            para:"Right after the smooth deployment, we provide continuous support and maintenance to help keep your store at its best. Our team remains at your service for updating, troubleshooting, and further optimization."
        } , 
    ]
]

const data2 = [1 , 2 , 3 , 4 , 5 ]

function BigSection8() {

    const [currindex , setcurrIndex] = useState(1);

  return (
    <div className="bigs8wrap">

        <div className="big8conta">

            <div className="bgs8content">
                <h3>Our BigCommerce Development Services Process</h3>
                <p>Our BigCommerce development process is designed to help you realize your eCommerce vision by creating a full-fledged and scalable online store.                </p>
            </div>

            <div className="numfilters">

             {
                data2.map((item , index)=>(
                    <div key={index} className={`singnum  ${index != 4 && 'addwidths' } `}>
                        <span >{item}</span>
                        {
                            index !== 4 && 
                        <p className="nufilline"></p>
                        }
                    </div>
                ))
             }

            </div>

            <div className="bs8items">

                {
             data[currindex]?.map((item , i)=>(
                 <div key={i} className="bigs8single">
                   <h5>{item.heading}</h5>
                   <p>{item.para}</p>
                 </div>
             ))
                }

            </div>


            <button className="discuproject"><span>Let’s Discuss your Project</span></button>

        </div>

    </div>
  )
}

export default BigSection8