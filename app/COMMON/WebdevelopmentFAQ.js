import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  
  {
    question: 'Why Kushel Digi for US web development?',
    answer: "Approximately 89% of consumers prefer to browse websites before making a purchase, according to recent research. Therefore, websites can be a great way to increase the number of people who see your business. A well-designed website can boost sales, enhance brand awareness, and draw in new customers for the company. A seasoned web development firm understands how to make a website that is easy to use and converts effectively. Your website can be made to be both user- and search engine-friendly by Kushel Didi Solutions' team of skilled website developers, graphic designers, content writers, and SEO specialists.",
  },
  {
    question: 'What sets Kushel Digi apart in web development?',
    answer: ' Kushel Digi differentiates itself through unwavering dedication to innovation, client-centric practices, and a proficient team committed to delivering customised, high-quality solutions.',
  },
  {
    question: 'How does Kushel Digi ensure cutting-edge solutions?',
    answer: 'Kushel Digi ensures cutting-edge solutions by staying abreast of the latest technologies, incorporating industry best practices, and maintaining an unwavering focus on client satisfaction.',
  },
  {
    question: 'Key factors for choosing a web development provider?',
    answer: "When selecting a web development provider, it's essential to consider factors such as expertise, client reviews, and alignment with your business needs and goals.",
  },
  {
    question: 'Insights into the latest USA web development trends?',
    answer: "Stay informed about the latest trends in USA web development by exploring industry publications, participating in conferences, and actively engaging with online communities for valuable insights.",
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














