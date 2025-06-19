// components/Cutting1Section.jsx
import Image from 'next/image';
import './cuttingedge.css';

export default function Cutting1Section() {
  return (
    <section className="cutting1-section">
      <div className="cutting1-container">
        <div className="cutting1-left">
          <h2>
            Cutting-Edge Ecommerce<br />
            Development Services<br />
            That Drive Performance
          </h2>
          <p>
            As a leading ecommerce development company in belgium we offer
            comprehensive ecommerce solutions tailored to your business needs.
            Whether you're launching a new online store or upgrading an existing
            platform, our team creates scalable, secure, and high-performance ecommerce websites that provide seamless customer experiences and drive sales growth. We leverage the latest technologies and industry best practices to help you succeed in today’s fast-paced digital market.
          </p>
          <button className="cutting1-btn">Talk to an Expert</button>
        </div>

        <div className="cutting1-right">
          <div className="cutting1-image-wrapper">
            <Image
              src="https://res.cloudinary.com/dal5dlztv/image/upload/v1750328181/Group_1171281511_tenksh.png"
              alt="Ecommerce Visual"
              width={500}
              height={500}
              className="cutting1-image"
            />
            {/* <div className="cutting1-stats">
              <div>
                <strong>92%</strong>
                <p>Project Success</p>
              </div>
              <div>
                <strong>63%</strong>
                <p>Happy Clients</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
