"use client"
import React, { useState } from "react";
import '../../COMMON/FAQ.css'
const FaqData = [
  {
    question: 'What is Headless Commerce and how does it work?',
    answer: ' Headless Commerce separates the frontend from the backend (eCommerce engine). It allows greater flexibility and faster performance rates.',
  },
  {
    question: 'What are the benefits of using Headless Commerce?',
    answer: '  It enables complete design freedom, quicker and easier page loading, multi channel functionality and improved customer experiences',
  },
  {
    question: ' Which platforms support Headless Commerce architecture?',
    answer: "  Platforms like Shopify Plus, BigCommerce, Magento, and Contentful support headless implementations via APIs.",
  },
  {
    question: 'Is Headless Commerce suitable for startups?',
    answer: " Headless is the ideal and best option for expanding or enterprise businesses. Startups can initially find classic platforms more economical.",
  },
  {
    question: `How does Headless Commerce improve site performance?`,
    answer: "  By using modern frontend frameworks (like React or Vue), headless setups can reduce load times and improve interactivity. ",
  },
  {
    question: 'What frontend technologies can be used with Headless Commerce?',
    answer: " With the aid of contemporary frontend frameworks (such as React or Vue), headless configurations can lower load times and enhance interactivity.",
  },
  {
    question: 'Does Headless Commerce support omnichannel selling?',
    answer: "  You may use React, Vue.js, Angular, Next.js, or custom frameworks to develop the frontend of a headless store.",
  },
  {
    question: 'Is Headless Commerce SEO-friendly?',
    answer: "  Yes, if used correctly and implemented properly with server-side rendering (SSR) or static generation (SSG), headless stores are SEO-optimized.",
  },
  {
    question: 'How do I know if Headless Commerce is right for my business?',
    answer: "  If your business requires adding some advanced customization, increased presence and speed and having capabilities to development, Headless could be perfect choice. ",
  },
 
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
      <h2 className="primary-heading">Frequently Asked Questions ?</h2>
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













