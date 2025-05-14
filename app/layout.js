import Script from "next/script";
import "./globals.css"
import { ToastContainer } from "react-toastify";


export const metadata = {

  keywords: [
    "Best Web Design Agency",
  "Professional Web Design Company",
  "how to build your custom solution",
  "Ecommerce Development",
  "Ecommerce Development Experts",
  "Custom App Development for BigCommerce",
  "full-service eCommerce digital agency",
  "Scalable, Custom Ecommerce Solutions",
  "BigCommerce Design & Development Services",
  "Custom Ecommerce Solutions",
  "Custom BigCommerce Integrations",
  "BigCommerce SEO Support",
  "Custom BigCommerce Checkout",
  "Headless BigCommerce Development",
  "Shopify Design & Development Services",
  "Shopify merchants with specialized development",
  "premier ecommerce UX agency",
  "customize your BigCommerce or Shopify theme",
  "Ecommerce UX Agency",
  "Custom App Development for BigCommerce and Shopify Stores"
  ],
  metadataBase: new URL(`https://www.kusheldigi.com/`),
  alternates: {
      canonical: './',
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Expert eCommerce & BigCommerce Development Company | Kushel Digi",
    description: "Transform your online presence with Kushel Digi Solutions eCommerce development, BigCommerce solutions, and tailored B2B and marketplace platforms. Start your project today! ",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 }],
  },
  openGraph: {
    title: "Expert eCommerce & BigCommerce Development Company | Kushel Digi",
    description: "Transform your online presence with Kushel Digi Solutions eCommerce development, BigCommerce solutions, and tailored B2B and marketplace platforms. Start your project today! ",
    url: "https://www.kusheldigi.com/",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },

  verification: {
    google: 'u8hOCEYTlB2dEFUZ297M4Kzx-y4H_RU35SXKUqwsEzA',
  },
 
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "IT Service",
  "serviceType": "eCommerce Website Development ,BigCommerce Website Development",
  "provider": {
    "@type": "Organization",
    "name": "Kushel Digi Solutions",
    "url": "https://www.kusheldigi.com/"
  },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "USA" },
    { "@type": "Country", "name": "UAE" }
  ],
  "description": "Transform your online presence with Kushel Digi Solutions eCommerce development, BigCommerce solutions, and tailored B2B and marketplace platforms. Start your project today!",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, D242, F-32B, Sector 63 Rd, Noida, 201301, Uttar Pradesh",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "telephone": "+91-9045301702",
  "url": "https://www.kusheldigi.com/",
  "openingHours": "Mon-Sat 10:00AM-05:00AM",
  "priceRange": ["$$", "INR"]
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
     <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
       <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-K7DSK87RV0`}></Script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K7DSK87RV0', { page_path: window.location.pathname });
          `  
        }} />
     </head>
      <body>
        <ToastContainer position="bottom-right" />
        {children}
        </body>
    </html>
  );
}
