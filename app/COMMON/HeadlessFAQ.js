
import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'What is headless commerce?',
    answer: 'Headless E-commerce is an E-commerce architecture where the front-end is decoupled from the back-end.',
  },
  {
    question: 'What are the benefits of using a headless commerce solution?',
    answer: 'Benefits of using headless commerce are greater flexibility in design and user experience, improved performance, easier integration with other systems.',
  },
  {
    question: 'How does headless commerce differ from traditional E-commerce platforms?',
    answer: 'Traditional E-commerce platforms are monolithic, with the front-end and back-end tightly coupled whereas headless commerce separates these layers.',
  },
  {
    question: 'Can headless commerce solutions integrate with existing systems and services?',
    answer: "Yes, headless commerce solutions are designed to integrate easily with various third-party systems and services such as payment gateways, shipping providers and other existing systems.",
  },
  {
    question: 'What kind of businesses can benefit from headless commerce?',
    answer: "Headless commerce may be advantageous for businesses of all sizes, especially those seeking more performance and customisation.",
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




