"use client"
import React, { useRef, useEffect, useState } from 'react';
import "./process.css";


const Progress = () => {
  const [inView, setInView] = useState(false);
  const progressRef = useRef(null);
  useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          },
          {
            threshold: 0.5,
          }
        );
      
        if (progressRef.current) {
          observer.observe(progressRef.current);
        }
      
        return () => {
          observer.disconnect();
        };
      }, []);

    return (
        <div className='headless-progress-outer-container'>
            <div className="headless-progress-inner-container">
                {/* <h2 className='headless-progress-heading secondary-heading'>
                    Our BigCommerce Development Process
                </h2> */}
                <h3 className='headless-progress-sm-heading primary-heading'>
                Our Headless BigCommerce Development Process
                </h3>

                <div ref={progressRef}  className="headless-phases-wrapper">
                    {
                      inView && (
                        <div className="headless-phases">
                        <div id='headless-phase1' className="headless-process-button"></div>
                        <div id='headless-phase1Name'>
                            <span>01</span>
                            <span className='headless-procBCom'>Discovery and <br></br> Strategy</span>
                        </div>

                        <div id='headless-phase2' className="headless-process-button"></div>
                        <div id='headless-phase2Name'>
                            <span>02</span>
                            <span className='headless-procBCom'>Architecture and <br></br>Planning</span>
                        </div>

                        <div id='headless-phase3' className="headless-process-button"></div>
                        <div id='headless-phase3Name'>
                            <span>03</span>
                            <span className='headless-procBCom'>Development and Integration</span>
                        </div>

                        <div id='headless-phase4' className="headless-process-button"></div>
                        <div id='headless-phase4Name'>
                            <span>04</span>
                            <span className='headless-procBCom'>Customization and Design</span>
                        </div>

                        <div id='headless-phase5' className="headless-process-button"></div>
                        <div id='headless-phase5Name'>
                            <span>05</span>
                            <span className='headless-procBCom'>Testing and Quality <br></br>Assurance</span>
                        </div>

                        <div id='headless-phase6' className="headless-process-button"></div>
                        <div id='headless-phase6Name'>
                            <span>06</span>
                            <span className='headless-procBCom'>Deployment and Optimization</span>
                        </div>

                        <div id='headless-phase7' className="headless-process-button"></div>
                        <div id='headless-phase7Name'>
                            <span>07</span>
                            <span className='headless-procBCom'>Training and Support</span>
                        </div>

                        <div id='headless-phase8' className="headless-process-button"></div>
                        <div id='headless-phase8Name'>
                            <span>08</span>
                            <span className='headless-procBCom'>Growth and Scaling</span>
                        </div>

                        {/* <div id='phase9' className="process-button"></div>
                        <div id='phase9Name'>
                            <span className='procBCom'>User Acceptance Testing</span>
                        </div>

                        <div id='phase10' className="process-button"></div>
                        <div id='phase10Name'>
                            <span>06</span>
                            <span className='procBCom'>Final Touches</span>
                        </div>

                        <div id='phase11' className="process-button"></div>
                        <div id='phase11Name'>
                            <span>07</span>
                            <span className='procBCom'>Deployment</span>
                        </div> */}
                    </div>
                      )
                    }
                </div>
            </div>
        </div>
    );
};

export default Progress;