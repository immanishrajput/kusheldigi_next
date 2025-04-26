"use client";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { FaTwitterSquare, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import { useParams } from "next/navigation";
// import confetti from "canvas-confetti";
import Footer from '../../COMMON/Footer'
import Navbar from "../../COMMON/Navbar";
export default function BlogDetails() {
  const baseurl = "https://backblog.kusheldigi.com";
  const { id } = useParams();

  const [currentBlog, setCurrentBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPageUrl(window.location.href);
    }
  }, []);
  const [confetti, setConfetti] = useState(null);

  useEffect(() => {
    import("canvas-confetti").then((module) =>
      setConfetti(() => module.default)
    );
  }, []);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const [blogRes, recentRes] = await Promise.all([
          fetch(`${baseurl}/api/v1/auth/singleblog/${id}`),
          fetch(`${baseurl}/api/v1/auth/getRecentBlog`),
        ]);

        if (blogRes.ok) {
          const blogData = await blogRes.json();
          setCurrentBlog(blogData?.data);
        } else {
          console.error("Failed to fetch blog details");
        }

        if (recentRes.ok) {
          const recentData = await recentRes.json();
          setRecentBlogs(recentData?.blogs || []);
        } else {
          console.error("Failed to fetch recent blogs");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    if (id) fetchBlogData();
  }, [id]);

  const socialIconRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const cardSocialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !thirdSectionRef.current ||
        !socialIconRef.current ||
        !cardSocialRef.current
      )
        return;

      let sectionTop = thirdSectionRef.current.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      let cardSectionTop = cardSocialRef.current.getBoundingClientRect().top;
      let halfSectionScrolled = cardSectionTop < windowHeight;

      socialIconRef.current.classList.toggle(
        "fixed",
        sectionTop <= windowHeight / 2 && !halfSectionScrolled
      );
      socialIconRef.current.classList.toggle("hidden", halfSectionScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id, textClass) => {
    const popAnimation = document.getElementById(id);
    const thanksTxt = document.querySelector(`.${textClass}`);

    if (!popAnimation || !thanksTxt) return;

    thanksTxt.classList.add("displayBlock");
    popAnimation.style.width = "112px";

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      thanksTxt.classList.remove("displayBlock");
      thanksTxt.classList.add("displayNone");
      popAnimation.style.width = "38px";
    }, 2000);
  };

  const popAniRef = useRef(null);
  const [showThanks, setShowThanks] = useState(false);

  const handleClick1 = () => {
    setShowThanks(true);
    if (popAniRef.current) {
      popAniRef.current.style.width = "112px";
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setShowThanks(false);
      if (popAniRef.current) {
        popAniRef.current.style.width = "38px";
      }
    }, 2000);
  };
  return (
    <>
    <Navbar/>
    
      <section className="MainBloggSeC">
       
        {currentBlog ? (
          <div>

            <h3 className="MainBloggSeCh3">{currentBlog.title}</h3>
            <div className="MainBloggSeCh3Img">
              <img src={currentBlog.banner?.[0]} alt={currentBlog.title} />
            </div>
          </div>
        ) : (
          <p>Loading blog...</p>
        )}

        {/* Social Icons */}
        <section className="third-section" ref={thirdSectionRef}>
          <div className="thirddd">
            <div className="social-icon" ref={socialIconRef}>
            <FacebookShareButton url={currentPageUrl} quote="Check out this blog!">
              <div className="icon">
                <FaFacebook />
              </div>
              </FacebookShareButton>
              <LinkedinShareButton url={currentPageUrl} title="Check out this blog!" summary="An interesting blog you must read!" source="https://www.kusheldigi.com">
              <div className="icon">
                <FaLinkedin />
              </div>
              </LinkedinShareButton>
              <TwitterShareButton url={currentPageUrl} title="Check out this blog!">
              <div className="icon">
               <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742891237/logo_fszyod.png"/>
              </div>
              </TwitterShareButton>
              <div
                className="icon"
                id="iconPop"
                onClick={() => handleClick("iconPop", "thanksTxt1")}
              >
                <span className="thanksTxt1 displayNone">Thanks</span>
                <MdCelebration />
              </div>
            </div>

            <div className="mainBloContentSt">
              <div className="mainBloContentStPara">
             
                <div className="profileDate">
                 
               <div>
               <p> <b>{currentBlog?.author}</b></p>
              <p>{currentBlog?.designation || 'N/A'}</p>
           <br/>
              <p><b> {currentBlog?.time}</b> Read Deep Think Big<br/> <br/>
              </p>
               </div>
            {
            new Date(currentBlog?.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
            }
        </div>
                
                
              </div>

              {/* Blog Content */}
              <div className="mainBloContentDiv">
                <p
                  className="mainBloContentPa"
                  dangerouslySetInnerHTML={{ __html: currentBlog?.description }}
                ></p>
              </div>
            </div>
            <div ref={cardSocialRef} className="cardSocial1">
              <div className="profile">
                {/* <img src="assets/Cybersecurity_chalanges_2025-blog-hero-min.webp" alt="Author" /> */}
                <div className="profile-info">
                  <h4>{currentBlog?.author}</h4>
                  
                </div>
              </div>
              <div className="social-icons">
              <FacebookShareButton url={currentPageUrl} quote="Check out this blog!">
                <div className="icon">
                  <FaFacebook/>
                
                </div>
                </FacebookShareButton>
                <LinkedinShareButton url={currentPageUrl} title="Check out this blog!" summary="An interesting blog you must read!" source="https://www.kusheldigi.com">
                <div className="icon">
                  <FaLinkedin/>
                </div>
                </LinkedinShareButton>
                <TwitterShareButton url={currentPageUrl} title="Check out this blog!">
                <div className="icon">
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742891237/logo_fszyod.png"/>
                  
                </div>
                </TwitterShareButton>
                <div
                  id="popAni"
                  className="icon"
                  ref={popAniRef}
                  onClick={() => handleClick1("popAni", "thanksTxt1")}
                >
                  <span className={`thanksTxt ${showThanks ? "displayBlock" : "displayNone"}`}>Thanks</span>
                  <MdCelebration/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Blogs Section */}
        <section className="cardsectFiveMain">
          <div className="moreee">
            <div className="cardsectFive">
              <p>More in Culture</p>
              <hr />
            </div>

            <section className="cardMainBlogSec">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((item, index) => (
                  <Link href={`/blogdetails/${item._id}`} key={index} className="cardBlogSt">
                    <div className="cardBlogStImg">
                      <img src={item.images?.[0]} alt={item.title} />
                    </div>
                    <p className="cardBlogStpaa">
                      {new Date(item?.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                   <div className="cardBlogStpaara1">
                   <p className="cardBlogStpaara">{item.title}</p>
                  
                   </div>
                    <p className="cardBlogStpaaragr">{item.subdescription}</p>
                    <p className="cardBlogStpaarw">Read More</p>
                  </Link>
                ))
              ) : (
                <p>Loading recent blogs...</p>
              )}
            </section>
          </div>
        </section>
        <Footer/>
      </section>
    </>
  );
}
