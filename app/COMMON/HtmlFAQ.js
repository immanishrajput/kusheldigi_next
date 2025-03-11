import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi Solutions for HTML5 web development?',
    answer: 'Kushel Digi Solutions excels in HTML5 development, offering a unique blend of innovation, client-centricity, and a skilled team for tailored solutions aligned with your business objectives.',
  },
  {
    question: 'How does Kushel Digi Solutions harness HTML5 to elevate web development projects?',
    answer: 'HTML5 is utilised by Kushel Digi to create modern and interactive web experiences, ensuring compatibility, responsiveness, and engaging user interfaces.',
  },
  {
    question: 'What sets Kushel Digi apart in HTML5 development, and how does it benefit clients?',
    answer: 'Kushel Digi distinguishes itself through a commitment to innovation, client-centric practices, and a proficient team dedicated to delivering customised, high-quality HTML5 solutions.',
  },
  {
    question: 'Key considerations when selecting a service provider for HTML5 web development?',
    answer: "When choosing an HTML5 service provider, consider factors such as expertise, a proven track record, and alignment with your business goals for a successful partnership.",
  },
  {
    question: 'What are the latest trends and best practices in HTML5 development, irrespective of specific companies?',
    answer: "Stay informed about the dynamic landscape of HTML5 development by exploring industry trends, adhering to best practices, and actively engaging with online communities for valuable insights.",
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





