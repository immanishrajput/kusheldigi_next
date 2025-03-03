import React, { useState } from 'react';



const data = [
  {
    question: 'What does your Android development agency have to offer?',
    answer: 'Comprehensive Solutions are the key. We are an Android development agency providing full service, from concept to conclusion. Your mobile applications will pass seamlessly through the thick and thin of a complex process, smoothly transformed at every level.',
  },
  {
    question: 'Have you ever developed applications for both smartphones and tablets?',
    answer: 'Yes, Versatility is our priority. As experts in creating applications for both smartphones and tablets, we offer a unified user experience on all Android-compatible devices.',
  },
  {
    question: 'From idea to launch, how long does it take for an app to start up?',
    answer: 'Timely Delivery is crucial. From idea conception to app launch, the period depends on complexity. Efficient development is our focus, working closely with clients to ensure the product is delivered on time without compromising quality.',
  },
  {
    question: 'What are the unique selling points or advantages of your Android app development agency?',
    answer: "Tailored Solutions! Our agency provides customer-oriented services, tailor-made to meet your exact requirements. We strive to be flexible in our techniques, prioritizing application development over industry processes.",
  },
  {
    question: 'Is post-launch support and maintenance offered for developed apps?',
    answer: "Yes, Continuous Assistance is provided. Post-release support and maintenance services ensure your app remains up-to-date, running optimally in the ever-changing Android ecosystem.",
  },
 
  
];

function AndroidHireFAQ() {
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

export default AndroidHireFAQ;
