import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Why choose Kushel Digi for digital marketing?',
    answer: 'One of the greatest digital marketing Agency in the USA, Kushel Digi Solutions, has been offering its clients the best services for website design, custom web development, mobile app development, SEO, SMO, PPC, SEM, and ORM.',
  },
  {
    question: 'How does Kushel Digi customise digital marketing strategies?',
    answer: 'Kushel Digi tailors strategies by analysing data, identifying target audiences, and implementing campaigns for maximum ROI and brand visibility.',
  },
  {
    question: 'What sets Kushel Digi apart in digital marketing?',
    answer: "Kushel Digi's commitment to innovation, client-centric practices, and a proficient team ensures effective and measurable digital marketing solutions.",
  },
  {
    question: 'What sets your agency apart?',
    answer: "Expertise, innovation, and post-launch support distinguish our agency.",
  },
  {
    question: 'Key considerations for choosing a digital marketing provider?',
    answer: "Consider expertise, proven results, and alignment with business objectives when selecting a digital marketing provider..",
  },
  {
    question: 'Insights into the latest digital marketing trends and practices?',
    answer: "Stay informed about digital marketing trends by exploring industry insights, embracing best practices, and engaging with online communities for valuable perspectives.",
  },
  
];

function DigitalFAQ() {
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

export default DigitalFAQ;
