import React from 'react'
import Sync1 from '../Headless-Bigcommerce/Sync1/page'
import Luna from '../Headless-Bigcommerce/Luna/page'
import Sumo from '../Headless-Bigcommerce/Sumo/page'
import Telephonic from '../Headless-Bigcommerce/Telephonic/page'
import Track from '../Headless-Bigcommerce/Track/page'
import Discover from '../Headless-Bigcommerce/Discover/page'
import Mention from '../Headless-Bigcommerce/Mention/page'
import Power from '../Headless-Bigcommerce/Power/page'
import Partner from '../Headless-Bigcommerce/Partner/page'
import Salot from '../Headless-Bigcommerce/Salot/page'
import Mouse from '../Headless-Bigcommerce/Mouse/page'
import Splet from '../Headless-Bigcommerce/Splet/page'
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
      <Telephonic/>
      <Track/>
      <Discover/>
      <Mention/>
      <Power/>
      <Partner/>
      <Salot/>
      {/* <Mouse/> */}
      <Splet/>
      <HomeForm/>
      <Footer/>
    </div>
  )
}

export default page
