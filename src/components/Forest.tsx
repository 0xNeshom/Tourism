import React from 'react';
import img1 from '@/public/4dea20f52f20dbce6cff2159ed433d97 (1).jpeg';
import Image from 'next/image';
import Link from 'next/link';


  
const Forest: React.FC = () => {
  const id = 1;
  return (
    <>
    <div>
      <div
        key={id}
        className='bg-white rounded-xl shadow-lg overflow-hidden rtl text-base  font-medium
           md:w-[821px] my-8'
      >
        <div className='flex flex-col md:flex-row items-center w-full gap-6'>
          <div className=' relative rounded-md overflow-hidden mr-3 my-3 '>
            <Image src={img1} alt='' className=' ' />
          </div>
          <div className='flex flex-col w-full h-full gap-6'>
            <div className=' '>
              <div className='flex flex-col pt-3 gap-5'>
                <h3>تور کمپ گیسوم</h3>
                <p>3 شب / طبیعت گردی / کمپ / چادر</p>
                <p>امکانات : غذا / تورلیدر / عکاس</p>
                <span>
                  قیمت : ۱۵۰۰۰۰۰
                  <small style={{ fontSize: '0.8em' }}> تومان </small>
                </span>
              </div>

              <div></div>
            </div>
            <div className='ml-5 my-3 justify-end items-end '>
              <div className='w-full bg-primary text-white flex rounded-md'>
                <Link href={`/tourlist/${id}`} className='w-full'>
                  <button
                    className='w-full h-[42px] flex items-center justify-center'
                    style={{ height: '42px' }}
                  >
                    مشاهده و رزرو
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Forest;
