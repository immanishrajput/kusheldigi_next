import React, { useState } from 'react';


const data = [
  {
    question: 'Why is Magento a popular choice for e-commerce development?',
    answer: 'Magento is chosen for flexibility, scalability, and extensive customization options.',
  },
  {
    question: 'Give some examples of Magento e-commerce websites developed?',
    answer: 'Certainly! Our portfolio includes successful Magento e-commerce websites.',
  },
  {
    question: 'Do you provide both Magento 1 and Magento 2 development services?',
    answer: 'Yes, our agency offers development services for both Magento 1 and Magento 2, including migration.',
  },
  {
    question: 'What are the advantages of using Magento for e-commerce development?',
    answer: "Magento offers a wide range of features, extensions, themes, multi-store capability, mobile responsiveness, and robust SEO.",
  },
  {
    question: 'Do you provide integration of third-party extensions and APIs into Magento stores?',
    answer: "Yes, our developers have experience integrating various third-party extensions and APIs for enhanced functionality.",
  },
  {
    question: 'Do you provide Post-launch support and upgrades for Magento websites?',
    answer: "Yes, we provide ongoing support and maintenance to keep your Magento website secure and up-to-date.",
  },
  {
    question: 'Do you give assistance with data migration to Magento?',
    answer: "Yes, we can help seamlessly migrate data from your existing e-commerce platform to Magento.",
  },
  {
    question: 'How is the security of Magento websites ensured?',
    answer: "We prioritise security through SSL certificates, secure payment gateways, and regular security audits.",
  },
  {
    question: 'What is the cost structure for Magento development projects?',
    answer: "Costs vary based on project specifics; we provide a transparent cost estimate during the initial consultation.",
  },
  {
    question: 'How to get started with hiring your Magento development agency?',
    answer: "Simply reach out to us through our contact form, email, or phone, and our team will guide you through the process.",
  },
  
];

function MagentoFAQ() {
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

export default MagentoFAQ;
