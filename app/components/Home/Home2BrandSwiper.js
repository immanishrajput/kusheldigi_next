import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './styles.css';
import hl1 from '../../../public/assets/hl1.png';
import hl2 from '../../../public/assets/hl2.png';
import hl4 from '../../../public/assets/hl4.png';
import Link from 'next/link';  // Use Link from Next.js
import Image from 'next/image';
function Home2BrandSwiper({title}) {
  return (
    <div className='h2braswiperwrap'>

      <h3>{title}</h3>

      <div className='brandswicont'>

        <Splide
          options={{
            type: 'loop',
            perPage: 5,
            focus: 'center',
            gap: '20px',
            start: 0,
            interval: 0,
            speed: 100000,
            autoplay: true,
            interval: 1500,
            pagination: false,
            arrows: false,
            breakpoints: {
              550: {
                perPage: 2,
                gap: '10px',
              },
              1024: {
                perPage: 4,
                gap: '15px',
              },
              1400: {
                perPage: 5,
                gap: '20px',
              },
            },
          }}
          className='branchswipe2'
        >

          <SplideSlide>
            <div>
              <Image width="340" height="340" src={hl1} className='brandswipe' alt="Brand 1" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src={hl2} className='brandswipe' alt="Brand 1" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src={hl4} className='brandswipe' alt="Brand 1" />
            </div>
          </SplideSlide>

          {/* Additional brand images */}
          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217171/brandsiwp1_afm9hp.webp" className='brandswipe' alt="Brand 1" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217219/brandsiwp2_bwjj2b.webp" className='brandswipe' alt="Brand 2" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217250/brandsiwp3_dfkctq.webp" className='brandswipe' alt="Brand 3" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217282/brandsiwp4_rn6sy2.webp" className='brandswipe' alt="Brand 4" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217325/brandsiwp5_o8cecy.webp" className='brandswipe' alt="Brand 5" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217357/brandsiwp6_fdn4nb.webp" className='brandswipe' alt="Brand 6" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217388/brandsiwp7_lefllt.webp" className='brandswipe' alt="Brand 7" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217415/brandsiwp8_rhqlv2.webp" className='brandswipe' alt="Brand 8" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217444/brandsiwp9_hpxisd.webp" className='brandswipe' alt="Brand 9" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217470/brandsiwp10_nhv2md.webp" className='brandswipe' alt="Brand 10" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <Image width="340" height="340" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730217495/brandsiwp11_wrqion.webp" className='brandswipe' alt="Brand 11" />
            </div>
          </SplideSlide>

        </Splide>

      </div>

      <Link href={"/portfolio"}>
        <button name='ourWork' className='viewworkbtns'>
          <span>VIEW OUR WORK</span>
        </button>
      </Link>

    </div>
  );
}

export default Home2BrandSwiper;
