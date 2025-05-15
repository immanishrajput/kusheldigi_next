"use client"
import './HomeVision.css'
import { useEffect, useState } from "react";
import Link from 'next/link';
const Website = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.querySelectorAll(".services-box-item-row").forEach((row) => {
      row.classList.remove("show");
    });
  }, []);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // useEffect(() => {
  //         const handleHashChange = () => {
  //           const section = document.getElementById("form-section");
  //           if (section) {
  //             setTimeout(() => {
  //               const offset = 150; 
  //               const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
  //               window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  //             }, 0);
  //           }
  //         };

  //         window.addEventListener("hashchange", handleHashChange, false);

  //         return () => {
  //           window.removeEventListener("hashchange", handleHashChange, false);
  //         };
  //       }, []);
  const scrollToFormVision = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      const yOffset = -120; 
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
      <>
        <section className="services-we-served vision-section">
          <div className="container1">
            <div className="title">
              <h3 className="primary-heading">Real Success, <br/> Real Impact</h3>
            </div>
            <div className="section-grid">
              <div className="section-grid-item services-we-served-list">
                <ul className="services-box-grid list-unstyled">
                  <li
                    id="services-box-0"
                    data-index={0}
                    className={`services-box-item ${activeIndex === 0 ? 'bg-white' : ''}`}
                    role="none"
                    onClick={() => handleClick(0)}
                  >
                    <div className="services-box-item-header">
                      <div className="services-box-item-left">
                        <div className="services-box-icon">
                          <div
                            className='service-box-icon-img'
                          >

                            <img
                              loading='lazy'
                              alt="Services Icon"
                              title="Services Icon"
                              decoding="async"
                              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1745824427/Ecommerce-development1_qdmdkp.png'
                              // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287002/node-js-mongo-DB-icon_rhqrop.svg"
                              className='services-box-inner-img'
                            />
                          </div>
                        </div>
                        <Link href='/ecommerce-development' className="h6 services-box-title">
                          Ecommerce Development
                        </Link>
                      </div>
                      <span className={`services-box-down-icon ${activeIndex === 0 ? "rotate180" : ''}`}>
                        <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287120/dropdown-arrow_aafea7.svg" alt="" />
                      </span>
                    </div>
                    <div className="services-box-right-corner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height={50}
                        width={50}
                      >
                        <defs>
                          <clipPath id="clipPath">
                            <rect
                              id="Rectangle_20506"
                              data-name="Rectangle 20506"
                              width={50}
                              height={50}
                              transform="translate(-6765 -1319)"
                              fill="#ffffff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Mask_Group_4"
                          data-name="Mask Group 4"
                          transform="translate(6765 1319)"
                          clipPath="url(#clipPath)"
                        >
                          <path
                            id="Vector_29"
                            data-name="Vector 29"
                            d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                            transform="translate(-7526.786 -1563.216)"
                            fill="#ffffff"
                            stroke="#ebebeb"
                            strokeWidth={1}
                          />
                        </g>
                      </svg>
                      {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287002/node-js-mongo-DB-icon_rhqrop.svg" alt="" /> */}

                    </div>
                  </li>
                  {activeIndex === 0 && (
                    <li
                      id="services-box-row-0"
                      data-index={0}
                      className="services-box-item services-box-item-row show"
                    >
                      <ul className="services-box-list-nav">
                        <li>
                          <h4>
                            <Link href="/bigcommerce-development">
                              <span>BigCommerce</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/shopify-development" target="">
                              <span>Shopify</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/headless-commerce" target="">
                              <span>Headless</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/woocommerce" target="">
                              <span>WooCommerce</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/custom-software-development" target="">
                              <span>Custom E-commerce</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <a href="" target="">
                              <span>Store setup</span>
                            </a>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <a href="" target="">
                              <span>platform Migartion

                              </span>
                            </a>
                          </h4>
                        </li>

                      </ul>
                      <div className="services-box-right-corner">
                        {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287002/node-js-mongo-DB-icon_rhqrop.svg" alt="" /> */}
                      </div>
                    </li>
                  )}




                  <li
                    id="services-box-1"
                    data-index={1}
                    //   className="services-box-item"
                    className={`services-box-item ${activeIndex === 1 ? 'bg-white' : ''}`}
                    role="none"
                    onClick={() => handleClick(1)}
                  >
                    <div className="services-box-item-header">
                      <div className="services-box-item-left">
                        <div className="services-box-icon">
                          <div
                            className='service-box-icon-img'
                          >
                            <img
                              loading='lazy'
                              alt="Services Icon"
                              title="Services Icon"
                              decoding="async"
                              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1745824640/application-development1_yghqz0.png'
                              // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287002/node-js-mongo-DB-icon_rhqrop.svg"
                              className='services-box-inner-img'
                            />
                            <div
                              className='inner-img-parent-div'
                            >
                              <img
                                loading='lazy'
                                className='vision-side-inner-img'
                                alt=""
                                aria-hidden="true"
                                role="presentation"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                              />
                            </div>

                          </div>
                        </div>
                        <h3 className="h6 services-box-title">
                          Application Development
                        </h3>
                      </div>
                      <span className={`services-box-down-icon ${activeIndex === 1 ? "rotate180" : ''}`}>
                        <img loading='lazy'
                          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287120/dropdown-arrow_aafea7.svg"
                          alt="" />
                      </span>
                    </div>
                    <div className="services-box-right-corner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height={50}
                        width={50}
                      >
                        <defs>
                          <clipPath id="clipPath">
                            <rect
                              id="Rectangle_20506"
                              data-name="Rectangle 20506"
                              width={50}
                              height={50}
                              transform="translate(-6765 -1319)"
                              fill="#ffffff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Mask_Group_4"
                          data-name="Mask Group 4"
                          transform="translate(6765 1319)"
                          clipPath="url(#clipPath)"
                        >
                          <path
                            id="Vector_29"
                            data-name="Vector 29"
                            d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                            transform="translate(-7526.786 -1563.216)"
                            fill="#ffffff"
                            stroke="#ebebeb"
                            strokeWidth={1}
                          />
                        </g>
                      </svg>
                      {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287002/node-js-mongo-DB-icon_rhqrop.svg" alt="" /> */}
                    </div>
                  </li>
                  {activeIndex === 1 && (
                    <li
                      id="services-box-row-1"
                      data-index={1}
                      className="services-box-item services-box-item-row show"
                    >
                      <ul className="services-box-list-nav">
                        <li>
                          <h4>
                            <Link href="/web-development" target="">
                              <span>Web development</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/mobile-application-development" target="">
                              <span>Mobile app development</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/native" target="">
                              <span>Native</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Cross Platform</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Hybrid</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>PWA(Progressive Web App)</span>
                            </Link>
                          </h4>
                        </li>
                      </ul>
                      <div className="services-box-right-corner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          height={50}
                          width={50}
                        >
                          <defs>
                            <clipPath id="clipPath">
                              <rect
                                id="Rectangle_20506"
                                data-name="Rectangle 20506"
                                width={50}
                                height={50}
                                transform="translate(-6765 -1319)"
                                fill="#ffffff"
                              />
                            </clipPath>
                          </defs>
                          <g
                            id="Mask_Group_4"
                            data-name="Mask Group 4"
                            transform="translate(6765 1319)"
                            clipPath="url(#clipPath)"
                          >
                            <path
                              id="Vector_29"
                              data-name="Vector 29"
                              d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                              transform="translate(-7526.786 -1563.216)"
                              fill="#ffffff"
                              stroke="#ebebeb"
                              strokeWidth={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </li>

                  )}





                  <li
                    id="services-box-2"
                    data-index={2}
                    className={`services-box-item ${activeIndex === 2 ? 'bg-white' : ''}`}
                    role="none"
                    onClick={() => handleClick(2)}
                  >
                    <div className="services-box-item-header">
                      <div className="services-box-item-left">
                        <div className="services-box-icon">
                          <div
                            className='service-box-icon-img'
                          >
                            <img
                              loading='lazy'
                              alt="Services Icon"
                              title="Services Icon"
                              decoding="async"
                              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1745824934/design-icon_y5stzx.png'
                              // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287002/node-js-mongo-DB-icon_rhqrop.svg"
                              className='services-box-inner-img'
                            />
                            <div
                              className='inner-img-parent-div'
                            >
                              <img
                                loading='lazy'
                                className='vision-side-inner-img'
                                alt=""
                                aria-hidden="true"
                                role="presentation"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                              />
                            </div>

                          </div>
                        </div>
                        <h3 className="h6 services-box-title">
                          Strategy & Design
                        </h3>
                      </div>
                      <span className={`services-box-down-icon ${activeIndex === 2 ? "rotate180" : ''}`}>
                        <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287120/dropdown-arrow_aafea7.svg" alt="" />
                      </span>
                    </div>
                    <div className="services-box-right-corner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height={50}
                        width={50}
                      >
                        <defs>
                          <clipPath id="clipPath">
                            <rect
                              id="Rectangle_20506"
                              data-name="Rectangle 20506"
                              width={50}
                              height={50}
                              transform="translate(-6765 -1319)"
                              fill="#ffffff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Mask_Group_4"
                          data-name="Mask Group 4"
                          transform="translate(6765 1319)"
                          clipPath="url(#clipPath)"
                        >
                          <path
                            id="Vector_29"
                            data-name="Vector 29"
                            d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                            transform="translate(-7526.786 -1563.216)"
                            fill="#ffffff"
                            stroke="#ebebeb"
                            strokeWidth={1}
                          />
                        </g>
                      </svg>
                    </div>
                  </li>
                  {activeIndex === 2 && (
                    <li
                      id="services-box-row-2"
                      data-index={2}
                      className="services-box-item services-box-item-row show"
                    >
                      <ul className="services-box-list-nav">
                        <li>
                          <h4>
                            <Link href="/web-development" target="">
                              <span>Product Strategy & Roadmap</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/mobile-application-development" target="">
                              <span>Product Design</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/native" target="">
                              <span>UI/UX Services</span>
                            </Link>
                          </h4>
                        </li>
                        {/* <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Cross platform</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Hybrid</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>PWA(Progressive Web App)</span>
                            </Link>
                          </h4>
                        </li> */}


                      </ul>
                      <div className="services-box-right-corner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          height={50}
                          width={50}
                        >
                          <defs>
                            <clipPath id="clipPath">
                              <rect
                                id="Rectangle_20506"
                                data-name="Rectangle 20506"
                                width={50}
                                height={50}
                                transform="translate(-6765 -1319)"
                                fill="#ffffff"
                              />
                            </clipPath>
                          </defs>
                          <g
                            id="Mask_Group_4"
                            data-name="Mask Group 4"
                            transform="translate(6765 1319)"
                            clipPath="url(#clipPath)"
                          >
                            <path
                              id="Vector_29"
                              data-name="Vector 29"
                              d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                              transform="translate(-7526.786 -1563.216)"
                              fill="#ffffff"
                              stroke="#ebebeb"
                              strokeWidth={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </li>
                  )}
                  <li
                    id="services-box-3"
                    data-index={3}
                    //   className="services-box-item"
                    className={`services-box-item ${activeIndex === 3 ? 'bg-white' : ''}`}
                    role="none"
                    onClick={() => handleClick(3)}
                  >
                    <div className="services-box-item-header">
                      <div className="services-box-item-left">
                        <div className="services-box-icon">
                          <div
                            className='service-box-icon-img'
                          >
                            <img
                              loading='lazy'
                              alt="Services Icon"
                              title="Services Icon"
                              decoding="async"
                              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1745823459/support_djssld.png'
                              // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287001/mobile-app-development-icon_pqivui.svg"
                              className='services-box-inner-img'
                            />
                            <div
                              className='inner-img-parent-div'
                            >
                              <img
                                loading='lazy'
                                className='vision-side-inner-img'
                                alt=""
                                aria-hidden="true"
                                role="presentation"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                              />
                            </div>

                          </div>
                        </div>
                        <h3 className="h6 services-box-title">
                          Managed support services

                        </h3>
                      </div>
                      <span className={`services-box-down-icon ${activeIndex === 3 ? "rotate180" : ''}`}>
                        <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287120/dropdown-arrow_aafea7.svg" alt="" />
                      </span>
                    </div>
                    <div className="services-box-right-corner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height={50}
                        width={50}
                      >
                        <defs>
                          <clipPath id="clipPath">
                            <rect
                              id="Rectangle_20506"
                              data-name="Rectangle 20506"
                              width={50}
                              height={50}
                              transform="translate(-6765 -1319)"
                              fill="#ffffff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Mask_Group_4"
                          data-name="Mask Group 4"
                          transform="translate(6765 1319)"
                          clipPath="url(#clipPath)"
                        >
                          <path
                            id="Vector_29"
                            data-name="Vector 29"
                            d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                            transform="translate(-7526.786 -1563.216)"
                            fill="#ffffff"
                            stroke="#ebebeb"
                            strokeWidth={1}
                          />
                        </g>
                      </svg>
                    </div>
                  </li>
                  {activeIndex === 3 && (
                    <li
                      id="services-box-row-3"
                      data-index={3}
                      className="services-box-item services-box-item-row show"
                    >
                      <ul className="services-box-list-nav">
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Application Managed Service</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Infrastructure Managed Service</span>
                            </Link>
                          </h4>
                        </li>


                      </ul>
                      <div className="services-box-right-corner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          height={50}
                          width={50}
                        >
                          <defs>
                            <clipPath id="clipPath">
                              <rect
                                id="Rectangle_20506"
                                data-name="Rectangle 20506"
                                width={50}
                                height={50}
                                transform="translate(-6765 -1319)"
                                fill="#ffffff"
                              />
                            </clipPath>
                          </defs>
                          <g
                            id="Mask_Group_4"
                            data-name="Mask Group 4"
                            transform="translate(6765 1319)"
                            clipPath="url(#clipPath)"
                          >
                            <path
                              id="Vector_29"
                              data-name="Vector 29"
                              d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                              transform="translate(-7526.786 -1563.216)"
                              fill="#ffffff"
                              stroke="#ebebeb"
                              strokeWidth={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </li>
                  )}
                  <li
                    id="services-box-4"
                    data-index={4}
                    className={`services-box-item ${activeIndex === 4 ? 'bg-white' : ''}`}
                    role="none"
                    onClick={() => handleClick(4)}
                  >
                    <div className="services-box-item-header">
                      <div className="services-box-item-left">
                        <div className="services-box-icon">
                          <div
                            className='service-box-icon-img'
                          >
                            <img
                              loading='lazy'
                              alt="Services Icon"
                              title="Services Icon"
                              decoding="async"
                              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1745823449/custom-software_boce6g.png'
                              // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287001/microsoft-icon_qefjxk.svg"
                              className='services-box-inner-img'
                            />
                            <div
                              className='inner-img-parent-div'
                            >
                              <img
                                loading='lazy'
                                className='vision-side-inner-img'
                                alt=""
                                aria-hidden="true"
                                role="presentation"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                              />
                            </div>

                          </div>
                        </div>
                        <Link href='/custom-software-development' className="h6 services-box-title">Custom Software Development

                        </Link>
                      </div>
                      <span className={`services-box-down-icon ${activeIndex === 4 ? "rotate180" : ''}`}>
                        <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287120/dropdown-arrow_aafea7.svg" alt="" />
                      </span>
                    </div>
                    <div className="services-box-right-corner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height={50}
                        width={50}
                      >
                        <defs>
                          <clipPath id="clipPath">
                            <rect
                              id="Rectangle_20506"
                              data-name="Rectangle 20506"
                              width={50}
                              height={50}
                              transform="translate(-6765 -1319)"
                              fill="#ffffff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Mask_Group_4"
                          data-name="Mask Group 4"
                          transform="translate(6765 1319)"
                          clipPath="url(#clipPath)"
                        >
                          <path
                            id="Vector_29"
                            data-name="Vector 29"
                            d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                            transform="translate(-7526.786 -1563.216)"
                            fill="#ffffff"
                            stroke="#ebebeb"
                            strokeWidth={1}
                          />
                        </g>
                      </svg>
                    </div>
                  </li>
                  {activeIndex === 4 && (
                    <li
                      id="services-box-row-4"
                      data-index={4}
                      className="services-box-item services-box-item-row show"
                    >
                      <ul className="services-box-list-nav">
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Outsource Product development</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Enterprise Software Development</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Saas product Development</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>CRM & ERP Solutions</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Integration & API</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Legacy Application Modernization</span>
                            </Link>
                          </h4>
                        </li>

                      </ul>
                      <div className="services-box-right-corner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          height={50}
                          width={50}
                        >
                          <defs>
                            <clipPath id="clipPath">
                              <rect
                                id="Rectangle_20506"
                                data-name="Rectangle 20506"
                                width={50}
                                height={50}
                                transform="translate(-6765 -1319)"
                                fill="#ffffff"
                              />
                            </clipPath>
                          </defs>
                          <g
                            id="Mask_Group_4"
                            data-name="Mask Group 4"
                            transform="translate(6765 1319)"
                            clipPath="url(#clipPath)"
                          >
                            <path
                              id="Vector_29"
                              data-name="Vector 29"
                              d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                              transform="translate(-7526.786 -1563.216)"
                              fill="#ffffff"
                              stroke="#ebebeb"
                              strokeWidth={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </li>
                  )}
                  <li
                    id="services-box-5"
                    data-index={5}
                    className={`services-box-item ${activeIndex === 5 ? 'bg-white' : ''}`}
                    role="none"
                    onClick={() => handleClick(5)}
                  >
                    <div className="services-box-item-header">
                      <div className="services-box-item-left">
                        <div className="services-box-icon">
                          <div
                            className='service-box-icon-img'
                          >
                            <img
                              loading='lazy'
                              alt="Services Icon"
                              title="Services Icon"
                              decoding="async"
                              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1745823439/performance-markiting_ysxeyr.png'
                              // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287001/ML_eznvvj.svg"
                              className='services-box-inner-img'
                            />
                            {/* <img
                           className='vision-side-inner-img'
                          alt=""
                          aria-hidden="true"
                          role="presentation"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        /> */}
                            <div
                              className='inner-img-parent-div'
                            >

                            </div>

                          </div>
                        </div>
                        <h3 className="h6 services-box-title">Performance Marketing</h3>
                      </div>
                      <span className={`services-box-down-icon ${activeIndex === 5 ? "rotate180" : ''}`}>
                        <img loading='lazy' src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742287120/dropdown-arrow_aafea7.svg" alt="" />
                      </span>
                    </div>
                    <div className="services-box-right-corner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height={50}
                        width={50}
                      >
                        <defs>
                          <clipPath id="clipPath">
                            <rect
                              id="Rectangle_20506"
                              data-name="Rectangle 20506"
                              width={50}
                              height={50}
                              transform="translate(-6765 -1319)"
                              fill="#ffffff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Mask_Group_4"
                          data-name="Mask Group 4"
                          transform="translate(6765 1319)"
                          clipPath="url(#clipPath)"
                        >
                          <path
                            id="Vector_29"
                            data-name="Vector 29"
                            d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                            transform="translate(-7526.786 -1563.216)"
                            fill="#ffffff"
                            stroke="#ebebeb"
                            strokeWidth={1}
                          />
                        </g>
                      </svg>
                    </div>
                  </li>
                  {activeIndex === 5 && (
                    <li
                      id="services-box-row-5"
                      data-index={5}
                      className="services-box-item services-box-item-row show"
                    >
                      <ul className="services-box-list-nav">
                        <li>
                          <h4>
                            <Link href="/seo" target="">
                              <span>SEO</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="#" target="">
                              <span>Social Media Campaigns</span>
                            </Link>
                          </h4>
                        </li>
                        <li>
                          <h4>
                            <Link href="/ppc" target="">
                              <span>PPC Advertising</span>
                            </Link>
                          </h4>
                        </li>



                      </ul>
                      <div className="services-box-right-corner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          height={50}
                          width={50}
                        >
                          <defs>
                            <clipPath id="clipPath">
                              <rect
                                id="Rectangle_20506"
                                data-name="Rectangle 20506"
                                width={50}
                                height={50}
                                transform="translate(-6765 -1319)"
                                fill="#ffffff"
                              />
                            </clipPath>
                          </defs>
                          <g
                            id="Mask_Group_4"
                            data-name="Mask Group 4"
                            transform="translate(6765 1319)"
                            clipPath="url(#clipPath)"
                          >
                            <path
                              id="Vector_29"
                              data-name="Vector 29"
                              d="M764.717,362.716l.006-68.775v-.1A20.077,20.077,0,0,0,778.89,288l26.824-27.174a19.515,19.515,0,0,0,5.68-14.014l65.893-.093s-2.36,43.7-29.789,70.47C815.816,348.1,758.768,362.716,764.717,362.716Z"
                              transform="translate(-7526.786 -1563.216)"
                              fill="#ffffff"
                              stroke="#ebebeb"
                              strokeWidth={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </li>
                  )}

                </ul>
              </div>
              <div className="section-grid-item">
                <div className="services-we-served-header">
                  <h2 className="primary-heading">Real Success, <br/> Real Impact</h2>
                  <p className='secondary-heading'>Have a look on our stories of success</p>
                  <Link href="/portfolio" className="btn-link btn-icon-left">
                    <span className="btn-icon">
                      <svg
                        width={20}
                        height={19}
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6.66667L9.62963 0L20 6.66667L9.62963 13.7037L0 6.66667Z"
                          fill="#000000"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.115234 11.6599L1.36481 9.82227L9.98635 15.6849L18.2459 9.83438L19.5304 11.6478L10.0122 18.3898L0.115234 11.6599Z"
                          fill="#000000"
                        />
                      </svg>
                    </span>
                    Case Studies
                  </Link>
                </div>
                <div className="services-we-served-search">
                  <h3 className="headeservices-we-served-search-content">
                    Not sure what you need?
                    Find the right solution or talk to our experts.
                  </h3>
                  <div className="search-input-box" id='visionBtnDiv'>

                    <button onClick={() => {
                      handleClick(); scrollToFormVision()
                    }}
                      type="button"
                      id='talk-btn'
                      className="search-btn"
                    >
                      Talk To A Consultant

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}


export default Website