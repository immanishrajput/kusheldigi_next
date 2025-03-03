import React, { useState } from 'react';


const data = [
  {
    question: 'Why should I hire an iOS app development agency for my project?',
    answer: 'Hiring an iOS app development agency ensures increased project reliability through structured methodology and quality assurance, leveraging specialised teams with expertise in iOS standards.',
  },
  {
    question: 'What kinds of iOS applications can an agency develop?',
    answer: 'iOS app development agencies can create various applications, including consumer, business, gaming, e-commerce, healthcare, education, and more.',
  },
  {
    question: 'How do I know iOS is right for my app?',
    answer: 'If your target audience comprises Apple device users, especially a high-paying segment, and if you plan to sell your app on the App Store, then iOS is the best strategy for you.',
  },
  {
    question: 'Do iOS app development agencies develop apps for both iPhones and iPads?',
    answer: "Yes, most agencies design apps that seamlessly work on both iPhones and iPads, accommodating different screen sizes and functionalities.",
  },
  {
    question: 'How can an iOS app development agency help with updating and maintaining the program?',
    answer: "Agencies assist with regular updates, bug fixes, feature additions, and maintaining compatibility with the latest iOS versions, ensuring sustained functionality and security.",
  },
 
  
];

function IosHireFAQ() {
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

export default IosHireFAQ;
