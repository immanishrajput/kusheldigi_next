
import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi for staff augmentation?',
    answer: 'Kushel Digi excels, offering a vast talent pool, flexible hiring, and a client-focused approach.',
  },
  {
    question: 'How does Kushel Digi ensure staff quality in augmentations?',
    answer: 'Kushel Digi maintains a rigorous selection process, ensuring high-quality, competent professionals for clients.',
  },
  {
    question: 'Benefits of Kushel Digi in staff augmentation, setting it apart?',
    answer: 'Kushel Digi provides on-demand access to skilled workforce, scalability, and cost-effectiveness for quick project adaptation.',
  },
  {
    question: 'Key considerations for selecting a staff augmentation provider?',
    answer: "Consider talent pool, hiring flexibility, and a client-centric approach when choosing a provider.",
  },
  {
    question: 'General best practices in staff augmentation, irrespective of companies?',
    answer: "Best practices include thorough candidate assessments, clear communication, defined project goals, and continuous evaluation for successful staff augmentation initiatives.",
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












