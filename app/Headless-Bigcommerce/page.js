import React from 'react'
import Sync1 from '../headless-bigcommerce/Sync1/page'
import Luna from '../headless-bigcommerce/Luna/page'
import Sumo from '../headless-bigcommerce/Sumo/page'
import Telephonic from '../headless-bigcommerce/Telephonic/page'
import Track from '../headless-bigcommerce/Track/page'
import Discover from '../headless-bigcommerce/Discover/page'
import Mention from '../headless-bigcommerce/Mention/page'
import Power from '../headless-bigcommerce/Power/page'
import Partner from '../headless-bigcommerce/Partner/page'
import Salot from '../headless-bigcommerce/Salot/page'
import Mouse from '../headless-bigcommerce/Mouse/page'
import Splet from '../headless-bigcommerce/Splet/page'
import Serviicess from '../headless-bigcommerce/Serviicess/page'
import Actionnn from '../headless-bigcommerce/Actionnn/page'
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
