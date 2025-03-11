"use client"
import React, { useEffect, useState } from "react";
import '../../COMMON/FAQ.css'
const FaqData = [
  {
    question: 'What is Shopify, and how does it work?',
    answer: 'Shopify is an eCommerce platform that allows businesses to create, customize, and manage their online stores more efficiently. It provides an easy interface, multiple design templates, and integrations to make the process of selling your products online much easier.',
  },
  {
    question: 'Do I need  technical experience to use Shopify?',
    answer: "No, Shopify can be used by beginners and professionals alike. It has drag-and-drop features, which makes setting up and maintaining a store pretty simple.",
  },
  {
    question: 'Can you customize my Shopify store to fit my brand?',
    answer: "Yes, we pride ourselves on specialist services for Shopify store customization to represent your brand with its unique identity-be it design tweaks or advanced custom features.",
  },
  {
    question: "How long does it take to develop a Shopify store?",
    answer: "It depends on the project's complexity and specific requirements. It takes a few days for a simple store to be set up, while a fully customized store may require a few weeks.",
  },
  {
    question: 'What kind of support  you offer after launch of my store?',
    answer: "We also provide continuous support and maintenance to ensure smooth running for your Shopify store. Whether you need technical assistance, updates, or enhancements, we're here to help.",
  },
  {
    question: 'Can Shopify handle large inventories and high traffic?',
    answer: "Yes, Shopify is scalable and thus can manage big inventories, many products, and a high flow of traffic. It will work for companies of any size, right from the smallest startups up to huge enterprises.",
  },
  {
    question: 'Is Shopify SEO-friendly?',
    answer: "Yes, Shopify is SEO-friendly and includes built-in features like customizable meta tags, sitemaps, and URL structures to help improve your store's visibility on search engines.",
  },
 
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const generateMetadata = ({ params }) => ({
    title: 'KushelDigi Solutions- Top shopify development company',
    description:"Kushel Digi Solutions experience, you can unlock Shopify's full potential Put your trust in the Shopify development services to build your online success."
  });
  
  
  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription ? metaDescription.content = description : 
      document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
  }, []);
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
