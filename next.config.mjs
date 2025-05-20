// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['res.cloudinary.com'], // Add Cloudinary domain here
//     },
//   };

//   export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },

  async redirects() {
    return [
      {
        source: '/web-development-in-usa',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/bigcommerce',
        destination: '/bigcommerce-development',
        permanent: true,
      },
      {
        source: '/ecommerce-solutions',
        destination: '/ecommerce-development',
        permanent: true,
      },
      {
        source: '/web-development-usa',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/web-d',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/blogs/wp-content/uploads/2022/05/8-770x470.jpg',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/ecommerce-solutions-usa%E2%80%9D',
        destination: '/ecommerce-development',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/ecommerce-solutions-usa',
        destination: '/ecommerce-development',
        permanent: true,
      },
      {
        source: '/magento',
        destination: '/magento-development',
        permanent: true,
      },
      {
        source: '/shopify',
        destination: '/shopify-development',
        permanent: true,
      },
      {
        source: '/web-development%3Cbr%3E%0A!%5BImage%20description%5D(https:/dev-to-uploads.s3.amazonaws.com/uploads/articles/mc2g64zluond0brjxjhn.jpg)',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/bigComm',
        destination: '/bigcommerce-development',
        permanent: true,
      },
      {
        source: '/woocommerce',
        destination: '/woocommerce-development',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
