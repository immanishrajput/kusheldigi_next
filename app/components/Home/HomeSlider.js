"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './homeBan.css'
import Link from "next/link";
const Slider = () => {

  return (
    <div className="carousel-container">
      <div className="inner-carousel-container">
        <h3 className="carousel-container-heading primary-heading">
          Helping Top Global Brands to Expand, Migrate & Succeed
        </h3>

        <p className="carousel-container-para secondary-heading">
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
            <div className="carousel-item">
              <div className="left-carousel-item">

                <img loading="lazy" src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1743074113/page-4_wlgfqf.jpg"} alt="carousel-image" />
                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                  <div className="left-carousel-btn blue-bg">Military & Tactical Industry</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  2nd amendment
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Ecommerce Development</li>
                      <li>UI/UX design</li>
                      <li>Security Compliance</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">
                  2nd Amendment Armory is known for being a leading provider of high-quality firearms and tactical equipment  serving customers both locally in Brandon, FL and across the nation.usted firearms provider of high-quality gun accessories.
                </p>
                <Link  href="/2ndamendment">
                  <button  className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* First slider */}
            <div className="carousel-item">
              <div className="left-carousel-item">
                <img loading="lazy" src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1724767163/Rectangle_30182_1_ynn34p.png"} alt="carousel-image" />
                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn">B2B</div>
                  <div className="left-carousel-btn blue-bg">Firearms</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Kickeez
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol className="list_type">
                      <li>
                        Website Development
                      </li>
                      <li>SEO Optimization</li>
                      <li>UX/UI Design</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">
                  KICK- EEZ Premium known for Made in America recoil pads and accessories to make your shooting experience more comfortable.
                </p>
                <Link href="/kick-eez">
                  <button
                    className="left-carousel-btn blue-bg right-carousel-inner-btn">

                    View Case Study
                  </button>
                </Link>
              </div>
            </div>



          </SwiperSlide>

          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">

                <img loading="lazy" src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1743074114/page-6_yjelmo.jpg"} alt="carousel-image" />
                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn">D2C</div>
                  <div className="left-carousel-btn blue-bg">E-commerce</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Slides 365
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Website Development</li>
                      <li>Ecommerce Site Design</li>
                      <li>UI/UX Design</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">

                  Slides365 aimed to serve various needs of professionals by offering subscription-based templates, presentations, design slides, and industry-specific slides.
                </p>
                <Link href="/Slidesdesign">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">
                <img loading="lazy" src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1743074113/page-2_1_uylo50.jpg"} alt="carousel-image" />
                <div className="left-carousel-btn-div">

                  <div className="left-carousel-btn blue-bg">Real Estate</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Black Rhino
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Ecommerce Website </li>
                      <li>Development</li>
                      <li>UI/UX Design</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">


                  Black Rhino is a minority-owned small business in Lowell, Indiana has been a pioneer of custom Kydex holsters and accessories.
                </p>
                <Link href="/portfolio">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">
                <img loading="lazy" src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1743403116/page-3_1_uo0pue.jpg"} alt="carousel-image" />
                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                  <div className="left-carousel-btn blue-bg">Gunshop</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Sight & Scopes
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Ecommerce Store </li>
                      <li>Development</li>
                      <li>QA & Website Testing</li>
                      <li>UI/UX Design</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">

                  Sites and Scopes has specialized experience in delivering high performance optics and accessories for marksmen, hunters, and tactical professionals.
                </p>
                <Link href="/sites">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="carousel-item">
              <div className="left-carousel-item">
                <img loading="lazy" src={"https://res.cloudinary.com/dd9tagtiw/image/upload/v1743092899/page-5_1_oy4q9y.jpg"} alt="carousel-image" />
                <div className="left-carousel-btn-div">
                  <div className="left-carousel-btn ">B2B</div>
                  <div className="left-carousel-btn blue-bg">E-commerce</div>
                </div>
              </div>
              <div className="right-carousel-item">
                <h3 className="right-carousel-heading">
                  Top Brass Tactical
                </h3>
                <div className="right-service-stack-div">
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Services</h3>
                    <ol>
                      <li>Ecommerce Website</li>
                      <li>Development</li>
                      <li>UI/UX Design</li>
                      <li>QA & Website Testing</li>
                    </ol>
                  </div>
                  <div className="right-service-stack">
                    <h3 className="service-stack-heading">Tech Stack</h3>
                    <ol>
                      <li>BigCommerce</li>
                    </ol>
                  </div>
                </div>
                <p className="right-carousel-para">

                  The idea of our webstore started small, but quickly gathered speed after we encountered frequent requests from individuals and companies looking for small quantity, high-quality electromagnetic components.
                </p>
                <Link href="/topbrass">
                  <button className="left-carousel-btn blue-bg right-carousel-inner-btn">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;