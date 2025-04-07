'use client';

import React from 'react';
import './ServiceSection.css';
import { SiBmcsoftware } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { AiTwotoneAppstore } from "react-icons/ai";

const services = [
    { icon: <SiBmcsoftware />,title: "24/7 Technical Support", description: "Your business can be hit by unexpected problems, but our team of dedicated support agents is there for you 24/7 to fix any technical issues promptly. From website crashes, non-functioning pages, to integration problems, we offer instant solutions to reduce downtime" },
    { icon:<FaDatabase />,title: "Store Setup & Customization", description: "Creating a BigCommerce store that supports your brand vision is key to success. We help you get your store set up, properly configure important settings and personalize the design to reflect your brand identity while keeping the user experience smooth." },
    { icon:<GiArtificialIntelligence />,title: "Performance Optimization ", description: "A slow-loading website can push away customers. Our experts scan and improve the speed of your BigCommerce store’s site navigation and provide a smooth shopping experience. This ultimately leads to higher customer satisfaction and conversion rates." },
    { icon:<FaCloudDownloadAlt />, title: "Security & Compliance Support", description: "Cybersecurity is indispensable in eCommerce. We enforce top-tier security measures, routine updates, and PCI compliance to keep your store secure from threats and ensure secure transactions and protection of customer data." },
    { icon:<MdOutlinePayment />,title: "Store Functionality", description: "Increase the functionality of your store with third-party apps and plugins. We help integrate critical tools like payment gateways, CRM systems, analytics tools, and marketing automation apps to enhance store performance and customer interaction." },
    { icon:<AiTwotoneAppstore />,title: "Regular Maintenance & Updates", description: "Technology keeps changing, and it is vital to be updated for competitiveness. We offer regular updates, bug fixes, and maintenance so that your BigCommerce store remains secure, operational, and in line with the current trends in the industry." },
];

const ServiceSection = ({page}) => {
    return (
        <div className='big-outer-services-container'>
            <h2 className='big-services-heading primary-heading'>Our Support Services</h2>
            <p className='big-services-sm-heading secondary-heading'>Kushel Digi Solutions is always committed to ensure that your BigCommerce store operates seamlessly with our expert support services. Our team is there for you from setup to maintenance, we believe in providing solutions that keep your online business running efficiently.
            </p>
        <div className="big-services-container">
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`big-services-card ${service.highlighted ? 'highlighted' : ''}`}
                >
                    <span>{service.icon}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ServiceSection;
