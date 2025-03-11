import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'What are the Services offered for flutter app development?',
    answer: 'Comprehensive services including design, development, testing, deployment, and support.',
  },
  {
    question: 'Give some Examples of flutter apps developed by you.',
    answer: 'Yes, we can showcase our portfolio of past flutter projects.',
  },
  {
    question: 'What are the Benefits of using flutter?',
    answer: 'Code reusability, single codebase for Android and iOS, customizable widgets, hot reload, and high performance.',
  },
  {
    question: 'Do you provide Experience with native device features in flutter?',
    answer: "Yes, our developers integrate native features seamlessly.",
  },
  {
    question: 'Do you provide Post-launch support for flutter apps?',
    answer: "Yes, we provide ongoing support to ensure app functionality and security.",
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

