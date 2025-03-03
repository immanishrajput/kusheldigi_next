import React, { useState } from 'react';


const data = [
  {
    question: 'Why choose Kushel Digi for PHP development?',
    answer: "Kushel Digi Solutions excels in PHP web development, offering a blend of innovation, client-centric focus, and a highly skilled team to deliver tailored solutions aligning with your business goals.",
  },
  {
    question: 'How does Kushel Digi use React in PHP projects?',
    answer: 'In PHP web development, Kushel Digi harnesses React to enhance user interfaces, ensuring high performance and seamless user experiences across diverse platforms.',
  },
  {
    question: 'Advantages of Native PHP and how does Kushel Digi use it?',
    answer: 'Native PHP development provides optimal performance and seamless integration. Kushel Digi leverages this to create robust, scalable, and efficient web solutions tailored to client needs.',
  },
  {
    question: 'Key factors in choosing a PHP service provider?',
    answer: "When choosing a PHP web development provider, consider factors such as expertise, proven track record, and alignment with your business objectives for a successful partnership.",
  },
  {
    question: "Insights into PHP's compatibility with web technologies?",
    answer: "PHP is compatible with diverse web technologies, ensuring flexibility and seamless integration.",
  },
 
  
];

function PhpFAQ() {
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

export default PhpFAQ;
