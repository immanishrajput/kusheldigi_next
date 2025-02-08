import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'What are the Services offered for flutter app development?',
    answer: 'Comprehensive services including design, development, testing, deployment, and support.',
  },
  {
    question: 'Give some Examples of flutter apps developed by you.',
    answer: 'Yes, we can showcase our portfolio of past flutter projects.',
  },
  {
    question: 'What are the Benefits of using flutter?',
    answer: 'Code reusability, single codebase for Android and iOS, customizable widgets, hot reload, and high performance.',
  },
  {
    question: 'Do you provide Experience with native device features in flutter?',
    answer: "Yes, our developers integrate native features seamlessly.",
  },
  {
    question: 'Do you provide Post-launch support for flutter apps?',
    answer: "Yes, we provide ongoing support to ensure app functionality and security.",
  },
 
  
];

function FlutterFAQ() {
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

export default FlutterFAQ;
