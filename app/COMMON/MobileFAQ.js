import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi Solution for mobile app development?',
    answer: 'We bring expertise and affordability, crafting exceptional experiences to enhance your digital presence.',
  },
  {
    question: 'How does Kushel Digi Solution ensure affordable app development?',
    answer: 'We optimise processes, leverage cost-effective tech, and offer tailored solutions for top-notch yet budget-friendly apps.',
  },
  {
    question: 'Whats Kushel Digi Solution s focus on enhancing app user experiences?',
    answer: "We prioritise user-centric design, ensuring seamless and engaging experiences for iOS and Android apps.",
  },
  {
    question: 'Key considerations for successful mobile app development?',
    answer: "Understand your audience, and ensure robust functionality, intuitive design, and regular updates to meet evolving expectations.",
  },
  {
    question: 'Can you assist with ongoing support and maintenance?',
    answer: "Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to operate smoothly and evolve with your business needs.",
  },
  {
    question: 'Why is cross-platform development like React Native important?',
    answer: "It's crucial for efficiency, allowing apps compatible with iOS and Android using a single codebase, and saving time and resources.",
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







