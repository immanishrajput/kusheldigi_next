import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Why choose Kushel Digi for Woocommerce development in India?',
    answer: 'Our expertise ensures top-notch solutions tailored to your Woocommerce needs.',
  },
  {
    question: 'How to get budget-friendly Woocommerce services in India?',
    answer: 'Explore cost-effective solutions achieved through optimised processes and technologies.',
  },
  {
    question: 'What advantages does React Native bring to Woocommerce mobile app development?',
    answer: 'React Native ensures cross-platform compatibility, delivering efficient and cost-effective mobile shopping experiences.',
  },
  {
    question: 'What key features contribute to a successful Woocommerce website?',
    answer: "A user-friendly interface, secure payments, responsive design, robust inventory, and seamless navigation are essential.",
  },
  {
    question: 'Why is mobile responsiveness crucial for a successful Woocommerce site?',
    answer: "Critical for enhancing user satisfaction and boosting conversion rates in the mobile shopping experience.",
  },
 
  
];

function WooCommereceFAQ() {
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

export default WooCommereceFAQ;
