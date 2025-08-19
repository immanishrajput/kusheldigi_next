import DubaiComponent from "./PuneComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/dubai",
  },
  title: "Web Development Company in Dubai | Kushel Digi",
  description: "Professional web development company in Dubai offering custom websites, eommerce solutions & SEO-friendly design. Get started with Kushel Digi today!",
  openGraph: {
      title: "Web Development Company in Dubai | Kushel Digi",
  description: "Professional web development company in Dubai offering custom websites, eommerce solutions & SEO-friendly design. Get started with Kushel Digi today!",
    url: "https://www.kusheldigi.com/dubai",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
        width: 800,
        height: 600,
        alt: "Kushel Digi Logo",
      },
    ],
  },
};
const Page = () => {
  return <DubaiComponent />;
};

export default Page;