// components/Cutting1Section.jsx
import Image from "next/image";
import "./cuttingedge.css";

export default function Cutting1Section() {
  return (
    <section className="cutting1-section">
      <div className="cutting1-container">
        <div className="cutting1-left">
          <h2>
            Boost Your Online Sales with Belgium’s
            <br />
            E-Commerce Experts
          </h2>
          <p>
            Enhance your online store with our advanced ecommerce development
            services. We are one of the best ecommerce development companies in
            Belgium and design bespoke websites that are mobile-friendly, easy
            to navigate, and efficient. Meeting and exceeding your business
            objectives is our forte. We help boost sales, optimize processes,
            and provide an effortless shopping experience. Be it a new store or
            upgrading an existing one, we equip you with industry solutions to
            thrive in the ever-evolving digital market.
          </p>
          <button className="cutting1-btn">Let’s Build Your Store</button>
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
