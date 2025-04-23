import Customsoftware from "../components/Customsoftware";

export const metadata = {
  openGraph: {
    title: "Custom Software Development & Automation Solutions | Kushel Digi.",
    description: "Transform your business with Kushel Digi’s custom software, automation, and maintenance services. Future-proof, scalable, and designed for your industry’s demands.",
    url: "https://www.kusheldigi.com/custom-software-developmen",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739164763/Group_1000009804_fpegu7.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const custom = ({ notify }) => {
  
  return (
    <>
    <Customsoftware notify={notify} />
    </>
  );
};

export default custom;

