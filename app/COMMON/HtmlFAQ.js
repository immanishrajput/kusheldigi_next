import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Why choose Kushel Digi Solutions for HTML5 web development?',
    answer: 'Kushel Digi Solutions excels in HTML5 development, offering a unique blend of innovation, client-centricity, and a skilled team for tailored solutions aligned with your business objectives.',
  },
  {
    question: 'How does Kushel Digi Solutions harness HTML5 to elevate web development projects?',
    answer: 'HTML5 is utilised by Kushel Digi to create modern and interactive web experiences, ensuring compatibility, responsiveness, and engaging user interfaces.',
  },
  {
    question: 'What sets Kushel Digi apart in HTML5 development, and how does it benefit clients?',
    answer: 'Kushel Digi distinguishes itself through a commitment to innovation, client-centric practices, and a proficient team dedicated to delivering customised, high-quality HTML5 solutions.',
  },
  {
    question: 'Key considerations when selecting a service provider for HTML5 web development?',
    answer: "When choosing an HTML5 service provider, consider factors such as expertise, a proven track record, and alignment with your business goals for a successful partnership.",
  },
  {
    question: 'What are the latest trends and best practices in HTML5 development, irrespective of specific companies?',
    answer: "Stay informed about the dynamic landscape of HTML5 development by exploring industry trends, adhering to best practices, and actively engaging with online communities for valuable insights.",
  },
 
  
];

function HtmlFAQ() {
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

export default HtmlFAQ;
