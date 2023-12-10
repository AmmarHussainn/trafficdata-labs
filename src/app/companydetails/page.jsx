'use client';
import {
  backarrow,
  eyeicon,
  jobicon,
  linkedin,
  safari,
  searchicon,
  snitcherlogo,
  uslogoicon,
} from '@/assets';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add any additional functionality you want to execute when a tab is clicked
  };

  return (
    <>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        <div className='container mx-auto px-5 w-full'>
          <div className='flex w-full justify-between items-center my-1'>
            <Image
              src={backarrow}
              alt='backarrow'
              className='w-[80px]  h-[20px]'
            />
            <div className=' flex max-w-[180px] w-full justify-evenly items-center'>
              <div className=' border rounded-lg  p-1'>
                <Image src={searchicon} alt='searchicon' className='w-8 h-6' />
              </div>
              <Image src={linkedin} alt='linkedin' className='w-10 h-8' />
              <Image src={safari} alt='safari' className='w-10 h-8' />
            </div>
          </div>
          <div className='flex '>
            <div className='max-w-[400px] bg-[#f6f6f6db] p-4 border w-full'>
              <div className='flex justify-start gap-7 my-7 items-center'>
                <Image src={snitcherlogo} alt='snitcherlog' className='w-16' />
                <div>
                  <h2 className='text-xl'>Snitcher</h2>
                  <div className='flex '>
                    <Image
                      src={jobicon}
                      alt='jobicon'
                      className='w-[20px] h-[20px]'
                    />
                    <p>IT Company</p>
                  </div>
                </div>
              </div>
              <div className='max-w-[300px] w-full border p-2'>
                <div className='flex justify-start gap-3 items-center'>
                  <Image
                    src={eyeicon}
                    alt='eyeicon'
                    className='ml-2 w-[24px] h-[24px]'
                  />
                  <p>Visited 2 Times</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-2 px-4'>
                <button
                  onClick={() => handleTabClick('timeline')}
                  className={`text-black ${
                    activeTab === 'timeline' ? 'bg-primary , text-white'  : 'bg-white , text-black'
                  } px-1 text-sm rounded-xl border`}
                >
                  Timeline
                </button>
                <button
                  onClick={() => handleTabClick('contact')}
                  className={`text-black ${
                    activeTab === 'contact' ? 'bg-primary , text-white'  : 'bg-white , text-black'
                  } px-1 text-sm rounded-xl border`}
                  
                >
                  Contact
                </button>
              </div>

              <div className=' max-w-[600px] w-full mx-3 my-4 bg-[#F6F6F6] border border-solid p-5 px-3'>
             
              <div className='flex gap-2 max-w-[570px] justify-between items-center px-2 py-2 bg-white w-full '>
               <div className='flex gap-2 items-center'>
                <p className='text-4xl'>18</p>
                 <div>
                  <p>Thursday</p>
                  <p>September, 2023</p>
                 </div>
               </div>
               <div>

               <p>7:24 PM</p>
               </div>

              <div className='flex gap-4'>
                <Image  src={uslogoicon} alt='uslogo' className='w-[24px] h-[20px]'/>
                <p>United States</p>
              </div>
              
              <div className=' px-2 py-1 border border-solid'>
              Jack Caspino
              </div>

              </div>
              
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
