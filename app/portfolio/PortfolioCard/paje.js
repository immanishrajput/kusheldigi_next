"use client"
import React, { useState } from 'react';
import './PortfolioCard.css';
import Link from 'next/link';
import { LuDot } from "react-icons/lu";
const portfolioData = [
  {
    id: 'automotive-1',
    // companyName: 'Kick-eez',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477030/abImg1_vyhxn6.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '/kick-eez',
      platform: '/bigcommerce-development',
    },
    case: 'View Case Study',
    case1: 'BigCommerce',
    line: '|',

    category: ["ecommerce"],
  },
  {
    id: 'automotive-2',
    // companyName: 'Pro Trucks',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477086/abimg2_vksyx7.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/protrucksandcars',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],

  },
  {
    id: 'automotive-3',
    // companyName: 'Rely',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477117/abimg3_tsrgwp.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/relysafety',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },
  {
    id: 'automotive-4',
    // companyName: 'Solenoid Ninja',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477144/abimg5_wfhlp8.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/solenoid-ninja',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },
  {
    id: 'automotive-5',
    // companyName: 'Ballistic Dummy Lab',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725952762/image_75_ywf6np.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745409123/Shoplift1_kzo9i1.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {

      caseStudy: '/ballisticdummylab',
      platform: '/shopify-development',
    },
    case: ' View Case Study',
    case1: 'Shopify',
    line: '|',
    category: ["ecommerce"],
  },
  {
    id: 'automotive-6',
    // companyName: 'Sites and Scopes',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725953651/image_18_1_j5e3am.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/sitesandscopes',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },

  {
    id: 'automotive-7',
    // companyName: 'Top Brass Tactical',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725953729/logo-white_1_1689966883__67774_1_yqlhdf.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/topbrasstactical',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },
  {
    id: 'automotive-8',
    // companyName: 'Slides365',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725953057/slide_1_gelwuz.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/slides365',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },

  {
    id: 'automotive-9',
    // companyName: '2ndamendment Armory',
    logo: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746784821/Group_1171279311_lf5dmj.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/2ndamendmentguns',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },


  {
    id: 'automotive-59',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744637742/lovely_nymplp.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {

      caseStudy: '/blackrhinoconcealment',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },


  {
    id: 'automotive-501',
    logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1747323201/logo-white-new_1687810777__26159.original_tyhlxx.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '/Ai',
      caseStudy: '/thesurvivalmode',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },


  // {
  //   id: 'automotive-103',


  //   logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1747323201/logo-white-new_1687810777__26159.original_tyhlxx.png',
  //   platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
  //   description: [
  //     "UX/UI Website Design", "Website Development", "QA & Website Testing"
  //   ],
  //   links: {
  //     liveStore: 'https://www.phastekperformance.com/',

  //     caseStudy: '/Survival',
  //     caseStudy: '/Survival',
  //     platform: '/bigcommerce-development',
  //   },
  //   case: ' View Case Study',
  //   case1: 'BigCommerce',
  //   line: '|',
  //   category: ["ecommerce"],
  // },

  {
    id: 'automotive-104',


    logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1746889440/Group_1171279371_nqoess.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',

      caseStudy: '/Ai',
      caseStudy: '/racewax',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },



  // {
  //   id: 'automotive-105',
  //   logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1748016554/Vector_4_hnx29x.png',
  //   platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
  //   description: [
  //     "UX/UI Website Design", "Website Development", "QA & Website Testing"
  //   ],
  //   links: {
  //     liveStore: 'https://www.phastekperformance.com/',

  //     caseStudy: '/Ai',
  //     caseStudy: '/instacertify',
  //     platform: '/bigcommerce-development',
  //   },
  //   case: ' View Case Study',
  //   case1: 'BigCommerce',
  //   line: '|',
  //   category: ["ecommerce"],
  // },
  // {
  //   id: 'automotive-106',
  //   logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1748016554/Group_1171279433_zut9do.png',
  //   platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
  //   description: [
  //     "UX/UI Website Design", "Website Development", "QA & Website Testing"
  //   ],
  //   links: {
  //     liveStore: 'https://www.phastekperformance.com/',

  //     caseStudy: '/Ai',
  //     caseStudy: '/career-beacon',
  //     platform: '/bigcommerce-development',
  //   },
  //   case: ' View Case Study',
  //   case1: 'BigCommerce',
  //   line: '|',
  //   category: ["ecommerce"],
  // },

  {
    id: 'automotive-107',
    logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1748014394/krapp-strapp-logo_1726251600__26374.original_1_fx2cjv.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',

      caseStudy: '/Ai',
      caseStudy: '/krappstrapp',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },

  {
    id: 'automotive-108',
    logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1748205987/Group_1171279467_jynsvv.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',

      caseStudy: '/Ai',
      caseStudy: '/bobcatarmament',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },

  {
    id: 'automotive-109',
    logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1748206714/sp-logo_1718202719__08634_1_lu5l3i.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',

      caseStudy: '/Ai',
      caseStudy: '/servapure',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },
  // {
  //   id: 'automotive-110',
  //   logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1748270331/Group_1171279472_1_lkh4bv.png',
  //   platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
  //   description: [
  //     "UX/UI Website Design", "Website Development", "QA & Website Testing"
  //   ],
  //   links: {
  //     liveStore: 'https://www.phastekperformance.com/',

  //     caseStudy: '/Ai',
  //     caseStudy: '/digital',
  //     platform: '/bigcommerce-development',
  //   },
  //   case: ' View Case Study',
  //   case1: 'BigCommerce',
  //   line: '|',
  //   category: ["ecommerce"],
  // },

  // {
  //   id: 'automotive-111',
  //   logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1748275036/Group_1171279500_ugv0xr.png',
  //   platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
  //   description: [
  //       "UX/UI Website Design","Website Development","QA & Website Testing"
  // ],
  //   links: {
  //     liveStore: 'https://www.phastekperformance.com/',

  //     caseStudy: '/Ai',
  //     caseStudy: '/ushafasteners',
  //     platform: '/bigcommerce-development',
  //   },
  //   case:' View Case Study',
  //   case1:'BigCommerce',
  //   line:'|',
  //   category: ["ecommerce"],
  // },

  {
    id: 'automotive-150',
    logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1746889440/Group_1171279370_vcvyey.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',

      caseStudy: '/Ai',
      caseStudy: '/lafayetteshooters',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },

  {
    id: 'automotive-151',


    logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1746891179/Group_1171279369_qmin7o.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',

      caseStudy: '/Ai',
      caseStudy: '/fouroaksfarm',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },

  {
    id: 'automotive-10',

    // companyName: 'Ai',
    logo: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747159088/Group_1171279373_mutmdz.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',

      caseStudy: '/Ai',
      caseStudy: '/aipartscenter',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },






  {
    id: 'automotive-11',

    // companyName: 'Ride Ready',
    logo: 'https://res.cloudinary.com/dgif730br/image/upload/v1732807319/logo_1_1688114115__84399_2_iaqhon.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/rideready',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },


  {
    id: 'automotive-100',

    // companyName: 'Ride Ready',
    logo: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746544184/typhoondefense_achn4u_1_y7ncf8.webp',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/typhoondefense',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },



  {
    id: 'automotive-101',
    // companyName: 'riflesupply',
    logo: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1746544785/graco_corporation_logo_1705399297__51656_o9u82r_t8qznl.webp',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/graco-corp',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },




  {
    id: 'automotive-102',
    // companyName: 'Ride Ready',
    logo: 'https://res.cloudinary.com/dbcmdtr3r/image/upload/v1747159162/Group_1171279372_x9l907.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/riflesupply',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    line: '|',
    category: ["ecommerce"],
  },






  {
    id: 'automotive-12',
    // companyName: 'My CMS',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477196/mycms_dc994l.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745409212/laravel_ckyqzi.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '/mycrazysimplecms',
      // platform: '#',
    },
    case: ' View Case Study',
    case1: 'Laravel',
    line: '|',
    category: ["website"],
  },
  {
    id: 'automotive-13',
    // companyName: 'FairChild',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725952623/Layer_1_15_ilqoor.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745409212/laravel_ckyqzi.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {

      caseStudy: '#',
      // platform: '/bigcommerce-development',
      platform1: '/next-js'
    },
    case: ' View Case Study',
    case1: "Laravel",
    case2: [" | ", "Next js"],
    line: '|',
    category: ["website"],
  },
  {
    id: 'automotive-14',
    // companyName: 'Wood View',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725952841/image_76_tovttv.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745409212/laravel_ckyqzi.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '/woodView',
      platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'Laravel',
    line: '|',
    category: ["website"],
  },
  {
    id: 'automotive-15',
    // companyName: 'HRMS',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477326/hrmsname_ljnty9.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745408641/node_js_xqb6ug.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '#',
      platform: '/react-js',
      platform1: '/node-js'

    },
    case: ' View Case Study',
    case1: "React js",
    case2: [" | ", "Node"],
    line: '|',
    category: ["website"],
  },

  {
    id: 'automotive-16',
    // companyName: 'Shubhalloys',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725952993/SHUBHALLOYS_j2i6dz.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745408641/node_js_xqb6ug.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/subhAlloy',
      platform: '/react-js',
      platform1: '/node-js'
    },
    case: ' View Case Study',
    case1: 'React js',
    case2: [" | ", "Node"],
    line: '|',
    category: ["website"],
  },
  {
    id: 'automotive-17',
    // companyName: 'Inventory Propus Enterprises',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478580/custom11_kznig4.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745409465/PHP_az1lyx.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '#',
      platform: '/php',
    },
    case: ' View Case Study',
    case1: 'PHP',
    line: '|',
    category: ["website"],
  },
  {
    id: 'automotive-18',
    // companyName: 'Instacertify',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478756/webinstalogo_rutcoc.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745409710/Next_js1_lcqcpn.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '#',
      platform: '/next-js',
    },
    case: ' View Case Study',
    case1: 'Next js',
    line: '|',
    category: ["software"],
  },
  {
    id: 'automotive-19',
    // companyName: 'OBTECH',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478856/webobtech_km5zcs.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745409465/PHP_az1lyx.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '#',
      platform: '/php',
    },
    case: ' View Case Study',
    case1: 'PHP',
    line: '|',
    category: ["software"],
  },
  // {
  //   id: 'automotive-20',
  //   // companyName: 'DigitalMnA',
  //   logo: 'https://res.cloudinary.com/dal5dlztv/image/upload/v1748270331/Group_1171279472_1_lkh4bv.png',
  //   platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
  //   description: [
  //     "UX/UI Website Design", "Website Development", "QA & Website Testing"
  //   ],
  //   links: {
  //     caseStudy: '/digital',
  //     platform: '/next-js',
  //   },
  //   case: ' View Case Study',
  //   case1: 'Next js',
  //   line: '|',
  //   category: ["software"],
  // },
  {
    id: 'automotive-21',
    // companyName: 'Auxible',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478612/webauxlogo_sxf2ww.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {

      caseStudy: '#',
      platform: '/html',
    },
    case: ' View Case Study',
    case1: 'HTML',
    line: '|',
    category: ["software"],


  },
  {
    id: 'automotive-22',
    // companyName: 'Juinor Achievement',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478786/webjuniorlogo_pvlv7i.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {

      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["software"],
  },
  {
    id: 'automotive-23',
    // companyName: 'Suvrin',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478645/websuvrinlogo_cdrlkl.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {

      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'Doodle',
    line: '|',
    category: ["software"],
  },
  {
    id: 'automotive-24',
    // companyName: 'Jowffe',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478824/touffle_le6ygd.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["software"],
  },
  {
    id: 'automotive-25',
    // companyName: 'Major',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478721/webmajorlogo_ejcx63.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1745409345/React1_eyrvol.png',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '#',
      platform: '/react-js',
    },
    case: ' View Case Study',
    case1: 'React js',
    line: '|',
    category: ["software"],
  },
  //   {
  //     id: 'automotive-26',
  //     // companyName: 'Usha Fasteners',
  //     logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
  //     platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
  //     description: [
  //         "UX/UI Website Design","Website Development","QA & Website Testing"
  // ],
  //     links: {
  //       caseStudy: '#',
  //       platform: '/bigcommerce-development',
  //     },
  // case:' View Case Study',
  // case1:'BigCommerce',
  //     category: ["software"],
  //   },
  {
    id: 'automotive-27',
    // companyName: 'Saina',
    // logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["appdevelop"],
  },
  {
    id: 'automotive-28',
    // companyName: 'Circuit Route Planner',
    // logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["appdevelop"],
  },
  {
    id: 'automotive-29',
    // companyName: 'Apeejay Business Center',
    // logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["appdevelop"],
  },
  {
    id: 'automotive-30',
    // companyName: 'Fit Cloud Pro',
    // logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["appdevelop"],
  },
  {
    id: 'automotive-31',
    // companyName: 'EAR SHOT',
    // logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    // platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["appdevelop"],
  },
  {
    id: 'automotive-32',
    // companyName: 'VR OTT',
    //  logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    //  platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {

      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["appdevelop"],
  },
  {
    id: 'automotive-33',

    // logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    //  platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
      "UX/UI Website Design", "Website Development", "QA & Website Testing"
    ],
    links: {
      caseStudy: '#',
      // platform: '/bigcommerce-development',
    },
    case: ' View Case Study',
    case1: 'BigCommerce',
    category: ["oddodevelop"],
  },
];


