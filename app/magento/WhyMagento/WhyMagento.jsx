'use client'

import React from 'react';
import "./WhyMagento.css";

const WhyMagento = () => {

    const features = [
        {
          img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204732/67c8025a4ea909ca0949e339_Type_Powerful_leb6md.svg",
          title: "Powerful",
          description: "With the most developers and open-source solutions, Magento’s the most powerful e-commerce platform. We’ve been a Magento development company for 15+ years. It hasn’t let us down yet."
        },
        {
            img:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025918bca5d2cf61d8f0_Type_Intelligent_v618xs.svg',
          title: "Intelligent",
          description: "AI tools of Adobe Sensei integrate directly with Magento stores, for a personalized experience and that increases total spending. It’s just one of the reasons 85% of our customers come back."
        },
        {
           img:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025a1d6bab08bfa238df_Type_Reliable_t7pgxm.svg',
          title: "Reliable",
          description: "Magento e-commerce sites run on Amazon Web Service. 99.99% uptime is why Land Rover, Nestle, Manolo Blahnik, and Calvin Klein choose Magento."
        },
        {
            img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025804dd60c5c0083b37_Type_Fully_Customizable_pzzwmd.svg",
          title: "Fully Customizable",
          description: "Custom Magento Development is all we do, and it’s exactly what the platform was designed for. Coupled with our expertise, there are no limits on features or functionality we can achieve."
        },
        {
            img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025862e534c5daf51547_Type_Future_Proof_r3hb1k.svg",
          title: "Future Proof",
          description: "Unlike platforms controlled by a single owner, more than 260k Magento developers are creating thousands of third-party tools on the largest, fully open-source e-commerce platform."
        },
        {
            img:"https://res.cloudinary.com/dd9tagtiw/image/upload/v1744204731/67c8025a38d37c39d172a2aa_Type_Industry_and_Global_Relevance_xcjufp.svg",
          title: "Industry and Global Relevance",
          description: "Magento powers 315,000 sites across the globe. We’ve developed sites for customers all over the world, in every industry, and integrated every major payment processor and shipping provider."
        }
      ];
      
  return (
    <div className='why-magento-container'>
        <div className="why-magento-inner-container">
            <h2 className='why-magento-heading primary-heading'>Why Magento</h2>

            <div className="why-magento-grid-container">
                {
                    features.map((item,index)=>{
                        return (
                            <div key={index} className="why-magento-grid-item">
                                <img src={item.img} alt="card-image" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default WhyMagento