import '../globals.css'
import About2 from "../components/About/About2";


export const metadata = {
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description: "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
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

