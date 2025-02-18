import '../globals.css'
import Blog2 from "../components/Blog2";


export const metadata = {
  openGraph: {
    title: "eCommerce Growth & Development | Kushel Digi Solutions Blog",
    description: "Get the latest insights on optimization trends and unique development solutions and thereby unlock your Ecommerce success with Kushel Digi Solutions. Explore our blogs to scale your online store.",
    url: "https://www.kusheldigi.com/blog",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Service = ({ notify }) => {
  
  return (
    <>
    <Blog2 notify={notify} />
    </>
  );
};

export default Service;

