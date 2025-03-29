import React from "react";
import './Banner9.css'
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
const projects = [
  {
    name: "Koolfly",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Chrome Industries",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Koolfly",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Chrome Industries",
    category: "Kick-eez ",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
];

export default function Banner10() {
  return (
    <section className="projectsSectionKcom">
      <div className="projectsHeaderKcom">
        <div className="textKcom">
          <h2>Our Success Stories</h2>
          <p>
          Explore how our custom solutions have helped businesses to shine in this competitive world.
          </p>
        </div>
        <button className="viewAllBtnKcom">
          <Link href="/portfolio">
          View All Work </Link></button>

      </div>

<div className="b2b-sectionKcom">
  
    <div className="b2b-contentKcom">
      <div className="left-b2b-cardsKcom">
        <div className="left-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148430/2ndamendarmory_rw0p7j.jpg" alt="Shopify Plus" />
            <Link href="/2ndamendment" className="hover-linkCom">2ndamendment <MdArrowOutward /></Link>
          </div>
          
          <a href="/2ndamendment" className="b2b-btnKcom">
            Learn More 
            <p>eCommerce</p>
          </a>  
          <hr className="hrKcomKu"/>
        </div>
        <div className="left-b2b-cardKcom-2">
          <div className="b2b-logoKcom">
           
           <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148430/site_scope_zyud2x.jpg" alt="Shopify Plus" />
           <Link href="/sites" className="hover-linkCom">sights & scopes <MdArrowOutward /></Link>
          </div>
         
          <a href="/sites" className="b2b-btnKcom">
            Learn More 
            <p>eCommerce</p>
          </a>  
          <hr />
        </div>
        
        <div className="left-b2b-cardKcom-3">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148430/top-brass_ucqtzq.jpg" alt="Shopify Plus" />
            <Link href="/topbrass" className="hover-linkCom">Top Brass Tactical <MdArrowOutward/></Link>
          </div>
         
          <a href="/topbrass" className="b2b-btnKcom">
            Learn More 
            <p>eCommerce</p>
          </a>
          <hr/>
        </div>
      </div>
      <div className="right-b2b-cardsKcom">
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148430/blackrino_rh3ilu.jpg" alt="Shopify Plus" />
            <Link href="https://blackrhinoconcealment.com/" className="hover-linkCom">Blank Rhino <MdArrowOutward /> </Link>
          </div>
         
          <a href="https://blackrhinoconcealment.com/" className="b2b-btnKcom">
            Learn More 
            <p>eCommerce</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148431/slide-365_wgc7nn.jpg" alt="Shopify Plus" />
            <a href="/Slidesdesign" className="hover-linkCom">Slides 365 <MdArrowOutward /></a>
          </div>
          
          <a href="/Slidesdesign" className="b2b-btnKcom">
            Learn More 
            <p>eCommerce</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148431/kick-eez-images_doku1h.jpg" alt="Shopify Plus" />
            <a href="/kick-eez" className="hover-linkCom">Kick-eez <MdArrowOutward /></a>
          </div>
         
          <a href="/kick-eez" className="b2b-btnKcom">
            Learn More 
            <p>eCommerce</p>
          </a>
          <hr/>
        </div>

        
      </div>

      

      
    </div>
  
    </div>
    </section>
  );
}