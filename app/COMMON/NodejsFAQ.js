import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why Kushel Digi for Node.js development?',
    answer: 'Kushel Digi excels in Node.js, offering innovation, client focus, and a skilled team for tailored solutions.',
  },
  {
    question: 'How does Kushel Digi use Node.js for web projects?',
    answer: 'Node.js empowers Kushel Digi to build scalable, high-performance web applications through its non-blocking, event-driven architecture.',
  },
  {
    question: 'What sets Kushel Digi apart in Node.js development?',
    answer: "Kushel Digi's commitment to innovation, client-centric practices, and a skilled team ensures customised, high-quality Node.js solutions.",
  },
  {
    question: 'Key considerations for selecting a Node.js service provider?',
    answer: "Consider expertise, a proven track record, and alignment with business goals when choosing a Node.js service provider.",
  },
  {
    question: 'Insights into Node.js trends and best practices?',
    answer: "Stay informed about the dynamic Node.js landscape by exploring industry trends, adhering to best practices, and actively engaging with online communities.",
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








