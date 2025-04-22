
import MagentoNew  from "../components/MagentoNew"


export const metadata = {
  openGraph: {
    title: "Magento Development Experts for eCommerce Success | Kushel Digi. ",
    description: "Kushel Digi offers Magento customization, PWA development, extension integration, and ongoing maintenance for secure, scalable, and innovative eCommerce platforms.",
    url: "https://www.kusheldigi.com/magento-development",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724838206/sa4.6d83a0b214d92052eecf_e8upaw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const magento = ({ notify }) => {
  
  return (
    <>
    <MagentoNew notify={notify} />
    </>
  );
};

export default magento;

