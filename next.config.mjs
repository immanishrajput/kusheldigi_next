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
        source: '/rifflesupply',
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
        source: '/instacertified',
        destination: '/instacertify',
        permanent: true,
      },
      // {
      //   source: '/Digitalmna',
      //   destination: '/digitalmna',
      //   permanent: true,
      // },
      {
        source: '/digital',
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
      {
        source: '/career-beacon',
        destination: '/thecareerbeacon',
        permanent: true,
      },
      // {
      //   source: '/woodview',
      //   destination: '/woodView',
      //   permanent: true,
      // },
      {
        source: '/blogdetails/675a7b9b03dec66b0a76fb04',
        destination: '/blog/comprehensive-guide-to-modern-e-commerce-solutions-website-design-development-ai-packaging-and-more',
        permanent: true,
      },
      // {
      //   source: '/Headless-shopify',
      //   destination: '/headless-shopify',
      //   permanent: true,
      // },
      {
        source: '/native',
        destination: '/react-native',
        permanent: true,
      },
      {
        source: '/nodejs-developer',
        destination: '/node-js-developer',
        permanent: true,
      },
      {
        source: '/success',
        destination: '/thankyou',
        permanent: true,
      },
      {
        source: '/blogdetails/67c1b2edbb2f2db617912132',
        destination: '/blog/the-best-e-commerce-frameworks-for-online-selling-in-2025',
        permanent: true,
      },
      {
        source: '/blogs/8-reasons-youre-not-getting-any-website-traffic/',
        destination: '/blog/8-reasons-youre-not-getting-any-website-traffic',
        permanent: true,
      },
      {
        source: '/blogdetails/undefined',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/index.rdf',
        destination: '/',
        permanent: true,
      },
      {
        source: '/refund',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogdetails/headless-commerce',
        destination: '/blog/headless-bigcommerce-implementation-step-guide-for-modern-stores',
        permanent: true,
      },
      {
        source: '/blogs/how-can-bigcommerce-development-services-help-in-creating-a-mobile-responsive-e-commerce-store/',
        destination: '/blog/how-to-start-your-first-shopify-store-a-beginners-tutorial',
        permanent: true,
      },
      {
        source: '/blogs/category/seo/page/2/',
        destination: '/seo',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/main',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.xml',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/custom-software-developmen',
        destination: '/custom-software-development',
        permanent: true,
      },
      {
        source: '/blogdetails/681db91304aea0b9fa198608',
        destination: '/blog/the-growing-demand-for-sustainable-e-commerce-creating-eco-friendly-online-stores',
        permanent: true,
      },
      {
        source: '/2020/09/13/post-7817/',
        destination: '/ecommerce-development',
        permanent: true,
      },
      {
        source: '/blogs/ways-to-increase-wordpress-website-speed-without-plugin/',
        destination: '/blog/how-to-optimize-your-shopify-product-pages-for-more-conversions',
        permanent: true,
      },
      {
        source: '/m2012-08-01/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ecommerce-solutions-usa/',
        destination: '/ecommerce-development',
        permanent: true,
      },
      {
        source: '/blogs/importance-of-local-link-building/',
        destination: '/blog/how-to-use-social-media-to-build-your-ecommerce-brand-drive-conversions',
        permanent: true,
      },
      {
        source: '/blogs/how-to-optimize-your-bigcommerce-store-for-better-performance-and-user-experience-2/',
        destination: '/blog/bigcommerce-vs-shopify-which-platform-is-best-for-your-business-in-2025',
        permanent: true,
      },
      // {
      //   source: '/react-native',
      //   destination: '/react-native',
      //   permanent: true,
      // },
      {
        source: '/blogs/category/digital-marketing/',
        destination: '/blog/using-facebook-custom-audience-and-lookalike-audiences-to-improve-ad-targeting-unlocking-the-power-of-precision',
        permanent: true,
      },
      {
        source: '/blogs/bigcommerce-vs-shopify-vs-bigcommerce-which-is-better-for-your-ecommerce-business/',
        destination: '/blog/bigcommerce-vs-shopify-which-platform-is-best-for-your-business-in-2025',
        permanent: true,
      },
      // {
      //   source: '/Flutter',
      //   destination: '/flutter',
      //   permanent: true,
      // },
      {
        source: '/blogs/category/uncategorized/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/20-advertising-trends-to-watch-in-2024/',
        destination: '/blog/headless-bigcommerce-implementation-step-guide-for-modern-stores',
        permanent: true,
      },
      {
        source: '/blogs/amazons-bezos-to-face-unprecedented-protests-during-india-trip/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/fashion-portrait-of-young-businessman-handsome-model-man-in-casual-cloth/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/category/trends/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/essential-features-that-each-e-commerce-website-should-have-in-2024/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/the-rumored-iphone-5se-could-come-in-hot-pink-not-rose-gold/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/rank-math-vs-yoast-is-it-time-to-switch-from-yoast/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/here-are-the-4-cheapest-electric-vehicles-you-can-buy/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/latest-web-design-trends-in-2024/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/cloud-based-bigcommerce-speed-and-security-trends-driving-ecommerce-success/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/anxious-singles-are-renting-partners-for-chinese-new-year/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/how-long-before-seeing-results-from-seo-and-why/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/economists-see-few-monetary-policy-changes-with-powell-leading-fed/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/25-practical-and-actionable-blogging-tips-for-beginners-2024/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/8-reasons-youre-not-getting-any-website-traffic-how-to-fix-it/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/many-google-maps-users-want-to-see-an-idea-of-what-to-anticipate-when-they-arrive-at-their-location/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/how-to-create-an-effective-content-calendar-for-2024/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/blog/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/Graphic-Design',
        destination: '/graphic-design',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;