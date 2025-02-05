import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'What potential benefits does outsourcing flutter app development offer?',
    answer: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
  },
  {
    question: 'How much does hiring a flutter app developer cost?',
    answer: 'In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.',
  },
  {
    question: 'Can we use flutter for Web development?',
    answer: 'In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.',
  },
  {
    question: 'How much does it cost to build a flutter application?',
    answer: "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
  },
  
  
];

function FlutterHireFAQ() {
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

export default FlutterHireFAQ;
