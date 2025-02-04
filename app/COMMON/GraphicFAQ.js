import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Why choose Kushel Digi for an ambitious brand graphic design?',
    answer: 'Being one of the top providers of graphic design services in Pune, we are experts in combining creativity and technology to provide our clients with unmatched value. We have a lot of expertise offering industry-specific graphic design services in the USA that help brands reach new heights, and we have a particular focus on small enterprises. Everything that our design team does is entirely new, guaranteeing that every project is unique, genuine, and specifically tailored to your business and corporate objectives. We collaborate with you to create graphic designs that captivate, excite, educate, and involve your intended audience. You can count on a team of highly competent marketers and designers from all around the world to complete your project quickly.',
  },
  {
    question: 'How can I ensure budget-friendly graphic design services?',
    answer: 'From the conceptual phase to the curation of your design, we guarantee that every project is completed with style and enthusiasm. We examine your target market and your company objectives to make sure that every piece of work we produce advances your objectives. We can provide you with low-cost, effective graphic design services that will help you differentiate your company from the competitors.',
  },
  {
    question: "What role does creativity play in Kushel Digi's graphic design approach?",
    answer: 'We prioritise creative and innovative design strategies to make your brand stand out.',
  },
  {
    question: 'What key elements make a graphic design successful for ambitious brands?',
    answer: "The beauty of things draws people in. Amazing hues and imaginative visuals help to boost happiness and motivate consumers to take action. The user's experience is also improved by captivating graphic designs. While websites with captivating images and multiple methods to get information tend to make a stronger and more favorable initial impression, word-only pages can easily become dull.",
  },
  {
    question: 'Why is professional graphic design crucial for ambitious brands?',
    answer: "Professional design enhances brand identity, and credibility, and leaves a lasting impact on your audience.",
  },
 
  
];

function GraphicFAQ() {
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

export default GraphicFAQ;
