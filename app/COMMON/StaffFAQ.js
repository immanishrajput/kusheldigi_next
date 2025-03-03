import React, { useState } from 'react';


const data = [
  {
    question: 'Why choose Kushel Digi for staff augmentation?',
    answer: 'Kushel Digi excels, offering a vast talent pool, flexible hiring, and a client-focused approach.',
  },
  {
    question: 'How does Kushel Digi ensure staff quality in augmentations?',
    answer: 'Kushel Digi maintains a rigorous selection process, ensuring high-quality, competent professionals for clients.',
  },
  {
    question: 'Benefits of Kushel Digi in staff augmentation, setting it apart?',
    answer: 'Kushel Digi provides on-demand access to skilled workforce, scalability, and cost-effectiveness for quick project adaptation.',
  },
  {
    question: 'Key considerations for selecting a staff augmentation provider?',
    answer: "Consider talent pool, hiring flexibility, and a client-centric approach when choosing a provider.",
  },
  {
    question: 'General best practices in staff augmentation, irrespective of companies?',
    answer: "Best practices include thorough candidate assessments, clear communication, defined project goals, and continuous evaluation for successful staff augmentation initiatives.",
  },
 
  
];

function StaffFAQ() {
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

export default StaffFAQ;
