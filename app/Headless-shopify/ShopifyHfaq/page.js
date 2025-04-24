import React, { useState } from "react";
import '../../COMMON/FAQ.css'
const FaqData = [
  {
    question: 'What is Shopify Headless Development?',
    answer: '  Shopify headless decouples the front-end (storefront) from the back-end (Shopify s core engine) enabling you to create a custom user experience with contemporary frameworks such as React or Next.js.',
  },
  {
    question: 'What are the advantages of going headless with Shopify?',
    answer: ' It provides quicker load speeds, improved SEO, highly customizable user experiences, and freedom to leverage any front-end technology.',
  },
  {
    question: ' Is Shopify headless right for my business?',
    answer: " If you require a completely customized customer experience, custom checkout process, or high-level frontend performance, Shopify headless is an excellent option—particularly for expanding or enterprise brands.",
  },
  {
    question: 'What technologies do you employ for the headless front-end?',
    answer: " We mainly employ React.js, Next.js, or Gatsby to create dynamic and scalable headless storefronts connected with Shopify's Storefront API.",
  },
  {
    question: `Will I still have access to Shopify 's admin dashboard?`,
    answer: " Yes. You have complete access to Shopify's admin panel for products, orders, and apps management, similar to regular Shopify stores. ",
  },
  {
    question: 'Can I still utilize Shopify apps with a headless setup?',
    answer: " Most Shopify apps are compatible with headless setups, although some might require custom integration. We assist you in finding alternatives or developing custom solutions if necessary.",
  },
  {
    question: ' Can I still have Shopify checkout with headless?',
    answer: " Yes. You can keep Shopify's secure checkout while you tailor everything else on the frontend to provide a smooth user experience.",
  },
  {
    question: ' Will a headless Shopify store impact SEO?',
    answer: "  Not negatively—if done properly, it will greatly enhance SEO with quicker load times, clean code, and server-side rendering through frameworks like Next.js.",
  },
  {
    question: 'Can I use my own domain with Shopify?',
    answer: " Yes. You can either map your own existing domain or buy a new one directly via Shopify.",
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













