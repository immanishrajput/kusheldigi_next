import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'What are the services provided by your Kotlin development agency?',
    answer: 'Our agency offers Android app development, web development with Spring Boot, backend development, Kotlin native app development, and Kotlin migration services.',
  },
  {
    question: 'Give some examples of Kotlin projects developed by you.',
    answer: 'Yes, we’re proud to showcase our diverse portfolio of past Kotlin projects.',
  },
  {
    question: 'What are the advantages of using Kotlin for Android app development?',
    answer: 'Kotlin offers concise syntax, null safety, seamless Java integration, improved readability, and reduced boilerplate code.',
  },
  {
    question: 'Do you have experience in Kotlin multi-platform development?',
    answer: "Yes, our agency has expertise in Kotlin multi-platform development, sharing code between Android, iOS, and web platforms.",
  },
  {
    question: 'Do you give assistance with migrating Java code to Kotlin?',
    answer: "Absolutely! Our developers can seamlessly migrate existing Java code to Kotlin for enhanced productivity.",
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






