import '../globals.css'
import Service2 from "../components/Service/Service2";


export const metadata = {
  openGraph: {
    title: "eCommerce Solutions | Shopify & BigCommerce Experts",
    description: "Looking for Expert Ecommerce solutions? Kushel Digi Solutions is the most trsuted ecommerce development company having 2000+ Satisfied clients across the globe.",
    url: "https://www.kusheldigi.com/service",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Service = ({ notify }) => {
  
  return (
    <>
    <Service2 notify={notify} />
    </>
  );
};

export default Service;

