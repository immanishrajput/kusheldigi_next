import Script from "next/script";
import "./globals.css"


export const metadata = {

  keywords: [
    'best ecommerce development companies',
    'best ecommerce development platform',
    'best ecommerce web development company',
    'best ecommerce store development company',
    'bigcommerce development store',
    'bigcommerce ecommerce development services',
    'bigcommerce website development services',
    'eCommerce Development',
    'Bigcommerce development company',
    'website development company',
    'BigCommerce Development',
    'shopify ecommerce development company',
    'E-commerce Web Development',
    'Store Development & Setup',
    'Custom Theme Development',
    'Custom Development & Integrations',
    'BigCommerce B2B Development',
    'BigCommerce Platform Migration',
    'Multi-Storefront & Internationalization',
    'App & Plugin Development',
    'Headless Commerce & API Development',
    'Store developement',
    'Custom theme developement',
    'custom third-party integration',
    'Big commerce app developement'
  ],
  metadataBase: new URL(`https://www.kusheldigi.com/`),
  alternates: {
      canonical: './',
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Kushel Digi | Expert eCommerce Development Services",
    description: "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 }],
  },
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description: "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
 
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Development",
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
  "description": "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
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
  "openingHours": "Mon-Sat 10:00AM-05:00PM",
  "priceRange": ["$$", "INR"]
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body>{children}</body>
    </html>
  );
}
