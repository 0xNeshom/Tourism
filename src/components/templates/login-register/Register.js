'use client'
import React from 'react';
import wave from '@/public/Wave.svg';
import field from '@/public/Field.svg';
import Image from 'next/image';
import logo from '@/public/Logo-login.svg'
const Register = ({showloginForm}) => {
  return (
    
    <div className='page flex justify-center relative  bg-white w-full'>
      <div className='flex flex-col justify-center bg-white rounded-xl z-10 shadow-xl mt-14 '>
        {/* PHOTO */}
        <div className='container flex flex-col '>
          <Image src={field} alt='' priority={true}  />
        </div>
        <div className='mt-10 flex flex-col justify-center items-center gap-3'>
          <h3 className='text-xl'>ورود یا ثبت نام</h3>
          <p className='text-xs' style={{ fontWeight: 100 }}>
            سلام ! برای ورود به سفر‌جو شماره موبایل یا ایمیل خود را وارد کنید .
          </p>
        </div>
        <div className='flex justify-center my-14'>
          <input
            type='text'
            placeholder='شماره موبایل'
            className=' justify-center flex bg-[#F8F8F8] outline-none w-3/5 pr-3 h-[42px] appearance-none rounded-md placeholder-black text-xs'
          />
        </div>
        <div className='mb-11 flex flex-col justify-center items-center gap-3'>
          <button className='bg-primary text-white w-[380px] rounded-md h-[42px] text-sm'>
            دریافت شماره
          </button>
          <button
          onClick={showloginForm}
          className='border-[1px] border-primary w-[380px] rounded-md h-[42px] text-sm text-primary '>
            ورود با رمز عبور
          </button>
        </div>
        <span className='text-[10px] flex justify-center mb-2' style={{ fontWeight: 200 }}>
          ورود به سایت به معنای پذیرش قوانین است
        </span>
      </div>
      <div className='absolute -bottom-56 object-repeat w-full flex justify-center  '>
        <Image src={wave} alt='' className='object-cover w-full ' />
      </div>
      <div className='absolute top-11 right-9 z-30'>
        <Image src={logo} alt=''/>
      </div>
    </div>
  );
};

export default Register;