const Portfolio = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredCaseStudies = filteredCategory === "All" ? portfolioData : filteredCategory === "ecommerce" ? portfolioData.filter((data) => data.category.includes(filteredCategory.toLowerCase())).reverse() : portfolioData.filter((data) => data.category.includes(filteredCategory.toLowerCase()));
  const generateMetadata = ({ params }) => ({
    title: 'Our eCommerce Projects | Kushel Digi Solutions Portfolio',
    description: 'Explore how Kushel Digi Solutions drives eCommerce success and projects of custom Shopify, BigCommerce stores. We help you to grow with innovative and specialized solutions. ',
  });
  return (

    <section className='mainSec_PortWork'>
      <h1 className="PortFolio_ourWork">Our Work</h1>
      <div className="PortfolioButtonWork">
        <button onClick={() => handleFilterChange("All")} className={`${filteredCategory === "All" && "addbgcclds"}`}>All</button>
        <button onClick={() => handleFilterChange("ecommerce")} className={`${filteredCategory === "ecommerce" && "addbgcclds"}`}>E-Commerce</button>
        <button onClick={() => handleFilterChange("website")} className={`${filteredCategory === "website" && "addbgcclds"}`}>Custom Software</button>
        <button onClick={() => handleFilterChange("software")} className={`${filteredCategory === "software" && "addbgcclds"}`}>Website</button>
        {/* <button onClick={() => handleFilterChange("appdevelop")} className={`${filteredCategory === "appdevelop" && "addbgcclds"}`}>UI/UX</button> */}
        <button onClick={() => handleFilterChange("appdevelop")} className={`${filteredCategory === "appdevelop" && "addbgcclds"}`}>Mobile Apps</button>
        <button onClick={() => handleFilterChange("oddodevelop")} className={`${filteredCategory === "oddodevelop" && "addbgcclds"}`}>ODDO</button>
      </div>
      <div className='PortfolioMainSection'>

        <div className='mainCardOverlay'>
          {filteredCaseStudies.map((item, index) => (
            <div className="client each-portfolio-cards automotive" id={item?.id} key={index}>
              <div className="each-portfolio">
                <img src={item?.logo} className="top-company-logos" />
                <img src={item?.platformLogo} className="bottom-platform-logo" />
                <div className="card-overlayMain">
                  <div className="overlay-content">
                    <img src={item?.logo} />
                    <h3>{item?.companyName}</h3>
                    {item.description?.map((content, i) => {
                      return <div key={i} className='contentPointmain'>
                        <LuDot className='contentPonit' />
                        <p>{content}</p> </div>
                    })}
                    <ul>

                      {/* <li> */}
                      <button className='view-case-btn'>
                        <Link href={item.links?.caseStudy}>
                          {item.case}
                        </Link>
                      </button>

                      {/* </li> */}

                      {/* <li className="list-divider">{item?.line}</li> */}
                      {/* <li> */}


                      {/*                  
  <a href={item.links?.platform}>
    {item.case1} 
  </a> */}





                      {/* </li> */}


                      {/* <li><a href={item.links?.platform}>
                    {item?.case1} {item?.case2}
                      </a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
