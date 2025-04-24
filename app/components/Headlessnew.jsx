"use client"
import React, { useEffect } from 'react'
import Navbar from '../COMMON/Navbar'
import Menu from '../headless-commerce/Menu/page'
import Upgrade from '../headless-commerce/Upgrade/page'
import More from '../headless-commerce/More/page'
import Last from'../headless-commerce/Last/page'
import Banner9 from '../ecommerce-development/Banner9/page'
import Action1 from '../headless-commerce/Action1/page'
import Cycle from '../headless-commerce/Cycle/page'
import Process from '../headless-commerce/Process/page'
import Omi from '../headless-commerce/Omi/page'
import Online from '../headless-commerce/Online/page'
import Devlopment from '../headless-commerce/Devlopment/page'
import Pwa from '../headless-commerce/Pwa/page'
import Wining from '../headless-commerce/Wining/page'
import Wifi from '../headless-commerce/Wifi/page'

import Footer from '../COMMON/Footer'
import Diff from '../headless-commerce/Diff/page'
import Action2 from '../headless-commerce/Action2/page'
import HomeForm from '../components/Home/HomeForm'

function page() {
    const generateMetadata = ({ params }) => ({
          title: 'Headless Commerce Development Services | Kushel Digi Solutions',
          description: 'Build future-ready online stores with Kushel Digi’s headless commerce. Get custom APIs, multi-channel integration, secure payments, and a seamless user experience. ',
        });
        
      useEffect(() => {
          const { title, description } = generateMetadata({ params: {} });
          document.title = title;
          let metaDescription = document.querySelector('meta[name="description"]');
          metaDescription ? metaDescription.content = description : 
            document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
        }, []);
  return (
    <div>
      <Navbar/>
      <Menu/>
      <Upgrade/>
      <More/>
      <Last/>
      <Banner9/>
      <Action1/>
      <Cycle/>
      <Process/>
      <Omi/>
      <Online/>
      <Devlopment/>
      <Pwa/>
      <Wining/>
      <Diff/>
      <Wifi/>
      <Action2/>
      {/* <Sec14/> */}
      <HomeForm/>
      <Footer/>
     
    </div>
  )
}

export default page
