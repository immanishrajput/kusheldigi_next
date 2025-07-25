"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import { FcClock } from "react-icons/fc";

const Blogs = () => {
  const baseUrl = "https://backblog.kusheldigi.com";
  const domainToFilter = "kusheldigi.com";
  const [getAllBlogs, setGetAllBlogs] = useState([]);

  const [allCatBlogs, setAllCatBlogs] = useState([]);
  const [recentBlog, setRecentBlog] = useState([]);

  const [visibleCategories, setVisibleCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [defaultCategories, setDefaultCategories] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const fetchAllBlog = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/getAllBlog`);
      const data = await response.json();
      if (response.ok) {
        const filteredBlogs = data?.blogs?.filter((blog) =>
          blog?.domain?.includes(domainToFilter)
        );
        setGetAllBlogs(filteredBlogs.reverse());
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchLatestBlog = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/recentBlogs`);
      const data = await response.json();

      if (response.ok) {
        setRecentBlog(data?.data);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCatBlogs = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/allcatBlogs`);
      const data = await response.json();

      if (response.ok) {
        console.log("cat", data?.data);
        const firstFive = data?.data.slice(0, 5);
        setAllCatBlogs(data?.data);
        setVisibleCategories(firstFive);
        setDefaultCategories(firstFive);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const featureBlogs = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/featured`);
      const data = await response.json();
      if (response.ok) {
        // setFeatureBlog(data.blogs);
        // console.log("feature", data);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setIsCategorySelected(true);
    const matchedCategory = allCatBlogs.find(
      (cat) => cat.title === categoryTitle
    );
    if (matchedCategory) {
      setFilteredBlogs(matchedCategory.blogs || []);
    } else {
      setFilteredBlogs([]);
    }
  };

  useEffect(() => {
    fetchAllBlog();
    fetchCatBlogs();
    featureBlogs();
    fetchLatestBlog();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const totalPages = Math.ceil(getAllBlogs?.length / tasksPerPage);
  const currentTasks = getAllBlogs?.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (selectedCategory && allCatBlogs.length > 0) {
      handleCategoryClick(selectedCategory);
    }
  }, [selectedCategory, allCatBlogs]);

  const generateMetadata = ({ params }) => ({
    title: "Latest Top eCommerce Trends & Tech Insights | Kushel Digi Blog  ",
    description:
      "Explore expert tips on eCommerce development, digital marketing, web design, and business growth. Stay updated with Kushel Digi’s latest industry insights and trends",
  });

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription
      ? (metaDescription.content = description)
      : document.head.insertAdjacentHTML(
        "beforeend",
        `<meta name="description" content="${description}">`
      );
  }, []);
  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  };
  return (
    <div>
      <Navbar />
      <section className="mainsecBlo">
        {/* header section */}
        <section className="blog-first-section ">
          <div className="contt">
            <div className="typing">
              <h1>Innovate with Us</h1>
            </div>
            <div className="bttnn">
              <button
                className={`button category-button ${isCategorySelected === false ? "active" : ""
                  }`}
                onClick={() => setIsCategorySelected(false)}
              >
                All blogs
              </button>
              {allCatBlogs.map((item, index) => {
                return (
                  // {`button category-button ${isCategorySelected === false ? "active" : ""                      }`}
                  <button
                    key={item._id}
                    onClick={() => handleCategoryClick(item?.title)}
                    className={`button category-button ${selectedCategory === item.title &&
                        isCategorySelected === true
                        ? "active"
                        : ""
                      }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
            <br />
            <div>
              <p
                style={{
                  border: "1px solid rgba(40, 39, 39, 0.17)",
                  marginTop: 20,
                }}
              />
            </div>
            <br />
          </div>
        </section>

        {!isCategorySelected && (
          <>
            <br />
            {/* <br /> */}
          </>
        )}

        {!isCategorySelected && (
          <section className="blog-second-section">
            <div className="bimagelogMain">
              <div className="bimagelog">
                <Link href={`/blog/${getAllBlogs[0]?.slug}`}>
                  <img src={getAllBlogs[0]?.images} alt="" />
                </Link>
              </div>
              <div className="bimageloDi">
                <p className="bimageloDiPa">
                  {new Date(getAllBlogs[0]?.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <div className="bimageloDiPara11">
                  <Link href={`/blog/${getAllBlogs[0]?.slug}`}>
                    <div className="bimageloDiPARa12">
                      <p className="bimageloDiPara">{getAllBlogs[0]?.title}</p>
                    </div>
                  </Link>
                  <p className="bimageloDiParra">
                    {getAllBlogs[0]?.subdescription}
                  </p>

                  <div className="blogClockTime">
                    <Link href={`/blog/${getAllBlogs[0]?.slug}`}>
                      <span className="bimageloDiPaara">Read More</span>
                    </Link>
                    <span className="bimageloDiPargaph">
                      <span>
                        {" "}
                        <FcClock className="iconBlogClock" />{" "}
                      </span>{" "}
                      {getAllBlogs[0]?.time} Min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {!isCategorySelected && (
          <section className="newMainSec">
            <div className="newsroom-section">
              <div className="newsroom-header">
                <h5>Latest Articles</h5>
              </div>
              <hr /> <br />
              <div className="news-grid">
                {getAllBlogs.slice(0, 6).map((item, index) => {
                  return (
                    <Link
                      href={`/blog/${item.slug}`}
                      key={index}
                      className="news-item"
                    >
                      <div>
                        <img
                          src={item.images[0]}
                          alt=""
                          className="news-image"
                        />
                      </div>
                      <div className="news-content">
                        <div className="news-title">
                          <p className="cardBlogStpaa">
                            {new Date(item?.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                          <h3 className="news-title" id="newBlogTil">
                            <p> {item?.title}</p>
                          </h3>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="latest-container">
          {!isCategorySelected ? (
            defaultCategories.map((cat, i) => (
              <div key={i} className="category-blog-section">
                <div className="cardsectFive">
                  <p>{cat.title}</p>
                  <hr />
                </div>
                <div className="cardMainBlogSec">
                  {cat.blogs
                    .filter((item) => item.domain.includes("kusheldigi.com"))
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 6)
                    .map((item, index) => (
                      <div className="cardBlogSt" key={index}>
                        <Link href={`/blog/${item.slug}`}>
                          <div className="cardBlogStImgContainer">
                            <div className="cardBlogStImg">
                              <img src={item.images?.[0]} alt={item.title} />
                            </div>
                            <p className="cardBlogStpaa">
                              {new Date(item?.date).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </p>
                            <div className="cardBlogStpaara1">
                              <p className="cardBlogStpaara">{item?.title}</p>
                            </div>
                            <p className="cardBlogStpaaragr">
                              {item.subdescription?.slice(0, 100)}...
                            </p>
                          </div>
                        </Link>
                        <div className="blogClockTime1">
                          <Link href={`/blog/${item.slug}`}>
                            <p className="cardBlogStpaarw">Read More</p>
                          </Link>
                          <span className="bimageloDiPargaph1">
                            <FcClock className="iconBlogClock" />
                            {item?.time} Min
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className="category-blog-section">
              <div className="cardsectFive">
                <p>{selectedCategory}</p>
                <hr />
              </div>
              <div className="cardMainBlogSec">
                {(filteredBlogs.length > 0 ? filteredBlogs : [])
                  .filter((item) => item.domain.includes("kusheldigi.com"))
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 6)
                  .map((item, index) => (
                    <div className="cardBlogSt" key={index}>
                      <Link href={`/blog/${item.slug}`}>
                        <div className="cardBlogStImgContainer">
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
                            <p className="cardBlogStpaara">{item?.title}</p>
                          </div>
                          <p className="cardBlogStpaaragr">
                            {item.subdescription?.slice(0, 100)}...
                          </p>
                        </div>
                      </Link>
                      <div className="blogClockTime1">
                        <Link href={`/blog/${item.slug}`}>
                          <p className="cardBlogStpaarw">Read More</p>
                        </Link>
                        <span className="bimageloDiPargaph1">
                          <FcClock className="iconBlogClock" />
                          {item?.time}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </section>

        <section className="eightBlogSMain">
          <div className="ALLt">
            <p>All</p>
            <hr />
            <br />
          </div>

          {currentTasks.length > 0 && (
            <div className="bimagelogMain">
              <div className="bimagelog">
                {currentTasks[0]?.images?.[0] ? (
                  <Link href={`/blog/${currentTasks[0].slug}`}>
                    <img
                      src={currentTasks[0].images[0]}
                      alt={currentTasks[0].title || "Main Blog"}
                    />
                  </Link>
                ) : (
                  <p>No Image Available</p>
                )}
              </div>

              <div className="bimageloDi">
                <div className="bimageloDiPARa12">
                  <Link href={`/blog/${currentTasks[0].slug}`}>
                    <h2 className="bimageloDiPara">
                      {currentTasks[0]?.title || "No Title"}
                    </h2>
                  </Link>
                </div>

                <p className="bimageloDiParra">
                  {currentTasks[0]?.subdescription ||
                    "No Description Available"}
                </p>
              </div>
            </div>
          )}

          <div className="smallBlogContainer">
            {currentTasks.length > 1 ? (
              currentTasks.slice(1, 5).map((item, index) => (
                <Link
                  href={`/blog/${item.slug}`}
                  key={index}
                  className="smallBlogCard"
                >
                  {item.images?.[0] ? (
                    <img
                      src={item.images[0]}
                      alt={item.title || "Blog Image"}
                    />
                  ) : (
                    <p>No Image</p>
                  )}
                </Link>
              ))
            ) : (
              <p>No Other Blogs Available</p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="NavButtonn">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="navbuttonbtn"
              >
                Prev
              </button>
              <span className="px-4">{currentPage}</span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="navbuttonbtn"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </section>
      <Footer />
      <div className="whtsApBtns">
        <button onClick={whatAppHandler}>
          <img
            className="what-image-universal"
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png"
            alt="whatsApp-kusheldigi"
            title="whatsApp-kusheldigi"
          />
        </button>
        <button onClick={callHandler}>
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png"
            alt="call-icon"
            title="call-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
