// "use client"
// import React from 'react'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './londoncase.css';

// const caseStudies = [
//   {
//     title: 'Top Brass Tactical',
//     tags: ['B2B', 'Military & tactical industry'],
//     description: 'Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.',
//     results: [
//       { label: 'INCREASED CONVERSIONS', value: '+85%' },
//       { label: 'INCREASED REVENUE', value: '+58%' },
//       { label: 'INCREASED AOV', value: '+6%' },
//     ],
//     image: '/top-brass.png',
//   },
//   {
//     title: 'Black Rhino Concealment',
//     tags: ['B2B'],
//     description: 'BigCommerce Migration, ERP Integration, SEO, Theme Customization, and Performance Tuning.',
//     results: [
//       { label: 'INCREASED CONVERSIONS', value: '+70%' },
//       { label: 'RETURN CUSTOMERS', value: '+45%' },
//       { label: 'INCREASED ROI', value: '+30%' },
//     ],
//     image: '/black-rhino.png',
//   },
// ];

// function LondonCaseStudy() {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ]
//   };

//   return (
//     <section className="case-study1-section">
//       <div className="case-study1-container">
//         <h2 className="case-study1-heading">Case studies</h2>
//         <p className="case-study1-subtext">Our Works Speaks for itself</p>

//         <Slider {...settings} className="case-study1-slider">
//           {caseStudies.map((study, idx) => (
//             <div key={idx} className="case-study1-card">
//               <div className="case-study1-left">
//                 <img src={study.image} alt={study.title} className="case-study1-image" />
//                 <button className="case-study1-view-btn">View</button>
//               </div>
//               <div className="case-study1-right">
//                 <h3>{study.title}</h3>
//                 <div className="case-study1-tags">
//                   {study.tags.map((tag, i) => (
//                     <span key={i} className="case-study1-tag">{tag}</span>
//                   ))}
//                 </div>
//                 <p><strong>What We Did:</strong> {study.description}</p>
//                 <ul className="case-study1-results">
//                   {study.results.map((r, i) => (
//                     <li key={i}><strong>{r.label}</strong> {r.value}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         <div className="case-study1-footer">
//           <button className="case-study1-main-btn">View All Case Studies</button>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default LondonCaseStudy()