'use client'

import React, { useState } from "react";
import '../../COMMON/FAQ.css'
const FaqData = [
  {
    question: 'What services does Kushel Digi Solutions offer?',
    answer: 'We provide a range of services including eCommerce development, UI/UX design, mobile app development, website design and development, and digital marketing.',
  },
  {
    question: 'How can Kushel Digi Solutions help my business grow?',
    answer: 'Our excellent digital solutions are designed to enhance your online presence, drive sales, and improve user engagement, helping your business achieve its growth objectives.',
  },
  {
    question: 'How do I get started with your services?',
    answer: "Simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your needs and provide a customized plan.",
  },
  {
    question: 'How long does it take to complete a project?',
    answer: "Project timelines vary based on the scope and complexity of the work. We'll provide a detailed timeline and keep you informed throughout the development process.",
  },
  {
    question: 'Can you assist with ongoing support and maintenance?',
    answer: "Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to operate smoothly and evolve with your business needs.",
  },
  {
    question: 'Do you offer custom solutions?',
    answer: "Absolutely. We specialize in creating bespoke solutions tailored to your specific business requirements and goals.",
  },
  {
    question: 'How do you ensure the quality of your work?',
    answer: "Our team follows rigorous quality assurance processes, including comprehensive testing and user feedback, to ensure that our solutions meet the highest standards of performance and reliability.",
  },
 
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
      <h3 className="primary-heading">Frequently Asked Questions ?</h3>
      <div className="faqr-container">
        {FaqData.map((item, index) => (
          <div
            className={`faqr-item ${activeIndex === index ? "expanded" : ""}`}
            key={index}
          >
            <div className="faqr-question" onClick={() => toggleAnswer(index)}>
              <h4 className="questionFAQR">{item.question}</h4>
              <button className="toggle-btn">
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            {activeIndex === index && (
              <p className="faqr-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;