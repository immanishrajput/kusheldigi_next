"use client"
import React from 'react'
import Sync1 from './Sync1/page'
import Luna from './Luna/page'
import Sumo from './Sumo/page'
import Telephonic from './Telephonic/page'
import Track from './Track/page'
import Power from './Power/page'
import Partner from './Partner/page'
import Salot from './Salot/page'
import Splet from './Splet/page'
import Serviicess from './Serviicess/page'
import Actionnn from './Actionnn/page'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import HomeForm from '../components/Home/HomeForm'

function page() {
  return (
    <div>
      <Navbar/>
      <Sync1/>
      <Luna/>
      <Sumo/>
      <Serviicess/>
      <Actionnn/>
      <Telephonic/>
      <Track/>
      <Splet/>
      {/* <Discover/> */}
      {/* <Mention/> */}
      <Power/>
      <Partner/>
     
      <Salot/>
      {/* <Mouse/> */}
     
      <HomeForm/>
      <Footer/>
    </div>
  )
}

export default page
