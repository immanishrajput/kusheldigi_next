import AboutNew from '../components/AboutNew'
export const metadata = {
  openGraph: {
    title: "About Us | Leading eCommerce & Digital Transformation Agency.",
    description: "Get to know Kushel Digi Solutions leading eCommerce development company dedicated to building high-performing online stores and driving digital success for brands",
    url: "https://www.kusheldigi.com/about",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744117394/who-we-are_z8oj40.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const About = ({ notify }) => {
  
  return (
    <>
    <AboutNew notify={notify} />
    </>
  );
};

export default About;

