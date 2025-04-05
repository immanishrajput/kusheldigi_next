'use client';

import React, { useState } from 'react';
import './BannerMain.css';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const CaseStudy = () => {

    const caseStudies = [
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829270/loveky-2_cfdys3.jpg', smHeading: 'Certified Bigcommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829269/lovely-2-5_iqgxfy.jpg', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dgif730br/image/upload/v1743429262/bigcommerce-8_1_tyghz8.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ] },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829271/lovely-1_hhxfih.jpg', smHeading: 'Certified Bigcommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829269/lovely-1-2_by2dtq.jpg', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dgif730br/image/upload/v1743429262/bigcommerce-8_1_tyghz8.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ]  },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829270/lovely-3_fanqxf.jpg', smHeading: 'Certified Bigcommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829268/lovely-3-4_mi9o33.jpg', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dgif730br/image/upload/v1743429262/bigcommerce-8_1_tyghz8.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ]  },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829269/lovely-4_sgdj3e.jpg', smHeading: 'Certified Bigcommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829268/lovely-4-2_ffzapa.jpg', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dgif730br/image/upload/v1743429262/bigcommerce-8_1_tyghz8.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ]  },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829269/lovely-5_akjurr.jpg', smHeading: 'Certified Bigcommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829268/lovely-5-3_tykoz4.jpg', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dgif730br/image/upload/v1743429262/bigcommerce-8_1_tyghz8.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ]  },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useRouter();

    const router = useRouter();

  const handleClick = () => {
    router.push('/contact-us');
  };

    return (
        <div className='case-study-container'>
            <div className='case-wrapper'>
                <h2 className='big-card-heading'>{caseStudies[currentIndex].heading}</h2>
                <div className='case-card'>
                    <img className='case-img' src={caseStudies[currentIndex].img} alt='case' />
                    <div className="card-info">
                        <p>{caseStudies[currentIndex].smHeading}</p>
                        <h2>{caseStudies[currentIndex].heading}</h2>
                        {
                            caseStudies[currentIndex].bigCommerce.map((item,index)=>(
                               <div key={index} className="bigcommerceImg-card">
                                <img src={item.bigImg1} alt="bigImg1"/>
                                {/* <img src={item.bigImg2} alt="bigImg2"/> */}
                                <img src={item.bigImg3} alt="bigImg3"/>
                               </div>
                            ))
                        }
                        <div className='flex-bigcommerce-banner-btns'>
                        <a href='#form-section' className='bigcommerce-banner-btn' >Talk to a Consultant</a>
                        <Link href="/contact-us"> <button className='bigcommerce-banner-btn big-transparent-btn' >  Book a Call  <FaArrowRightLong /></button></Link>
                    </div>
                    </div>
                    <div className='small-icons-div'>
                        {caseStudies.map((item, index) => (
                            <div onClick={() => setCurrentIndex(index)} className='small-icons' key={index} >
                                {index === currentIndex && (
                                    <span className='case-btnText'>{item.smallBtnText}</span>
                                )}
                                <img
                                    className={`bigcommercesmall-icon ${index === currentIndex ? 'active' : ''}`}
                                    src={item.smallImg}
                                    alt='small case'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {
                            caseStudies[currentIndex].bigCommerce.map((item,index)=>(
                               <div key={index} className="bigcommerceImg-card bigcommerce-down-images">
                                <img src={item.bigImg1} alt="bigImg1"/>
                                {/* <img src={item.bigImg2} alt="bigImg2"/> */}
                                <img src={item.bigImg3} alt="bigImg3"/>
                               </div>
                            ))
                        }
            </div>
        </div>
    );
};

export default CaseStudy;
