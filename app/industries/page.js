import React from 'react'
import Industries from '../components/Industry2'



export const metadata = {
  openGraph: {
    title: "eCommerce Solutions for Every Industry | Kushel Digi Solutions",
    description: "Kushel Digi Solutions believes in offering full service and industry-specific solutions to enhance seamless user experiences and build a strong presence in their industry.",
    url: "https://www.kusheldigi.com/industries",
    type:"website",
    images: [{ url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png", width: 1200, height: 630 , alt:"kushel" }],
  },
}


function page() {
  return (
    <div>
      <Industries/>
    </div>
  )
}

export default page