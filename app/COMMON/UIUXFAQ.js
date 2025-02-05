import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Why choose Kushel Digi Solutions for UI/UX design?',
    answer: 'Kushel Digi Solutions excels in UI/UX design, offering a perfect blend of creativity, user-centricity, and a skilled team for crafting engaging and intuitive user experiences.',
  },
  {
    question: 'How does Kushel Digi Solutions approach UI/UX to enhance digital products?',
    answer: 'Kushel Digi prioritises a user-centric approach, combining research, creativity, and a deep understanding of user behaviours to design interfaces that captivate and delight users.',
  },
  {
    question: 'What sets Kushel Digi apart in UI/UX design, and how does it benefit clients?',
    answer: "Kushel Digi distinguishes itself through a commitment to innovative design thinking, client-centric practices, and a proficient team dedicated to delivering aesthetically pleasing and functional user experiences.",
  },
  {
    question: 'Key considerations when selecting a UI/UX design service provider?',
    answer: "When choosing a UI/UX design provider, consider factors such as creativity, user research capabilities, and alignment with your brand values for a successful collaboration.",
  },
  {
    question: 'Insights into the latest UI/UX trends and practices?',
    answer: "Stay updated on UI/UX trends by exploring industry insights, and best practices, and engaging with online communities for valuable design perspectives.",
  },
  
  
];

function UIUXFAQ() {
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

export default UIUXFAQ;
