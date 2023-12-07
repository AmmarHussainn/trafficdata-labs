import InstructionAlert from '@/components/InstructionAlert'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    < >
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
     <InstructionAlert/>
      </div>
    </>
  )
}
