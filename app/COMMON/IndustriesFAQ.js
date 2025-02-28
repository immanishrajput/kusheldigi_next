import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Ethical industrial website would have required what?',
    answer: 'Whether they are industry experts or new customers who are knowledgeable with the field, every visitor should find it easy to get around the website thanks to its clear, simple form.',
  },
  {
    question: 'How can the effectiveness of an industrial website be increased with thorough product information?',
    answer: 'Accurate product details minimizes the demand for extra service to customers, develops user confidence in the business, and helps users to make well-informed decisions. Technical data, details, videos, and printable materials like instructions and papers should all be available',
  },
  {
    question: "Why is an industrialized website's flexible layout relevant?",
    answer: 'The website will work properly on every device, both PCs and mobile phones, thanks to its responsive layout. Increased participation and rate of conversion result from this improved experience for users, improved accessibility, and ensuring potential consumers may access data at any time, anywhere.',
  },
  {
    question: 'What are the benefits of SEO optimization for an industrial website?',
    answer: "SEO optimization increases the website's exposure on search engine results pages, resulting in natural traffic. In order to get better search engine results, this involves using appropriate keywords, optimizing meta tags, making sure the site has a solid foundation, and producing high-quality content that speaks to the target audience.",
  },
  {
    question: 'Can you help with search engine optimization (SEO)?',
    answer: "Yes we offer SEO services during the development of website which includes keyword research, on-page optimization, content strategy, and link building to improve search engine rankings and drive organic traffic.",
  },
  {
    question: 'What purpose do comments and case studies play on an industrial website?',
    answer: "Testimonials and case studies show the company's success and expertise in project management and offer social proof. By showing real applications for the company's products and services as well as positive feedback from pleased buyers, they assist in creating trust and credibility with new customers.",
  },
  
];

function IndustriesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='home2asqueswrap'>
      <div className='h2asqucont'>
        
        <h3>Frequently Asked Questions</h3>

        <div className='questionss'>
          {data.map((d, i) => (
            <div key={i} className='singlquestion'>
              <div className='quetiobtn' onClick={() => toggleAnswer(i)}>
                <p>{d.question}</p>
                <img className='cursor-pointer ' src={openIndex === i ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1738997122/-_x52juq.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1738997032/bexi9p1tl5ahvuroe24b.png'} alt='Toggle' />
              </div>

              {/* Bottom answer */}
              <p className={`answer ${openIndex === i ? 'visible' : ''}`}>{d.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default IndustriesFAQ;
