import React, { useState } from 'react';
import '../components/Home/askques.css'; 


const data = [
  {
    question: 'Why choose Kushel Digi for e-commerce development?',
    answer: ' Kushel Digi Solution combines expertise in e-commerce development with a commitment to budget-friendly solutions, ensuring a seamless online shopping experience for your customers.',
  },
  {
    question: 'How to ensure the best budget e-commerce development?',
    answer: ' Our approach involves optimising development processes, utilising cost-effective technologies, and tailoring solutions to provide affordable e-commerce development without compromising quality.',
  },
  {
    question: 'Advantages of React Native in mobile shopping, and how utilised?',
    answer: "React Native ensures cross-platform compatibility, allowing the development of efficient and cost-effective e-commerce mobile apps for both iOS and Android platforms. Kushel Digi Solution harnesses this technology to enhance the mobile shopping experience.",
  },
  {
    question: 'Key features for an e-commerce site, regardless of provider?',
    answer: "Key features include a user-friendly interface, secure payment gateways, responsive design, robust inventory management, and seamless navigation to enhance the overall online shopping experience.",
  },
  {
    question: 'How important is mobile responsiveness in the success of an e-commerce website?',
    answer: " Mobile responsiveness is crucial, as a significant portion of online shopping occurs on mobile devices. Ensuring a seamless experience across various screen sizes enhances customer satisfaction and conversion rates.",
  },
 
];

function UsaAccorrodian() {
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
              {/* Top question */}
              <div className='quetiobtn' onClick={() => toggleAnswer(i)}>
                <p>{d.question}</p>
                <img className='cursor-pointer ' src={openIndex === i ? 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1738997122/-_x52juq.png' : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1738997032/bexi9p1tl5ahvuroe24b.png'} alt='Toggle' />
              </div>

              {/* Bottom answer */}
              <p className={`answer  ${openIndex === i ? 'visible' : ''}`}>{d.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default UsaAccorrodian;
