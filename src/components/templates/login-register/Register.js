'use client';
import React, { useState, useEffect } from 'react';
import wave from '@/public/Wave.svg';
import field from '@/public/Field.svg';
import Image from 'next/image';
import logo from '@/public/Logo-login.svg';

const Register = ({ showloginForm }) => {
  const [step, setStep] = useState(1); // حالت اولیه برای نمایش صفحه وارد کردن شماره
  const [timer, setTimer] = useState(120); // تایمر اولیه به ثانیه (2 دقیقه)
  const [canResend, setCanResend] = useState(false); // کنترل وضعیت نمایش دکمه درخواست مجدد

  // کاهش تایمر
  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); // پاکسازی تایمر
    }
    if (timer === 0) {
      setCanResend(true); // نمایش دکمه درخواست مجدد
    }
  }, [step, timer]);

  // فرمت نمایش زمان
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSubmitPhone = () => {
    setStep(2); // تغییر به مرحله بعد
    setTimer(120); // تنظیم مجدد تایمر
    setCanResend(false); // مخفی کردن دکمه درخواست مجدد
  };

  const handleResendCode = () => {
    setTimer(120); // ریست کردن تایمر به 2 دقیقه
    setCanResend(false); // مخفی کردن دکمه درخواست مجدد
    console.log('کد جدید ارسال شد'); // شبیه‌سازی ارسال کد
  };

  return (
    <div className='page flex justify-center relative bg-white w-full'>
      {step === 1 && (
        <div className='flex flex-col justify-center bg-white rounded-xl z-10 shadow-xl mt-14'>
          <div className='container flex flex-col '>
            <Image src={field} alt='' priority={true} />
          </div>
          <div className='mt-10 flex flex-col justify-center items-center gap-3'>
            <h3 className='text-xl'>ورود یا ثبت نام</h3>
            <p className='text-xs' style={{ fontWeight: 100 }}>
              سلام ! برای ورود به سفر‌جو شماره موبایل یا ایمیل خود را وارد کنید.
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
            <button
              onClick={handleSubmitPhone} // تغییر به مرحله بعد
              className='bg-primary text-white w-[380px] rounded-md h-[42px] text-sm'
            >
              دریافت کد
            </button>
            <button
              onClick={showloginForm}
              className='border-[1px] border-primary w-[380px] rounded-md h-[42px] text-sm text-primary'
            >
              ورود با رمز عبور
            </button>
          </div>
          <span
            className='text-[10px] flex justify-center mb-2'
            style={{ fontWeight: 200 }}
          >
            ورود به سایت به معنای پذیرش قوانین است
          </span>
        </div>
      )}

      {step === 2 && (
        <div className='flex flex-col justify-center bg-white rounded-xl z-10 shadow-xl mt-14'>
          <div className='container flex flex-col '>
            <Image src={field} alt='' priority={true} />
          </div>
          <div className='mt-10 flex flex-col justify-center items-center gap-8'>
            <h3 className='text-xl'>کد را وارد کنید</h3>
            <p className='text-xs' style={{ fontWeight: 100 }}>
              شماره موبایل را اشتباه وارد کرده‌اید؟ اصلاح کنید.
            </p>
          </div>
          <div className='flex justify-center my-5 gap-2'>
            {Array(4)
              .fill('')
              .map((_, index) => (
                <input
                  key={index}
                  type='text'
                  maxLength={1}
                  className='bg-[#F8F8F8] outline-none w-[50px] text-center h-[50px] appearance-none rounded-md placeholder-black text-lg'
                />
              ))}
          </div>
          <div className='mb-11 flex flex-col justify-center items-center gap-3'>
            {canResend ? (
              <button
                onClick={handleResendCode}
                className='bg-primary text-white w-[380px] rounded-md h-[42px] text-sm'
              >
                درخواست مجدد کد
              </button>
            ) : (
              <>
                <span
                  className='text-[10px] flex mb-2'
                  style={{ fontWeight: 200 }}
                >
                  {formatTime(timer)} تا درخواست مجدد
                </span>
                <button className='bg-primary text-white w-[380px] rounded-md h-[42px] text-sm'>
                  ورود
                </button>
              </>
            )}
            <button
              onClick={showloginForm}
              className='border-[1px] border-primary w-[380px] rounded-md h-[42px] text-sm text-primary'
            >
              ورود با رمز عبور
            </button>
          </div>
        </div>
      )}

      <div className='absolute -bottom-56 object-repeat w-full flex justify-center'>
        <Image src={wave} alt='' className='object-cover w-full' />
      </div>
      <div className='absolute top-11 right-9 z-30'>
        <Image src={logo} alt='' />
      </div>
    </div>
  );
};

export default Register;
