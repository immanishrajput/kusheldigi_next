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
          <div className="foot1 justify-between footer-first-main">
            <div className="foot11 foot111">
              <div className="foot10 footsa">
                <img
                  loading="lazy"
                  width="170"
                  height="56"
                  class="kdssslogo"
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
                  srcset="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png 1x,
                          https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png 2x,
                          https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png 3x"
                  alt="Kushel Digi Solutions official logo for ecommerce  development agency India"
                />

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
                    <Link href="/mobile-application-development" className="footLink">Mobile App Development</Link>
                    <Link href="/ecommerce-development" className="footLink">E-commerce Development</Link>
                    <Link href="/web-development" className="footLink">Website Development</Link>
                    <Link href="/digital-marketing-agency" className="footLink">Digital Marketing</Link>
                    {/* <Link to="/">Web Application Development</Link> */}
                    <Link href="/ui-ux-design" className="footLink">UI/UX Design</Link>
                    <Link href="/graphic-design" className="footLink">Graphic Design</Link>
                    <Link href="/staff-augmentation" className="footLink">Staff Augmentation</Link>
                    <Link href="/multi-level-marketing" className="footLink">Multi-Level Marketing</Link>
                    <Link href="/custom-software-development" className="footLink">Software Development</Link>


                  </div>
                </div>
                <div className="foot11 foot13">
                  <h5>Company</h5>
                  <div className="foot10 reji flex flex-col">
                    <Link href="/about" className="footLink">About Us</Link>
                    {/* <Link href="/career">Career</Link> */}
                    <Link href="/hire" className="footLink">Hiring</Link>

                    <Link href="/privacy" className="footLink">Privacy Policy</Link>

                    <Link href="/terms" className="footLink">Terms of services</Link>

                  </div>
                </div>
                <div className="foot11 foot14">
                  <h5>Contact Us</h5>
                  <div className="foot10">
                    <div className="flex foot140 items-center mt-5 marginnn">

                      <p>Sales:</p>
                    </div>
                    <a href="mailto:info@kusheldigi.com">
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
              <Link href="https://www.designrush.com/agency/profile/kushel-digi-solutions" target="blank">
                <img
                  width="120"
                  height="122"
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276974/b6_pevpva.webp"
                  srcSet="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276974/b6_pevpva.webp 1x,
                          https://res.cloudinary.com/dal5dlztv/image/upload/v1748276974/b6_pevpva.webp 2x"
                  alt="Designrush ecommerce listing platform" />
              </Link>
            </div>

            <div className="footer2Image">
              <Link href="https://clutch.co/profile/kushel-digi-solutions" target="blank">
                <img
                  width="120"
                  height="122"
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276892/b4_el1k1k.webp"
                  srcSet="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276892/b4_el1k1k.webp 1x,
                          https://res.cloudinary.com/dal5dlztv/image/upload/v1748276892/b4_el1k1k.webp 2x"
                  alt="Cluth ecommerce listing platform" />
              </Link>
            </div>

            <div className="footer2Image">
              <Link href="https://www.goodfirms.co/company/kushel-digi-solutions-1" target="blank">
                <img
                  width="120"
                  height="122"
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748514234/B-2_io9vgp.webp"
                  srcSet="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748514234/B-2_io9vgp.webp 1x,
                          https://res.cloudinary.com/dqjbzgksw/image/upload/v1748514234/B-2_io9vgp.webp 2x"
                  alt="goodfirms ecommerce listing platform" />
              </Link>
            </div>

            <div className="footer2Image">
              <Link href="#" target="blank">
                <img
                  width="120"
                  height="122"
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748519991/file_1748519923-1748519924_easb6z.webp"
                  srcSet="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748519991/file_1748519923-1748519924_easb6z.webp 1x,
                          https://res.cloudinary.com/dqjbzgksw/image/upload/v1748519991/file_1748519923-1748519924_easb6z.webp 2x"
                  alt="Cluth ecommerce listing platform" />
              </Link>
            </div>

            <div className="footer2Image">
              <Link href="https://partners.bigcommerce.com/directory/partner/1983347/kushel-digi-solutions" target="blank">
                <img
                  width="120"
                  height="122"
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276865/b2_cxuq7l.webp"
                  srcSet="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276865/b2_cxuq7l.webp 1x,
                          https://res.cloudinary.com/dal5dlztv/image/upload/v1748276865/b2_cxuq7l.webp 2x"
                  alt="BigCommerce development services official logo " />
              </Link>
            </div>

            <div className="footer2Imagelast">
              <img
                width="137"
                height="140"
                loading="lazy"
                decoding="async"
                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748276849/b1_szuidn.webp"
                srcset="
                    https://res.cloudinary.com/dal5dlztv/image/upload/v1748276849/b1_szuidn.webp 1x,
                    https://res.cloudinary.com/dal5dlztv/image/upload/v1748276849/b1_szuidn.webp 2x"
                alt="8+ years of Experience in ecommerce website development" />

            </div>
          </div>
        </div>

        <div className="foot2">

          <div className="foot_bottom">
            <div className="bottom2">
              <div className="foot11 foot15">

                <div className="foot10">
                  <div className="foot151 flex items-center">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/kusheldigisolutions/" rel="noopener"
                    >
                      {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224179/linkedin_logo-01_gvkq3i.png */}
                      <img
                        loading="lazy"
                        width="35"
                        height="35"
                        style={{ width: '35px', height: '35px', display: 'block' }}
                        src="https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741074958/linkedin_logo-01_gvkq3i_ccm6sd.png"
                        alt="LinkedIn social media icon for ecommerce website development by Kushel Digi Solutions"
                      />

                    </a>
                    <a target="_blank" href="https://www.instagram.com/kusheldigi/" rel="noopener">
                      {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224179/instagram_logo-01_dzqg3b.png */}
                      <img
                        loading="lazy"
                        width={35}
                        height={35}
                        style={{ width: '35px', height: '35px', display: 'block' }}
                        src='https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075336/instagram_logo-01_dzqg3b_xzp4ys.png' alt="Instagram social media icon for ecommerce   website development by Kushel Digi Solutions" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/kusheldigisolutions/" rel="noopener"
                    >
                      {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224178/facebook_logo-01_b88kjo.png */}
                      <img
                        loading="lazy"
                        width={35}
                        height={35}
                        style={{ width: '35px', height: '35px', display: 'block' }}
                        src='https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075570/facebook_logo-01_b88kjo_mhhfn3.png' alt="Facebook social media icon for ecommerce   website development by Kushel Digi Solutions" />
                    </a>
                    <a target="_blank" href="https://twitter.com/KushelDigisoln" rel="noopener">
                      {/* https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224179/twitter_logo-01_xh3vqk.png */}

                      <img
                        loading="lazy"
                        width={35}
                        height={35}
                        style={{ width: '35px', height: '35px', display: 'block' }}
                        src='https://res.cloudinary.com/dgif730br/image/upload/f_auto,q_auto,w_35,h_35,c_scale/v1741075813/twitter_logo-01_xh3vqk_ksousv.png' alt="Twitter social media icon for ecommerce   website development by Kushel Digi Solutions" />
                    </a>
                    {/* <a target="_blank" href="https://www.behance.net/kushelsolucti" rel="noopener">
                      { https://res.cloudinary.com/dd9tagtiw/image/upload/v1740224178/behance_logo-01_x6vc9l.png }
                      <img loading="lazy" width={20} height={15} style={{ filter: "invert(1)" }} src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748021713/file_1747984823-1747984824_rsxdbc.webp" alt="young1" />
                    </a> */}

                  </div>

                </div>
              </div>

            </div>

            <div className="footer-btn">

              <button type="button" onClick={scrollToTop}>Back to top
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.77399L5.99997 0.0669887L0.292969 5.77399L1.70697 7.18799L5.99997 2.89499L10.293 7.18799L11.707 5.77399Z" fill="white" />
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
