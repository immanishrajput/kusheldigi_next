import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  
  {
    question: 'Why choose Kushel Digi for Woocommerce development in India?',
    answer: 'Our expertise ensures top-notch solutions tailored to your Woocommerce needs.',
  },
  {
    question: 'How to get budget-friendly Woocommerce services in India?',
    answer: 'Explore cost-effective solutions achieved through optimised processes and technologies.',
  },
  {
    question: 'What advantages does React Native bring to Woocommerce mobile app development?',
    answer: 'React Native ensures cross-platform compatibility, delivering efficient and cost-effective mobile shopping experiences.',
  },
  {
    question: 'What key features contribute to a successful Woocommerce website?',
    answer: "A user-friendly interface, secure payments, responsive design, robust inventory, and seamless navigation are essential.",
  },
  {
    question: 'Why is mobile responsiveness crucial for a successful Woocommerce site?',
    answer: "Critical for enhancing user satisfaction and boosting conversion rates in the mobile shopping experience.",
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














