import { backarrow } from '@/assets'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>

    <Sidebar/>
    <div className='container mx-auto px-5  w-full'>
    <div className='flex w-full justify-between' >
       <Image src={backarrow} alt='backarrow'  className='w-[80px] mt-3 h-[20px]' />
         </div>
    </div>
    </div>
    </>
  )
}

export default page