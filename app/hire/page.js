import '../globals.css'
import Hire2 from "../components/Hire2";


export const metadata = {
  openGraph: {
    title: "KushelDigi | Job Search Marketplace Tech Job Hunting Simplified",
    description: "Discover your dream tech job effortlessly with KushelDigi! Our job search marketplace streamlines the process, connecting talented professionals with top tech companies. Simplify your job hunt today..",
    url: "https://www.kusheldigi.com/hire",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}

const Hire = ({ notify }) => {
  
  return (
    <>
    <Hire2 notify={notify} />
    </>
  );
};

export default Hire;

