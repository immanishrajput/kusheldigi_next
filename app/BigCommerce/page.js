"use client"
import React from 'react'
import BigBanner3 from './BigBanner3/page'
import BigBanner4 from './BigBanner4/page'
import BigBanner6 from './BigBanner6/page'
import BigBanner7 from './BigBanner7/page'
import BigBanner8 from './BigBanner8/page'
import BannerMain from './BannerMain/page'
import Process from './Process/page'
const page = () => {
  return (
    <div>
      <BannerMain/>
        <BigBanner4/>
        <BigBanner6/>
        <BigBanner7/>
        <BigBanner3/>
        <BigBanner8/>
        <Process/>
    </div>
  )
}

export default page