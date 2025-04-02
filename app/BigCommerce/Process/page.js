'use client'

import React, { useState ,useRef, useEffect} from 'react';
import "./Process.css";

const Progress = () => {

    const [isSwitch, setIsSwitch] = useState(false);
    const phasesRef = useRef(null);

    const handleSwitchChange = () => {
        setIsSwitch(!isSwitch);
    }

    useEffect(() => {
        if (phasesRef.current) {
            setTimeout(() => {
                phasesRef.current.scrollLeft = 0;
            }, 50); 
        }
    }, [isSwitch]);

    return (
        <div className='progress-outer-container'>
            <div className="progress-inner-container">
                <h2 className='progress-heading'>Our BigCommerce Development Process</h2>
                <h3 className='progress-sm-heading'>Kushel Digi believes in employing latest and advanced global process to deliver projects best suited with your business needs.</h3>

                <div className="progress-toggle-btn-div">
                    <h1 className={`progress-company-name first-copmpany ${isSwitch ? 'textOpacity' : ''}`}>CUSTOM</h1>
                    <input onChange={() => handleSwitchChange()} type="checkbox" id="switch" />
                    <label id='switchLabel' htmlFor="switch">Toggle</label>
                    <h1 className={`progress-company-name second-copmpany ${!isSwitch ? 'textOpacity' : ''}`}>DYNAMIC</h1>
                </div>

                <div className="phases-wrapper">
                <div key={isSwitch ? "agile" : "hybrid"} ref={phasesRef} className="phases">
                {
                    !isSwitch ? (
                        <>
                        <div id='phase1' className="process-button"></div>
                            <div id='phase1Name'>
                                <span className=''>01</span>
                                <span className=''>Planning</span>
                            </div>

                            <div id='phase2' className="process-button"></div>
                            <div id='phase2Name'>
                                <span className=''>02</span>
                                <span className=''>UI/UX Design                                </span>
                            </div>

                            <div id='phase3' className="process-button"></div>
                            <div id='phase3Name'>
                                <span className=''>Brand</span>
                            </div>


                            <div id='phase4' className="process-button"></div>
                            <div id='phase4Name'>
                                <span className=''>Visual</span>
                            </div>


                            <div id='phase5' className="process-button"></div>
                            <div id='phase5Name'>
                                <span className=''>03</span>
                                <span className=''>Development</span>
                            </div>

                            <div id='phase6' className="process-button"></div>
                            <div id='phase6Name'>
                                <span className=''>04</span>
                                <span className=''>Improvements</span>
                            </div>


                            <div id='phase7' className="process-button"></div>
                            <div id='phase7Name'>
                                <span className=''>05</span>
                                <span className=''>Testing</span>
                            </div>

                            <div id='phase8' className="process-button"></div>
                            <div id='phase8Name'>
                                <span className=''>Validation</span>
                            </div>


                            <div id='phase9' className="process-button"></div>
                            <div id='phase9Name'>
                                <span className=''>User Acceptance Testing</span>
                            </div>


                            <div id='phase10' className="process-button"></div>
                            <div id='phase10Name'>
                                <span className=''>06</span>
                                <span className=''>Final Touches</span>
                            </div>
                            <div id='phase11' className="process-button"></div>
                            <div id='phase11Name'>
                                <span className=''>07</span>
                                <span className=''>Deployment</span>
                            </div>
                        </>
                    ) : (
                       <>
                       <div id='phase1' className="process-button"></div>
                            <div id='phase1Name'>
                                <span className=''>01</span>
                                <span className=''>Sprint Setup</span>
                            </div>

                            <div id='phase2' className="process-button"></div>
                            <div id='phase2Name'>
                                <span className=''>02</span>
                                <span className=''>Wireframing</span>
                            </div>

                            <div id='phase3' className="process-button"></div>
                            <div id='phase3Name' className='agile3phase'>
                                <span className=''>Project Setup</span>
                            </div>


                            <div id='phase4' className="process-button"></div>
                            <div id='phase4Name'>
                                <span className=''>Initiation</span>
                            </div>


                            <div id='phase5' className="process-button"></div>
                            <div id='phase5Name'>
                                <span className=''>03</span>
                                <span className=''>Development</span>
                            </div>

                            <div id='phase6' className="process-button"></div>
                            <div id='phase6Name'>
                                <span className=''>04</span>
                                <span className=''>Regular Testing</span>
                            </div>


                            <div id='phase7' className="process-button"></div>
                            <div id='phase7Name' className='agile7phase'>
                                <span className=''>05</span>
                                <span className=''>Feedback</span>
                            </div>

                            <div id='phase8' className="process-button"></div>
                            <div id='phase8Name' className='agile8phase'>
                                <span className=''>Sprint Completed</span>
                            </div>


                            <div id='phase9' className="process-button"></div>
                            <div id='phase9Name' className='agile9phase'>
                                <span className=''>Release</span>
                            </div>


                            <div id='phase10' className="process-button"></div>
                            <div id='phase10Name' className='agile10phase'>
                                <span className=''>06</span>
                                <span className=''>Final Review</span>
                            </div>
                            <div id='phase11' className="process-button"></div>
                            <div id='phase11Name' className='agile11phase'>
                                <span className=''>07</span>
                                <span className=''>Launch & Ongoing Support</span>
                            </div>
                       </>
                    )
                }
                </div> 
                </div>

            </div>
        </div>
    )
}

export default Progress