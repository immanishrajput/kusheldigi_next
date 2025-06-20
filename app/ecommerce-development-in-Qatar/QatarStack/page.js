'use client';
import React from 'react';
import './qatarstack.css';

const stats = [
  {
    icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281270_w0ruti.png',
    title: 'Elite ecommerce Solutions',
    values: [
      { number: '110+', label: 'High-Impact Projects' },
      { number: '90+', label: 'Brands Trust Us' },
    ],
    className: 'card-blue',
  },
  {
    icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281271_y74agq.png',
    title: 'Massive Transaction Success',
    values: [
      { number: '1M+', label: 'Seamless Orders' },
      { number: '1.5M+', label: 'Revenue' },
    ],
    className: 'card-yellow',
  },
  {
    icon: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1750061987/Group_1171281269_xafwik.png',
    title: 'Thriving User Base',
    values: [
      {
        number: '1M+',
        label:
          'Engaged Shoppers | Skyrocketing sales & customer retention',
      },
    ],
    className: 'card-green',
  },
];

const QatarStack = () => {
  return (
    <section className="stats-section">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card ${stat.className}`}>
          <div className="stat-icon">
            <img src={stat.icon} alt="icon" />
          </div>
          <h3>{stat.title}</h3>
          <div className="stat-values">
            {stat.values.map((item, idx) => (
              <React.Fragment key={idx}>
                <div>
                  <strong>{item.number}</strong>
                  <span>{item.label}</span>
                </div>
                {idx < stat.values.length - 1 && <div className="divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default QatarStack;
