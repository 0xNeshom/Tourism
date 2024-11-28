'use client';
import React, { useState, useEffect } from 'react';
import bg from '@/public/dashboard/SVG.png';
import Image from 'next/image';
import bg1 from '@/public/dashboard/SVG.svg';
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';
import { toPersianDigits } from '@/utilities/persianNumber/persian';
dayjs.extend(jalaliday);

const DashboardHeader = () => {
  const [time, setTime] = useState(dayjs().locale('fa').calendar('jalali'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().locale('fa').calendar('jalali'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = toPersianDigits(dayjs().locale('fa').calendar('jalali').format('YYYY.MM.DD'));
  const clock = toPersianDigits(dayjs().format('HH:mm'));

  return (
    <div className='h-14 w-[838px] mx-auto mt-10 mb-5 shadow-xl relative items-center flex'>
      <p className='items-center mx-auto'>
        به پنل مدیریت سفرجو خوش آمدید، امروز
        <span style={{ color: '#7B4794' }}>{date}</span> و ساعت
        <span style={{ color: '#7B4794' }}>{clock}</span> می‌باشد.
      </p>
      <Image src={bg} alt='' className='absolute top-0' />
      <Image src={bg1} alt='' className='absolute top-0 left-0' />
    </div>
  );
};

export default DashboardHeader;
