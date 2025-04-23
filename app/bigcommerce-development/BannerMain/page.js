'use client';

import React, { useState } from 'react';
import './BannerMain.css';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import TalkToConsult from '@/app/components/TalkToConsult';

const CaseStudy = () => {

    const caseStudies = [
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744175098/home-banner-3_1_i2ugio.jpg',className : 'bigBannerFirst', smHeading: 'Certified BigCommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744175094/circle_vvibyg.png', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/bigcommerce_iuneyd.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/certified-bifgcommerce_fmyqvz.png'
            }
        ] },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829271/lovely-1_hhxfih.jpg',className : 'bigBannerSecond', smHeading: 'Certified BigCommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829269/lovely-1-2_by2dtq.jpg', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/bigcommerce_iuneyd.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/certified-bifgcommerce_fmyqvz.png'
            }
        ]  },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829270/lovely-3_fanqxf.jpg',className : 'bigBannerThird', smHeading: 'Certified BigCommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829268/lovely-3-4_mi9o33.jpg', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/bigcommerce_iuneyd.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/certified-bifgcommerce_fmyqvz.png'
            }
        ]  },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744291962/four-oaks-farm_ku70ia.png',className : 'bigBannerFourth', smHeading: 'Certified BigCommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744291960/four-oaks-farm-circle_umugkf.png', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/bigcommerce_iuneyd.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/certified-bifgcommerce_fmyqvz.png'
            }
        ]  },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829269/lovely-5_akjurr.jpg',className : 'bigBannerFifth', smHeading: 'Certified BigCommerce Agency', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743829268/lovely-5-3_tykoz4.jpg', heading: "Expert BigCommerce Development Solutions for Scalable Growth",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/bigcommerce_iuneyd.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744104912/certified-bifgcommerce_fmyqvz.png'
            }
        ]  },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useRouter();

    const router = useRouter();

  const handleClick = () => {
    router.push('/contact-us');
  };

  
  const scrollToFormBig = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      const yOffset = -120; 
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

    return (
        <div className='case-study-container'>
            <div className='case-wrapper'>
                <h2 className='big-card-heading primary-heading'>{caseStudies[currentIndex].heading}</h2>
                <div className='case-card'>
                    <img className={`case-img ${caseStudies[currentIndex].className}`} src={caseStudies[currentIndex].img} alt='case' />
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
                            <TalkToConsult btn='bigcommerce-banner-btn'/>
                        {/* <button onClick={scrollToFormBig} className='bigcommerce-banner-btn' >Talk to a Consultant</button> */}
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
