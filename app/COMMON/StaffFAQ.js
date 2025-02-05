import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Why choose Kushel Digi for staff augmentation?',
    answer: 'Kushel Digi excels, offering a vast talent pool, flexible hiring, and a client-focused approach.',
  },
  {
    question: 'How does Kushel Digi ensure staff quality in augmentations?',
    answer: 'Kushel Digi maintains a rigorous selection process, ensuring high-quality, competent professionals for clients.',
  },
  {
    question: 'Benefits of Kushel Digi in staff augmentation, setting it apart?',
    answer: 'Kushel Digi provides on-demand access to skilled workforce, scalability, and cost-effectiveness for quick project adaptation.',
  },
  {
    question: 'Key considerations for selecting a staff augmentation provider?',
    answer: "Consider talent pool, hiring flexibility, and a client-centric approach when choosing a provider.",
  },
  {
    question: 'General best practices in staff augmentation, irrespective of companies?',
    answer: "Best practices include thorough candidate assessments, clear communication, defined project goals, and continuous evaluation for successful staff augmentation initiatives.",
  },
 
  
];

function StaffFAQ() {
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

export default StaffFAQ;
