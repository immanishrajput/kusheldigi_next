"use client"
import React, { useEffect, useState } from "react";
import '../../COMMON/FAQ.css'
const FaqData = [
  {
    question: 'Why should I choose Shopify for my eCommerce business?',
    answer: ' Shopify is definitely very easy to use, quick and even includes all you need to start selling online, including hosting, payment processing, and marketing features.',
  },
  {
    question: 'Can I sell on social media sites by using Shopify?',
    answer: " Yes. Shopify integrates with Facebook, Instagram, TikTok, and more to help you sell across multiple channels.",
  },
  {
    question: 'Does Shopify support dropshipping?',
    answer: " Absolutely. You can easily Shopify automate drop shipping using apps like Oberlo or Spocket. ",
  },
  {
    question: "How customizable is a Shopify theme?",
    answer: "Shopify offers many free and paid themes, which can be customized using the drag-and-drop editor or Liquid (its template language).",
  },
  {
    question: 'What type of support does Shopify provide?',
    answer: " Shopify provides your business 24/7 customer support through live chat, phone, and email as well as a massive community.",
  },
  {
    question: 'Can I migrate my store to Shopify from another platform?',
    answer: " Yes, Shopify provides various tools to migrate and third-party services to assist you in transferring products, content, and customer data seamlessly.",
  },
  {
    question: 'How secure is a Shopify store?',
    answer: " Shopify is Level 1 PCI compliant, uses SSL encryption, and has automatic updates to keep your store secure.",
  },
  {
    question: 'Is Shopify good for international selling?',
    answer: "  Yes, Shopify supports multiple currencies, languages, and international shipping features for global reach.",
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
