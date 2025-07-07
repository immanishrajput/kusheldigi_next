import React from 'react'
import Industries from '../components/Industry2'

export const metadata = {
  openGraph: {
    title: "Scalable eCommerce Services for All Industries | Kushel Digi",
    description: "Explore industry-specific eCommerce services from Kushel Digi—healthcare, retail, finance, education, fashion, entertainment, and more. Boost your business today!",
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