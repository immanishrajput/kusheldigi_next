import EcommerceLondon from '../components/EcommerceLondon'
export const metadata = {
  openGraph: {
    title: "E-Commerce Website Development Company in London",
    description: "Partner with top London ecommerce developers for SEO-optimized, secure, and scalable online stores built on Shopify, BigCommerce & custom platforms.",
    url: "https://www.kusheldigi.com/ecommerce-development",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463967/mockup-4_h41e2o.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const LondonEcommerce = ({ notify }) => {
  
  return (
    <> 
    <EcommerceLondon notify={notify} />
    </>
  );
};

export default LondonEcommerce;

