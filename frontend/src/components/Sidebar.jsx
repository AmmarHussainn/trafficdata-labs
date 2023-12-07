'use client'
import {
    billingicon,
    companiesicon,
    peoplesicon,
    pixelicon,
    settingicon,
    trafficdataicon,
  } from '@/assets';
  import Image from 'next/image';
  import React, { useState } from 'react';
  import ProgressBar from "@ramonak/react-progress-bar";

  
  const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
    };
  
    return (
      <>
        <div className='max-w-[20%] w-full  border '>
          <div className='py-7 px-2'>
            <div className='flex px-7 py-2 gap-3  '>
              <Image src={companiesicon} alt='companiesicon' />
              Companies
            </div>
            <div className='flex px-7 py-5 gap-3  '>
              <Image
                src={peoplesicon}
                className='w-[20px] h-[20px] mr-2'
                alt='peoplesicon'
              />
              People
            </div>
            <div className='flex px-7 py-2 gap-3  '>
              <Image src={trafficdataicon} alt='trafficdataicon' />
              Traffic Data
            </div>
          </div>

          <div className='w-[170px] mx-7 my-4'>
            <p>Usage</p>
            <ProgressBar isLabelVisible={false} completed={60} bgColor='green' height='10px' width='100%' />
            <p className='text-[12px] pt-2 text-[#AAAAAA]'> 400 of 1000 users identified</p>
          </div>
          <div>
            <div className='w-[250px] px-8'>

            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black bg-[#EBEBEB] w-full  font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center "
              type="button"
            >
              tapratings.com
              <svg
                className={`w-2.5 h-2.5 ms-3 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
               
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
  
            <div
              id="dropdown"
              className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'}  divide-y rounded-lg shadow w-44 `}
            >
              <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 ">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 ">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 ">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 ">Sign out</a>
                </li>
              </ul>
            </div>
            </div>
  
            <div className='py-7 px-2'>
              <div className='flex px-7 py-2 gap-3  '>
                <Image src={pixelicon} alt='pixelicon' />
                Pixel Settings
              </div>
              <div className='flex px-7 py-5 gap-3  '>
                <Image
                  src={settingicon}
                  className='w-[20px] h-[20px] '
                  alt='settingicon'
                />
                Account Settings
              </div>
              <div className='flex px-7 py-2 gap-3  '>
                <Image src={billingicon}  alt='billingicon' className='w-[20px] h-[20px]' />
                Billing
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Sidebar;
  