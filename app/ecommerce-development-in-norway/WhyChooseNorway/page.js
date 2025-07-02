'use client';
import React from 'react';
import './whyfinland.css';

const features = [
    {
        icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073420/Group_1171281413_b7dwf6.png',
        title: 'Decades of Experience',
        desc: 'We only take payment after deliverables are met, ensuring complete customer satisfaction.',
    },
    {
        icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073419/Group_1171281412_m4wjmx.png',
        title: 'On-time Delivery',
        desc: 'Our proven record includes successful projects with Thomson Reuters, Deloitte, HPCL, and SBI.',
    },
    {
        icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073409/Group_1171281523_k2vfml.png',
        title: 'Agile Development Process',
        desc: 'We only take payment after deliverables are met, ensuring complete customer satisfaction.',
    },
    {
        icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281524_ksva3g.png',
        title: 'Support & Maintenance',
        desc: 'Get startup-level attention with enterprise-level reliability, security and expertise.',
    },
    {
        icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281525_qnpwgi.png',
        title: 'High Performance',
        desc: 'We only take payment after deliverables are met, ensuring complete customer satisfaction.',
    },
    {
        icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750073408/Group_1171281414_nyzkrn.png',
        title: 'NDA Policy',
        desc: 'We only take payment after deliverables are met, ensuring complete customer satisfaction.',
    },
];

const WhyChooseNorway = () => {
    return (
        <section className="why-choose-section">
            <div className="why-choose-wrapper">
                <h2 className="why-choose-heading">Why Choose kushel Digi Solutions</h2>
                <p className="why-choose-subtext">
                    Kushel Digi Solutions is a leading software development company focused on delivering cutting-edge and customized tech solutions.
                </p>
            </div>

            <div className="why-choose-container">
                <div className="why-choose-left">
                    <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750331416/Group_1171281538_c0mfbg.png" alt="why choose kushel digi solutions" />
                </div>

                <div className="why-choose-right">
                    <div className="why-choose-features">
                        {features.map((item, index) => (
                            <div className="feature-item" key={index}>
                                <div className="feature-icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className="feature-texts">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseNorway;
