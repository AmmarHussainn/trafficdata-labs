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
import React, { useState, useEffect } from 'react';
import CustomModal from '@/components/CustomModal';
import SvgIcons from '@/assets/SvgIcons';
import axios from 'axios';

const Page = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [showModel, setShowModel] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add any additional functionality you want to execute when a tab is clicked
  };

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/userDetals';
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.data);
        console.log('response.data', response.data.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const CustomerModal = () => {
    return (
      <>
        <div className=' container max-w-[650px] w-full '>
          <div className='flex justify-end w-full '>
            <SvgIcons.Close />
          </div>
          <h2 className='text-3xl font-bold'>Jack Caspino</h2>
          <div className='flex justify-start gap-4 items-start mt-2 border-b-2 py-6'>
            <button
              onClick={() => handleTabClick('timeline')}
              className='bg-primary text-black px-2 py-[2px] text-sm border rounded-2xl'
            >
              Contact Details
            </button>
            <button
              onClick={() => handleTabClick('timeline')}
              className='bg-primary text-black px-2 py-[2px] text-sm border rounded-2xl'
            >
              Contact Details
            </button>
            <button
              onClick={() => handleTabClick('timeline')}
              className='bg-primary text-black px-2 py-[2px] text-sm border rounded-2xl'
            >
              Contact Details
            </button>
          </div>

          <div className='max-w-[400px] py-5 px-10 w-full'>
            <div className='flex gap-20'>
              <p>Email</p>
              <p>jcaspino@gmail.com</p>
            </div>
          </div>
        </div>
      </>
    );
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
                    activeTab === 'timeline'
                      ? 'bg-primary , text-white'
                      : 'bg-white , text-black'
                  } px-1 text-sm rounded-xl border`}
                >
                  Timeline
                </button>
                <button
                  onClick={() => handleTabClick('contact')}
                  className={`text-black ${
                    activeTab === 'contact'
                      ? 'bg-primary , text-white'
                      : 'bg-white , text-black'
                  } px-1 text-sm rounded-xl border`}
                >
                  Contact
                </button>
              </div>

              <div>
                {data &&
                  data.length > 0 &&
                  data.map((ele,idx) => {
                   return  <div className=' max-w-[600px] w-full mx-3 my-4 bg-white border-2  border-solid  p-5 px-3'>
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
                          <Image
                            src={uslogoicon}
                            alt='uslogo'
                            className='w-[24px] h-[20px]'
                          />
                          <p>{ele.ip.country}</p>
                        </div>

                        <div className=' px-2 py-1 border border-solid'>
                          Jack Caspino
                        </div>
                      </div>

                      <div className='max-w-[500px] bg-white mx-auto w-full grid grid-cols-4 text-[#979797] place-content-between place-items-center gap-3'>
                        <div className='bg-[#f7f7f7] text-[#979797]  w-[120px] p-3'>
                          <p className='text-[10px] text-center'>Client</p>
                          <p className='text-[10px] pt-10 text-center'>
                            Chrome, Desktop
                          </p>
                        </div>
                        <div className='bg-[#f7f7f7] text-[#979797]  w-[120px] p-3'>
                          <p className='text-[10px] text-center'>Referrer</p>
                          <p className='text-[10px] pt-10 text-center'>
                            {ele?.referrer || ''}
                          </p>
                        </div>
                        <div className='bg-[#f7f7f7] text-[#979797]  w-[120px] p-3'>
                          <p className='text-[10px] text-center'>
                            Pages Viewed
                          </p>
                          <p className='text-[10px] pt-10 text-center'>2</p>
                        </div>
                        <div className='bg-[#f7f7f7] text-[#979797]  w-[120px] p-3'>
                          <p className='text-[10px] text-center'>Time Spent</p>
                          <p className='text-[10px] pt-10 text-center'>
                            6 mins
                          </p>
                        </div>
                      </div>
                      <div className='max-w-[500px] bg-white border border-[#979797] my-2 mx-auto w-full  text-black  '>
                        <p className=' px-3 py-2 text-xl'>
                          Visited /marketing/
                        </p>
                        <p className='text-[#979797] px-3'>For 1200 seconds</p>
                      </div>
                    </div>;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomModal
        open={showModel}
        close={() => setShowModel(false)}
        width={'50%'}
        borderRadius={'12px'}
        component={<CustomerModal show={show} />}
      />
    </>
  );
};

export default Page;
