import '../globals.css'
import Contact2 from "../components/Contact2";


export const metadata = {
  openGraph: {
    title: "About Kushel Digi Solutions | eCommerce Development Experts",
    description: "Kushel Digi Solutions empower businesses by delivering seamless, scalable as well as revenue-driven online stores to maximize growth in the eCommerce digital marketplace",
    url: "https://www.kusheldigi.com/contact-us",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Contact = ({ notify }) => {
  
  return (
    <>
    <Contact2 notify={notify} />
    </>
  );
};

export default Contact;

