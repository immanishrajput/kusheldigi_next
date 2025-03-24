"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './homeBan.css'
const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="inner-carousel-container">
        <h2 className="carousel-container-heading">
        Helping Top Global Brands to Expand, Migrate & Succeed
        </h2>

        <p className="carousel-container-para">
        Kushel Digi has been helping leading global brands scale and optimize their ecommerce success with our expert BigCommerce solutions.

        </p>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
         
            <SwiperSlide>
              {/* First slider */}
              <div className="carousel-item">
                <div className="left-carousel-item">
                  <img src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767163/Rectangle_30182_1_ynn34p.png"} alt="carousel-image" />
                  <div className="left-carousel-btn-div">
                    <div className="left-carousel-btn">B2B</div>
                    <div className="left-carousel-btn blue-bg">Firearms</div>
                  </div>
                </div>
                <div className="right-carousel-item">
                  <h2 className="right-carousel-heading">
                   Kickeez
                  </h2>
                  <div className="right-service-stack-div">
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Services</h3>
                      <ul>
                        <li>UX/UI Website Design</li>
                        <li>Website Development</li>
                        <li>B2B eCommerce</li>
                        <li>QA & Website Testing</li>
                      </ul>
                    </div>
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Tech Stack</h3>
                      <ul>
                        <li>BigCommerce</li>
                      </ul>
                    </div>
                  </div>
                  <p className="right-carousel-para">
            
KICK-EEZ® sells a wide selection of rifle recoil pads and shooting supplies made of Sorbothane®, which provides shock absorption and reduces recoil effectively and quickly.
                  </p>
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </div>
              </div>
              

            
            </SwiperSlide>

            <SwiperSlide>
            <div className="carousel-item">
                <div className="left-carousel-item">
                  <img src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767164/Rectangle_30182_3_fkohiq.png"} alt="carousel-image" />
                  <div className="left-carousel-btn-div">
                    <div className="left-carousel-btn">D2C</div>
                    <div className="left-carousel-btn blue-bg">E-commerce</div>
                  </div>
                </div>
                <div className="right-carousel-item">
                  <h2 className="right-carousel-heading">
                Slides 365
                  </h2>
                  <div className="right-service-stack-div">
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Services</h3>
                      <ul>
                        <li>UX/UI Website Design</li>
                        <li>Website Development</li>
                        <li>B2B eCommerce</li>
                        <li>QA & Website Testing</li>
                      </ul>
                    </div>
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Tech Stack</h3>
                      <ul>
                        <li>BigCommerce</li>
                      </ul>
                    </div>
                  </div>
                  <p className="right-carousel-para">
                  
At Slides365, we strive to help people tell their story effectively. Your invisible friend inside the PowerPoint helps you create the Professional Presentations.
                  </p>
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>
       
            <SwiperSlide>
            <div className="carousel-item">
                <div className="left-carousel-item">
                  <img src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767163/Rectangle_30182_2_smwxoz.png"} alt="carousel-image" />
                  <div className="left-carousel-btn-div">
                    
                    <div className="left-carousel-btn blue-bg">Real Estate</div>
                  </div>
                </div>
                <div className="right-carousel-item">
                  <h2 className="right-carousel-heading">
                  DigitalMnA
                  </h2>
                  <div className="right-service-stack-div">
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Services</h3>
                      <ul>
                        <li>UX/UI Website Design</li>
                        <li>Website Development</li>
                        <li>B2B eCommerce</li>
                        <li>QA & Website Testing</li>
                      </ul>
                    </div>
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Tech Stack</h3>
                      <ul>
                        <li>BigCommerce</li>
                      </ul>
                    </div>
                  </div>
                  <p className="right-carousel-para">
            
                 
                  DigitalMnA is a full-service Merger and Acquisition company helping companies Sell and Buy assets by creating value.
                  </p>
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="carousel-item">
                <div className="left-carousel-item">
                  <img src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1725880370/image_cyhgfn.png"} alt="carousel-image" />
                  <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                    <div className="left-carousel-btn blue-bg">Military & Tactical Industry</div>
                  </div>
                </div>
                <div className="right-carousel-item">
                  <h2 className="right-carousel-heading">
                  Pro Truck
                  </h2>
                  <div className="right-service-stack-div">
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Services</h3>
                      <ul>
                        <li>UX/UI Website Design</li>
                        <li>Website Development</li>
                        <li>B2B eCommerce</li>
                        <li>QA & Website Testing</li>
                      </ul>
                    </div>
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Tech Stack</h3>
                      <ul>
                        <li>BigCommerce</li>
                      </ul>
                    </div>
                  </div>
                  <p className="right-carousel-para">
        Aftermarket suspension lift kits, leveling kits and accessories for 4X4 off-road truck and jeep enthusiasts
                  </p>
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="carousel-item">
                <div className="left-carousel-item">
                  <img src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1725880370/image_cyhgfn.png"} alt="carousel-image" />
                  <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                    <div className="left-carousel-btn blue-bg">Gunshop</div>
                  </div>
                </div>
                <div className="right-carousel-item">
                  <h2 className="right-carousel-heading">
               Rely Innovation
                  </h2>
                  <div className="right-service-stack-div">
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Services</h3>
                      <ul>
                        <li>UX/UI Website Design</li>
                        <li>Website Development</li>
                        <li>B2B eCommerce</li>
                        <li>QA & Website Testing</li>
                      </ul>
                    </div>
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Tech Stack</h3>
                      <ul>
                        <li>BigCommerce</li>
                      </ul>
                    </div>
                  </div>
                  <p className="right-carousel-para">
                 
                  Rely products give you clarity and peace of mind. More than just beeps - Rely helps you understand what’s occurring in your home and what to do next.
                  </p>
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="carousel-item">
                <div className="left-carousel-item">
                  <img src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1725880369/image_2_jkmhgr.png"} alt="carousel-image" />
                  <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                    <div className="left-carousel-btn blue-bg">E-commerce</div>
                  </div>
                </div>
                <div className="right-carousel-item">
                  <h2 className="right-carousel-heading">
                  Solenoid Ninja
                  </h2>
                  <div className="right-service-stack-div">
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Services</h3>
                      <ul>
                        <li>UX/UI Website Design</li>
                        <li>Website Development</li>
                        <li>B2B eCommerce</li>
                        <li>QA & Website Testing</li>
                      </ul>
                    </div>
                    <div className="right-service-stack">
                      <h3 className="service-stack-heading">Tech Stack</h3>
                      <ul>
                        <li>BigCommerce</li>
                      </ul>
                    </div>
                  </div>
                  <p className="right-carousel-para">
                 
                  The idea of our webstore started small, but quickly gathered speed after we encountered frequent requests from individuals and companies looking for small quantity, high-quality electromagnetic components.
                  </p>
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
