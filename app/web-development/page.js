
import Webdevelopment  from "../components/Webdevelopment"


export const metadata = {
  openGraph: {
    title: "Build Your Dream Website Today | Web Development by Kushel Digi. ",
    description: "Start your project with Kushel Digi Solutions—experts in custom web development, responsive design, and innovative digital solutions for every industry.",
    url: "https://www.kusheldigi.com/web-development",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724843511/mobilieji.777f4a1da1940ac55315_qfiv4l.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const magento = ({ notify }) => {
  
  return (
    <>
    <Webdevelopment notify={notify} />
    </>
  );
};

export default magento;

