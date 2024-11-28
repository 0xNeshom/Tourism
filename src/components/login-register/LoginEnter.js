'use client';
import React from 'react';
import wave from '@/public/Wave.svg';
import field from '@/public/Field.svg';
import Image from 'next/image';
import logo from '@/public/Logo-login.svg';

const WaitingCode = () => {
  return (
    <div className='page flex justify-center relative bg-white w-full'>
      <div className='flex flex-col justify-center bg-white rounded-xl z-10 shadow-xl mt-14 '>
        <div className='container flex flex-col '>
          <Image src={field} alt='' priority={true} />
        </div>
        <div className='mt-10 flex flex-col justify-center items-center gap-3'>
          <h3 className='text-xl'>دریافت کد</h3>
          <p className='text-xs' style={{ fontWeight: 100 }}>
            لطفاً منتظر بمانید تا کد تایید برای شماره وارد شده ارسال شود.
          </p>
        </div>
        <div className='flex justify-center my-14'>
          <input
            type='text'
            placeholder='کد تایید'
            className='justify-center flex bg-[#F8F8F8] outline-none w-3/5 pr-3 h-[42px] appearance-none rounded-md placeholder-black text-xs'
          />
        </div>
        <div className='mb-11 flex flex-col justify-center items-center gap-3'>
          <button className='bg-primary text-white w-[380px] rounded-md h-[42px] text-sm'>
            تایید کد
          </button>
        </div>
        <span className='text-[10px] flex justify-center mb-2' style={{ fontWeight: 200 }}>
          اگر کدی دریافت نکردید، لطفاً دوباره امتحان کنید.
        </span>
      </div>
      <div className='absolute -bottom-56 object-repeat w-full flex justify-center  '>
        <Image src={wave} alt='' className='object-cover w-full ' />
      </div>
      <div className='absolute top-11 right-9 z-30'>
        <Image src={logo} alt='' />
      </div>
    </div>
  );
};

export default WaitingCode;
