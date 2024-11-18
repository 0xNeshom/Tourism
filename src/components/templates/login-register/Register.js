import React from 'react';
import wave from '@/public/Wave.svg';
import field from '@/public/Field.svg';
import Image from 'next/image';
const Register = () => {
  return (
    <div className='page flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='container flex flex-col'>
          <Image src={field} alt='' />
        </div>
        <div className='mt-10 flex flex-col justify-center items-center'>
            <h3 className='text-xl'>ورود یا ثبت نام</h3>
            <p className='text-xs'>سلام ! برای ورود به سفر‌جو شماره موبایل یا ایمیل خود را وارد کنید .</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
