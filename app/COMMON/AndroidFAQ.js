import React, { useState } from 'react';
// import './askques.css';

const data = [
  {
    question: 'What are the Services provided by your Android app development agency?',
    answer: 'Our agency offers comprehensive Android app development services.',
  },
  {
    question: 'Do you develop apps for smartphones and tablets?',
    answer: 'Yes, we develop apps for both smartphones and tablets.',
  },
  {
    question: 'What is the timeline for Android app development?',
    answer: 'Development time varies based on project complexity.',
  },
  {
    question: 'What sets your agency apart?',
    answer: "Expertise, innovation, and post-launch support distinguish our agency.",
  },
  {
    question: 'Do you provide Testing and integration services?',
    answer: "Yes, we ensure app quality through testing and can integrate third-party APIs.",
  },
 
  
];

function AndroidFAQ() {
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

export default AndroidFAQ;
