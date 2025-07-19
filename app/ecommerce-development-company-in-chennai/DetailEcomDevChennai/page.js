"use client"
import React, { useEffect, useRef, useState } from 'react'
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css"

import { useRouter } from "next/navigation";


export default function DetailEcomDevChennai() {
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
        <section className='details-sec'>
            <div className='details-desc'>
                <h3>Ecommerce Development Company in Chennai – Build a Site That Reflects Your Brand and Converts with Confidence</h3>
                <p>Every business in Chennai has a story. Your website should be the digital anchor that makes it unforgettable. As a reputable e-commerce business development firm in Chennai, our area of specialty is the creation of customized online stores designed to reflect your company brand, your business requirements, and your business expansion plans.</p>
                <p>We believe in knowing your audience, what you sell, and why. You might need a clean and minimalistic one-brand Shopify shop, a feature-rich BigCommerce site, or a fully-tailored ecommerce solution. Our developers create responsive, blisteringly fast websites that are a pleasure to use across all devices.</p>
                <p>We deliver it all; blazing-fast page speed, secure payment integrations, and more. We do not stop at launch. With proactive maintenance, analytics installations, SEO setups, and platform updates, we ensure your site continues to perform well many years after launching.</p>
                <p>When you seek a skilled e-commerce development company in Chennai with the capability to integrate technology with intelligent branding, no one is better than us. Get in touch with Kushel Digi, we will create something your chapter members will adore and your rivals will crave.</p>
                <h4>Our Web Development Services in Chennai Include</h4>
                <p>We provide a wide scope of web development services in Chennai that are customized according to the specific needs of the business locally as well as internationally. Whether your brand is more traditionally entrenched or must and tech-advanced, our work is versatile and scalable to address the online objectives of your brand.</p>
                <p>We are consultative at Kushel Digi; our web developers and UI/UX designers gain deep knowledge in your business model, customer behavior, and market intent. Whether constructing a niche ecommerce system or remodeling an enterprise system, we have rich technical skills and imaginative precision.</p>
                <p>The integration of third-party tools, custom plugins, dashboards, and performance optimizations is also the area of our expertise to make sure your site is productive in its functional efficiency and success in search engine rankings. All our websites are mobile-friendly, search engine optimized, and ready to scale.</p>
                <p>We offer web development services that can hit the spot in Chennai and beyond to provide high-performance outcomes based on your brand, your audience, and your goals with a focus on results and performance.</p>
                <h4>Comprehensive Web Development Services in Chennai</h4>
                <h6>Custom Web Application Development</h6>
                <p>Kushel Digi offers tailor-made web application programming services to businesses in Chennai by empowering them to automate, expand, and lead. Whether it is internal tools or customer-facing, our team is highly experienced in the creation of secure applications that utilize scalable infrastructure customized to your unique workflows.</p>
                <p>We develop fast, responsive, and SEO-ready solutions using the latest technologies such as Python, PHP, Ruby on Rails, Node.js, and Laravel. Whether you're managing operations or launching a new product, our Chennai-based developers support you through every phase; discovery, design, development, and deployment.</p>
                <p>Your custom app will work smoothly in any environment using each project, which consists of post-launch support and integration with your existing systems. We can create something strong together.</p>
                <h6>User Experience (UX) Design</h6>
                <p>Our digital users demand more across Chennai, and that is what we offer. At Kushel Digi, we involve close research, continuous testing, and data-driven design choices in our UX design process. Our digital experiences are not only beautiful, but are also planned to motivate real engagement and conversions.</p>
                <p>Whether it wears wireframes and prototyping, complete interface design, we create smooth experiences in e-commerce, enterprise dashboards, and mobile apps. We apply such tools as Figma, Adobe XD, and Hotjar, as well as A/B testing, to enhance UX performance on an ongoing basis.</p>
                <p>We will seek to develop a user interface that is natural, exposed, and coherent with your brand narrative as well as user anticipation. Good design is about more than sight; it is practical, and it sells.</p>
                <h6>Progressive Web App (PWA) Development</h6>
                <p>The future of mobile-friendly performance will be PWAs, and our Chennai tier-1 team delivers. We are experts in Progressive Web App development that brings the blistering pace of the internet together with the performance of native applications.</p>
                <p>Our PWAs are installable, responsive, and lightweight, designed to load instantly, even offline. We guide you to provide captivating digital experiences across platforms and devices using technologies such as Service Workers, Web Push Notifications, and App Shell Architecture.</p>
                <p>Our PWAs are reliable, secure, and fast, whether in e-commerce systems or booking engines. Our PWA services offer high performance and low bounce rates so that your brand can compete effectively against other mobile-first consumers in India or take over where you have limited presence presently.</p>
                <h6>API Integration</h6>
                <p>The current culture of making businesses in Chennai work is supported by interdependent ecosystems, and this is where API integration plays a role. We are experts in software system integration, CRM integration, ERP, e-commerce integration, payment gateway, and third-party tools integration at Kushel Digi to achieve smooth data movement and a unified digital experience.</p>
                <p>Our developers have practical experience in all types of industries and therefore, your APIs will be secure, scalable, and fully compatible with your tech stack. We provide businesses with essential systems, such as social media and logistics systems, which end up streamlining procedures and boosting production.</p>
                <p>The API integration services we offer include consultation, system mapping, development, testing, and after-launch support. Both headless commerce solution construction and multichannel lead collection automation benefit from seamless, secure connectivity throughout the process, facilitated by our local Chennai team.</p>
                <h6>Full-Stack Development</h6>
                <p>Kushel Digi provides business solutions for full-stack development in Chennai to companies that need to develop high-performance, dynamic web applications. We have experience with front and back-end technologies like React, Angular, Node.js, PHP, Python, and MySQL, and can provide solutions that are flexible and scalable and can serve your specific needs.</p>
                <p>Our development process is tested: it starts with the requirement gathering and ends with the deployment and maintenance. Hiring great people, training them right, and being able to execute efficiently on their knowledge is an important aspect of being a successful company, whether you are developing an e-commerce portal or a SaaS product, or whether you are building an internal business tool.</p>
                <p>We aim at creating powerful applications that not only give an appealing look but also provide a smooth usability, quick loading, and good conversion rates. In the rapidly developing tech and startup environment in Chennai, we can keep you on pace with full-stack solutions that grow with you.</p>
                <h6>Upgradation and Migration</h6>
                <p>Technology is moving at a rapid pace, and unless your platforms can keep up, the performance and customer experience may be affected. This is the reason why we provide dedicated Upgradation & Migration services to Chennai, which assist businesses in transferring their applications to newer, faster, safer environments.</p>
                <p>We take care of all the details of the migration process, including version updates and UI redesigns, as well as full-stack cross-platform migration or cloud migration. We aim for zero downtime, seamless data migration, and minimal risk to your existing operations.</p>
                <p>When you are looking to upgrade an old application or move to a new CMS, our Chennai software engineers plan, test, and implement all without any downtime. We also offer comprehensive reporting, post-migration testing, and support to make everything go well after launch.</p>
                <p>With our trusted upgradation and migration services, let us help you future-proof your platform, maximize performance, and deliver new capabilities.</p>
                <h4>Why Choose Us As Your Ecommerce Development Company in Chennai?</h4>
                <p>By hiring Kushel Digi as your e-commerce development team in Chennai, you will be collaborating with a high-powered team to help you feel the pulse of the digital and retailing environment of Tamil Nadu. Our technical excellence is paired with a strong sense of craftsmanship: we create websites that are scalable, secure, and visually engaging, which allows us to realize your brand vision.</p>
                <p>Our Chennai design, development, and planning team is reputed to complete a job well done on time and on budget. On the first day, we start keeping you informed, with all transparency and strategic advice throughout the process. You are an early-stage D2C brand or a big box retailer looking to reach the online world, and we customize the solutions to fit your size and vision.</p>
                <p>This is why Chennai businesses choose to partner with us in driving their e-commerce transformation:</p>
                <h6>Expert Team of Developers</h6>
                <p>We are strong because of our people. The development department at Kushel Digi, Chennai, has full-stack talent, UI/UX professionals, and platform experts who live to solve complex tasks and create smooth digital experiences.</p>
                <p>We keep on top of the technology trends - whether learning the latest front-end architectures such as React, Next.js, and Laravel, or creating solutions on Shopify, BigCommerce, and bespoke infrastructure. What is more significant is, we will sit through listening to how your business model works, the flow of the products and customers, and not a line is coded until it is understood.</p>
                <p>Our developers align with your growth goals, because we don’t just build ecommerce websites; we build your competitive edge.</p>
                <h6>Leverage New Technology</h6>
                <p>The Chennai digital environment is rapidly evolving, and we keep you abreast of it. Our team is continuously updating to new trends and new technologies, utilizing new technologies to construct websites that are not only state-of-the-art today, but ready to withstand the test of time tomorrow.</p>
                <p>Whether it is AI-driven customization or sophisticated analytics and mobile-first design, we adopt technology that can improve user interest and long-term ROI. Our developers are educated in cross-platform frameworks, PWA development, and third-party integrations, which allow to facilitate easier shopping experiences and more intelligent business operations.</p>
                <p>By partnering with us, you are not only acquiring a technology partner but also investing in a team that will support your brand in its development.</p>
                <h6>Responsive Website Development</h6>
                <p>A responsive site is no longer just an option in a city where mobile users command online traffic, such as Chennai. In Kushel Digi, we make responsive e-commerce websites that are completely cross-device compatible, so that everyone finds the most optimal experience.</p>
                <p>We are mobile-first, so your site will be quick loading, attractive, and will work well on smartphones, tablets, or computers. We optimize usability, conversion pathways, and visual hierarchy, aligned with your brand’s goals.</p>
                <p>From touch-optimized interfaces to adaptive content layouts, we help your online store perform at its best, anytime, anywhere.</p>
                <h6>Flexibility</h6>
                <p>In a dynamic market like Chennai, flexibility is more than a value-add; it’s a necessity. At Kushel Digi, we understand that no two businesses are alike, which is why we deliver flexible ecommerce solutions that are tailored to your unique operational needs, goals, and customer behavior.</p>
                <p>Our team doesn’t offer one-size-fits-all packages. Instead, we take the time to understand your business context, from regional audience preferences to inventory complexities, and adapt our development approach accordingly. Whether you're building a custom checkout, multilingual store, or integrating legacy tools, we ensure every aspect of your solution works seamlessly for your team and customers.</p>
                <p>By choosing us, you gain a partner that thrives on adaptability and innovation, helping you pivot quickly, optimize continuously, and scale confidently in Chennai’s ever-evolving digital space.</p>
                <h6>Customization Techniques</h6>
                <p>Customization lies at the core of how we create impact for Chennai-based brands. At Kushel Digi, we use data, user insights, and business logic to design e-commerce websites that are not just technically sound but aligned with your brand voice, workflows, and long-term strategy.</p>
                <p>From personalized landing pages and location-specific content to unique product filters and customer journeys, we build with purpose. Our developers are skilled in leveraging APIs, dynamic content systems, and frontend frameworks to create tailored experiences that improve engagement and increase conversions.</p>
                <p>We also apply customization techniques to backend flows, such as custom shipping rules, tax setups, and vendor dashboards, making your store not only look great, but run smarter.</p>
                <p>With Kushel Digi, customization isn’t just cosmetic. It’s strategic. And it’s how we turn your e-commerce vision into a finely-tuned, results-driven platform.</p>
                
                <div className="detail-foot">
                    <h5>Our Contact Address</h5>
                    <p className="detail-foot-p">Kushel Digi Solutions</p>
                    <p><span>PHONE :</span> +91 9045301702</p>
                    <p><span>EMAIL :</span> info@kusheldigi.com</p>
                    <p><span>ADDRESS :</span> First Floor, D242, F-32B, Sector 63 Rd, Noida, 201301 Uttar Pradesh</p>
                </div>
            </div>
            <form className="getquote-wrapper" onSubmit={handleSubmit}>
                <div className="getquote-form">
                    <div className="getquote-header"></div>
                    <h2>GET A FREE QUOTE</h2>

                    <label className='getquote-form-label'>Enter your name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name*"
                        className="form-input"
                        value={formData?.name}
                        onChange={handleChange}
                        required
                    />

                    <label className='getquote-form-label'>Enter your Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className="form-input"
                        value={formData?.email}
                        onChange={handleChange}
                        required
                    />

                    <label className='getquote-form-label'>Contact No.</label>
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

                    <button
                        className="form-submit-btn"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                    {loading && <span className="loader3"></span>}

                    <p className="getquote-terms">
                        By clicking on submit, you agree to<br />
                        our <a href="/terms&conditions">Terms & Condition</a> and <a href="/privacy-policy">Privacy policy</a>
                    </p>
                </div>
            </form>
        </section>
    )
}
