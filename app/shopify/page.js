"use client"
import React, { useEffect } from 'react'
// import "./header.css"
import BigHeader from './BigHeader/page';
import BigSection2 from './BigSection2/page';
import BigSection3 from './BigSection3/page';
import Home2BrandSwiper from '../components/Home/Home2BrandSwiper';

import Bigsection6 from './Bigsection6/page';
import BigSection7 from './BigSection7/page';


import Home2Section10 from '../components/Home/Home2Section10';
import Home2Testimonial from '../components/Home/Home2Testimonial';
import YourProject from './YourProject/page';
import BigAskQuestion from './BigAskQuestion/page';
import ContactForm1 from '../COMMON/ContactForm1';
import '../globals.css'
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';
import BigSection5 from './BigSection5/page';
import BigSection8 from './BigSection8/page';
// import { Helmet } from 'react-helmet';

function Shopify3({notify}) {
  const generateMetadata = ({ params }) => ({
              title: 'KushelDigi Solutions- Top shopify development company',
              description: "Kushel Digi Solutions experience, you can unlock Shopify's full potential Put your trust in the Shopify development services to build your online success."
            });
            
          useEffect(() => {
              const { title, description } = generateMetadata({ params: {} });
              document.title = title;
              let metaDescription = document.querySelector('meta[name="description"]');
              metaDescription ? metaDescription.content = description : 
                document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
            }, []);
  return (
    <>
<Navbar/>

        
    

<div className="home-main">

<BigHeader />

<BigSection2 />

<p className="linesbig"></p>

<BigSection3 />

<Home2BrandSwiper title={"Featured Technology Partners"} />

<BigSection5/>

<Bigsection6 />

<BigSection7 />

<BigSection8/>

<Home2Section10  heading={"EMPOWERING INDUSTRIES WITH OUR EXPERT SOLUTIONS"} 
// heading1={"SUPPORTING SUCCESS ACROSS ALL THE MAJOR INDUSTRIES"}
 para={"We have expertise in multiple industries, providing custom digital solutions for growth and success. Be it in transforming customer experience or operational excellence, we engineer technology that caters specifically to your business needs."}/>

<Home2Testimonial  />

<YourProject />

<BigAskQuestion />

<ContactForm1 notify={notify} />



</div>
<Footer/>
    </>
   
    
  )
}

export default Shopify3;