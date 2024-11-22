import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Banner from '@/public/image 20.svg';
import shadow from '@/public/Home page pictures.svg';
import bg from '@/public/isfahan.svg';
import bg1 from '@/public/image 18.svg';
import shadow1 from '@/public/shadow1.svg';

const PopularDestinations: React.FC = () => {
  return (
    <div className='mt-10 md:mt-28 flex flex-col md:flex-row mx-3 md:mx-10 gap-3 md:gap-6 justify-center md:h-[515px]'>
      <div className='flex flex-col gap-3 md:gap-9 h-full'>
        <div className='h-36 md:h-60 w-full md:w-[492px] rounded-xl relative'>
          <Link href='' className='rounded-xl w-full h-full'>
            <Image
            loading='lazy'
              src={Banner}
              alt='south'
              className='rounded-xl w-full h-full object-cover'
            />
            <Image
            loading='lazy'
              src={shadow}
              alt='shadow'
              className='absolute inset-0 w-full h-full rounded-xl object-cover'
            />
            <div className='absolute w-full h-full flex flex-col items-start justify-center p-2 md:p-4 text-white z-10 bottom-4 md:bottom-11 gap-2 md:gap-4 mx-2 md:mx-5'>
              <span className='text-base md:text-lg font-semibold'>
                بریم جنوب عشق و حال؟
              </span>
              <span className='text-xs md:text-sm font-medium'>
                سفر ۵ روزه به جنوب همیشه یادت
                <br /> میمونه!
              </span>
            </div>
          </Link>
        </div>
        <div className='h-36 md:h-60 w-full md:w-[492px] rounded-xl relative'>
          <Link href='' className='rounded-xl w-full h-full'>
            <Image
            loading='lazy'
              src={bg}
              alt='bg'
              className='rounded-xl w-full h-full object-cover'
            />
            <div className='absolute w-full h-full flex flex-col items-start justify-center p-2 md:p-4 text-white gap-2 md:gap-4 z-10 bottom-4 md:bottom-11 mx-2 md:mx-5'>
              <span className='text-base md:text-lg font-semibold'>
                تور گردشگری ۷ روزه تاریخی
              </span>
              <span className='text-xs md:text-sm font-light'>
                ۷ روز بریم کرمانشاه تا ببینی چه جاهایی <br />
                تو ایران داریم!
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className='h-64 md:h-full w-full md:w-[837px] relative'>
        <Link href='' className='rounded-xl w-full h-full'>
          <Image
          loading='lazy'
            src={bg1}
            alt='bg1'
            className='w-full h-full object-cover rounded-xl'
          />
          <Image
          loading='lazy'
            src={shadow1}
            alt='shadow'
            className='absolute inset-0 w-full h-full object-cover rounded-xl'
          />
          <div className='absolute w-full h-full flex flex-col items-start justify-center p-3 md:p-6 text-white gap-2 md:gap-8 z-10  md:bottom-36 mx-2 md:mx-5'>
            <span className='text-xl md:text-2xl font-semibold'>یه سفر خارجمون نشه ؟</span>
            <span className='text-xs md:text-sm font-semibold'>
              یه سفر داریم لس آنجلس اگه نری باخت <br /> دادی ،جمع کن بریم !
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularDestinations;