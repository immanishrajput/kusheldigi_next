import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Can I hire developers of my choice?',
    answer: 'Yes, hiring the right developers for your project is a key advantage.',
  },
  {
    question: 'Why is React Native the best?',
    answer: 'React Native offers cross-platform development, efficiency, and a native-like experience.',
  },
  {
    question: "Do you have experience in integrating native features into React Native apps?",
    answer: 'Yes, our agency has expertise in seamlessly integrating native device features.',
  },
  {
    question: 'Why hire dedicated React Native developers?',
    answer: "Dedicated developers ensure focused attention on your project.",
  },
  {
    question: 'What is the process for hiring a React Native developer?',
    answer: "Contact us, and we'll guide you through the hiring process.",
  },
 
  
];

function ReactnativeHireFAQ() {
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

export default ReactnativeHireFAQ;
