"use client"
import React, { useState } from "react";

import Link from "next/link";

const Footer = () => {
  const [cont, setCont] = useState(1);


  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="foot">
        <div className="footer-Bg-img">
          <div className="foot1 justify-between dine-123 footer-first-main">
            <div className="foot11 foot111">
              <div className="foot10 footsa">
                <img width="205" height="62" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738997610/kdsKin_hydlf3.png' alt="KDS logo" title="KDS logo" />
                <h4 className="text-start">
                  Revolutionizing your business <br />through Technology.
                </h4>
              </div>
            </div>

            <div className="footer-first-xyz">
              <div className="footer-sec-xyz">
                <div className="foot11 foot12">
                  <h5>Services</h5>
                  <div className="foot10 flex flex-col">
                    <Link href="/mobile-application-development">Mobile App Development</Link>
                    <Link href="/ecommerce-development">E-commerce Development</Link>
                    <Link href="/web-development">Website Development</Link>
                    <Link href="/digital-marketing-agency">Digital Marketing</Link>
                    {/* <Link to="/">Web Application Development</Link> */}
                    <Link href="/ui-ux-design">UI/UX Design</Link>
                    <Link href="/graphic-design">Graphic Design</Link>
                    <Link href="/staff-augmentation">Staff Augmentation</Link>
                    <Link href="/multi-level-marketing">Multi-Level Marketing</Link>
                    <Link href="/custom-software-development">Software Development</Link>


                  </div>
                </div>
                <div className="foot11 foot13">
                  <h5>Company</h5>
                  <div className="foot10 reji flex flex-col">
                    <Link href="/about">About Us</Link>
                    <Link href="/career">Career</Link>
                    <Link href="/hire">Hiring</Link>
                  
                    <Link href="/privacy">Privacy Policy</Link>
              
                    <Link href="/terms">Terms of services</Link>
                  
                  </div>
                </div>
                <div className="foot11 foot14">
                  <h5>Contact Us</h5>
                  <div className="foot10">
                    <div className="flex foot140 items-center mt-5 marginnn">
                
                      <p>Sales:</p>
                    </div>
                    <a href="mailto:shubham@kusheldigi.com">
                      <div className="flex foot140 items-center marginnn">
               
                        <h5>info@kusheldigi.com</h5>
                      </div>
                    </a>
                    <div className="flex foot140 items-center marginnn">
             
                      <p>Mobile:</p>
                    </div>
                    <a href="tel:+91 9045301702 ">
                      <div className="flex foot140 items-center">
                      
                        <h5>+91 9045301702</h5>
                      </div>
                    </a>
                    <a href="tel:+1-585-566-2070 ">
                      <div className="flex foot140 items-center">
                     
                        <h5>+1-585-566-2070</h5>
                      </div>
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="foot14 footer144">
                <div className="footer144-fle">
                  <div className="footer144-flex">
                    <h5> Address</h5>
                    <div className="foot10">
                      <div className="flex foot140 items-center mt-2 foot-para">
                        <p>First Floor, D242, F-32B, Sector 63 Rd, Noida, 201301<br /> Uttar Pradesh</p>
                      </div>
                     
                    </div>
                  </div>
                  <div className="footer-map">
                    <iframe title="myframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3954123429044!2d77.3860107742401!3d28.617908984746908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49f5d8cdc4b%3A0xedb207949cd07d2b!2sKushel%20Digi%20Solutions%20-%20Web%20Design%20Company%20Noida%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1681368789327!5m2!1sen!2sin"
                    ></iframe>
                  </div>
                </div>

               
            
          </div>
          
              
            </div>
          

          
          </div>
          <div className="footer2Image1">
                <div className="footer2Image">
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993082/designrush_jkyjny.webp" alt="logo"></img>
            </div>
            <div className="footer2Image">
            <img width="120" height="129" loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993092/b2b-companies-canada_tdaega.png" alt="logo"></img>
            </div>
            <div className="footer2Imagelat">
            <img loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993119/ecommerce-development-companies_glc1ea.png" alt="logo"></img>
            </div>
            <div className="footer2Image">
            <img width="120" height="129" loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993106/ecommerce-developers-india_zfydfo.png" alt="logo"></img>
            </div>
            <div className="footer2Image">
            <img width="120" height="120" loading="lazy" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148178/Certified-Bigcommerce-Partner__of0fqt.png" alt="logo"></img>
            </div>
            <div className="footer2Imagelast">
            <img loading="lazy" width="230" height="230" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993139/8_YEARS_ICON_LOGO_ppjzsq.png" alt="logo"></img>
            </div>
              </div>
        </div>

        <div className="foot2">
       
          <div className="foot_bottom dine-123">
          <div className="bottom2">
              <div className="foot11 foot15">
           
                <div className="foot10">
                  <div className="foot151 flex items-center">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/kusheldigisolutions/" rel="noopener"
                    >
                       {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224179/linkedin_logo-01_gvkq3i.png */}
                      <img loading="lazy" width={20} height={15} src='https://res.cloudinary.com/dgif730br/image/upload/v1741074958/linkedin_logo-01_gvkq3i_ccm6sd.png' alt="linkedin" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/kusheldigi/" rel="noopener">
                    {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224179/instagram_logo-01_dzqg3b.png */}
                      <img loading="lazy" width={20} height={15} src='https://res.cloudinary.com/dgif730br/image/upload/v1741075336/instagram_logo-01_dzqg3b_xzp4ys.png' alt="iconm" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/kusheldigisolutions/" rel="noopener"
                    >
                      {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224178/facebook_logo-01_b88kjo.png */}
                      <img loading="lazy" width={20} height={15} src='https://res.cloudinary.com/dgif730br/image/upload/v1741075570/facebook_logo-01_b88kjo_mhhfn3.png' alt="icon" />
                    </a>
                    <a  target="_blank" href="https://twitter.com/KushelDigisoln" rel="noopener">
                    {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224179/twitter_logo-01_xh3vqk.png */}
                      <img loading="lazy" width={20} height={15} src='https://res.cloudinary.com/dgif730br/image/upload/v1741075813/twitter_logo-01_xh3vqk_ksousv.png' alt="young2" />
                    </a>
                    <a target="_blank" href="https://www.behance.net/kushelsolucti" rel="noopener">
                    {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224178/behance_logo-01_x6vc9l.png */}
                      <img loading="lazy" width={20} height={15} style={{ filter: "invert(1)" }} src="https://res.cloudinary.com/dgif730br/image/upload/v1741076143/behance_logo-01_x6vc9l_kqf8gs.png" alt="young1" />
                    </a>
                  
                  </div>

                </div>
              </div>
             
            </div>
          
            <div className="footer-btn">
              
              <button type="button" onClick={scrollToTop}>Back to top 
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.707 5.77399L5.99997 0.0669887L0.292969 5.77399L1.70697 7.18799L5.99997 2.89499L10.293 7.18799L11.707 5.77399Z" fill="white"/>
              </svg>
              </button>
              
            </div>

            <div className="bottom1">
          
              <div className="flex items-center footer_icon">
          
              </div>
              <p> <span>©</span>  2025 Kusheldigi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
