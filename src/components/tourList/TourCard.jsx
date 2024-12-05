'use client';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { getTourData } from '@/utilities/actions/TourDataFetch';
import { toPersianDigits } from '@/utilities/persianNumber/persian';
import Link from 'next/link';
import Forest from './Forest';
import tourData from '@/data/tourData.json';
import tourPhoto from '@/public/tourList/Vector.svg';
// interface TripData {
//   id: number;
//   title: string;
//   description: string;
//   start_date: string;
//   end_date: string;
//   image?: string;
// }

const TourCard = () => {
  // data fetcher
  const { data, isError, isLoading } = useQuery({
    queryKey: ['fetching-data'],
    queryFn: getTourData,
  });

  if (isLoading) {
    return (
      <div className='w-full flex justify-center md:h-[700px] h-[700px]'>
        <span className='loading loading-spinner loading-lg text-primary'></span>
      </div>
    );
  }
  if (isError) {
    return (
      <div className='w-full flex justify-center md:h-[700px]'>
        <span>Error: someThing went wrong</span>
      </div>
    );
  }

  return (
    
    <div className=' mx-auto flex flex-col items-center mt-16 '>
      <div className='sorting flex gap-8 justify-center'>
        <p className='text-[20px] ml-7' style={{fontWeight:400}}> مرتب سازی براساس :</p>
        <button>پیشنهاد سفرجو</button>
        <button>پر فروش ها</button>
        <button>گرانترین</button>
        <button>ارزانترین</button>
        <button>تاریخ های نزدیک</button>
      </div>
      {data?.map((data) => (
        <div
          key={data.id}
          className='bg-white rounded-xl shadow-lg overflow-hidden rtl text-base md:w-[821px] my-8 justify-center '>
          <div className='flex flex-col md:flex-row items-center w-full gap-6 justify-center'>
            <div className=' h-full relative rounded-md overflow-hidden mr-3 my-3'>
              <Image
                src={tourPhoto}
                alt=''
                width={280}
                height={280}
                className='object-cover '
              />
            </div>
            <div className='flex flex-col w-[511px] h-full gap-6'>
              <div className='p-4'>
                <div className='flex flex-col gap-5'>
                  <h3>{data.tour_title}</h3>
                  <p>3 شب / طبیعت گردی / کمپ / چادر</p>
                  <p>امکانات : غذا / تورلیدر / عکاس</p>
                  <span>
                    {`قیمت : ${toPersianDigits(Math.round(data.price))} `}
                    <small style={{ fontSize: '0.8em' }}>تومان</small>
                  </span>
                </div>

                <div></div>
              </div>
              <div className='ml-5  mt-5'>
                <div className='w-full bg-primary text-white flex rounded-md'>
                  <Link href={`/tourlist/${data.id}`} className='w-full'>
                    <button
                      className='w-full  h-[42px] flex items-center justify-center'
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
      ))}
    </div>
  );
};

export default TourCard;
