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
      {
        source: '/1/HfN/1179i0w3irc8z891wyjkde58o1ogucdfccfaa.placename',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/rifflesuppy',
        destination: '/riflesupply',
        permanent: true,
      },
      {
        source: '/pro-track',
        destination: '/protrucksandcars',
        permanent: true,
      },
      {
        source: '/rely',
        destination: '/relysafety',
        permanent: true,
      },
      {
        source: '/ballistic',
        destination: '/ballisticdummylab',
        permanent: true,
      },
      {
        source: '/sites',
        destination: '/sitesandscopes',
        permanent: true,
      },
      {
        source: '/topbrass',
        destination: '/topbrasstactical',
        permanent: true,
      },
      {
        source: '/Slidesdesign',
        destination: '/slides365',
        permanent: true,
      },
      {
        source: '/2ndamendment',
        destination: '/2ndamendmentguns',
        permanent: true,
      },
      {
        source: '/blackRhino',
        destination: '/blackrhinoconcealment',
        permanent: true,
      },
      {
        source: '/Survival',
        destination: '/thesurvivalmode',
        permanent: true,
      },
      {
        source: '/Race-wax',
        destination: '/racewax',
        permanent: true,
      },
      {
        source: '/Krap-strap',
        destination: '/krappstrapp',
        permanent: true,
      },
      {
        source: '/bobcat',
        destination: '/bobcatarmament',
        permanent: true,
      },
      {
        source: '/serve',
        destination: '/servapure',
        permanent: true,
      },
      {
        source: '/lafayette-shooters',
        destination: '/lafayetteshooters',
        permanent: true,
      },
      {
        source: '/four-farm',
        destination: '/fouroaksfarm',
        permanent: true,
      },
      {
        source: '/Ai2',
        destination: '/aipartscenter',
        permanent: true,
      },
      {
        source: '/crazyCMS',
        destination: '/mycrazysimplecms',
        permanent: true,
      },
      {
        source: '/woodView',
        destination: '/woodview',
        permanent: true,
      },
      {
        source: '/instacertified',
        destination: '/instacertify',
        permanent: true,
      },
      {
        source: '/Digitalmna',
        destination: '/digitalmna',
        permanent: true,
      },
      {
        source: '/Hitbaazar',
        destination: '/hitbaazar',
        permanent: true,
      },
      {
        source: '/ushaFastners',
        destination: '/ushafasteners',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
