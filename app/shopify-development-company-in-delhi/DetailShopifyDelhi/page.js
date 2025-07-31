"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailShopifyDelhi() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
  });

  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const router = useRouter();

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setFirstNo(num1);
    setSecondNo(num2);
    setCorrectAnswer(num1 + num2);
    setUserAnswer("");
    setCaptchaVerified(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const verifyCaptcha = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) !== correctAnswer) {
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      return;
    }
    toast.success("Captcha Verified!!");
    setCaptchaVerified(true);
  };

  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: "in",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("in"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      // Optional: Store the instance if you ever need to validate
      phoneInputRef.current._iti = iti;
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    let updatedValue = value;

    // if (name === "phone") {
    //     updatedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    // }

    if (name === "name") {
      // ✅ Name only alphabets and spaces
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = phoneInputRef.current?.value || "";
    const phoneDigitsOnly = phone.replace(/\D/g, ""); // Only digits

    if (!formData.name || !formData.email || !phone) {
      toast.error("Please fill all the fields!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address!");
      return;
    }

    if (phoneDigitsOnly.length !== 10) {
      toast.error("Phone number must be exactly 10 digits!");
      return;
    }

    if (!captchaVerified) {
      toast.error("Please Verify the Captcha!!");
      generateCaptcha();
      return;
    }

    if (parseInt(userAnswer) !== correctAnswer) {
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      setCaptchaVerified(false);
      return;
    }

    setLoading(true);

    try {
      const dataToSend = {
        ...formData,
        phone: phoneDigitsOnly, // send clean number
      };
      const response = await fetch("https://backend.kusheldigi.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      console.log("Result--->>", result);

      if (response.ok || response.success === true || response.status === 200) {
        router.push("/thankyou");
      } else {
        alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("❌ Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "" });
      phoneInputRef.current.value = ""; // reset manually
      generateCaptcha();
    }
  };

  return (
    <section className="details-sec">
      <div className="details-desc">
        <h4>
          ECommerce Development Company in Noida - Get a Website Developed That
          Truly Represents Your Brand
        </h4>
        <p>
          kushel Digi is a leading web development company in Delhi that offers
          customized website development solutions to businesses of all sizes.
          We understand that your website is the face of your brand on the
          internet, and it needs to be developed in a way that truly represents
          your brand identity. Our expert web developers and designers work
          closely with you to understand your brand, target audience, and
          business objectives before embarking on the website development
          process.
        </p>
        <p>
          Our web development solutions are designed to be user-friendly,
          responsive, and scalable to meet the evolving needs of your business.
          Whether you need a simple brochure website, a complex e-commerce
          platform, or a customized web application, we have the expertise and
          experience to deliver a website tailored to your requirements.
        </p>
        <p>
          We use the latest web development technologies and frameworks to build
          fast, secure, and reliable websites. We follow industry best practices
          and ensure that your website is fully optimized for search engines to
          help you attract more traffic and generate more leads.
        </p>
        <p>
          We also provide ongoing website maintenance and support to ensure your
          website stays up-to-date with the latest technologies and security
          patches. We aim to help you achieve your business objectives through
          an engaging, effective website that represents your brand in the best
          possible way.
        </p>
        <p>
          If you're looking for a reliable web development company in Delhi NCR
          (Noida, Gurgaon), look no further than EZ Rankings. Contact us today
          to discuss your website development needs and get a quote.
        </p>
        <h5>Our Web Development Services Noida Include –</h5>
        <p>
          We offer a comprehensive range of Web Development Services Delhi that
          cater to the diverse needs of businesses. Our solutions for Web
          Development Delhi NCR are designed to be flexible, scalable, and
          customizable to suit the unique requirements of each business.
        </p>
        <p>
          Our expert web developers and designers work closely with you to
          understand your business objectives and deliver a website tailored to
          your specific needs. Whether you need a simple website or a complex
          e-commerce platform, we have the expertise and experience to provide a
          website that meets your requirements and exceeds your expectations.
        </p>
        <p>
          Our expert web developers and designers work closely with you to
          understand your business objectives and deliver a website tailored to
          your specific needs. Whether you need a simple website or a complex
          e-commerce platform, we have the expertise and experience to provide a
          website that meets your requirements and exceeds your expectations.
        </p>

        <h5>Our Web Development Services Noida Include –</h5>
        <h6>Custom Web Application Development</h6>
        <p>
          At Kushel Digi, we provide customized web application development
          services to help businesses automate their workflows, streamline their
          operations, and enhance their online presence. Our team of expert web
          developers has years of experience building custom web applications
          that are scalable, secure, and user-friendly. We follow a proven
          development methodology to ensure that your custom web application is
          delivered on time, within budget, and to your specifications. We work
          closely with you throughout the development process to understand your
          business requirements and to provide regular updates and progress
          reports.
        </p>
        <p>
          We use the latest web technologies and frameworks to develop custom
          web applications that are fast, responsive, and optimized for search
          engines. Our developers are proficient in PHP, Python, Ruby on Rails,
          and other programming languages and frameworks, allowing us to develop
          custom web applications that meet your business needs.
        </p>

        <p>
          Our custom web application development services include project
          management, requirement gathering, design, development, testing,
          deployment, and ongoing maintenance and support. We also ensure that
          your web application fully integrates with your existing systems and
          applications, providing a seamless user experience. Contact us today
          to learn more about our custom web application development services.
        </p>
        <h5>User Experience Design</h5>
        <p>
          User experience (UX) design is essential to any successful website or
          web application. We understand the importance of creating an engaging
          and intuitive user experience for your website visitors. Our team of
          experienced UX designers uses a data-driven approach to develop
          user-friendly, visually appealing designs optimized for
          conversions. We follow a systematic process of user research, user
          testing, and iterative design to create a user-centric design that
          aligns with your business goals. We conduct user research to gain
          insights into your target audience's preferences, behaviors, and pain
          points. Based on the findings, we develop user personas, user flows,
          and wireframes to create a design that meets their needs and
          expectations.
        </p>
        <p>
          Our UX design services include information architecture, wireframing,
          prototyping, and user testing. We use the latest design tools and
          techniques to create visually appealing designs optimized for
          conversions. We also conduct A/B testing and analytics to improve the
          user experience and drive more conversions continuously.
        </p>
        <p>
          We aim to create a user experience that delights your visitors,
          enhances your brand image, and drives more conversions. Contact us
          today to learn more about our UX design services and how we can help
          you improve your website's user experience.
        </p>

        <h5>Progressive Web App Development</h5>
        <p>
          Progressive Web App (PWA) is an advanced web technology combining the
          best web and native app capabilities. We provide Progressive Web App
          Development services that help businesses improve their user
          experience, increase engagement, and boost conversions. Our team of
          expert web developers specializes in PWA development and has
          experience working with clients from diverse industries. We develop
          PWAs that are fast, reliable, and work seamlessly on all devices and
          platforms, providing a native app-like experience to users.
        </p>

        <p>
          We use the latest web technologies like Service Workers, Web Push
          Notifications, and App Shell architecture to create PWAs that load
          instantly, work offline, and can be installed on the home screen of a
          user's device. Our PWAs are secure, responsive, and scalable, allowing
          businesses to reach their target audience on any device or platform.
        </p>
        <p>
          Our PWA development services include consultation, design,
          development, testing, and deployment. We ensure that your PWA meets
          the highest standards of performance, security, and accessibility.
          Contact us today to learn more about our PWA development services and
          how we can help you enhance your online presence.
        </p>

        <h5>API Integration</h5>
        <p>
          API Integration connects two or more software applications through
          APIs (Application Programming Interfaces) to exchange data and
          functionality. We provide API Integration services that help
          businesses streamline their workflows, increase efficiency, and
          enhance their online presence. Our team of expert developers has years
          of experience in API Integration and has worked with a wide range of
          APIs, including social media, payment gateway, e-commerce, and more.
          We follow a proven development methodology to ensure your API
          Integration is seamless, secure, and meets your business needs.
        </p>
        <p>
          We work closely with you to understand your business requirements and
          to identify the best APIs to integrate with your existing systems and
          applications. We also ensure that your API Integration is fully
          compatible with your existing technology stack and provides a seamless
          user experience.
        </p>
        <p>
          Our API Integration services include consultation, design,
          development, testing, and deployment. We also provide ongoing
          maintenance and support to ensure your API Integration runs smoothly
          and efficiently. Contact us today to learn more about our API
          Integration services and how we can help you enhance your business
          operations.
        </p>

        <h5>Full Stock Development</h5>
        <p>
          Full-stack development refers to developing both the front-end and
          back-end of a web application or website. We provide full-stack
          development services that help businesses build robust and scalable
          web applications optimized for performance, security, and user
          experience. Our expert developers specialize in front-end and back-end
          technologies, including HTML, CSS, JavaScript, PHP, Python, and more.
          We follow a comprehensive development process that includes
          requirement gathering, design, development, testing, and deployment,
          ensuring that your web application meets your exact business needs.
        </p>

        <p>
          We use the latest web technologies and frameworks to develop web
          applications that are fast, responsive, and user-friendly. Our
          full-stack development services include front-end development,
          back-end development, database integration, API integration, and more,
          providing a comprehensive solution for Web Development Delhi NCR. 
        </p>

        <p>
          Our goal is to provide you with an easy-to-use, highly functional, and
          visually appealing web application, enhancing your brand image and
          driving more conversions. Contact us today to learn more about our
          full-stack development services and how we can help you build a robust
          and scalable web application.
        </p>

        <h5>Upgradation & Migration</h5>
        <p>
          Upgradation and migration are critical aspects of Web Development
          Delhi NCR that businesses must consider to ensure that their web
          applications and websites run efficiently and effectively. We provide
          Upgradation & Migration services that help businesses upgrade their
          technology stack and seamlessly migrate their applications to new
          platforms.
        </p>
        <p>
          Our team of expert developers has extensive experience upgrading and
          migrating web applications to new platforms and technologies, ensuring
          that your applications are secure, scalable, and optimized for
          performance. We follow a comprehensive process that includes analysis,
          planning, design, development, testing, and deployment, ensuring a
          seamless transition to the new platform.
        </p>
        <p>
          We help businesses upgrade their web applications to the latest
          technologies and frameworks, ensuring they are future-proof and can
          handle increased traffic and user demand. We also provide migration
          services that help businesses move their applications to new
          platforms, ensuring they are fully compatible and optimized for
          performance.
        </p>
        <p>
          Our Upgradation & Migration services include consultation, analysis,
          planning, design, development, testing, and deployment. We also
          provide ongoing maintenance and support to ensure your upgraded or
          migrated application runs smoothly and efficiently. Contact us today
          to learn more about our Upgradation & Migration services and how we
          can help you upgrade and migrate your web applications seamlessly.
        </p>

        <h5>Why Choose Us As You ECommerce Development Company in Noida? </h5>
        <p>
          Choosing Kushel Digi Solutions as your web development company in
          Delhi means partnering with a team of experienced professionals
          dedicated to delivering exceptional results. Our team of developers,
          designers, and project managers have years of experience creating
          custom websites tailored to your business needs.We pride ourselves on
          delivering high-quality work on time and within budget. Our
          development process is transparent, and we keep you informed every
          step of the way. We use the latest technologies and tools to build
          user-friendly, responsive, and optimized websites for search engines.
          We believe in building long-term relationships with our clients. We
          strive to exceed your expectations and deliver websites that help you
          achieve your business goals. 
        </p>
        <p>
          Here are some key points on why you should choose us as your ECommerce
          Development Company in Noida? 
        </p>
        <h5>Expert Team of Developers</h5>
        <p>
          Kushel Digi Solutions is backed by an expert team of developers
          skilled in delivering exceptional digital solutions to clients across
          various industries. Our team comprises experienced developers
          passionate about their work and striving to create innovative and
          cutting-edge solutions that meet our client's requirements.
        </p>
        <p>
          Our developers are proficient in various programming languages and
          have extensive knowledge of the latest technologies and tools to build
          robust and scalable digital products. We believe in staying ahead of
          the curve by constantly updating our skills and expertise to ensure
          our clients receive the best-in-class digital solutions.
        </p>
        <p>
          Our developers work collaboratively with our clients to understand
          their unique business needs and offer customized solutions that
          deliver tangible results. We are committed to providing our clients
          with high-quality Web Development Services Delhi that meet their
          expectations and exceed them in every way.
        </p>
        <p>
          We take pride in our team of developers dedicated to delivering
          excellence and helping our clients achieve their digital goals.
        </p>

        <h5>Leverage New Technology</h5>
        <p>
          We believe in leveraging new technology to deliver innovative and
          cutting-edge solutions to our clients. Our team of experts is always
          up-to-date with the latest technologies and tools in the industry,
          allowing us to provide our clients with the most advanced digital
          solutions.
        </p>
        <p>
          We understand that technology constantly evolves, and we strive to
          stay ahead of the curve by embracing new trends and tools. This
          approach enables us to create solutions that are effective and
          future-proof, ensuring that our clients can enjoy the benefits of
          their investment for years to come.
        </p>

        <p>
          Our team is proficient in various technologies and platforms,
          including web development, mobile app development, and digital
          marketing. We use our expertise to help our clients achieve their
          digital goals and stay ahead of the competition.
        </p>

        <p>
          Leveraging new technology is essential to stay ahead in today's
          digital landscape. We are committed to providing our clients with the
          best-in-class digital solutions that drive growth and maximize ROI.
        </p>
        <h5>Responsive Website</h5>
        <p>
          A responsive website is crucial for businesses to succeed in today's
          digital world, and We understand the importance of a responsive
          website. Our team of experts is proficient in creating responsive
          websites optimized for all devices, including desktops, tablets, and
          mobiles. Our team uses the latest technologies and tools to ensure our
          clients' websites are fast, secure, and visually appealing. A
          responsive website is essential for improving user experience and
          increasing engagement, leading to higher conversions and sales.
        </p>

        <p>
          We follow a customer-centric approach to create responsive websites
          catering to our client's business requirements. Our team works
          collaboratively with our clients to understand their goals, target
          audience, and branding guidelines to ensure their website reflects
          their brand's personality and values.
        </p>
        <p>
          We are committed to providing our clients with high-quality,
          responsive websites optimized for all devices and helping them achieve
          their digital goals. A responsive website is a must-have for
          businesses today, and we are here to help our clients stay ahead of
          the competition.
        </p>
        <h5>Flexibility</h5>

        <p>
          We understand that flexibility is key to delivering digital solutions
          that meet our client's specific business needs. We have a team of
          experts who are proficient in creating flexible solutions that can be
          customized according to our client's requirements. We follow a
          customer-centric approach to understand our client's unique business
          challenges and provide tailored solutions to address their pain
          points. Our team works collaboratively with our clients to ensure that
          their digital solutions are designed to meet their specific goals and
          objectives.
        </p>
        <p>
          Flexibility is essential for delivering high-quality digital solutions
          that drive growth and maximize ROI. Our team is proficient in various
          technologies and platforms, allowing us to create custom solutions
          unique to each client. We take pride in providing flexible solutions
          that meet our client's specific business requirements. We are
          committed to delivering exceptional services that exceed our client's
          expectations and help them achieve their digital goals.
        </p>
        <h5>Customization Techniques</h5>
        <p>
          At Kushel Digi Solutions, customization is key to creating digital
          solutions that meet our client's business requirements. We have a team
          of experts proficient in various customization techniques to create
          tailored solutions that address our client's pain points. Our team
          works collaboratively with our clients to understand their unique
          challenges and requirements. We use this knowledge to create
          customized solutions that are unique to each of our clients.
          Customization is essential for delivering high-quality digital
          solutions that drive growth and maximize ROI.
        </p>
        <p>
          We use customization techniques such as personalized branding, unique
          website design, custom software development, and targeted digital
          marketing strategies to create bespoke solutions that meet our
          client's business needs.
        </p>
        <p>
          We take pride in our ability to provide customized solutions that
          exceed our client's expectations. We are committed to delivering
          exceptional services that help our clients achieve their digital goals
          and stay ahead of the competition.
        </p>

        <div className="detail-foot">
          <h5>Our Contact Address</h5>
          <p className="detail-foot-p">Kushel Digi Solutions</p>
          <p>
            <span>PHONE :</span> +91 9045301702
          </p>
          <p>
            <span>EMAIL :</span> info@kusheldigi.com
          </p>
          <p>
            <span>ADDRESS :</span> First Floor, D242, F-32B, Sector 63 Rd,
            Noida, 201301 Uttar Pradesh
          </p>
        </div>
      </div>
      <form className="getquote-wrapper" onSubmit={handleSubmit}>
        <div className="getquote-form">
          <div className="getquote-header"></div>
          <h2>GET A FREE QUOTE</h2>

          <label className="getquote-form-label">Enter your name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            className="form-input"
            value={formData?.name}
            onChange={handleChange}
            required
          />

          <label className="getquote-form-label">Enter your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="form-input"
            value={formData?.email}
            onChange={handleChange}
            required
          />

          <label className="getquote-form-label">Contact No.</label>
          <div className="form-phone-wrapper">
            {/* <span className="form-country-code">(+1)</span> */}
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number*"
              className="form-input phone-input"
              ref={phoneInputRef}
              onInput={(e) => {
                const digits = e.target.value.replace(/\D/g, "");
                if (digits.length <= 10) {
                  e.target.value = digits;
                } else {
                  e.target.value = digits.slice(0, 10); // trim to 11
                  toast.error("Only 10 digit phone number allowed!");
                }
              }}
              required
            />
          </div>

          {/* <div className="getquote-captcha-row">
                        <span>1 + 3</span>
                        <a href="#">VERIFY</a>
                    </div>
                    <input type="text" /> */}

          <div className="captcha-box">
            <div className="inputcapt">
              <label htmlFor="ans-captch" className="visually-hidden">
                {`${firstNo} + ${secondNo} = `}
              </label>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                required
                id="ans-captch"
              />
            </div>
            <span className="captcha-btn" onClick={verifyCaptcha}>
              Verify Captcha
            </span>
          </div>

          <button className="form-submit-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {loading && <span className="loader3"></span>}

          <p className="getquote-terms">
            By clicking on submit, you agree to
            <br />
            our <a href="/terms-conditions">Terms & Condition</a> and{" "}
            <a href="/privacy-policy">Privacy policy</a>
          </p>
        </div>
      </form>
    </section>
  );
}
