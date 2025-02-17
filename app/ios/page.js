import '../globals.css'
import Ios2 from "../components/Ios2";


export const metadata = {
  openGraph: {
    title: "About Kushel Digi Solutions | eCommerce Development Experts",
    description: "Kushel Digi Solutions empower businesses by delivering seamless, scalable as well as revenue-driven online stores to maximize growth in the eCommerce digital marketplace",
    url: "https://www.kusheldigi.com/ios",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Ios = ({ notify }) => {
  
  return (
    <>
    <Ios2 notify={notify} />
    </>
  );
};

export default Ios;

