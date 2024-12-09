'use client';
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import img1 from '@/public/support/Service 24_7-pana 1.svg';
import img2 from '@/public/support/Telecommuting-pana 1.svg';
import { useState } from 'react';

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  return (
    <div className='bg-stone-50 min-h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 flex justify-center items-center w-full gap-12 overflow-hidden'>
        <div className='flex flex-col justify-center items-center mx-4 rounded-xl bg-white w-[494px] h-fit gap-8 py-9'>
          <h3 className='text-lg' style={{ fontWeight: 500 }}>
            تماس تلفنی با پشتیبانی
          </h3>
          <Image src={img1} alt='' width={290} />
          <div className='flex flex-col justify-center items-center'>
            <span>مشکلی برایت پیش اومده ؟</span>
            <span> ما 24 ساعته پاسخگوی شما هستیم</span>
          </div>
          <button
            className='w-[90%] py-4 bg-primary text-white rounded-md'
            onClick={() => {
              setIsOpen(true);
            }}
          >
            تماس با پشتیبانی
          </button>
        </div>
        <div className='flex flex-col justify-center items-center mx-4 bg-white w-[494px] h-fit gap-8 py-9 rounded-xl'>
          <h3 className='text-lg' style={{ fontWeight: 500 }}>
            ارسال ایمیل به پشتیبانی
          </h3>
          <Image src={img2} alt='' />
          <div className='flex flex-col justify-center items-center'>
            <span>مشکلی برایت پیش اومده ؟</span>
            <span> ما 24 ساعته پاسخگوی شما هستیم</span>
          </div>
          <button
            className='w-[90%] py-4 bg-primary text-white rounded-md'
            onClick={() => {
              setIsOpen1(true);
            }}
          >
            ارسال ایمیل
          </button>
        </div>
      </div>
      {isOpen && (
        <dialog  className='modal   ' open>
          <div className='modal-box flex flex-col items-center w-[494px] overflow-hidden py-16'>
            <form method='dialog overflow-hidden'>
              <button
                className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2 '
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </form>
            <h3 className='font-bold text-lg'>تماس با پشتیبانی</h3>
            <p className='py-4'>شماره تماس: 123-456-789</p>
          </div>
        </dialog>
      )}
      
      {isOpen1 && (
        <dialog  className='modal overflow-hidden' open>
          <div className='modal-box flex flex-col items-center w-[494px] py-16'>
            <form method='dialog'>
              <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={()=>setIsOpen1(false)}
              >
                ✕
              </button>
            </form>
            <h3 className='font-bold text-lg'>ارسال ایمیل به پشتیبانی</h3>
            <p className='py-4'>آدرس ایمیل: support@example.com</p>
          </div>
        </dialog>
      )}
    </div>
  )
}

export default page;
