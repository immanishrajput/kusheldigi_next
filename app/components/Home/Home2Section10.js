import  './askques.css'; // Using CSS Modules
import Image from 'next/image'; // Import Next.js Image component
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229461/s10item1_ridh3n.webp", title: "E-commerce", desc: "Transform your online store with our customized eCommerce solutions." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229525/hospital1_lui9s4.webp", title: "Hospitality", desc: "Enhance guest experiences with our state-of-the-art hospitality solutions." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229568/real1_haeopa.webp", title: "Real Estate", desc: "Showcase properties and close deals faster using our real estate immersive digital platforms." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229590/healthcare_j4bcto.webp", title: "Healthcare", desc: "Revolutionize the way of treating and managing patients with our healthcare solutions." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229616/education1_hzf6y5.webp", title: "Education", desc: "Enhance learning experiences with our customized e-learning solutions." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229636/finance1_tmillv.webp", title: "Finance", desc: "Drive financial growth with secure, scalable and user-friendly Fintech solutions." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229654/tenonoloy1_asw9wh.webp", title: "Technology", desc: "Bring more efficiency into your business with our best technology development services." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229677/fashion1_rtft96.webp", title: "Fashion and Apparel", desc: "Give shine to your brand through visually stunning fashion eCommerce platforms." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229699/meida1_dxbav2.webp", title: "Entertainment & Media", desc: "Engage with audiences by entertainment through dynamic, interactive platforms." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229718/fitness1_ewwwzh.webp", title: "Fitness and Wellness", desc: "Experience seamless digital experiences in the delivery of health and wellness services." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229741/automotive1_jls3mq.webp", title: "Automotive", desc: "Drive forward the automotive business by using our specialized online solutions." },
  { img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229761/profession1_fk6rdv.webp", title: "Professional Services", desc: "Enhance your service offering with our comprehensive digital solution." },
];

function Home2Section10({ heading, heading1, para }) {
  return (
    <div className="h2s10wrap">
      <div className="h2s10cont">
        <div className="s10top">
          <h3>{heading}</h3>
          <h3>{heading1}</h3>
          <p>{para}</p>
        </div>

        <div className="industries-services-container">
          {data.map((d, i) => (
            <div key={i} className="industries-services">
              {/* Use Next.js Image component for image optimization */}
              <Image loading='lazy' src={d.img} alt={d.title} className="itemImage" width={300} height={200} />
              <div className="itemdata">
                <div className="dtitlhead">
                  <span className='industries-card-title'>{d.title}</span>
                </div>
                <p className='industries-card-para'>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            focus: 'center',
            gap: '20px',
            start: 0,
            interval: 3000,
            autoplay: true,
            arrows: false,
            pagination: false,
          }}
          className="mobile-industries-container"
        >
          {data.map((d, i) => (
            <SplideSlide key={i}>
              <div className={`industries-services`}>
                {/* Use Next.js Image component for image optimization */}
                <Image loading='lazy' src={d.img} alt={d.title} className="itemImage" width={300} height={200} />
                <div className="itemdata">
                  <div className="dtitlhead">
                    <span className='industries-card-title'>{d.title}</span>
                  </div>
                  <p className='industries-card-para'>{d.desc}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default Home2Section10;
