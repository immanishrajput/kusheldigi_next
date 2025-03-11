

import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'What are the Services provided by your Android app development agency?',
    answer: 'Our agency offers comprehensive Android app development services.',
  },
  {
    question: 'Do you develop apps for smartphones and tablets?',
    answer: 'Yes, we develop apps for both smartphones and tablets.',
  },
  {
    question: 'What is the timeline for Android app development?',
    answer: 'Development time varies based on project complexity.',
  },
  {
    question: 'What sets your agency apart?',
    answer: "Expertise, innovation, and post-launch support distinguish our agency.",
  },
  {
    question: 'Do you provide Testing and integration services?',
    answer: "Yes, we ensure app quality through testing and can integrate third-party APIs.",
  },
 
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
      <h2>Frequently Asked Questions ?</h2>
      <div className="faqr-container">
        {FaqData.map((item, index) => (
          <div className={`faqr-item ${activeIndex === index ? "expanded" : ""}`} key={index}>
            <div className="faqr-question">
              <h4 className="questionFAQR">{item.question}</h4>
              <button className="toggle-btn" onClick={() => toggleAnswer(index)}>
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            <p className="faqr-answer">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
