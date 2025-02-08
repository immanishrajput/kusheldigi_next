import React, { useRef } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import './styles.css';
import stars from '../../../public/assets/h2stars.webp';
import Image from 'next/image';
function Home2Testimonial() {
  const splideRef = useRef(null);

  const goPrev = () => {
    splideRef.current.splide?.go('-1');
  };

  const goNext = () => {
    splideRef.current.splide.go('+1');
  };

  return (
    <div className='h2testimonialwrap'>

      <div className='testiTopDetails'>
        {/* Left side */}
        <div className='tettopleft'>
          <p>TESTIMONIALS</p>
          <p>What our Clients are saying</p>
        </div>

        <div className='testright'>
          <div onClick={goPrev} className='roudned'>
            <svg
              className='home2rightarrow'
              width="12"
              height="12"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1661 9.1131L1.1131 8.83393"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 17L1.1131 8.83393L9.27917 0.947037"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div onClick={goNext} className='roudned rotatesvg'>
            <svg
              className='home2rightarrow'
              width="12"
              height="12"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1661 9.1131L1.1131 8.83393"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 17L1.1131 8.83393L9.27917 0.947037"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className='splide2'>
        <Splide
          className='branchswipe'
          ref={splideRef}
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            rewind: true,
            autoplay: true,
            start: 0,
            speed: 2000,
            gap: '400px',
            pagination: false,
            arrows: false,
            breakpoints: {
              600: {
                perPage: 1,
                gap: "20px",
              },
              1450: {
                perPage: 3,
                gap: '400px',
              },
            },
          }}
        >
          <SplideSlide>
            <div className='testswipsingle'>
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='Stars' />
              <p className='reviewsss'>
                Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.
              </p>
              <p className='reviewname'>Anu Koteshwara</p>
              <p className='projectre'>Slides365</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className='testswipsingle'>
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='Stars' />
              <p className='reviewsss'>
                Mithal Industries is highly impressed with the website development and social media management services taken up by Kushel Digi Solutions. Indeed, our new website is modern, efficient, and has increased our digital presence tremendously. Their strategies on social media work; brand awareness and engagement are increased.
              </p>
              <p className='reviewname'>Shikhar Mithal</p>
              <p className='projectre'>Mithal Industries</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className='testswipsingle'>
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='Stars' />
              <p className='reviewsss'>
                SMV industries are satisfied with the efforts of Kushel Digi that have streamlined our service processes, making it easier for clients to access information and engage with us. The enhanced digital presence has boosted our operational efficiency and client interactions. Kushel Digi Solutions truly understands our industry needs and has delivered exceptional results.
              </p>
              <p className='projectre'>SMV Inspections Incorporation</p>
            </div>
          </SplideSlide>

          {/* =========== COPY ========== */}

          <SplideSlide>
            <div className='testswipsingle'>
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='Stars' />
              <p className='reviewsss'>
                Mithal Industries is highly impressed with the website development and social media management services taken up by Kushel Digi Solutions. Indeed, our new website is modern, efficient, and has increased our digital presence tremendously. Their strategies on social media work; brand awareness and engagement are increased.
              </p>
              <p className='reviewname'>Shikhar Mithal</p>
              <p className='projectre'>Mithal Industries</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className='testswipsingle'>
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739014063/h2stars_qci2lf.webp' alt='Stars' />
              <p className='reviewsss'>
                SMV industries are satisfied with the efforts of Kushel Digi that have streamlined our service processes, making it easier for clients to access information and engage with us. The enhanced digital presence has boosted our operational efficiency and client interactions. Kushel Digi Solutions truly understands our industry needs and has delivered exceptional results.
              </p>
              <p className='projectre'>SMV Inspections Incorporation</p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Home2Testimonial;
