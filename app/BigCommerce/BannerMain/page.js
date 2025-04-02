'use client';

import React, { useState } from 'react';
import './BannerMain.css';

const CaseStudy = () => {
    const caseStudies = [
        { img: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502615/case1_qp4ffm.webp', smallBtnText: "View Case Study", smallImg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743502616/case3small_gv5kpn.webp',
            imgEx:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
            imgEx2:'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446873/bigcommerce-3_xfn6e6.png',
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
                 {/* <img src={caseStudies[currentIndex].imgEx}/> */}
                 </span>
                 <span className='caseImgSt2'>
                 <img src={caseStudies[currentIndex].imgEx2}/>
                 </span>
                 <div className='talk-btn'>
                 <button className='consultant-btn'>TALK A CONSULTANT</button>
                 <button className='book-call-btn'>Book A Call <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg></button>
                 </div>
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
