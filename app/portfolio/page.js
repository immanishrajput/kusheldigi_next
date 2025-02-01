"use client"
import ContactForm1 from "../COMMON/ContactForm1";
import whatsApp from "../../public/assets//whatsapp.png";
import call from "../../public/assets//telephone.png"
// import "./portfolio.css";
import abimg1 from "../../public/assets//abImg1.png";
import abimg2 from "../../public/assets//abimg2.png";
import abimg3 from "../../public/assets//abimg3.png";
import abimg5 from "../../public/assets//abimg5.png";
import abimg11 from "../../public/assets//abimg11.png";
import mycms from "../../public/assets//mycms.png"
import leftMost from "../../public/assets//leftmost.png";
import gthj from '../../public/assets//gthj.png'
import csRightMost from "../../public/assets//csRightMost.png"
// import { Helmet } from "react-helmet";
import { useState } from "react";
import hrmsname from "../../public/assets//hrmsname.png"
import sainaimg from "../../public/assets//sainaimg.png"
import vrott from "../../public/assets//vrott.png"
// import trimute1 from '../../public/assets/trimute1.png'
import saka from '../../public/assets//SAKA.png';
import tikus11 from '../../public/assets//tikus11.png';
import test111 from '../../public/assets//tset111.png';
import ikk1 from '../../public/assets//likk1.png';
import jk11 from '../../public/assets//jkki1.png';
import custom11 from '../../public/assets//custom11.png';
// new logos 
 import webauxil from "../../public/assets/webauxlogo.png"
 import webdigil from "../../public/assets/webdigilogo.png"
 import websurvinl from "../../public/assets/websuvrinlogo.png"
 import webushal from "../../public/assets/webushalogo.png"
 import webmajorl from "../../public/assets/webmajorlogo.png"
 import webinstal from "../../public/assets/webinstalogo.png"
 import webjuniorl from "../../public/assets/webjuniorlogo.png"
 import toffle from "../../public/assets/touffle.png"
 import objtech from "../../public/assets/webobtech.png"
 import weba1 from "../../public/assets/weba1.png"
 import weba2 from "../../public/assets/weba2.png"
 import weba3 from "../../public/assets/weba3.png"
 import weba4 from "../../public/assets/weba4.png"
 import weba5 from "../../public/assets/weba5.png"
 import weba6 from "../../public/assets/weba6.png"
 import weba7 from "../../public/assets/weba7.png"
 import weba8 from "../../public/assets/weba8.png"
 import weba9 from "../../public/assets/weba9.png"
 import oddo1 from "../../public/assets/oddo1.png"
 import ushalogo from "../../public/assets/ushalogo.png"
 import Navbar from "../COMMON/Navbar";
 import Footer from "../COMMON/Footer";
import Image from "next/image";
import '../globals.css'
const caseStudies = [
  // one
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/q_auto:best/v1724927291/Group_1000010192_izwiae.png",
    img2: abimg1, 
    btnText: "VIEW CASE STUDY",
    link: "/kick-eez",
    alt: "kusheldigi case study-KICK-EEZ",
    width: 500, 
    height: 200, 
    quality: 100, 
    priority: true, 
    unoptimized: true,
    category: ["ecommerce"],
     height1:48,
     width1:129
  },
  // two
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/q_auto:best/v1724927287/Group_1000010193_geczey.png",
    img2: abimg2,
    btnText: "VIEW CASE STUDY",
    link: "/pro-track",
    alt: "kusheldigi Our Portfolio-PRO",
    width: 500, 
    height: 200, 
    quality: 100, 
    priority: true, 
    unoptimized: true,
    category: ["ecommerce"],
    height1:69,
    width1:69
  },
// three
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724927284/Group_1000010194_a1kfrj.png",
    img2: abimg3,
    btnText: "VIEW CASE STUDY",
    link: "/rely",
    width: 500, 
    height: 200,
    alt:"case study-rely",
    category: ["ecommerce"],
    height1:69,
    width1:69
  },
// four
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725880369/image_2_jkmhgr.png",
    img2: abimg5,
    btnText: "VIEW CASE STUDY",
    link: "/solenoid-ninja",
    width: 500, 
    height: 200,
    alt:"case study-Solenoid Ninja",
    category: ["ecommerce"],
     height1:29,
    width1:129

  },
// five

  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/Group_1171275953_ylodxi.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725952762/image_75_ywf6np.svg",
    btnText: "VIEW CASE STUDY",
    link: "/ballistic",
    alt:"case study-Speck",
    width: 500, 
    height: 200,
    category: ["ecommerce"],
    height1:39,
    width1:129

  },
  // six
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/image_5_ds431l.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725953651/image_18_1_j5e3am.svg",
    btnText: "VIEW CASE STUDY",
    link:"/sites",
    // target: "_blank",
    width: 500, 
    height: 200,
    alt:"case study-Karol Bagh",
    category: ["ecommerce"],
    height1:50,
    width1:119

  },
