// app/layout.js
// export const metadata = {
//   title: 'Kushel Digi Solutions - Best Ecommerce Development Company',
//   description:
//     'Kushel Digi Solutions- Best E-commerce web Development Company that helps you attract massive traffic towards your website through our digital marketing.',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
