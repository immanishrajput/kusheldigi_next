import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'What is Magento and who should use it?',
    answer: ' Magento is an eCommerce platform that is open source and works best for medium to large businesses. It provides easy services for those needing advanced customization and massive scalability.',
  },
  {
    question: 'What is the difference between Magento Open Source and Adobe Commerce?',
    answer: 'Magento Open Source offers basic features free, on the other hand, Adobe Commerce (paid) offers pro features like advanced tools for marketing, cloud hosting and also customer management.',
  },
  {
    question: 'Is Magento scalable for high-traffic eCommerce stores?',
    answer: 'Yes, Magento is specifically built to support large product catalogs and high traffic with appropriate strategies of hosting and optimization.',
  },
  {
    question: 'How flexible is Magento in terms of design and functionality?',
    answer: "Magento is extremely flexible, where developers can create custom themes, modules and integrations.",
  },
  {
    question: 'Can Magento integrate with CRM and ERP systems?',
    answer: "Yes. Magento provides support for custom and third-party integrations with applications like Salesforce, Zoho, Microsoft Dynamics and more.",
  },
  {
    question: 'Is Magento mobile-friendly and responsive?',
    answer: " Yes,Magento themes are responsive, and mobile optimization is integrated within both frontend and backend.",
  },
  {
    question: 'How long does it take to develop a Magento website?',
    answer: "Based on complexity, a standard Magento website would require 4–8 weeks, while complicated configurations would take several months.",
  },
  {
    question: 'Is Magento suitable for B2B and B2C?',
    answer: "Absolutely it is suitable, Magento provides separate features for B2B (such as bulk orders, company accounts) as well as B2C customers.",
  },
  {
    question: 'What is the cost structure for Magento development projects?',
    answer: "Costs vary based on project specifics; we provide a transparent cost estimate during the initial consultation.",
  },
  {
    question: 'How does Magento handle performance optimization and speed?',
    answer: " Magento features native caching (Varnish), CDN integration, image compression, and optimized indexing for improved performance.",
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







