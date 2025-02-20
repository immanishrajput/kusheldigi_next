import React from 'react'
import Image from 'next/image'
import certified from '../../../public/assets/full-badge-bc-certified.svg'
import partner from '../../../public/assets/full-badge-bc-partner.svg'
const Home2 = () => {
  return (
    <div className='home22div'>
        <div className='home2Div'>
                <p>Award-winning Agency Partner</p>
                <div>
                  <Image src={certified} alt='certified'></Image>
                </div>
                <div><Image src={partner} alt='partner'></Image> </div>
              </div>
    </div>
  )
}

export default Home2