// seven
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886338/image_6_s5p9p0.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725953729/logo-white_1_1689966883__67774_1_yqlhdf.svg",
    btnText: "VIEW CASE STUDY",
    link: "/TopBrass",
    width: 500, 
    height: 200,
    alt:"case study-Slides365",
    category: ["ecommerce"],
    height1:32,
    width1:129

  },
// eight

  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/Group_1000010185_1_h1dk25.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725953057/slide_1_gelwuz.svg",
    btnText: "VIEW CASE STUDY",
    link:"/Slidesdesign",
    width: 500, 
    height: 200,
    target: "_blank",
    alt:"case study-Chingsingh",
    category: ["ecommerce"],
    height1:101,
    width1:69


  },
  // nine
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730459192/image_pknari.png",
    img2: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730459236/Group_1171275966_xq0qb4.png",
    btnText: "VIEW LIVE SITE",
    link: "/2ndamendment",
    width: 500, 
    height: 200,
    alt:"case study-2ndamendment",
    category: ["ecommerce"],
    height1:74,
    width1:74

  },
  // ten
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1730447686/home-slider-1_ujqnho.png",
    img2: gthj,
    btnText: "VIEW CASE STUDY",
    link:"/Ai",
    width: 500, 
    height: 200,
    alt:"case study-Hazoorilal",
    category: ["ecommerce"],
    height1:129,
    width1:76


  },
  // eleven
  {
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1732807218/image_ak8xup.png",
    img2: "https://res.cloudinary.com/dgif730br/image/upload/v1732807319/logo_1_1688114115__84399_2_iaqhon.png",
    btnText: "VIEW CASE STUDY",
    width: 500, 
    height: 200,
    link:"/rideready",
    alt:"case study-Hazoorilal",
    category: ["ecommerce"],
    height1:49,
    width1:50


  },
// twelve
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/Group_1171275991_nrwbso.png",
    btnText: "VIEW CASE STUDY",
    link: "/crazyCMS",
    img2: mycms,
    width: 500, 
    height: 200,
    alt:"case study-CEO Wheels",
    category: ["website"],
    height1:69,
    width1:69


  },
// thirty
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/Group_1171275950_eddxtx.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725952623/Layer_1_15_ilqoor.svg",
    btnText: "VIEW CASE STUDY",
    alt:"case study-Granny's finest",
    category: ["website"] ,
    width: 500, 
    height: 200,
    height1:39,
    width1:129
    // link: "/fairChildFun",

  },
// forty
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/Group_1171275960_jrfrmk.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725952841/image_76_tovttv.svg",
    btnText: "VIEW CASE STUDY",
    link: "/woodView",
    alt:"case study-Bulletproof",
    category: ["website"],
    width: 500, 
    height: 200,
    height1:61,
    width1:129

  },
// fifty

  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886339/Group_1171275992_lfqyjn.png",
    img2: hrmsname,
    btnText: "VIEW CASE STUDY",
    // link:"https://skknbykim.com/",
    target: "_blank",
    // alt:"case study-skkn",
    category: ["website"],
    width: 500, 
    height: 200,
    height1:16,
    width1:69


  },
// sixty
  {
    img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1725886340/loginImage.bf19a61a3e8065a38934_kqnphz.png",
    img2: "https://res.cloudinary.com/ecommerce-website/image/upload/v1725952993/SHUBHALLOYS_j2i6dz.svg",
    btnText: "VIEW CASE STUDY",
    link: "/subhAlloy",
    alt:"case study-Woolrich",
    category: ["website"],
    width: 500, 
    height: 200,
    height1:11,
    width1:129

  },
// seventy
  {
    img: jk11,

    img2: custom11,
    btnText: "VIEW LIVE SITE",
    // link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["website"],
    width: 500, 
    height: 200,
    height1:22,
    width1:129
  },
  // eighty
  {
    img: weba1,

    img2: webinstal,
    // btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:28,
    width1:129
  },
  // ninty
  {
    img: weba2,

    img2: objtech,
    // btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:72,
    width1:88
  },
  // twenty
  {
    img: weba3 , 

    img2: abimg11,
    btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:61,
    width1:129
  },
  // twentyOne
  {
    img: weba4,

    img2: webauxil,
    // btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:47,
    width1:129
  },
  // twentytwo
  {
    img: weba5,

    img2: webjuniorl,
    // btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:43,
    width1:129
  },
  // twentyThree
  {
    img: weba6,

    img2: websurvinl,
    // btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:38,
    width1:129
  },
  {
    img: weba7,

    img2: toffle,
    // btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:67,
    width1:129
  },
  {
    img: weba8,

    img2: webmajorl,
    // btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:37,
    width1:129
  },
  {
    img: weba9,

    img2: webushal,
    // btnText: "VIEW CASE STUDY",
    link: "/Digitalmna",
    alt:"case study-DigitalMnA Partners",
    category: ["software"],
    width: 500, 
    height: 200,
    height1:37,
    width1:129
  },
  {
    img: sainaimg,
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/Slidesdesign",
    alt:"case study-Slides365",
    category: ["appdevelop"],
    width: 500, 
    height: 200,
   id:"st",
   id1:"st1"
  },

  {
    img:saka,
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/Slidesdesign",
    alt:"case study-Slides365",
    width: 500, 
    height: 200,
    category: ["appdevelop"],
   id:"st",
   id1:"st1"
  },

  {
    img:tikus11,
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/Slidesdesign",
    alt:"case study-Slides365",
    category: ["appdevelop"],
    width: 500, 
    height: 200,
   id:"st",
   id1:"st1"
  },
  {
    img:test111,
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/Slidesdesign",
    alt:"case study-Slides365",
    category: ["appdevelop"],
    width: 500, 
    height: 200,
   id:"st",
   id1:"st1"
  },
  {
    img:ikk1,
    // img2: "",
    btnText: "VIEW LIVE SITE",
    // link: "/Slidesdesign",
    alt:"case study-Slides365",
    category: ["appdevelop"],
    width: 500, 
    height: 200,
   id:"st",
   id1:"st1"
  },

  {
    img: vrott,
    btnText: "VIEW LIVE SITE",
    // link: "/Slidesdesign",
    alt:"case study-Slides365",
    category: ["appdevelop"],
    width: 500, 
    height: 200,
    id:"st",
    id1:"st1"
  },
 
  {
    img: oddo1,
    // btnText: "VIEW LIVE SITE",
    // link: "/Slidesdesign",
  img2:ushalogo , 
    alt:"case study-Slides365",
    category: ["oddodevelop"],
    width: 500, 
    height: 200,
    height1:37,
    width1:129
    // id:"st",
    // id1:"st1"
  },
 
  
];

