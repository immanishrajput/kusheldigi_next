// import { userouter.push, useParams } from "react-router-dom";
"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import "./blogdetail.css";
import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaFacebookMessenger, FaTwitter, FaEnvelope } from "react-icons/fa";
// import { Helmet } from "react-helmet";

const baseurl = "https://backblog.kusheldigi.com";

function BlogDetail() {
  const [data, setData] = useState();
  const router = useRouter();
  // const currentPageUrl = window.location.href;
//   const { blogId } = useParams();
// const router = useRouter();

  const id  = router.query

  const [recent, setRecent] = useState([]);

  const fetchRecentBlog = async () => {
    try {
      const response = await fetch(`${baseurl}/api/v1/auth/getRecentBlog`);
      if (response.ok) {
        const data = await response.json();
        setRecent(data?.blogs);
      } else {
        console.error("Failed to fetch recent blogs:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching recent blogs:", error);
    }
  };

  const fetchBlogId = async () => {
    try {
      const response = await fetch(`${baseurl}/api/v1/auth/singleblog/${id}`);
      if (response.ok) {
        const resp = await response.json();
        setData(resp?.data);
      } else {
        console.error("Failed to fetch blog details:", response.statusText);
        router.push("/blog");
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
      router.push("/blog");
    }
  };

  useEffect(() => {
    fetchRecentBlog();
    fetchBlogId();
  }, [id]);

  return (
    <div>
      {/* <Helmet>
        <title>{data?.title || "Default Blog Title"}</title>
        <meta property="og:title" content={data?.title || "Default Blog Title"} />
        <meta property="og:description" content={data?.description || "Blog description"} />
        <meta property="og:image" content={data?.images || "https://res.cloudinary.com/dt2lhechn/image/upload/v1733573496/blog_images/fgtxw2bfzh7r1gc1q3yx.jpg"} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Kushel Digi Blogs" />
      </Helmet> */}

      <div className="aboutwrap">
        <div className="aboutcont">
          <img src={data?.banner} className="aboutbanner" alt="" />
          <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730457306/aboutfilter_qkl6e0.png" className="bannerfilter" alt="" />
        </div>
      </div>

      <div className="blgdeta2wrap">
        <div className="blode2cont">
          <div className="blode2leftcon">
            <div>
              <img src={data?.img} alt="" className="blogdtaimgmain" />
              <div className="blogbantitle">{data?.title}</div>
            </div>
            <div className="authodetail">
              <p>Author: {data?.author || "Admin"}</p>
              <span>Reading Time :{data?.time}</span>
              <span>{new Date(data?.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}</span>
            </div>
            <p><div className="makepoppinsfont" dangerouslySetInnerHTML={{ __html: data?.description }} /></p>
          </div>

          <div className="blode2rightc">
            <h3>Recent Blogs</h3>
            {recent.map((item, index) => (
              <div key={index} className="singblosdarslidd">
                <img src={item?.images} alt="" />
                <h4 onClick={() => router.push(`/blogdetail/${item._id}`)}>{item?.title}</h4>
                <p className="dateobje">
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730457651/Mask_group_reswkg.png" alt="" />
                  {new Date(item?.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shareblogoptns">
        <h3>Don't forget to share this post!</h3>
        <div className="iconsshar">
          <WhatsappShareButton  title="Check out this blog!">
            <div className="shareocciwrap">
              <FaWhatsapp className="sheicon" />
            </div>
          </WhatsappShareButton>
          <FacebookShareButton  quote="Check out this blog!">
            <div className="shareocciwrap">
              <FaFacebook className="sheicon" />
            </div>
          </FacebookShareButton>
          <LinkedinShareButton  title="Check out this blog!" summary="An interesting blog you must read!" source="https://www.kusheldigi.com">
            <div className="shareocciwrap">
              <FaLinkedin className="sheicon" />
            </div>
          </LinkedinShareButton>
          <FacebookMessengerShareButton  appId="YOUR_APP_ID">
            <div className="shareocciwrap">
              <FaFacebookMessenger className="sheicon" />
            </div>
          </FacebookMessengerShareButton>
          <TwitterShareButton  title="Check out this blog!">
            <div className="shareocciwrap">
              <FaTwitter className="sheicon" />
            </div>
          </TwitterShareButton>
          <EmailShareButton  subject="Check out this blog!" body="I found this blog interesting, check it out:">
            <div className="shareocciwrap">
              <FaEnvelope className="sheicon" />
            </div>
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
