
// app/layout.js
export const metadata = {
  title: ' Kushel Digi Solutions | Expert eCommerce Development Services',
  description: 'High performance Ecommerce solutions with specialized development strategies. Kushel Digi Solutions boosts conversion and builds scalable Shopify, BigCommerce and custom online stores.'
  ,
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
  ]

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
