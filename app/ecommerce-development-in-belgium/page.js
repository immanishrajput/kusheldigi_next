import EcommerceBelgium from '../components/EcommerceBelgium'; 
export const metadata = {
  openGraph: {
    title: "Top eCommerce Development Company | Kushel Digi Solutions.",
    description: "Elevate your online store with Kushel Digi expert eCommerce development. Custom, scalable solutions on Shopify, Magento, BigCommerce & more. Boost sales with seamless UX & secure payments.",
    url: "https://www.kusheldigi.com/ecommerce-development",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463967/mockup-4_h41e2o.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const BelgiumEcommerce = ({ notify }) => {
  
  return (
    <>
    <EcommerceBelgium notify={notify} />
    </>
  );
};

export default BelgiumEcommerce;

