"use client"
import React from 'react'
import Navbar from '../COMMON/Navbar'
import Menu from './Menu/page'
import Upgrade from './Upgrade/page'
import More from './More/page'
import Last from'./Last/page'
import Banner9 from '../ecommerce-development/Banner9/page'
import Action1 from './Action1/page'
import Cycle from './Cycle/page'
import Process from './Process/page'
import Omi from './Omi/page'
import Online from './Online/page'
import Devlopment from './Devlopment/page'
import Pwa from './Pwa/page'
import Wining from './Wining/page'
import Wifi from './Wifi/page'
import Sec14 from './Sec14/page'
import Footer from '../COMMON/Footer'
import Diff from './Diff/page'
import HomeForm from '../components/Home/HomeForm'

function page() {
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
      <Sec14/>
      <HomeForm/>
      <Footer/>
    </div>
  )
}

export default page
