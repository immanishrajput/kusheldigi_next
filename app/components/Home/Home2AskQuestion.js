import React, { useState } from 'react';
import './askques.css';
import plus from '../../../public/assets/+.png';
import minus from "../../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'What services does Kushel Digi Solutions offer?',
    answer: 'We provide a range of services including eCommerce development, UI/UX design, mobile app development, website design and development, and digital marketing.',
  },
  {
    question: 'How can Kushel Digi Solutions help my business grow?',
    answer: 'Our excellent digital solutions are designed to enhance your online presence, drive sales, and improve user engagement, helping your business achieve its growth objectives.',
  },
  {
    question: 'How do I get started with your services?',
    answer: "Simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your needs and provide a customized plan.",
  },
  {
    question: 'How long does it take to complete a project?',
    answer: "Project timelines vary based on the scope and complexity of the work. We'll provide a detailed timeline and keep you informed throughout the development process.",
  },
  {
    question: 'Can you assist with ongoing support and maintenance?',
    answer: "Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to operate smoothly and evolve with your business needs.",
  },
  {
    question: 'Do you offer custom solutions?',
    answer: "Absolutely. We specialize in creating bespoke solutions tailored to your specific business requirements and goals.",
  },
  {
    question: 'How do you ensure the quality of your work?',
    answer: "Our team follows rigorous quality assurance processes, including comprehensive testing and user feedback, to ensure that our solutions meet the highest standards of performance and reliability.",
  },
];

function Home2AskQuestion() {
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

export default Home2AskQuestion;
