import React, { useState } from 'react';


const data = [
  {
    question: 'Why choose Kushel Digi Solution for mobile app development?',
    answer: 'We bring expertise and affordability, crafting exceptional experiences to enhance your digital presence.',
  },
  {
    question: 'How does Kushel Digi Solution ensure affordable app development?',
    answer: 'We optimise processes, leverage cost-effective tech, and offer tailored solutions for top-notch yet budget-friendly apps.',
  },
  {
    question: 'Whats Kushel Digi Solution s focus on enhancing app user experiences?',
    answer: "We prioritise user-centric design, ensuring seamless and engaging experiences for iOS and Android apps.",
  },
  {
    question: 'Key considerations for successful mobile app development?',
    answer: "Understand your audience, and ensure robust functionality, intuitive design, and regular updates to meet evolving expectations.",
  },
  {
    question: 'Can you assist with ongoing support and maintenance?',
    answer: "Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to operate smoothly and evolve with your business needs.",
  },
  {
    question: 'Why is cross-platform development like React Native important?',
    answer: "It's crucial for efficiency, allowing apps compatible with iOS and Android using a single codebase, and saving time and resources.",
  },
  
];

function MobileFAQ() {
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

export default MobileFAQ;