const Portfolio = () => {

  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }

  const topData = [
    {
      num: "12+",
      title: "Years on the Market",
    },
    {
      num: "90+",
      title: "Experts on Board",
    },
    {
      num: "300+",
      title: "Complete Projects",
    },
  ];

 
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredCaseStudies = filteredCategory === "All"? caseStudies: filteredCategory === "ecommerce" ? caseStudies.filter((data) => data.category.includes(filteredCategory.toLowerCase())).reverse() :  caseStudies.filter((data) => data.category.includes(filteredCategory.toLowerCase()));



  return (
    <>
<Navbar/>
      {/* <Helmet> */}
        <title>Case studies of KushelDigi Solutions</title>
        <meta
          name="description"
          content="Kushel digi has been serving its clients for over 6 years, earning the reputation of a trusted IT partner. Browse some of our success stories."
        />
        <link rel="canonical" href="https://www.kusheldigi.com/portfolio" />
      {/* </Helmet> */}

      <div className="ser-main">

        {/* second section  */}
        <div className="nwPortSec2">

          <Image src={leftMost} className="leftMost" alt="portfolio-design" title=" portfolio-design" />

          <div className="nwPortSec2Cont">
            {/* top  */}

            {/* bottom */}

            <div className="mwPS2_bttom">

              <Image src={csRightMost} className="csRightMost" alt="portfolio-design" title=" portfolio-design" />

              <h2 className="nwPs2head">Our Work</h2>
              <div className="our_btnii">
                <button onClick={() => handleFilterChange("All")} className={`${filteredCategory === "All" && "addbgcclds"}`}>All</button>
                <button onClick={() => handleFilterChange("ecommerce")} className={`${filteredCategory === "ecommerce" && "addbgcclds"}`}>E-Commerce</button>
                <button onClick={() => handleFilterChange("website")} className={`${filteredCategory === "website" && "addbgcclds"}`}>Custom Software</button>
                <button onClick={() => handleFilterChange("software")} className={`${filteredCategory === "software" && "addbgcclds"}`}>Website</button>
                {/* <button onClick={() => handleFilterChange("appdevelop")} className={`${filteredCategory === "appdevelop" && "addbgcclds"}`}>UI/UX</button> */}
                <button onClick={() => handleFilterChange("appdevelop")} className={`${filteredCategory === "appdevelop" && "addbgcclds"}`}>Mobile Apps</button>
                <button onClick={() => handleFilterChange("oddodevelop")} className={`${filteredCategory === "oddodevelop" && "addbgcclds"}`}>ODDO</button>
              </div>
              <div className="mwPS2_boxes">

                {filteredCaseStudies.map((data, index) => (

                  <div id={data?.id1} className="sinCaseStudy" key={index}>
                      <Image src={data.img} className="sinCaseStudyimg" alt={data.alt} title={data.alt} height={data.height} width={data.width}
                     />

                    <div className="csInsiImg">
                      {
                        data?.img2 ?
                      <Image src={data?.img2} alt={data?.alt} title={data?.alt} height={data.height1} width={data.width1}/> 
                      :
                      <p></p>
                      }
                      <a target={data.target} href={data.link}>
                      {
                        data?.btnText && 
                      
                        <button id={data?.id}  className="viewCSbTN">
                          <span>{data?.btnText}</span>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#101010" />
                          </svg>
                        </button>
}
                      </a>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

        <ContactForm1 />

        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <Image className="what-image-universal" src={whatsApp} alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <Image src={call} alt="call-icon" title="call-icon" />
          </button>

        </div>


      </div>
      <Footer/>
    </>
  );
};

export default Portfolio;
