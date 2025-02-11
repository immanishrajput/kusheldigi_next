import React, { useState } from 'react';
// import './askques.css';
import plus from '../../public/assets/+.png';
import minus from "../../public/assets/-.png";
import Image from 'next/image';

const data = [
  {
    question: 'WHY KUSHEL DIGI FOR WORDPRESS DEVELOPMENT?',
    answer: 'Kushel Digi excels in WordPress, offering innovation, client focus, and a skilled team for tailored solutions.',
  },
  {
    question: 'HOW LONG DOES IT TAKE TO BUILD A WORDPRESS WEBSITE?',
    answer: 'The time it takes to build a wordpress website depends on various factors such as the complexity of design,the number of features and functionality required ,and the availability of content.',
  },
  {
    question: 'DO I NEED TECHNICAL KNOWLEDGE TO USE WORDPRESS?',
    answer: 'No, you do not need advance technical Knowledge to use wordpress. Its user-friendly interface and intuitive tools Make it accessible to beginners and non-technical users. However, basic familiarity with web concepts such as domains, hosting and content management is helpful.',
  },
  {
    question: 'CAN I CUSTOMISE THE DESIGN OF MY WORDPRESS WEBSITE?',
    answer: "Yes,WordPress allows for extensive Customization of website design. Users can choose from thousands of free and Premium themes to give website a unique Look and feel. Additionally, themes can be customised using built-in customization options or by editing the underlying code.",
  },
  {
    question: 'WHAT ARE WORDPRESS PLUGINS?',
    answer: "WordPress plugins are software add-ons that extend the functionality of a WordPress website. There are thousands of plugins available for various purposes such as SEO optimization,contact forms,e-commerce Social media integration and more.",
  },
 
  
];

function WordpressFAQ() {
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

export default WordpressFAQ;
