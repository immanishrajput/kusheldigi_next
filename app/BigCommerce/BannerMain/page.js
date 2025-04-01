'use client';

import React, { useState } from 'react';
import './BannerMain.css';

const CaseStudy = () => {
    const caseStudies = [
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502615/case1_qp4ffm.webp', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502616/case3small_gv5kpn.webp',
            imgEx:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
            imgEx2:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
            imgEx3:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
         },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502616/case3_aayr22.webp', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502616/case4small_ovj2wx.webp',
            imgEx:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
            imgEx2:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
            imgEx3:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
         },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502615/case1_qp4ffm.webp', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502615/case1small_vmmuly.webp',
            imgEx:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
            imgEx2:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
            imgEx3:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
         },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502615/case1_qp4ffm.webp', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502616/case4small_ovj2wx.webp' ,
            imgEx:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
            imgEx2:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
            imgEx3:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
        },
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502615/case1_qp4ffm.webp', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502616/case4small_ovj2wx.webp' ,
            imgEx:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
            imgEx2:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
            imgEx3:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='case-study-container'>
            <div className='case-wrapper'>
                <div className='case-card'>
                    <img className='case-img' src={caseStudies[currentIndex].img} alt='case' />
                   
                </div>
                <div className='caseImgStDiv'>
                 <span className='caseImgSt'>
                 <img src={caseStudies[currentIndex].imgEx}/>
                 </span>
                 <span className='caseImgSt2'>
                 <img src={caseStudies[currentIndex].imgEx2}/>
                 </span>
                 <span className='caseImgSt3'>
                 <img src={caseStudies[currentIndex].imgEx3}/>
                 </span>

                </div>
                <div className='small-icons-div'>
                    {caseStudies.map((item, index) => (
                        <div className='small-icons' key={index} >
                            {index === currentIndex && (
                                <span className='case-btnText'>{item.smallBtnText}</span>
                            )}
                            <img
                                className={`small-icon ${index === currentIndex ? 'active' : ''}`}
                                src={item.smallImg}
                                alt='small case'
                                onClick={() => setCurrentIndex(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
