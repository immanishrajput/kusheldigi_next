"use client";
// import "./section7.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../../globals.css";
import "./obtech.css";
import Navbar from "../../COMMON/Navbar";

import Footer from "../../COMMON/Footer";
import Head from "next/head";
import Link from "next/link";

const d1 = [
  {
    title1: "Industries",
    title2: "IT Solution",
  },
  {
    title1: "Client Location",
    title2: "United States",
  },
  {
    title1: "Key Technologies",
    title2: "PHP",
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
    title: "Web Development",
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
    link: "/topbrasstactical",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216979/down2_m0c8fa.png",
    title1: "Kickeez",
    title2: "E-commerce, Bigcomerce ",
    link: "/kick-eez",
  },
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217009/down3_ucxpri.png",
    title1: "Sites And Scopes",
    title2: "E-commerce, Bigcomerce ",
    link: "/sitesandscopes",
  },
];

function Obtechenterprise() {
  const [selectS4, setSelectS4] = useState(0);
  const [selectdata, setSelectdata] = useState(d2[0].data);
  const [animationDirection, setAnimationDirection] =
    useState("slide-in-right");

  const handleSelectionChange = (index) => {
    setAnimationDirection("slide-out-left");

    setTimeout(() => {
      setSelectS4(index);
      setSelectdata(d2[index].data);
      setAnimationDirection("slide-in-right");
    }, 300);
  };

  return (
    <div className="case1wrap home-main">
      <Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta
          property="og:title"
          content="Kushel Digi | Expert eCommerce Development Services"
        />
        <meta
          property="og:description"
          content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
        />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kushel Digi | Expert eCommerce Development Services"
        />
        <meta
          name="twitter:description"
          content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png"
        />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />

        <link
          rel="canonical"
          href="https://www.kusheldigi.com/obtechenterprise "
        />
      </Head>

      <Navbar />
      {/* first sectino */}

      <section className="case1firsec">
        <img
          src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437338/Group_1171279511_k69yqk.png"
          alt="kushel"
          className="case1fill"
        />
        {/* <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216400/case1fil_bwtual.png" alt="kushel" className="case1fill" />
        <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216437/case1bg_j1tw2e.png" alt="kushel" className="case1bg" /> */}

        <div className="cas1cont1wrap">
          <div className="case1fircont">
            <div className="case1fifirco">
              {/* left  */}
              <div className="ca1firleft">
                <img
                  src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437338/Group_1171279510_ocghtg.png"
                  alt="obtechenterprise logo"
                />
              </div>

              <div className="btn-caseG">
                <p className="ca1firrigh">
                  Obtech Enterprise is an emerging international brand that
                  offers premium-quality enterprise software engineering
                  solutions.
                </p>
                <Link
                  className="btn-case-port"
                  href="https://obtechenterprise.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go Live
                </Link>
              </div>
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
      <section className="case2secsec">
        <div className="case2seccont">
          {/* <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746537844/madfish-logo1_ghjavp.png" alt="kushel" className="cs2i1" /> */}
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216503/case2imgs1_xngbpg.png"
            alt="kushel"
            className="cs2i1"
          />

          <div className="sc2_main_content">
            <h1>Client Background</h1>
            <p>
              {" "}
              This brand is serving clients across the globe with Infrastructure
              as a Service (IaaS) and Management as a Service (MaaS) products.
              Their services include ERP solutions development, CRM integration.
              UI/UX Design, supply chain management, and so on.
            </p>
            <p>
              Knowing a vast range of services this brand offers, its platform
              wasn’t able to present them effectively. That’s why the client
              reached out to us to make certain website changes. Kushel Digi
              Solutions was well-prepared with its custom strategy to build a
              reliable PHP-backed website for Obtech Enterprises.
            </p>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730216538/c2el1_ljp05j.png"
          alt="kushel"
          className="c2el1"
        />
      </section>
      <div className="PortfolioChallenges">
        <div className="PortfolioChallengeMain">
          <h4>Challenges</h4>
          <div>
            <p>
              The primary challenge was to design and develop an end-to-end
              e-commerce solution that is lightweight, secure, and scalable.
              There was a need to create a fully custom admin dashboard, clear
              service details, fast and optimal mobile-first user experience.
            </p>
            <br />

            <p>
              Though we had the option of choosing CMS and other platforms but
              considering the client’s needs, our team said yes to the project
              and ensured a smooth user journey. Outdated elements were another
              challenge that we had to replace with modern ones.
            </p>
          </div>
        </div>
        <div className="portfolioImageChallenge">
          <img
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437338/Group_1171279506_fsejme.png"
            // src="https://res.cloudinary.com/dal5dlztv/image/upload/v1746514576/2nd-A-challenges_hdngwv.png"
            alt="kushel"
          />
        </div>
      </div>

      {/* third section  */}
      <section className="case3secthir">
        <div className="sc3sectcont">
          {/* left side */}
          <div className="s3secltleft">
            <div className="c3s3_head">
              <h3>Solution</h3>
              <p></p>
            </div>

            <p className="s3theeparas">
              Considering all the aspects, Kushel Digi Solutions formulated a
              long-term and scalable solution for Obtech Enterprises.
            </p>

            <p className="s3theeparas">
              We started with the creation of website layouts for every page to
              be made for the site.Knowing that the brand is serving an{" "}
              <strong>ecommerce enterprise solution,</strong> we ensured to use
              the right elements.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437338/Group_1171279508_n1e2kh.png"
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
          pauseOnFocus: false,
          pauseOnHover: true,
          autoplay: true,
          interval: 3000,
          pagination: true,
          arrows: false,
        }}
      >
        <SplideSlide>
          <section className="case3secfour">
            <img
              src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437338/Group_1171279511_k69yqk.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1">
                <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437916/Group_1171279519_zc2ztq.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata14">
                <h4>Backend Development</h4>
                <p>
                  We created the backend of Obtech using PHP, SQL, and other
                  important tools to ensure user- centric system support. The
                  solution included the creation of a custom admin panel,
                  product management system, and so on.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour" id="case3secfour22">
            <img
              src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437338/Group_1171279511_k69yqk.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="bgshowdb11">
                <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437916/Group_1171279515_abvx4l.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata14">
                <h4>User Interface</h4>
                <p>
                  All the UIs were developed using Figma and Bootstrap to add a
                  modern touch. These aided in optimizing the mobile and desktop
                  browsing experience. In addition, the navigation has been
                  simplified to a great extent.
                </p>
              </div>
            </div>
          </section>
        </SplideSlide>

        <SplideSlide>
          <section className="case3secfour">
            <img
              src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437338/Group_1171279511_k69yqk.png"
              alt="kushel"
              className="c1btimage"
            />

            <div className="cas3s4con" id="cas3s4connn">
              <div className="bgshowdb1" id="bgshowdb11">
                <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1751437917/Group_1171279572_tgsnra.png" />
              </div>

              <div className="cas3circldata" id="cas3circldata14">
                <h4>Testing Q&A</h4>
                <p>
                  For optimal performance, we executed rigorous testing to build
                  bug-free functionality across browsers and devices. Along with
                  that, Kushel Digi Solution is offering post-development
                  support so the client’s site runs without any interruptions or
                  errors.
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
              Kushel Digi committed to transform your tech solutions into
              impactful brands by ensuring unique customer experiences at every
              digital touchpoint through our structured process.{" "}
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
                  className={`${
                    selectS4 === index && "addthsomfbg"
                  } cursor-pointer`}
                >
                  {d2Item?.title}
                </p>
              ))}
            </div>

            {/* Right Section with Animation */}
            <div className={`c2fibbotrigh ${animationDirection} `}>
              <img
                src={selectdata?.img}
                className="selectdataimg"
                alt="kushel"
              />
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

      <div className="Mainresult_Portfolio">
        <div className="result_Portfolio">
          <h5>Result & Impact</h5>
          <h6>
            The launch of Obtech Enterprise’s new website led to measurable
            improvements:
          </h6>
          <ul>
            <li>
              A significant increase in conversion rate within the first quarter
              post-launch
            </li>
            <li>
              Faster load times and all thanks to optimized code and server-side
              caching
            </li>
            <li>
              Zero platform limitations, as it provides complete freedom to
              scale and update features
            </li>
            <li>
              Better customer retention rate via a faster, mobile-friendly user
              experience
            </li>
          </ul>
        </div>
      </div>

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
            <h4>Got a new project idea? Let’s make it happen!</h4>
            <p>
              See how our specialized approach can drive your project forward
              with impactful results{" "}
            </p>
          </div>

          <div className="csizbot">
            <a href="/contact-us">
              <button>
                <span>Start a conversation</span>
              </button>
            </a>
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

                <a href={project?.link}>
                  <button>
                    <span>Case study</span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Obtechenterprise;
