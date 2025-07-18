// components/Cutting1Section.jsx
import Image from "next/image";
import "./cuttingedge.css";
import { useRouter } from "next/navigation";

export default function Cutting1Section() {
    const navigate = useRouter();
  
  return (
    <section className="cutting1-section">
      <div className="cutting1-container">
        <div className="cutting1-left">
          <h2>
            Power Up Your Online Store with Top  

            <br />
            E-Commerce Developers in Bulgaria
          </h2>
          <p>
           At Kushel Digi Solutions, we enhance ecommerce stores with our smart, scalable, and sales-driven advanced development services. As a trusted ecommerce agency in Bulgaria, we design bespoke websites that are fast, secure, mobile-friendly, easy to navigate, and tailored to your brand. We integrate advanced features like payment gateways and SEO tools that help convert visitors to buyers. Be it B2B, B2C, or D2C, we have customized solutions for every business. Choose us to turn your dream into reality. 

          </p>
          <button onClick={() => navigate.push('/contact-us')} className="cutting1-btn">Let’s Build Your Store</button>
        </div>

        <div className="cutting1-right">
          <Image
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1750328181/Group_1171281511_tenksh.png"
            alt="Ecommerce Visual"
            width={500}
            height={500}
            className="cutting1-image"
          />
          {/* <div className="cutting1-image-wrapper">
          </div> */}
        </div>
      </div>
    </section>
  );
}
