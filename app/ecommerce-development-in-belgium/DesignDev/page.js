'use client';
import React, { useState } from 'react';
import './design.css';

const designData = {
    paragraph: `Defined processes make work easy to execute and ensure efficiency. Because of this, our experts with 15+ years of industry experience have developed a flexible process to ensure agility without compromising accuracy.`,
    columns: [
        {
            title: 'UX Research',
            items: ['PRODUCT DEFINITION ¹', 'RESEARCH & ANALYSIS ²', 'IDEATION ³'],
        },
        {
            title: 'UX DESIGN',
            items: ['PROTOTYPING ⁴', 'USER-TESTING ⁵', 'WIREFRAMING ⁶'],
        },
        {
            title: 'UI DESIGN',
            items: ['MOODBOARDS ⁷', 'CONCEPT ⁸', 'FINAL DESIGN ⁹'],
        },
        {
            title: 'DELIVERY',
            items: ['SUPPORT ¹⁰'],
        },
    ],
};

const developmentData = {
    paragraph: `Our development process focuses on writing scalable, maintainable code. Our engineers work using industry best practices, with clear phases for architecture, testing, and deployment.`,
    columns: [
        {
            title: 'ARCHITECTURE',
            items: ['Code Structure', 'API Integration', 'Security Audits'],
        },
        {
            title: 'DEVELOPMENT',
            items: ['Frontend Dev', 'Backend Dev', 'Database'],
        },
        {
            title: 'QA & TESTING',
            items: ['Unit Testing', 'Integration Testing', 'Bug Fixes'],
        },
        {
            title: 'DEPLOYMENT',
            items: ['CI/CD', 'Monitoring', 'Support'],
        },
    ],
};

const DesignDevelopment = () => {
    const [active, setActive] = useState('design');
    const current = active === 'design' ? designData : developmentData;

    return (
        <section className="process-section">
            <div className="process-toggle">
                <span
                    className={active === 'design' ? 'active' : ''}
                    onClick={() => setActive('design')}
                >
                    DESIGN
                </span>
                <div
                    className={`switch ${active === 'development' ? 'active' : ''}`}
                    onClick={() => setActive(active === 'design' ? 'development' : 'design')}
                >
                    <div className={`switch-circle ${active === 'development' ? 'right' : ''}`}></div>
                </div>

                <span
                    className={active === 'development' ? 'active' : ''}
                    onClick={() => setActive('development')}
                >
                    DEVELOPMENT
                </span>
            </div>

            <div className="process-divider"></div>

            <div className="process-row">
                <div className="process-description">{current.paragraph}</div>

                <div className="process-columns">
                    {current.columns.map((col, i) => (
                        <div className="process-column" key={i}>
                            <h4>{col.title}</h4>
                            <ul>
                                {col.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignDevelopment;
