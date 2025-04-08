'use client'

import React from 'react';
import "./ChooseMagento.css"

const ChooseMagento = () => {

    const magentoFeatures = [
        {
          title: "API (Rest/GraphQL)",
          description: "Magento offers strong API support with REST and GraphQL, making headless eCommerce development possible."
        },
        {
          title: "Highly Customisable",
          description: "Magento can be tailored to meet specific business needs by customizing or extending its core features."
        },
        {
          title: "Third-Party Integration",
          description: "Supports ERP, payment gateways, and CRMs like Salesforce, Quickbook, and SAP via third-party integrations."
        },
        {
          title: "Powerful Search Engine Optimisation",
          description: "Magento provides built-in SEO tools like URL rewrites and metadata customization for CMS pages and products."
        },
        {
          title: "Easy Inventory and Product Management",
          description: "Handle various product types and manage stock across multiple warehouses with Magento's flexible inventory tools."
        },
        {
          title: "Prodigious Community",
          description: "Backed by a large community offering plugins, themes, and fast solutions for technical issues."
        },
        {
          title: "Full Control to Analytics and Reports",
          description: "Built-in reports and Adobe Sensei integration enable deep business analysis and Google Analytics connectivity."
        },
        {
          title: "Responsive & Mobile Friendly",
          description: "Magento emphasizes responsive design, ensuring mobile-friendly storefronts for a seamless user experience."
        },
        {
          title: "Many More Countless Features",
          description: "Supports features like PWA, tax, multi-language, multi-store, currency management, and easy configuration."
        }
      ];
      

  return (
    <div className='choose-magento-outer-container'>
        {/* <span className='choose-magneto-span'>A Leading Platform</span> */}
        <h3 className='choose-magento-heading primary-heading'>Reasons to Choose Magneto For Online E-Commerce</h3>

        <div className="choose-magento-grid-container">
            {
                magentoFeatures.map((item,index)=>{
                    return  <div key={index} className="choose-magento-grid-item">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                    </div>
                })
            }
           
        </div>
    </div>
  )
}

export default ChooseMagento