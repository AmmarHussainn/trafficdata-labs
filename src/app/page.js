'use client';
import SvgIcons from '@/assets/SvgIcons';
import InstructionAlert from '@/components/InstructionAlert';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CustomsModal from '@/components/CustomModal';
import { danger, wordPress } from '@/assets';

export default function Home() {
  const [selected, setSelected] = useState('All');
  const [show, setShow] = useState(false);

  const CustomerModal = () => {
    console.log('CustomerModal', show);
    const [state, setState] = useState('installCode');

    return (
      <div>
        <div className='text-black font-inter text-xs font-bold leading-normal'>
          Install Deep Visitor on your site
        </div>
        <div className='flex justify-between mt-[23px] text-gray-300 font-inter text-xs font-normal leading-normal border-b-[1px] pb-[2px] border-gray-300'>
          <div className='w-1/2 flex '>
            <div
              className='flex justify-center items-center gap-[5px]'
              onClick={() => setState('installCode')}
            >
              <SvgIcons.Code /> Install Code
            </div>
            <div
              className='flex ml-[30px] justify-center items-center gap-[5px]'
              onClick={() => setState('Wordpress')}
            >
              <Image src={wordPress} alt='tdlogo' /> Wordpress
            </div>
          </div>
          <div
            className='w-1/2 flex justify-end gap-[5px]'
            onClick={() => setState('gethelp')}
          >
            <SvgIcons.Avatar /> Get Help
          </div>
        </div>
        <div className='mt-[12px] text-black font-inter text-xs font-normal leading-normal'>
          {state == 'installCode'
            ? 'Paste the code at the top of the head of every page you want to track visitors on. If you need help, reach out to our team in the chat bubble'
            : state == 'Wordpress'
            ? 'For WordPress, we recommend installing the Head, Footer and Post Injections plugin from Stefano Lissa. After installing and activating the plugin, navigate to the Settings -> Header and Footer in your WordPress dashboard. You’ll see a number of tabs in the plugin’s interface. Make sure to default ‘Head and Footer’ tab, then copy & pase the following code snippet. If you still cant figure it out, watch this video or go to the chat bubble'
            : 'Schedule a meeting below with one of our technical staff for help installing on your website! <br /> Make sure you have the login for the admin page of your website'}
        </div>

        <div className='h-[204px] w-full border border-gray-300 bg-white mt-[30px]'></div>

        {state == 'Wordpress' && (
          <div className='w-100 bg-yellow-200 p-4 mt-[16px]'>
            <div className='flex items-center gap-1'>
              <Image src={danger} alt='tdlogo' className='w-[20px] h-[20px]' />
              <span className='text-[#953c00] font-inter text-[12px] font-bold'>
                Dont forget to clear your cache
              </span>
            </div>

            <div className='text-[#953c00] font-inter text-[10px] font-normal mt-[10px]'>
              If you are using any caching plugins such as W3 Total Cache, WP
              Rocket, WP Super Cache or similar, make sure you clear the cache
              after installing the code snippet!
            </div>
          </div>
        )}
        {state !== 'gethelp' && (
          <div className='flex w-full justify-end mt-[6px]'>
            <div className='text-white font-inter text-xs font-normal leading-normal rounded-md bg-green-500 p-3  cursor-pointer'>
              Verify Installation
            </div>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    console.log('show', show);
  }, [show]);
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='flex w-[80%] flex-col'>
          <InstructionAlert />

          <div className='flex flex-col'>
            <div className='flex justify-evenly mt-[17px] w-full'>
              <div className='flex w-[25%] justify-between  items-center text-black font-inter text-base font-bold rounded-lg border border-gray-300 bg-white p-4'>
                <div className='flex gap-[7px]'>
                  <SvgIcons.Search /> Identified website viewers
                </div>
                <div className='text-black text-right font-inter text-base font-normal'>
                  0
                </div>
              </div>
              <div className='flex w-[25%] justify-between  items-center text-black font-inter text-base font-bold rounded-lg border border-gray-300 bg-white p-4'>
                <div className='flex gap-[7px]'>
                  <SvgIcons.Fire /> Hot Viewers
                </div>
                <div className='text-black text-right font-inter text-base font-normal'>
                  0
                </div>
              </div>
              <div className='flex w-[25%] justify-between  items-center text-black font-inter text-base font-bold rounded-lg border border-gray-300 bg-white p-4'>
                <div className='flex gap-[7px]'>
                  <SvgIcons.Calender /> Visitors Today
                </div>
                <div className='text-black text-right font-inter text-base font-normal'>
                  0
                </div>
              </div>
            </div>

            <div className='w-[90%] ml-auto mr-auto'>
              <div className='flex gap-[5px] mt-[50px] mb-px	 text-black font-inter text-xs font-normal leading-normal'>
                <span
                  className='rounded-[12px] border border-gray-300 bg-white p-1 cursor-pointer'
                  style={{
                    background: selected == 'All' ? '#5E81FF' : '#ffffff',
                    color: selected == 'All' ? '#ffffff' : '#000000',
                  }}
                  onClick={(e) => setSelected('All')}
                >
                  All
                </span>
                <span
                  className='rounded-[13px] border border-gray-300 bg-white p-1 cursor-pointer'
                  style={{
                    background:
                      selected == 'Visited Today' ? '#5E81FF' : '#ffffff',
                    color: selected == 'Visited Today' ? '#ffffff' : '#000000',
                  }}
                  onClick={(e) => setSelected('Visited Today')}
                >
                  Visited Today
                </span>
                <span
                  className='rounded-[12px] border border-gray-300 bg-white p-1 cursor-pointer'
                  style={{
                    background:
                      selected == 'Visited Last 7 Days' ? '#5E81FF' : '#ffffff',
                    color:
                      selected == 'Visited Last 7 Days' ? '#ffffff' : '#000000',
                  }}
                  onClick={(e) => setSelected('Visited Last 7 Days')}
                >
                  Visited Last 7 Days
                </span>
                <span
                  className='rounded-[12px] border border-gray-300 bg-white p-1 cursor-pointer'
                  style={{
                    background: selected == 'Hot Leads' ? '#5E81FF' : '#ffffff',
                    color: selected == 'Hot Leads' ? '#ffffff' : '#000000',
                  }}
                  onClick={(e) => setSelected('Hot Leads')}
                >
                  Hot Leads
                </span>
              </div>
              <div className='w-[100%] mt-px h-[500px]  rounded-md border border-gray-200 bg-gray-200 p-2'>
                <div className='flex justify-evenly ext-black font-inter text-xs font-normal leading-normal'>
                  <span>Company</span>
                  <span>Visits</span>
                  <span>Last Visited</span>
                  <span>Industry</span>
                  <span>Company Size</span>
                  <span>Intent</span>
                </div>
                <div className='flex justify-center items-center w-full h-full'>
                  <div
                    onClick={() => {
                      setShow(true);
                    }}
                    className='flex gap-[10px] items-center rounded-md border border-gray-300 bg-white p-2 text-gray-500 font-inter text-base font-normal leading-normal cursor-pointer'
                  >
                    <SvgIcons.Plus /> Add your Website
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomsModal
        open={show}
        close={() => setShow(false)}
        width={'50%'}
        borderRadius={'12px'}
        // component={<CustomerModal show={show} />}
        component={<CustomerModal show={show} />}
        onClose={() => setShow(false)}
      />
    </>
  );
}
