import React, { useState } from 'react';


const data = [
  {
    question: 'Why Kushel Digi for Node.js development?',
    answer: 'Kushel Digi excels in Node.js, offering innovation, client focus, and a skilled team for tailored solutions.',
  },
  {
    question: 'How does Kushel Digi use Node.js for web projects?',
    answer: 'Node.js empowers Kushel Digi to build scalable, high-performance web applications through its non-blocking, event-driven architecture.',
  },
  {
    question: 'What sets Kushel Digi apart in Node.js development?',
    answer: "Kushel Digi's commitment to innovation, client-centric practices, and a skilled team ensures customised, high-quality Node.js solutions.",
  },
  {
    question: 'Key considerations for selecting a Node.js service provider?',
    answer: "Consider expertise, a proven track record, and alignment with business goals when choosing a Node.js service provider.",
  },
  {
    question: 'Insights into Node.js trends and best practices?',
    answer: "Stay informed about the dynamic Node.js landscape by exploring industry trends, adhering to best practices, and actively engaging with online communities.",
  },
 
  
];

function NodejsFAQ() {
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

export default NodejsFAQ;
