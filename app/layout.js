
// app/layout.js
export const metadata = {
  title: ' Kushel Digi Solutions | Expert eCommerce Development Service',
  description:'Kushel Digi Solutions has over 8 years of experience in Shopify, BigCommerce, and custom eCommerce solutions to deliver high performing online stores'
  ,
  
    
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
