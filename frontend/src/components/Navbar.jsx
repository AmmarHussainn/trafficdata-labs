import { tdllogo } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-14 '>
    <Image  src={tdllogo} alt='tdlogo' className='w-[160px] h-[40px] mt-2 mx-6  '/>
     <div className='w-full h-full bg-primary'></div>
    </div>
  )
}

export default Navbar