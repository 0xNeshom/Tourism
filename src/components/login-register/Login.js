'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setRole } from '@/redux/actions';
import field1 from '@/public/Field (1).svg';
import Image from 'next/image';
import logo from '@/public/Logo-login.svg';
import wave from '@/public/Wave.svg';
import { useRouter } from 'next/navigation';

const Login = ({ showRegisterForm }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const role = useSelector((state) => state.role) || 'user';

  const handleLogin = (name, password) => {
    console.log('Login attempt with:', name, password);
    if (name === 'admin' && password === '12345678') {
      dispatch(setRole('admin'));
      dispatch(login({ name, password }, 'admin'));
      console.log('Logged in as admin');

      router.push('/crm');
    } else {
      const user = { name, password };
      dispatch(login(user, role));
      console.log('Logged in as regular user');

      router.push('/');
    }

    setName('');
    setPassword('');
  };

  return (
    <div className='page flex justify-center items-center relative bg-white w-full min-h-screen overflow-hidden'>
      <div className='flex flex-col justify-center bg-white rounded-xl z-10 shadow-xl  h-[100%]'>
        <div className='container relative w-full h-40 sm:h-48 md:h-56 lg:h-64'>
          <Image
            src={field1}
            alt=''
            
            priority={true}
            className='w-full h-40 object-cover'
            style={{ height: '100%' }}
          />
        </div>
        <div className='mt-10 flex flex-col justify-center items-center gap-3'>
          <h3 className='text-xl'>ورود با رمز عبور</h3>
          <p className='text-xs' style={{ fontWeight: 100 }}>
            سلام ! برای ورود به سفر‌جو شماره موبایل و یا ایمیل خود را وارد کنید
            .
          </p>
        </div>
        <div className='flex flex-col items-center justify-center mt-14 mb-8 gap-6'>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='شماره موبایل / نام کاربری'
            className='justify-center flex bg-[#F8F8F8] outline-none w-3/5 pr-3 h-[42px] appearance-none rounded-md placeholder-black text-xs'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='رمز عبور'
            className='justify-center flex bg-[#F8F8F8] outline-none w-3/5 pr-3 h-[42px] appearance-none rounded-md placeholder-black text-xs'
          />
        </div>
        <div className='mb-8 flex flex-col justify-center items-center gap-8'>
          <button
            onClick={() => handleLogin(name, password)}
            className='bg-primary text-white w-3/5 rounded-md h-[42px] text-sm'
          >
            ورود با رمز عبور
          </button>
          <div className='flex justify-between w-3/5 text-xs text-primary'>
            <span>فراموشی رمز</span>
            <button onClick={showRegisterForm}>ورود با رمز یکبار مصرف</button>
          </div>
        </div>
        <span
          className='text-[10px] flex justify-center mb-2'
          style={{ fontWeight: 200 }}
        >
          ورود به سایت به معنای پذیرش قوانین است
        </span>
      </div>
      <div className='absolute bottom-0 object-repeat w-full flex justify-center'>
        <Image src={wave} alt='' className='object-cover w-full' />
      </div>
      <div className='absolute top-11 right-9 z-30'>
        <Image src={logo} alt='' />
      </div>
    </div>
  );
};

export default Login;
