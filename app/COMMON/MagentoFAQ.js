import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why is Magento a popular choice for e-commerce development?',
    answer: 'Magento is chosen for flexibility, scalability, and extensive customization options.',
  },
  {
    question: 'Give some examples of Magento e-commerce websites developed?',
    answer: 'Certainly! Our portfolio includes successful Magento e-commerce websites.',
  },
  {
    question: 'Do you provide both Magento 1 and Magento 2 development services?',
    answer: 'Yes, our agency offers development services for both Magento 1 and Magento 2, including migration.',
  },
  {
    question: 'What are the advantages of using Magento for e-commerce development?',
    answer: "Magento offers a wide range of features, extensions, themes, multi-store capability, mobile responsiveness, and robust SEO.",
  },
  {
    question: 'Do you provide integration of third-party extensions and APIs into Magento stores?',
    answer: "Yes, our developers have experience integrating various third-party extensions and APIs for enhanced functionality.",
  },
  {
    question: 'Do you provide Post-launch support and upgrades for Magento websites?',
    answer: "Yes, we provide ongoing support and maintenance to keep your Magento website secure and up-to-date.",
  },
  {
    question: 'Do you give assistance with data migration to Magento?',
    answer: "Yes, we can help seamlessly migrate data from your existing e-commerce platform to Magento.",
  },
  {
    question: 'How is the security of Magento websites ensured?',
    answer: "We prioritise security through SSL certificates, secure payment gateways, and regular security audits.",
  },
  {
    question: 'What is the cost structure for Magento development projects?',
    answer: "Costs vary based on project specifics; we provide a transparent cost estimate during the initial consultation.",
  },
  {
    question: 'How to get started with hiring your Magento development agency?',
    answer: "Simply reach out to us through our contact form, email, or phone, and our team will guide you through the process.",
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







