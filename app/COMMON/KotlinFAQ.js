import React, { useState } from 'react';


const data = [
  {
    question: 'What are the services provided by your Kotlin development agency?',
    answer: 'Our agency offers Android app development, web development with Spring Boot, backend development, Kotlin native app development, and Kotlin migration services.',
  },
  {
    question: 'Give some examples of Kotlin projects developed by you.',
    answer: 'Yes, we’re proud to showcase our diverse portfolio of past Kotlin projects.',
  },
  {
    question: 'What are the advantages of using Kotlin for Android app development?',
    answer: 'Kotlin offers concise syntax, null safety, seamless Java integration, improved readability, and reduced boilerplate code.',
  },
  {
    question: 'Do you have experience in Kotlin multi-platform development?',
    answer: "Yes, our agency has expertise in Kotlin multi-platform development, sharing code between Android, iOS, and web platforms.",
  },
  {
    question: 'Do you give assistance with migrating Java code to Kotlin?',
    answer: "Absolutely! Our developers can seamlessly migrate existing Java code to Kotlin for enhanced productivity.",
  },
 
  
];

function KotlinFAQ() {
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

export default KotlinFAQ;
