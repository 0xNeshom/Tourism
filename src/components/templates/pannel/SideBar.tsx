import React from 'react';
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
  const data = [
    { id: 1, img: iconly0, title: 'داشبورد', href: '/dashboard' },
    { id: 2, img: iconly1, title: 'نظرات', href: '/reviews' },
    { id: 3, img: iconly2, title: 'کاربران', href: '/users' },
    { id: 4, img: iconly3, title: 'تورها', href: '/tours' },
    { id: 5, img: iconly4, title: 'بنرها', href: '/banners' },
    { id: 6, img: iconly5, title: 'رزروها', href: '/bookings' },
    { id: 7, img: iconly6, title: 'مدیریت نقش ها', href: '/roles' },
    { id: 8, img: iconly7, title: 'تنظیمات', href: '/settings' },
  ];

  return (
    <div className='w-[310px] shadow-xl my-10 mr-11'>
      <Image src={LogoPannel} alt='logo' />
      <div className='flex flex-col text-base '>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex items-center  py-5 gap-6  mr-4 '
            style={{ fontWeight: 500 }}
          >
            <Image src={item.img} alt={item.title} width={20} height={20} />
            <Link href={item.href}>
              <button className=' hover:text-blue-500'>{item.title}</button>
            </Link>
          </div>
        ))}
        <Link href={''} className='flex items-center  gap-6 mt-20 mb-8  mr-4 '>
          <Image src={iconly8} alt='' width={20} height={20}/>
          <button className='text-base hover:text-blue-500 '>
            خروج از حساب کاربری
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
