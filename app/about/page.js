import '../globals.css'
import About2 from "../components/About/About2";


export const metadata = {
  openGraph: {
    title: "About Kushel Digi Solutions | eCommerce Development Experts",
    description: "Kushel Digi Solutions empower businesses by delivering seamless, scalable as well as revenue-driven online stores to maximize growth in the eCommerce digital marketplace",
    url: "https://www.kusheldigi.com/about",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const About = ({ notify }) => {
  
  return (
    <>
    <About2 notify={notify} />
    </>
  );
};

export default About;

