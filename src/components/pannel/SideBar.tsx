'use client';
import React, { useState } from 'react';
import LogoPannel from '@/public/Logo.svg';
import Image from 'next/image';
import iconly0 from '@/public/dashboard/Iconly.svg';
import iconly1 from '@/public/dashboard/Iconly-1.svg';
import iconly2 from '@/public/dashboard/Iconly-2.svg';
import iconly3 from '@/public/dashboard/Iconly-3.svg';
import iconly4 from '@/public/dashboard/Iconly-4.svg';
import iconly5 from '@/public/dashboard/Iconly-5.svg';
import iconly6 from '@/public/dashboard/Iconly-6.svg';
import iconly7 from '@/public/dashboard/Iconly-7.svg';
import iconly8 from '@/public/dashboard/Iconly2.svg';
import Link from 'next/link';

const SideBar = () => {
  const [activeId, setActiveId] = useState(1); 

  const data = [
    { id: 1, img: iconly0, title: 'داشبورد', href: '/crm' },
    { id: 2, img: iconly1, title: 'نظرات', href: '/reviews' },
    { id: 3, img: iconly2, title: 'کاربران', href: '/users' },
    { id: 4, img: iconly3, title: 'تورها', href: '/tours' },
    { id: 5, img: iconly4, title: 'بنرها', href: '/banners' },
    { id: 6, img: iconly5, title: 'رزروها', href: '/bookings' },
    { id: 7, img: iconly6, title: 'مدیریت نقش ها', href: '/roles' },
    { id: 8, img: iconly7, title: 'تنظیمات', href: '/settings' },
  ];

  return (
    <div className='w-[310px] shadow-xl my-10 sticky top-0 mr-[46px]'>
      <Image src={LogoPannel} alt='logo' />
      <div className='flex flex-col text-base'>
        {data.map((item) => (
          <Link href={item.href} key={item.id}>
            <div
              onClick={() => setActiveId(item.id)}
              className={`flex items-center py-4 px-4 gap-5 w-full rounded-l-lg cursor-pointer ${
                activeId === item.id ? 'bg-[#D8BFD829] border-l-8 border-purple-900 ' : ''
              }`}
              style={{ fontWeight: 500 }}
            >
              <Image src={item.img} alt={item.title} width={20} height={20} />
              <span
                className={`${
                  activeId === item.id ? 'text-[#7B4794]' : ''
                }`}
              >
                {item.title}
              </span>
            </div>
          </Link>
        ))}
        <Link href={''} className='mt-10 mb-8'>
          <div className='flex items-center gap-5 px-4 w-full py-4 hover:bg-[#D8BFD829] rounded-lg'>
            <Image src={iconly8} alt='' width={20} height={20} />
            <span className='text-base hover:text-blue-500'>
              خروج از حساب کاربری
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
