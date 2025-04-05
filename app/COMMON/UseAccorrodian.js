import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi for e-commerce development?',
    answer: ' Kushel Digi Solution combines expertise in e-commerce development with a commitment to budget-friendly solutions, ensuring a seamless online shopping experience for your customers.',
  },
  {
    question: 'How to ensure the best budget e-commerce development?',
    answer: ' Our approach involves optimising development processes, utilising cost-effective technologies, and tailoring solutions to provide affordable e-commerce development without compromising quality.',
  },
  {
    question: 'Advantages of React Native in mobile shopping, and how utilised?',
    answer: "React Native ensures cross-platform compatibility, allowing the development of efficient and cost-effective e-commerce mobile apps for both iOS and Android platforms. Kushel Digi Solution harnesses this technology to enhance the mobile shopping experience.",
  },
  {
    question: 'Key features for an e-commerce site, regardless of provider?',
    answer: "Key features include a user-friendly interface, secure payment gateways, responsive design, robust inventory management, and seamless navigation to enhance the overall online shopping experience.",
  },
  {
    question: 'How important is mobile responsiveness in the success of an e-commerce website?',
    answer: " Mobile responsiveness is crucial, as a significant portion of online shopping occurs on mobile devices. Ensuring a seamless experience across various screen sizes enhances customer satisfaction and conversion rates.",
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













