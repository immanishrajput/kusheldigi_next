import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Why hire from an agency, not freelancers?',
    answer: 'Agencies offer a dedicated team, ensuring consistent quality and expertise.',
  },
  {
    question: 'What applications can be created with PHP?',
    answer: 'PHP is versatile, supporting various software applications.',
  },
  {
    question: "What's the future of PHP?",
    answer: 'PHP continues to be relevant and evolves with updates and enhancements.',
  },
  {
    question: 'How secure is PHP?',
    answer: "PHP is secure if best practices are followed in development.",
  },
  {
    question: 'From a Security Perspective, How Good is PHP?',
    answer: "Newer versions, especially, have improved security for PHP. However, as with any programming language, the security of PHP applications depends largely on the skill and diligence of the developer. Regular updates, secure coding techniques, and the use of security tools can minimise risks.",
  },
  {
    question: 'On what basis can I hire PHP programmers?',
    answer: "Consider skills, experience, and portfolio when hiring PHP programmers.",
  },
  
];

function HirePhpFAQ() {
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

export default HirePhpFAQ;
