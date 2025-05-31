"use client"
// import "./ride.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import './sites.css'

import '../globals.css'
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
function page() {

  const d1 = [
    {
      title1: "Industries",
      title2: "Ecommerce",
    },
    {
      title1: "Client Location",
      title2: "United States",
    },
    {
      title1: "Key Technologies",
      title2: "BigCommerce",
    },
  ];

  const d2 = [
    {
      title: "Discovery Phase",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216631/c2d1_j5clbp.png",
        title: "Discovery Phase",
        para: "This phase is the foundation of a successful project. We focus on having a deep understanding about your business, target audience and goals to ensure that our solutions align with your business goal.",
        points: [
          "In-depth Market Research",
          "Requirement Analysis",
          "Strategic Planning for effective execution ",
        ],
      },
    },
    {
      title: "UX/UI Design",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216874/c1bg5_wnepdj.png",
        title: "UX/UI Design",
        para: "We believe in user-centric design principles and to achieve this we design engaging and user friendly interfaces that align with your brand's identity. ",
        points: [
          "User Journey Mapping",
          "Brand Identity Integration",
          "Responsive Design",
        ],
      },
    },
    {
      title: "Development",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216850/c1bg4_wxl6sh.png",
        title: "Web development",
        para: "Our development team is always committed to bringing your vision to life by integrating the latest technologies and best practices to build a scalable eCommerce platform.",
        points: ["Customized Solutions", "Optimized Code", "Agile Approach"],
      },
    },
    {
      title: "Testing Automation",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216817/c1bg3_zabfta.png",
        title: "Testing Automation",
        para: "We thoroughly test every feature on the platform, using automation to deliver reliability, security, and an error-free experience before the user's eyes in front of its launch.",
        points: [
          "Comprehensive Testing",
          "Automated Quality Assurance",
          "User Acceptance Testing",
        ],
      },
    },
    {
      title: "Product-to-market launch",
      data: {
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216787/c1bg2_eog7dh.png",
        title: "Product-to-market launch",
        para: "In this final phase of development, we introduce your platform to the market and ensure a smooth and impactful launch that maximizes visibility and customer engagement.",
        points: [
          "Go-to-Market Strategy",
          "Performance Monitoring",
          "Ongoing Support",
        ],
      },
    },
  ];

  const projects = [
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216954/down1_kgzcrg.png",
      title1: "Topbrass tactical",
      title2: "E-commerce, Bigcomerce ",
      link: "/topbrass"
    },
    {
      img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216979/down2_m0c8fa.png",
      title1: "Kickeez",
      title2: "E-commerce, Bigcomerce ",
      link: "/kick-eez"
    },
    {
      img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746541118/image_3_dptpxb.png",
      title1: "A&I Parts Center",
      title2: "E-commerce, Bigcomerce ",
      link: "/Ai2"
    },
  ];

  const [selectS4, setSelectS4] = useState(0);
  const [selectdata, setSelectdata] = useState(d2[0].data);
  const [animationDirection, setAnimationDirection] = useState("slide-in-right");

  const handleSelectionChange = (index) => {
    setAnimationDirection("slide-out-left");

    setTimeout(() => {
      setSelectS4(index);
      setSelectdata(d2[index].data);
      setAnimationDirection("slide-in-right");
    }, 300);
  };

  const generateMetadata = ({ params }) => ({
    title: 'Sites and Scopes | Ecommerce Growth with BigCommerce Website Development',
    description: "See how Sites and Scopes boosted online sales with Kushel Digi Solutions custom BigCommerce website development services. Real results in this case study."
  });

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription ? metaDescription.content = description :
      document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
  }, []);

  return (
    <div className="case1wrap home-main">


      <Navbar />
      {/* first sectino */}
      <section className="case1firsec">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png"
          alt="kushel"
          className="case1fill"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744695577/pistol-sights_2_f2ydiu.png"
          alt="kushel"
          className="case1bg"
        />

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <div>
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699185/Group_1171279222_byjflc.png"
                    alt="kushel"
                  />
                </div>
                <p>Sites and Scopes</p>
              </div>

              <p className="ca1firrigh">
                Sites and Scopes has specialized experience in delivering high performance optics and accessories for marksmen, hunters, and tactical professionals. All their aim is on delivering a precision-engineered product for utmost reliability and clearness in any environment.
              </p>
            </div>

            {/* secont */}
            <div className="case1secbot">
              {d1?.map((d, index) => (
                <div key={index} className="singleca1bt">
                  {/* left */}
                  <div className="sli1left">
                    <p>{d?.title1}</p>
                    <h3>{d?.title2}</h3>
                  </div>

                  {index != 2 && <p className="horizline"> </p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* secon section  */}
      <section className="case2secsec2" id="case2SiteScope">
        <div className="case2seccont">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216503/case2imgs1_xngbpg.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>

            <p>
              Sites and Scopes has specialized experience in delivering high performance optics and accessories for marksmen, hunters, and tactical professionals. All their aim is on delivering a precision-engineered product for utmost reliability and clearness in any environment.

            </p>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744696116/Ellipse_2616_2_a0lkd1.png"
          alt="kushel"
          className="c2el1"
        />
      </section>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head2" id="c3_SitesScope">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              Sites & Scope  was pursuing a new, strategically sophisticated partner to help grow their ecommerce revenue. They identified Americaneagle.com, a full-service digital agency with big brand experience and respected solutions in ecommerce, as the ideal partner to build their new site. With the agency’s help, they wanted to implement a more user-friendly ecommerce platform, refine search engine optimization (SEO), develop content to support that optimization, and launch an intelligent digital advertising campaign to maximize return on ad spend (ROAS).



            </p>

            <p className="s3theeparas">
              {" "}
              The new BigCommerce website for Gordy & Sons needed to successfully integrate their graphical point-of-sale environment and inventory management system, CounterPoint. It was critical that the two systems communicated seamlessly to ensure accurate, real-time data for product inventory, orders, and customer detail.

            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699366/Group_1171281292_wjrtby.png"
            alt="kushel"
            className="c3antoimg"
          />
        </div>
      </section>

      {/* fourth  section  */}

      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pagination: true,
          arrows: false,
          pauseOnHover: false
        }}
      >
        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744697099/Superior_Optics_Unbeatable_Performance._posiad.png"
              alt="kushel"
            />
            <div className="cas3s4con" id="case3_Black_PortCircle">
              <div className="bgshowdb2">
                <img
                  src=" https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699370/Group_1171281294_vdobgy.png"
                  alt="kushel"
                  className="shadowbg2" id="caBlack_PortCircle"
                />
              </div>

              <div className="cas3circldata2" id="sites_port_circle">
                <h4>Custom Catalog Page</h4>
                <p>
                  2ndamendment Armory was pursuing a new, strategically sophisticated partner to help grow their ecommerce revenue. They identified Americaneagle.com, a full-service digital agency with big brand experience and respected solutions in ecommerce, as the ideal partner to build their new site. With the agency’s help.

                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img
              className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744697099/Superior_Optics_Unbeatable_Performance._posiad.png"
              alt="kushel"
            />

            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699365/Group_1171281295_ia7uff.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="sites_port_circle">
                <h4>Product Detail Page</h4>
                <p>
                  2ndamendment Armory was pursuing a new, strategically sophisticated partner to help grow their ecommerce revenue. They identified Americaneagle.com, a full-service digital agency with big brand experience and respected solutions in ecommerce, as the ideal partner to build their new site. With the agency’s help.

                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour2">
            <img className="case4bggirl"
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744697099/Superior_Optics_Unbeatable_Performance._posiad.png" alt="kushel" />

            <div className="cas3s4con">
              <div className="bgshowdb2">
                <img
                  src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744699364/Group_1171281296_oqb8jn.png"
                  alt="kushel"
                  className="shadowbg2"
                />
              </div>

              <div className="cas3circldata2" id="sites_port_circle">
                <h4>Advance Filtering or Shorting Features</h4>
                <p>
                  2ndamendment Armory was pursuing a new, strategically sophisticated partner to help grow their ecommerce revenue. They identified Americaneagle.com, a full-service digital agency with big brand experience and respected solutions in ecommerce, as the ideal partner to build their new site. With the agency’s help.

                </p>
              </div>
            </div>
          </section>
        </SplideSlide>
      </Splide>

      {/* fivth  section  */}
      <section className="case2fivsec">
        <div className="c2fivsecont">
          {/* top  */}
          <div className="c2fivtopsec">
            <h4>How we build the E-Commerce development Process</h4>
            <p>
              Kushel Digi committed to transform your tech solutions into impactful brands by ensuring unique customer experiences at every digital touchpoint through our  structured process.

            </p>
          </div>

          {/* bbottm  */}
          <div className="c22fivbotsec">
            {/* Left Section */}
            <div className="c3fivbtoleft">
              {d2?.map((d2Item, index) => (
                <p
                  key={index}
                  onClick={() => handleSelectionChange(index)}
                  className={`${selectS4 === index && "addthsomfbg"
                    } cursor-pointer`}
                >
                  {d2Item?.title}
                </p>
              ))}
            </div>

            {/* Right Section with Animation */}
            <div className={`c2fibbotrigh ${animationDirection} `}>
              <img src={selectdata?.img} className="selectdataimg" alt="kushel" />
              <div className="serigh_macont">
                <h4>
                  <span>0{selectS4 + 1}/</span> {selectdata?.title}
                </h4>
                <p className="sledatapar">{selectdata?.para}</p>
                <ul>
                  {selectdata?.points?.map((point, index) => (
                    <li key={index}>
                      <span>
                        <TiTick className="TiTickfds" />
                      </span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="sliderbotse">
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                autoplay: true,
                interval: 3000,
                pagination: true,
                arrows: false,
                pauseOnHover: false
              }}
            >
              {d2?.map((item, index) => (
                <SplideSlide key={index}>
                  <div className={`c2fibbotrigh`}>
                    <img
                      src={item?.data?.img}
                      className="selectdataimg"
                      alt="kushel"
                    />

                    <div className="serigh_macont">
                      <h4>
                        <span>0{index + 1}/</span> {item?.data?.title}
                      </h4>

                      <p className="sledatapar">{item?.data?.para}</p>

                      <ul>
                        {item?.data?.points?.map((point, index) => (
                          <li key={index}>
                            <span>
                              <TiTick className="TiTickfds" />
                            </span>{" "}
                            {point}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>

      {/* six section  */}
      <section className="cs2sexiesec">
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216672/similarl1_kq1btu.png"
          alt="kushel"
          className="similarl1"
        />
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216703/similarl2_yt5kqi.png"
          alt="kushel"
          className="similarl2"
        />

        <div className="c2sixconta">
          <div className="cssixtop">
            <h4>Got a new project idea? Let’s make it happen!            </h4>
            <p>See how our specialized approach can drive your project forward with impactful results
            </p>
          </div>

          <div className="csizbot">
            <a href="contact-us"><button>
              <span>Start a conversation</span>
            </button></a>
          </div>
        </div>
      </section>

      {/* seven section  */}
      <section className="sc2sevensec">
        <div className="sc2sevnconta">
          <div className="sc2sev_head">
            <h2>Related Projects</h2>
            <p></p>
          </div>

          <div className="sc2_Sev_projects">
            {projects?.map((project, index) => (
              <div key={index} className="singlprojseve">
                <img src={project?.img} alt="kushel" />

                <div className="seven_titls">
                  <p className="sep1">{project?.title1}</p>
                  <p className="sep2">{project?.title2}</p>
                </div>

                <a href={project?.link}> <button>
                  <span>Case study</span>
                </button></a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default page;