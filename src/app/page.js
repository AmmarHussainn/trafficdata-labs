'use client';
import SvgIcons from '@/assets/SvgIcons';
import InstructionAlert from '@/components/InstructionAlert';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CustomsModal from '@/components/CustomModal';
import { wordPress } from '@/assets';

export default function Home() {
  const [selected, setSelected] = useState('All');
  const [show, setShow] = useState(false);
  const CustomerModal = () => {
    console.log('CustomerModal', show);
    return (<div>
      <div className='text-black font-inter text-xs font-bold leading-normal'>Install Deep Visitor on your site</div>
      <div className='flex justify-between mt-[23px] text-gray-300 font-inter text-xs font-normal leading-normal border-b-[1px] pb-[2px] border-gray-300'>
        <div className='w-1/2 flex '>
          <div className='flex justify-center items-center gap-[5px]'><SvgIcons.Code /> Install Code</div>
          <div className='flex ml-[30px] justify-center items-center gap-[5px]'><Image  src={wordPress} alt='tdlogo'  /> Wordpress</div>
        </div>
        <div className='w-1/2 flex justify-end gap-[5px]'><SvgIcons.Avatar /> Get Help</div>

      </div>
      <div className='mt-[12px] text-black font-inter text-xs font-normal leading-normal'>Paste the code at the top of the head of every page you want to track visitors on. If you need help, reach out to our team in the chat bubble</div>

      <div className='h-[204px] w-full border border-gray-300 bg-white mt-[30px]'></div>
      <div className='flex w-full justify-end mt-[6px]'>
        <div className='text-white font-inter text-xs font-normal leading-normal rounded-md bg-green-500 p-3  cursor-pointer'>Verify Installation</div>
      </div>
    </div>);
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
              <div className='flex w-[25%] justify-between p-[13px] items-center text-black font-inter text-base font-bold rounded-lg border border-gray-300 bg-white p-4'>
                <div className='flex gap-[7px]'>
                  <SvgIcons.Search /> Identified website viewers
                </div>
                <div className='text-black text-right font-inter text-base font-normal'>
                  0
                </div>
              </div>
              <div className='flex w-[25%] justify-between p-[13px] items-center text-black font-inter text-base font-bold rounded-lg border border-gray-300 bg-white p-4'>
                <div className='flex gap-[7px]'>
                  <SvgIcons.Fire /> Hot Viewers
                </div>
                <div className='text-black text-right font-inter text-base font-normal'>
                  0
                </div>
              </div>
              <div className='flex w-[25%] justify-between p-[13px] items-center text-black font-inter text-base font-bold rounded-lg border border-gray-300 bg-white p-4'>
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
        component={<CustomerModal show={show} />}
        onClose={() => setShow(false)}
      />
    </>
  );
}
