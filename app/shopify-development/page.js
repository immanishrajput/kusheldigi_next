
import ShopifyNew from "../components/ShopifyNew"


export const metadata = {
  openGraph: {
    title: "Shopify Experts for eCommerce Development Growth | Kushel Digi ",
    description: "Kushel Digi Solutions delivers Shopify development, theme customization, app integration, and ongoing support. Boost your eCommerce sales with our Shopify expertise.",
    url: "https://www.kusheldigi.com/shopify-development",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1744637848/Shopify_Banner_Design_c0viof.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Shopify = ({ notify }) => {
  
  return (
    <>
    <ShopifyNew notify={notify} />
    </>
  );
};

export default Shopify;

