import BigcommerceDubaiComponent from "./BigcommerceDubaiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/dubai/website-design-company-in-dubai",
  },
  title: "BigCommerce Development Company in dubai | Kushel Digi",
  description: "Kushel Digi is a leading bigcommerce development company in dubai, offering tailored ecommerce solutions to launch, grow, and scale your online store.",
  openGraph: {
      title: "BigCommerce Development Company in dubai | Kushel Digi",
  description: "Kushel Digi is a leading bigcommerce development company in dubai, offering tailored ecommerce solutions to launch, grow, and scale your online store.",
    url: "https://www.kusheldigi.com/dubai/website-design-company-in-dubai",
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
  return <BigcommerceDubaiComponent />;
};

export default Page;