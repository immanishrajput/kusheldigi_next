import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'How do I hire ReactJS developers?',
    answer: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
  },
  {
    question: "Are ReactJS Developers in demand?",
    answer: 'In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.',
  },
  {
    question: 'What is the cost of hiring a ReactJS developer?',
    answer: 'In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.',
  },
  {
    question: 'Why should I hire a ReactJS developer from Kushel Digi?',
    answer: "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
  },
 
 
  
];

function LaravelHireFAQ() {
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

export default LaravelHireFAQ;
