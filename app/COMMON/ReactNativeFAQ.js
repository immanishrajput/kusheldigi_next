import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'Why choose Kushel Digi Solutions for React Native app development?',
    answer: 'Kushel Digi Solutions combines expertise and innovation to deliver high-quality React Native apps, ensuring a seamless and efficient development process.',
  },
  {
    question: 'How does Kushel Digi Solutions ensure cross-platform compatibility in React Native app development?',
    answer: 'Our developers leverage the power of React Native to create apps that function seamlessly across both iOS and Android platforms, saving time and resources.',
  },
  {
    question: 'What advantages does React Native offer for mobile app development?',
    answer: 'React Native provides a cost-effective and time-efficient solution, allowing the development of cross-platform apps with a single codebase, ensuring consistency and faster time-to-market.',
  },
  {
    question: 'Are there specific industries that benefit most from React Native app development?',
    answer: "React Native is versatile and caters to various industries, including e-commerce, healthcare, and finance, offering a scalable solution for businesses seeking cross-platform mobile applications.",
  },
  {
    question: 'How can I ensure optimal performance for my React Native app?',
    answer: "Optimal performance in React Native apps is achieved through efficient coding practices, regular updates, and compatibility checks with the latest React Native versions",
  },
 
  
];

function ReactNativeFAQ() {
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

export default ReactNativeFAQ;
