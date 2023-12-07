
import { companiesicon } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className='max-w-[340px] w-full  border '> 
     <div>
        <div className='flex justify-center items-center'>
            <Image src={companiesicon} alt='companiesicon' />
            Companies
        </div>
     </div>
    </div>
    </>
  )
}

export default Sidebar