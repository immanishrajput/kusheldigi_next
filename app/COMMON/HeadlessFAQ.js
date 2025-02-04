import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'What is headless commerce?',
    answer: 'Headless E-commerce is an E-commerce architecture where the front-end is decoupled from the back-end.',
  },
  {
    question: 'What are the benefits of using a headless commerce solution?',
    answer: 'Benefits of using headless commerce are greater flexibility in design and user experience, improved performance, easier integration with other systems.',
  },
  {
    question: 'How does headless commerce differ from traditional E-commerce platforms?',
    answer: 'Traditional E-commerce platforms are monolithic, with the front-end and back-end tightly coupled whereas headless commerce separates these layers.',
  },
  {
    question: 'Can headless commerce solutions integrate with existing systems and services?',
    answer: "Yes, headless commerce solutions are designed to integrate easily with various third-party systems and services such as payment gateways, shipping providers and other existing systems.",
  },
  {
    question: 'What kind of businesses can benefit from headless commerce?',
    answer: "Headless commerce may be advantageous for businesses of all sizes, especially those seeking more performance and customisation.",
  },
 
  
];

function HeadlessFAQ() {
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
                <Image className='cursor-pointer ' src={openIndex === i ? minus : plus} alt='Toggle' />
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

export default HeadlessFAQ;
