'use client';

import React from 'react';
import "./UpgradeServices.css";

const UpgradeServices = () => {

    const magentoContent = [
        {
            img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744110234/upgrade_1-D2TlQ-e2_kzmmna.svg',
            title: "Magento migration<br />(from version 1 to 2)",
            points: [
                "Significant speed and performance improvements",
                "More user-friendly checkout process to reduce cart abandonment and enhance customer satisfaction",
                "More intuitive and user-friendly admin panel",
                "Fully responsive and optimized for mobile devices to expand your market reach",
                "Stronger data protection to safeguard your online store against security threats"
            ]
        },
        {
            img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744110232/upgrade_2-tmyZRcn0_cwg5ko.svg',
            title: "Magento 2 upgrade",
            points: [
                "Access to the latest features and functionality",
                "Improved scalability for more products and more traffic",
                "Regular security updates to safeguard your store against the latest cyber threats",
                "Better SEO capabilities to attract more organic traffic",
                "Better and more efficient integration with third-party tools and services"
            ]
        }
    ];


    return (
        <div className='magento-upgrade-services-container'>
            <div className="magento-upgrade-services-inner-container">
                <h3 className='magento-upgrade-services-heading primary-heading'>Platform upgrade services</h3>
                <p className='secondary-heading'>In the ever-evolving world of digital commerce, staying ahead means embracing change. Our Magento development services are your gateway to modernizing your e-commerce experience.</p>
                <p className='secondary-heading'>As a Magento web development agency, we know how to transform your Magento store into a powerhouse of e-commerce success and prepare your business for tomorrow’s demands.</p>

                <div className="magento-upgrade-services-flex-box">
                    {
                        magentoContent.map((item, index) => {
                            return <div key={index} className="magento-upgrade-services-card">
                                <div className="magento-upgrade-services-card-left">
                                    <img src={item.img} alt="services-image" />
                                </div>
                                <div className="magento-upgrade-services-card-right">
                                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />

                                    <ul className='magento-upgrade-services-card-right-ul'>
                                        {
                                            item.points.map((point, i) => {
                                                return <li className='magento-upgrade-services-card-right-li' key={i}>{point}</li>;
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default UpgradeServices