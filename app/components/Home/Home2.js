import React from 'react'
import Image from 'next/image'
// import certified from '../../../public/assets/full-badge-bc-certified.svg'
// import partner from '../../../public/assets/full-badge-bc-partner.svg'
const Home2 = () => {
  return (
    // <div className='home22div'>
        <div className='home2Div'>
                <p>Award-winning Agency Partner</p>
                <div>
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481216/full-badge-bc-certified_krjod2.svg' alt='certified' height={170} width={170}></img>
                </div>
                <div><img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740481245/full-badge-bc-partner_af2b3i.svg' alt='partner' height={170} width={170}></img> </div>
              </div>
    // </div>
  )
}

export default Home2