import Bigcommercenew from '../components/Bigcommercenew'


export const metadata = {
  openGraph: {
    title: "Best BigCommerce Development Services| Kushel Digi Solutions.",
    description: "Boost your online store with Kushel Digi’s expert BigCommerce development, seamless migration, custom design, and scalable eCommerce solutions for business growth.",
    url: "https://www.kusheldigi.com/bigcommerce-development",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744463967/mockup-4_h41e2o.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const BigCommerce= ({ notify }) => {
  
  return (
    <>
    <Bigcommercenew notify={notify} />
    </>
  );
};

export default BigCommerce;

