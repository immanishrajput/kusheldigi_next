"use client"
import React, { useState } from 'react';

import Head from 'next/head';


const data = [
  {
    question: 'What is the timeline for a BigCommerce development project?',
    answer: 'The timeline varies based on the complexity of the project, but a standard BigCommerce store can take anywhere from 4 to 8 weeks from discovery to deployment.',
  },
  {
    question: 'How do you ensure the design matches my brand’s identity?',
    answer: "We start with an in depth understanding of your brand's vision and values and then create designs that reflect your unique identity. We also take your feedback at each stage to ensure alignment.",
  },
  {
    question: 'Can you integrate third-party apps and tools into my BigCommerce store?',
    answer: "Yes, we can integrate various third-party apps and tools that includes payment gateways, CRM systems, and marketing automation tools, to enhance your store’s functionality.",
  },
  {
    question: "How do you ensure my BigCommerce store is secure?",
    answer: "We implement industry best practices for security, including SSL certificates, secure payment gateways, and regular security updates, to protect your store and customer data.",
  },
  {
    question: 'Will my BigCommerce store be mobile-friendly?',
    answer: "Absolutely! All of our BigCommerce designs are fully responsive which ensure a seamless shopping experience on all devices, including smartphones and tablets.",
  },
  {
    question: 'What kind of support do you offer after the store is launched?',
    answer: "We offer ongoing support and maintenance services, including troubleshooting, updates, and optimizations, to ensure your store continues to perform at its best.",
  },
  {
    question: 'Can you help with SEO and digital marketing for my BigCommerce store?',
    answer: "Yes, we can optimize your BigCommerce store for search engines and provide digital marketing services to increase visibility and drive traffic to your site.",
  },
];

function BigAskQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='home2asqueswrap'>

<Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>
      
      <div className='h2asqucont'>
        
        <h3>Frequently Asked Questions</h3>

        <div className='questionss'>
          {data.map((d, i) => (
            <div key={i} className='singlquestion'>
              {/* Top question */}
              <div className='quetiobtn' onClick={() => toggleAnswer(i)}>
                <p>{d.question}</p>
                <img className='cursor-pointer ' src={openIndex === i ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481940/-_j8sfvf.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481904/zt00wkerhyfn1qbvqc5j.png'} alt='Toggle' />
              </div>

              {/* Bottom answer */}
              <p className={`answer  ${openIndex === i ? 'visible' : ''}`}>{d.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default BigAskQuestion;
