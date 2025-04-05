'use client';

import React from 'react';
import './ServiceSection.css';

const services = [
    { title: "Software Engineering Services", description: "Partner with us to develop innovative, scalable, and secure software solutions." },
    { title: "Data Science and BI", description: "Unlock your business potential with data-driven decisions backed by expertise in data science." },
    { title: "Artificial Intelligence", description: "Create custom AI solutions for smarter decision-making, automation, and trend prediction." },
    { title: "Cloud Development and Migration", description: "Enhance development with cloud adoption, automation, and CI/CD pipeline management." },
    { title: "Payment Software Development", description: "Gain a competitive edge with our expertise in POS and payment systems." },
    { title: "Application Management", description: "Ensure system reliability, stable performance, and technical support with our services." },
];

const ServiceSection = () => {
    return (
        <div className="big-services-container">
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`big-services-card ${service.highlighted ? 'highlighted' : ''}`}
                >
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ServiceSection;
