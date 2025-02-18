import '../globals.css'
import Contact2 from "../components/Contact2";


export const metadata = {
  openGraph: {
    title: "KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified",
    description: "Have questions or need digital marketing solutions? Contact Kushel Digi today! Reach out for expert Bigcommerce development and eCommerce development and social media marketing services. Let's grow your business!",
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

