'use client'

import React from 'react';
import "./ChooseMagento.css"

const ChooseMagento = () => {

    // const magentoFeatures = [
    //     {
    //       title: "API (Rest/GraphQL)",
    //       description: "Magento offers strong API support with REST and GraphQL, making headless eCommerce development possible."
    //     },
    //     {
    //       title: "Highly Customisable",
    //       description: "Magento can be tailored to meet specific business needs by customizing or extending its core features."
    //     },
    //     {
    //       title: "Third-Party Integration",
    //       description: "Supports ERP, payment gateways, and CRMs like Salesforce, Quickbook, and SAP via third-party integrations."
    //     },
    //     {
    //       title: "Powerful Search Engine Optimisation",
    //       description: "Magento provides built-in SEO tools like URL rewrites and metadata customization for CMS pages and products."
    //     },
    //     {
    //       title: "Easy Inventory and Product Management",
    //       description: "Handle various product types and manage stock across multiple warehouses with Magento's flexible inventory tools."
    //     },
    //     {
    //       title: "Prodigious Community",
    //       description: "Backed by a large community offering plugins, themes, and fast solutions for technical issues."
    //     },
    //     {
    //       title: "Full Control to Analytics and Reports",
    //       description: "Built-in reports and Adobe Sensei integration enable deep business analysis and Google Analytics connectivity."
    //     },
    //     {
    //       title: "Responsive & Mobile Friendly",
    //       description: "Magento emphasizes responsive design, ensuring mobile-friendly storefronts for a seamless user experience."
    //     },
    //     {
    //       title: "Many More Countless Features",
    //       description: "Supports features like PWA, tax, multi-language, multi-store, currency management, and easy configuration."
    //     }
    //   ];


    const magentoFeatures = [
      {
        title: "Custom Store Development",
        description: "Transform your vision into a high-performance Magento store tailored to your brand for a seamless shopping experience."
      },
      {
        title: "Custom Theme Design",
        description: "Create beautiful, responsive Magento themes that reflect your brand and engage your customers."
      },
      {
        title: "Third-Party App Integration",
        description: "Enhance store functionality with seamless integration of vital third-party tools and applications."
      },
      {
        title: "Expert Migration Services",
        description: "Migrate to Magento smoothly with minimal downtime, complete with data transfer and design replication."
      },
      {
        title: "Performance Optimization",
        description: "Improve speed, server performance, and user experience to keep your store fast and reliable."
      },
      {
        title: "SEO & Marketing",
        description: "Boost your online visibility and drive targeted traffic with proven Magento SEO and marketing strategies."
      },
      {
        title: "Analytics to Improve ROI",
        description: "Leverage powerful analytics to track performance, understand customer behavior, and maximize ROI."
      },
      {
        title: "Easy Inventory Management",
        description: "Manage stock, suppliers, and warehouses in real-time to reduce overselling and streamline operations."
      },
      {
        title: "Maintenance & Support",
        description: "Keep your store secure, updated, and bug-free with proactive Magento maintenance and expert support."
      }
    ];
    
      

  return (
    <div className='choose-magento-outer-container'>
        {/* <span className='choose-magneto-span'>A Leading Platform</span> */}
        <h3 className='choose-magento-heading primary-heading'>Why to Choose Magento Development Services by Kushel Digi Solutions</h3>

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