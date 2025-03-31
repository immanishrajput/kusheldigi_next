"use client"
import React from 'react'
import BigBanner from './BigBanner/page'
import BigBanner2 from './BigBanner2/page'
import BigBanner3 from './BigBanner3/page'
// import BigBanner4 from './BigBanner4/page'
const page = () => {
  return (
    <div>
        <BigBanner/>
        <BigBanner2/>
        <BigBanner3/>
        {/* <BigBanner4/> */}
    </div>
  )
}

export default page