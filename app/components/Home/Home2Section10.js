import './askques.css'; // Using CSS Modules
import Image from 'next/image'; // Import Next.js Image component
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229461/s10item1_ridh3n.webp",
    title: "E-commerce",
    desc: "We deliver custom-built eCommerce solutions tailored for performance and growth.",
    alt: "ecommerce website product detail page icon",

  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229525/hospital1_lui9s4.webp",
    title: "Hospitality",
    desc: "Our hospitality tech solutions come with seamless, personalized guest journeys.",
    alt: "ecommerce website development for Hospitality industry",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229568/real1_haeopa.webp",
    title: "Real Estate",
    desc: "Explore our real estate platforms that accelerate property deals and virtual experiences.",
    alt: "Real estate ecommerce website development project image",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229590/healthcare_j4bcto.webp",
    title: "Healthcare",
    desc: "Kushel Digi Solutions redefines patient care and clinical efficiency with our secure tech solutions.",
    alt: "Healthcare ecommerce website development icon ",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229616/education1_hzf6y5.webp",
    title: "Education",
    desc: "Kushel Digi transforms education with interactive, scalable e-learning platforms.",
    alt: "Education ecommerce website design icon ",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229636/finance1_tmillv.webp",
    title: "Finance",
    desc: "Choose our development solutions for modern financial services and transactions in the competitive marketplace.",
    alt: "ecommerce website development for Finance industry",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229654/tenonoloy1_asw9wh.webp",
    title: "Technology",
    desc: "Our future-ready solutions boost operational efficiency with modern tech solutions.",
    alt: "Technology sector ecommerce website design ",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229677/fashion1_rtft96.webp",
    title: "Fashion and Apparel",
    desc: "Kushel Digi can help your fashion brand with user-centric eCommerce platforms that drive engagement.",
    alt: "Fashion industry ecommerce website design",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229699/meida1_dxbav2.webp",
    title: "Entertainment & Media",
    desc: "Attract the audiences with user-friendly, dynamic platforms built for modern media and entertainment.",
    alt: "Media and entertainment ecommerce website design service",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229718/fitness1_ewwwzh.webp",
    title: "Fitness and Wellness",
    desc: "Our solutions are also catered for smooth, intuitive wellness services.",
    alt: "Fitness and wellness ecommerce website project icon",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229741/automotive1_jls3mq.webp",
    title: "Automotive",
    desc: "Our solutions are also designed for the automotive sector ultimately leading to customer interaction and sales.",
    alt: "Automotive industry ecommerce website design by Kushel Digi Solutions",
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229761/profession1_fk6rdv.webp",
    title: "Professional Services",
    desc: "You can expect excellent service delivery and client engagement with our custom-built platforms.",
    alt: "Professional services ecommerce website development by Kushel Digi Solutions",
  }
];


function Home2Section10({ heading, heading1, para }) {
  return (
    <>
      <section className="h2s10wrap">
        <div className="h2s10cont">
          <div className="s10top1">
            <h3 className="primary-heading">{heading}</h3>
            <h3>{heading1}</h3>
            <p className='secondary-heading'>{para}</p>
          </div>

          <div className="industries-services-container">
            {data.map((d, i) => (
              <div key={i} className="industries-services">
                {/* Use Next.js Image component for image optimization */}
                <Image loading='lazy' src={d.img} alt={d.alt} className="itemImage" width={300} height={200} />
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
      </section>
    </>
  );
}

export default Home2Section10;
