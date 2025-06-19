import  './askques.css'; // Using CSS Modules
import Image from 'next/image'; // Import Next.js Image component
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229461/s10item1_ridh3n.webp",
    title: "ecommerce website product detail page icon",
    desc: "We deliver custom-built eCommerce solutions tailored for performance and growth."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229525/hospital1_lui9s4.webp",
    title: "ecommerce website development for Hospitality industry",
    desc: "Our hospitality tech solutions come with seamless, personalized guest journeys."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229568/real1_haeopa.webp",
    title: "Real estate ecommerce website development project image",
    desc: "Explore our real estate platforms that accelerate property deals and virtual experiences."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229590/healthcare_j4bcto.webp",
    title: "Healthcare ecommerce website development icon ",
    desc: "Kushel Digi Solutions redefines patient care and clinical efficiency with our secure tech solutions."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229616/education1_hzf6y5.webp",
    title: "Education ecommerce website design icon ",
    desc: "Kushel Digi transforms education with interactive, scalable e-learning platforms."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229636/finance1_tmillv.webp",
    title: "ecommerce website development for Finance industry",
    desc: "Choose our development solutions for modern financial services and transactions in the competitive marketplace."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229654/tenonoloy1_asw9wh.webp",
    title: "Technology sector ecommerce website design ",
    desc: "Our future-ready solutions boost operational efficiency with modern tech solutions."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229677/fashion1_rtft96.webp",
    title: "Fashion industry ecommerce website design",
    desc: "Kushel Digi can help your fashion brand with user-centric eCommerce platforms that drive engagement."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229699/meida1_dxbav2.webp",
    title: "Media and entertainment ecommerce website design service",
    desc: "Attract the audiences with user-friendly, dynamic platforms built for modern media and entertainment."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229718/fitness1_ewwwzh.webp",
    title: "Fitness and wellness ecommerce website project icon",
    desc: "Our solutions are also catered for smooth, intuitive wellness services."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229741/automotive1_jls3mq.webp",
    title: "Automotive industry ecommerce website design by Kushel Digi Solutions",
    desc: "Our solutions are also designed for the automotive sector ultimately leading to customer interaction and sales."
  },
  {
    img: "https://res.cloudinary.com/dbpqjxox7/image/upload/v1738229761/profession1_fk6rdv.webp",
    title: "Professional services ecommerce website development by Kushel Digi Solutions",
    desc: "You can expect excellent service delivery and client engagement with our custom-built platforms."
  }
];


function Home2Section10({ heading, heading1, para }) {
  return (
    <div className="h2s10wrap">
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
